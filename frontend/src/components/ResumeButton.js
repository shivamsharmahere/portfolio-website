import React from 'react';
import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumeButton = ({ variant = 'primary', className = '' }) => {
  const handleResumeDownload = () => {
    // Use process.env.PUBLIC_URL to handle GitHub Pages deployment paths
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume/Shivam_Sharma_Resume_AI_Engineer.pdf`;
    link.download = 'Shivam_Sharma_Resume_AI_Engineer.pdf';
    link.target = '_blank'; // Open in new tab for better UX
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const baseClasses = "inline-flex items-center space-x-2 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 cursor-hover";
  
  const variants = {
    primary: "px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-black font-bold shadow-lg shadow-amber-500/25",
    secondary: "px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white border border-gray-600 hover:border-amber-400",
    outline: "px-4 py-2 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black",
    navbar: "px-4 py-2 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 text-amber-400 hover:text-amber-300 border border-amber-500/30 hover:border-amber-400/50 shadow-md shadow-amber-500/10"
  };

  return (
    <motion.button
      onClick={handleResumeDownload}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {variant === 'navbar' ? (
        <>
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">Resume</span>
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          <span>Download Resume</span>
        </>
      )}
    </motion.button>
  );
};

export default ResumeButton;