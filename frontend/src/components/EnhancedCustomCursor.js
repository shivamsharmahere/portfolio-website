import React, { useEffect, useState, useRef, useCallback } from 'react';

const EnhancedCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const circleRef = useRef(null);
  const trailRefs = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();
  const trailPositions = useRef([]);

  // Smooth cursor tracking without state updates
  const updateCursor = useCallback(() => {
    if (cursorRef.current && circleRef.current) {
      const { x, y } = mousePosition.current;
      
      // Update main cursor immediately
      cursorRef.current.style.transform = `translate(${x}px, ${y}px) translateZ(0)`;
      
      // Update circle with same position for synchronization
      circleRef.current.style.transform = `translate(${x}px, ${y}px) scale(${isHovering ? 1.4 : 1}) translateZ(0)`;
      
      // Update trail positions smoothly
      trailPositions.current.unshift({ x, y, time: Date.now() });
      if (trailPositions.current.length > 12) {
        trailPositions.current.pop();
      }
      
      // Update trail dots with smooth interpolation
      trailRefs.current.forEach((ref, index) => {
        if (ref && trailPositions.current[index]) {
          const pos = trailPositions.current[index];
          const age = Date.now() - pos.time;
          const opacity = Math.max(0, 0.8 - (age / 400));
          const scale = Math.max(0.2, 1 - (age / 500));
          
          ref.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale}) translateZ(0)`;
          ref.style.opacity = opacity;
        }
      });
    }
    
    animationFrameRef.current = requestAnimationFrame(updateCursor);
  }, [isHovering]);

  const updatePosition = useCallback((e) => {
    mousePosition.current = { x: e.clientX, y: e.clientY };
    
    // Update state only for hover detection, not for positioning
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e) => {
    const target = e.target;
    
    // Optimized hover detection
    const isInteractive = target.closest('button, a, [class*="cursor-hover"]');
    setIsHovering(!!isInteractive);
  }, []);

  useEffect(() => {
    // Use passive listeners for better performance
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    
    // Start animation loop
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updatePosition, handleMouseOver, updateCursor]);

  useEffect(() => {
    // Update circle scale when hover state changes
    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${mousePosition.current.x}px, ${mousePosition.current.y}px) scale(${isHovering ? 1.4 : 1}) translateZ(0)`;
    }
  }, [isHovering]);

  return (
    <>
      {/* Professional smooth trail dots */}
      {Array.from({ length: 12 }, (_, index) => (
        <div
          key={index}
          ref={(el) => (trailRefs.current[index] = el)}
          className="fixed pointer-events-none z-[9995] will-change-transform"
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderRadius: '50%',
            opacity: 0,
            transform: 'translate(0px, 0px) scale(0) translateZ(0)',
            filter: 'blur(0.5px)',
            left: '-3px',
            top: '-3px',
          }}
        />
      ))}

      {/* Main cursor dot with hardware acceleration */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: 'rgb(59, 130, 246)',
          borderRadius: '50%',
          transform: 'translate(0px, 0px) translateZ(0)',
          boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
          left: '-4px',
          top: '-4px',
        }}
      />
      
      {/* Cursor circle with immediate smooth flow */}
      <div
        ref={circleRef}
        className="fixed pointer-events-none z-[9998] will-change-transform transition-transform duration-200 ease-out"
        style={{
          width: '32px',
          height: '32px',
          border: '1px solid rgba(59, 130, 246, 0.6)',
          borderRadius: '50%',
          transform: 'translate(0px, 0px) scale(1) translateZ(0)',
          left: '-16px',
          top: '-16px',
        }}
      />
    </>
  );
};

export default EnhancedCustomCursor;