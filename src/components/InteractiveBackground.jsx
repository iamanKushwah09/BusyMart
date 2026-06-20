import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const InteractiveBackground = () => {
  const container = useRef();

  useGSAP(() => {
    // Complex, smooth floating animations for orbs
    const orbs = ['.orb-1', '.orb-2', '.orb-3', '.orb-4'];
    
    orbs.forEach((orb) => {
      gsap.to(orb, {
        x: () => gsap.utils.random(-150, 150),
        y: () => gsap.utils.random(-150, 150),
        rotation: () => gsap.utils.random(0, 360),
        scale: () => gsap.utils.random(0.8, 1.2),
        duration: () => gsap.utils.random(15, 25),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        onRepeat: function() {
          // Dynamic randomization on each repeat for organic feel
          gsap.to(this.targets()[0], {
            x: gsap.utils.random(-150, 150),
            y: gsap.utils.random(-150, 150),
            duration: gsap.utils.random(15, 25),
            ease: 'sine.inOut'
          });
        }
      });
    });

    // Morphing Grid lines animation
    gsap.to('.bg-grid-line', {
      strokeDashoffset: -40,
      duration: 3,
      ease: 'linear',
      repeat: -1,
    });

    // Creative Interactive Cursor Follower
    const cursor = document.querySelector('.bg-cursor-follower');
    if (cursor) {
      // Create quick setters for performance
      const xTo = gsap.quickTo(cursor, 'x', { duration: 0.8, ease: 'power3.out' });
      const yTo = gsap.quickTo(cursor, 'y', { duration: 0.8, ease: 'power3.out' });

      const onMouseMove = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener('mousemove', onMouseMove);
      
      // Cleanup
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, { scope: container });

  return (
    <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden bg-[#fafcfa]" ref={container}>
      {/* Dynamic Aurora Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[40%_60%_70%_30%] mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-60 bg-gradient-to-tr from-emerald-200 via-teal-100 to-green-50 orb-1"></div>
      
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-[60%_40%_30%_70%] mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-50 bg-gradient-to-br from-green-200 via-emerald-100 to-cyan-50 orb-2"></div>
      
      <div className="absolute bottom-[-20%] left-[10%] w-[60vw] h-[60vw] rounded-[50%_50%_20%_80%] mix-blend-multiply filter blur-[100px] md:blur-[150px] opacity-50 bg-gradient-to-tr from-cyan-100 via-emerald-200 to-teal-50 orb-3"></div>

      <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-[30%_70%_70%_30%] mix-blend-multiply filter blur-[60px] md:blur-[90px] opacity-40 bg-gradient-to-r from-emerald-300 to-green-200 orb-4"></div>

      {/* GSAP Interactive Cursor Follower */}
      <div className="bg-cursor-follower fixed top-0 left-0 w-[400px] h-[400px] -ml-[200px] -mt-[200px] bg-emerald-400/30 rounded-full blur-[100px] pointer-events-none z-10 mix-blend-screen" />

      {/* Animated SVG Grid Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-900 bg-grid-line" strokeDasharray="4 4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
      
      {/* Vignette effect to focus the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.4)_100%)]" />

      {/* Noise Texture for Premium Matte Feel */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
