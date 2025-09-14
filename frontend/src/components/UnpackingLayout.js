import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UnpackingLayout = ({ children, sectionId, title, description }) => {
  const [isUnpacked, setIsUnpacked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsUnpacked(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
      y: 100
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    },
    unpacked: {
      scale: 1.02,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 1, scale: 1 },
    visible: { 
      opacity: 0, 
      scale: 1.1,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id={sectionId}
      className="relative min-h-screen overflow-hidden cursor-hover"
      initial="hidden"
      animate={isVisible ? (isUnpacked ? "unpacked" : "visible") : "hidden"}
      variants={containerVariants}
      style={{ perspective: "1000px" }}
    >
      {/* Unpacking overlay effect */}
      <AnimatePresence>
        {!isUnpacked && isVisible && (
          <motion.div
            className="absolute inset-0 z-30"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="visible"
          >
            {/* Peeling layers effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-transparent transform rotate-45 animate-pulse"></div>
            </div>
            
            {/* Loading indicators */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="flex space-x-2 justify-center">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-4 h-4 bg-blue-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-lg">Unpacking {title}...</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section title overlay */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-black/80 to-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isUnpacked ? 1 : 0, y: isUnpacked ? 0 : -50 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {description && (
            <p className="text-xl text-gray-300 max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 min-h-screen"
        variants={contentVariants}
        initial="hidden"
        animate={isUnpacked ? "visible" : "hidden"}
      >
        {children}
      </motion.div>

      {/* Background enhancement */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isUnpacked ? 0.1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default UnpackingLayout;