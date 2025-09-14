import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Database, Code, Bot } from 'lucide-react';

const AIShowcaseSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const aiDemos = [
    {
      title: "Neural Network Visualization",
      description: "Watch AI learn in real-time",
      icon: Brain,
      color: "from-blue-400 to-purple-600",
      demo: "neural"
    },
    {
      title: "Computer Vision Pipeline",
      description: "Image recognition and analysis",
      icon: Cpu,
      color: "from-green-400 to-blue-600",
      demo: "vision"
    },
    {
      title: "NLP Text Processing",
      description: "Understanding human language",
      icon: Code,
      color: "from-purple-400 to-pink-600",
      demo: "nlp"
    },
    {
      title: "ML Model Training",
      description: "Live model optimization",
      icon: Zap,
      color: "from-yellow-400 to-red-600",
      demo: "training"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % aiDemos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerDemo = (demoIndex) => {
    setIsProcessing(true);
    setActiveDemo(demoIndex);
    
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  const NeuralNetworkDemo = () => (
    <div className="relative w-full h-64 bg-black/50 rounded-lg overflow-hidden">
      <svg className="w-full h-full">
        {/* Neural network nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + (i % 5) * 80}
            cy={50 + Math.floor(i / 5) * 80}
            r="6"
            fill="#3b82f6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 1, 0.3], 
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
        
        {/* Neural connections */}
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={i}
            x1={50 + (i % 4) * 80}
            y1={50 + Math.floor(i / 4) * 80}
            x2={130 + (i % 4) * 80}
            y2={130 + Math.floor(i / 4) * 80}
            stroke="#10b981"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </svg>
      
      <div className="absolute bottom-4 left-4 text-green-400 font-mono text-sm">
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Training Accuracy: 97.8% ↗
        </motion.div>
      </div>
    </div>
  );

  const ComputerVisionDemo = () => (
    <div className="relative w-full h-64 bg-black/50 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent"></div>
      
      {/* Scanning grid */}
      <motion.div
        className="absolute inset-0 border border-green-400"
        animate={{
          boxShadow: [
            "inset 0 0 0 0 rgba(34, 197, 94, 0.2)",
            "inset 0 0 100px 20px rgba(34, 197, 94, 0.1)",
            "inset 0 0 0 0 rgba(34, 197, 94, 0.2)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Detection boxes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-green-400"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
              width: `${60 - i * 10}px`,
              height: `${40 - i * 5}px`
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [0, 1.1, 1, 0.9]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>
      
      <div className="absolute bottom-4 right-4 text-green-400 font-mono text-sm">
        Objects Detected: 3/3 ✓
      </div>
    </div>
  );

  const NLPDemo = () => (
    <div className="relative w-full h-64 bg-black/50 rounded-lg overflow-hidden p-4">
      <div className="space-y-2">
        {[
          "Analyzing sentiment...",
          "Processing entities...",
          "Extracting keywords...",
          "Generating summary..."
        ].map((text, i) => (
          <motion.div
            key={i}
            className="flex items-center space-x-2 text-purple-400 font-mono text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.5, duration: 0.5 }}
          >
            <motion.div
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.5 }}
            />
            <span>{text}</span>
            <motion.span
              className="text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i + 1) * 0.5 }}
            >
              ✓
            </motion.span>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="absolute bottom-4 left-4 text-green-400 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Confidence: 94.2% | Processing Time: 0.23s
      </motion.div>
    </div>
  );

  const TrainingDemo = () => (
    <div className="relative w-full h-64 bg-black/50 rounded-lg overflow-hidden p-4">
      <div className="space-y-4">
        {['Loss', 'Accuracy', 'Learning Rate'].map((metric, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-yellow-400">{metric}</span>
              <span className="text-green-400 font-mono">
                {metric === 'Loss' ? '0.023' : metric === 'Accuracy' ? '96.8%' : '0.001'}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${
                  metric === 'Loss' ? 'from-red-500 to-yellow-400' :
                  metric === 'Accuracy' ? 'from-green-400 to-blue-400' :
                  'from-purple-400 to-pink-400'
                }`}
                initial={{ width: '0%' }}
                animate={{ 
                  width: metric === 'Loss' ? '15%' : metric === 'Accuracy' ? '97%' : '25%'
                }}
                transition={{ duration: 2, delay: i * 0.3 }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <motion.div
        className="absolute bottom-4 left-4 text-green-400 font-mono text-xs"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Epoch 247/300 | ETA: 2m 15s
      </motion.div>
    </div>
  );

  const renderDemo = () => {
    switch (aiDemos[activeDemo].demo) {
      case 'neural': return <NeuralNetworkDemo />;
      case 'vision': return <ComputerVisionDemo />;
      case 'nlp': return <NLPDemo />;
      case 'training': return <TrainingDemo />;
      default: return <NeuralNetworkDemo />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              AI in Action
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the power of artificial intelligence through interactive demos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <div className="space-y-6">
            {aiDemos.map((demo, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl cursor-hover transition-all duration-500 ${
                  activeDemo === index 
                    ? 'bg-gradient-to-r from-white/10 to-white/5 border-2 border-blue-400/50 shadow-2xl shadow-blue-400/20' 
                    : 'bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50'
                }`}
                onClick={() => triggerDemo(index)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${demo.color}`}>
                    {React.createElement(demo.icon, { 
                      className: "w-6 h-6 text-white" 
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {demo.title}
                    </h3>
                    <p className="text-gray-400">
                      {demo.description}
                    </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeDemo === index ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo Display */}
          <div className="relative">
            <motion.div
              className="relative z-10"
              key={activeDemo}
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderDemo()}
            </motion.div>
            
            {/* Processing overlay */}
            {isProcessing && (
              <motion.div
                className="absolute inset-0 z-20 bg-black/80 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="text-blue-400 font-semibold">Processing AI Demo...</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcaseSection;