import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Eye, TrendingUp, Wifi, WifiOff, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasIncrementedRef = useRef<boolean>(false);

  // API endpoints for Netlify functions
  const API_BASE = '/.netlify/functions';

  const fetchVisitorCount = useCallback(async (increment = false) => {
    setIsUpdating(true);
    
    try {
      const endpoint = increment 
        ? `${API_BASE}/increment-visitors`
        : `${API_BASE}/get-visitors`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data && typeof data.count === 'number') {
        setVisitorCount(data.count);
        setLastUpdate(new Date());
        setIsOnline(true);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Failed to fetch visitor count:', error);
      setIsOnline(false);
      
      // Fallback to localStorage if API fails
      const fallbackCount = parseInt(localStorage.getItem('visitor_count') || '0');
      if (increment) {
        const newCount = fallbackCount + 1;
        localStorage.setItem('visitor_count', newCount.toString());
        setVisitorCount(newCount);
      } else {
        setVisitorCount(fallbackCount || 1000);
      }
    } finally {
      setIsLoading(false);
      setIsUpdating(false);
    }
  }, []);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      fetchVisitorCount(); // Refresh when back online
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [fetchVisitorCount]);

  // Initial setup and real-time updates
  useEffect(() => {
    // Check if we've already counted this session
    const sessionKey = 'visitor_session_' + Date.now();
    const hasVisitedThisSession = sessionStorage.getItem('has_visited_this_session');
    
    if (!hasVisitedThisSession && !hasIncrementedRef.current) {
      // Mark this session as counted
      sessionStorage.setItem('has_visited_this_session', sessionKey);
      hasIncrementedRef.current = true;
      fetchVisitorCount(true); // Increment counter on first visit
    } else {
      fetchVisitorCount(false); // Just get current count
    }

    // Set up periodic updates every 15-30 seconds
    const setupInterval = () => {
      const randomInterval = Math.random() * 15000 + 15000; // 15-30 seconds
      
      intervalRef.current = setTimeout(() => {
        if (isOnline) {
          fetchVisitorCount(false); // Just get count, don't increment
        }
        setupInterval(); // Schedule next update
      }, randomInterval);
    };

    setupInterval();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [fetchVisitorCount, isOnline]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const AnimatedNumber = ({ value }: { value: number }) => {
    return (
      <motion.span
        key={value}
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 15, opacity: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className="inline-block"
      >
        {formatNumber(value)}
      </motion.span>
    );
  };

  if (isLoading) {
    return (
      <motion.div 
        className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-blue-500/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Eye className="w-4 h-4 text-blue-400 animate-pulse" />
        <span className="text-sm text-gray-300">Connecting...</span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-3 h-3"
        >
          <Activity className="w-3 h-3 text-blue-400" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={`relative flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border transition-all duration-300 ${
        isOnline 
          ? 'border-blue-500/20 hover:border-blue-400/40' 
          : 'border-red-500/20 hover:border-red-400/40'
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Real-time pulse effect */}
      {isOnline && (
        <motion.div
          className="absolute -inset-1 bg-blue-400/10 rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Connection status indicator */}
      <motion.div
        animate={isUpdating ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {isOnline ? (
          <Wifi className={`w-4 h-4 ${isUpdating ? 'text-yellow-400' : 'text-green-400'}`} />
        ) : (
          <WifiOff className="w-4 h-4 text-red-400" />
        )}
      </motion.div>

      {/* Eye icon with update animation */}
      <motion.div
        animate={isUpdating ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5 }}
      >
        <Eye className="w-4 h-4 text-blue-400" />
      </motion.div>

      {/* Animated counter */}
      <span className="text-sm text-gray-300 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {visitorCount !== null ? (
            <AnimatedNumber value={visitorCount} />
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ---
            </motion.span>
          )}
        </AnimatePresence>
        <span className="ml-1">visitors</span>
      </span>

      {/* Activity/trend indicator */}
      <motion.div
        animate={isUpdating ? { rotate: 360 } : {}}
        transition={{ duration: 1, repeat: isUpdating ? Infinity : 0, ease: "linear" }}
      >
        {isUpdating ? (
          <Activity className="w-3 h-3 text-yellow-400" />
        ) : (
          <TrendingUp className="w-3 h-3 text-green-400" />
        )}
      </motion.div>

      {/* Live update indicator dot */}
      {lastUpdate && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"
        >
          <motion.div
            className="absolute inset-0 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default VisitorCounter;
