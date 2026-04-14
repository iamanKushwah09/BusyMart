import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const InteractiveBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for natural movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half the blob size to center it
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Primary interactive blob */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px]"
      />
      
      {/* Secondary blob with different lag */}
      <motion.div
        style={{
          x: useSpring(mouseX, { damping: 40, stiffness: 100 }),
          y: useSpring(mouseY, { damping: 40, stiffness: 100 }),
        }}
        className="absolute w-[300px] h-[300px] bg-green-50/40 rounded-full blur-[80px]"
      />

      {/* Static accents to maintain 'real' feel when mouse isn't moving */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50/20 rounded-full blur-[130px]" />
    </div>
  );
};

export default InteractiveBackground;
