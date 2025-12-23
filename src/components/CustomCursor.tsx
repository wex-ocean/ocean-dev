import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface CursorTrail {
  x: number;
  y: number;
  scale: number;
}

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef<CursorTrail[]>([]);
  const animationFrameId = useRef<number | undefined>(undefined);

  const TRAIL_COUNT = 12; // Number of trailing circles for wavy effect

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    // Initialize trail positions
    trailPositions.current = Array.from({ length: TRAIL_COUNT }, (_, i) => ({
      x: 0,
      y: 0,
      scale: 1,
    }));

    const cursorDot = cursorDotRef.current;
    if (!cursorDot) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Animate main cursor dot instantly
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // Animate trail with wavy effect
    const animateTrail = () => {
      const { x, y } = mousePos.current;

      trailPositions.current.forEach((trail, index) => {
        const trailElement = trailRefs.current[index];
        if (!trailElement) return;

        // Create wavy effect with delay and spring-like motion
        const delay = (index + 1) * 0.03;
        const targetX = x;
        const targetY = y;

        // Smooth interpolation for wavy effect
        trail.x += (targetX - trail.x) * (0.15 - index * 0.008);
        trail.y += (targetY - trail.y) * (0.15 - index * 0.008);

        // Add wave oscillation
        const wave = Math.sin(Date.now() * 0.003 + index * 0.5) * (index * 0.8);
        
        // Scale decreases with distance from cursor
        const scale = isHovering ? 1.2 - index * 0.08 : 1 - index * 0.06;
        trail.scale = scale;

        // Apply transform with wave effect
        gsap.set(trailElement, {
          x: trail.x + wave,
          y: trail.y + wave * 0.5,
          scale: trail.scale,
          opacity: 1 - index * 0.07,
        });
      });

      animationFrameId.current = requestAnimationFrame(animateTrail);
    };

    // Magnetic effect for interactive elements
    const handleMouseEnter = (e: Event) => {
      setIsHovering(true);
      const target = e.currentTarget as HTMLElement;
      
      // Get element position and size
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Animate cursor to element center with magnetic pull
      gsap.to(mousePos.current, {
        x: centerX,
        y: centerY,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Scale up the element slightly
      gsap.to(target, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = (e: Event) => {
      setIsHovering(false);
      const target = e.currentTarget as HTMLElement;

      // Reset element scale
      gsap.to(target, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    // Add magnetic effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .magnetic'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isTouchDevice, isHovering]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot - bright purple */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: '12px',
          height: '12px',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, #9333ea 50%, #7e22ce 100%)',
            boxShadow: `
              0 0 20px rgba(168, 85, 247, 0.8),
              0 0 40px rgba(168, 85, 247, 0.6),
              0 0 60px rgba(168, 85, 247, 0.4)
            `,
            transform: isHovering ? 'scale(1.5)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>

      {/* Wavy trail effect */}
      {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            trailRefs.current[index] = el;
          }}
          className="custom-cursor-trail fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            width: `${28 - index * 1.5}px`,
            height: `${28 - index * 1.5}px`,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'screen',
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, 
                rgba(168, 85, 247, ${0.6 - index * 0.04}) 0%, 
                rgba(147, 51, 234, ${0.4 - index * 0.03}) 50%, 
                rgba(126, 34, 206, ${0.2 - index * 0.02}) 100%
              )`,
              boxShadow: `
                0 0 ${20 - index}px rgba(168, 85, 247, ${0.5 - index * 0.03}),
                0 0 ${40 - index * 2}px rgba(168, 85, 247, ${0.3 - index * 0.02})
              `,
              filter: `blur(${index * 0.3}px)`,
            }}
          />
        </div>
      ))}
    </>
  );
}
