import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import AnimatedText from './AnimatedText';
import { Github, Linkedin, Eye, X } from 'lucide-react';

const Hero = () => {


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">
              Hi
              <motion.span
                className="inline-block ml-2"
                role="img"
                aria-label="waving hand"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 1.2, duration: 1.8, ease: "easeInOut" }}
                style={{ transformOrigin: "70% 70%" }}
              >
                👋
              </motion.span>
              , I'm Saif Hatem
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">I build AI-powered products that ship and scale.</span>
          </motion.h1>
          
          <motion.h2 
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">I turn ideas into</span>
            <AnimatedText 
              text={[
                "AI that ships",
                "Full-stack from pixel to production",
                "Cloud-native at scale",
                "LLM agents & data pipelines"
              ]} 
              className="text-blue-400 font-medium" 
            />
          </motion.h2>
          
          <motion.p 
            className="text-md mb-10 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
           Product-minded engineer crafting delightful, production-ready experiences with AI, full-stack, and the cloud.
          </motion.p>
          
          {/* Social Icons above buttons */}
          <motion.div 
            className="flex justify-center gap-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://github.com/Trimbex" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                <Github className="w-6 h-6 relative z-10 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>
            <a href="https://linkedin.com/in/saifhatem" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                <Linkedin className="w-6 h-6 relative z-10 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>
            <a href="https://x.com/Trimbex" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                <X className="w-6 h-6 relative z-10 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button className="py-6 px-8 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
              <Eye className="w-5 h-5 mr-2" />
              <a href="#projects">My Work</a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="animate-bounce p-2 bg-blue-900/30 rounded-full border border-blue-500/20">
              <a href="#technologies" className="text-blue-400">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
