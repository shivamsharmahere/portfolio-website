import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Brain, Zap } from "lucide-react";
import { portfolioData } from "../data/mock";

const HeroSection = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system for background animation
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#1f47e6";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = "#78d692";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrollToNext = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Animated Icons */}
          <motion.div 
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="p-4 rounded-full bg-blue-500/20 backdrop-blur-sm cursor-hover"
              whileHover={{ scale: 1.1, rotate: 10 }}
              animate={{ 
                boxShadow: ["0 0 20px rgba(59, 130, 246, 0.3)", "0 0 40px rgba(59, 130, 246, 0.6)", "0 0 20px rgba(59, 130, 246, 0.3)"]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                hover: { duration: 0.2 }
              }}
            >
              <Brain className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div 
              className="p-4 rounded-full bg-green-500/20 backdrop-blur-sm cursor-hover"
              whileHover={{ scale: 1.1, rotate: -10 }}
              animate={{ 
                boxShadow: ["0 0 20px rgba(34, 197, 94, 0.3)", "0 0 40px rgba(34, 197, 94, 0.6)", "0 0 20px rgba(34, 197, 94, 0.3)"]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, delay: 0.7 },
                hover: { duration: 0.2 }
              }}
            >
              <Code className="w-8 h-8 text-green-400" />
            </motion.div>
            <motion.div 
              className="p-4 rounded-full bg-yellow-500/20 backdrop-blur-sm cursor-hover"
              whileHover={{ scale: 1.1, rotate: 10 }}
              animate={{ 
                boxShadow: ["0 0 20px rgba(245, 158, 11, 0.3)", "0 0 40px rgba(245, 158, 11, 0.6)", "0 0 20px rgba(245, 158, 11, 0.3)"]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, delay: 1.4 },
                hover: { duration: 0.2 }
              }}
            >
              <Zap className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>

          {/* Main heading with typewriter effect */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {portfolioData.personalInfo.name}
              </span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                {portfolioData.personalInfo.title}
              </span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {portfolioData.personalInfo.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button
              onClick={() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 cursor-hover"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold rounded-full transition-all duration-300 cursor-hover"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.button
              onClick={scrollToNext}
              className="text-gray-400 hover:text-white transition-colors duration-200 cursor-hover"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.2 }}
            >
              <ChevronDown size={32} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;