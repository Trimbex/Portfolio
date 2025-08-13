import React, { useState, useEffect } from 'react';
import { Eye, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Using a free visitor counter API
    const fetchVisitorCount = async () => {
      try {
        // This is a simple counter that increments on each visit
        // You can replace this with any of the APIs mentioned below
        const response = await fetch('https://api.countapi.xyz/hit/trimbex.netlify.app/visits');
        const data = await response.json();
        setVisitorCount(data.value);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
        // Fallback to localStorage counter for offline functionality
        const localCount = parseInt(localStorage.getItem('visitor_count') || '0') + 1;
        localStorage.setItem('visitor_count', localCount.toString());
        setVisitorCount(localCount);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
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
        <span className="text-sm text-gray-300">Loading...</span>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Eye className="w-4 h-4 text-blue-400" />
      <span className="text-sm text-gray-300">
        {visitorCount !== null ? formatNumber(visitorCount) : '---'} visitors
      </span>
      <TrendingUp className="w-3 h-3 text-green-400" />
    </motion.div>
  );
};

export default VisitorCounter;
