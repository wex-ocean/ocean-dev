import { useEffect, useRef } from 'react';

interface GridPoint {
  baseX: number;
  baseY: number;
  currentX: number;
  currentY: number;
  vx: number;
  vy: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  decay: number;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, lastX: -1000, lastY: -1000, active: false });
  const gridRef = useRef<GridPoint[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  const cellSize = 35;
  const effectRadius = 180;

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursorDot = cursorDotRef.current;
    if (!canvas || !cursorDot) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number, rows: number, cols: number;

    // Initialize grid
    const initGrid = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.ceil(width / cellSize) + 1;
      rows = Math.ceil(height / cellSize) + 1;
      gridRef.current = [];

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          gridRef.current.push({
            baseX: x * cellSize,
            baseY: y * cellSize,
            currentX: x * cellSize,
            currentY: y * cellSize,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    // Create particle
    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 4,
      speedY: (Math.random() - 0.5) * 4,
      life: 1,
      decay: Math.random() * 0.02 + 0.01,
    });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Update cursor dot position
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';

      // Create more particles on movement for better visibility
      if (Math.abs(mouse.x - mouse.lastX) > 1) {
        for (let i = 0; i < 5; i++) {
          particlesRef.current.push(createParticle(mouse.x, mouse.y));
        }
      }
    };

    // Animation loop
    const animate = () => {
      const mouse = mouseRef.current;
      const grid = gridRef.current;
      const particles = particlesRef.current;

      // Darker background with slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, width, height);

      // Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= p.decay;

        // Draw particle with glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(168, 85, 247, 0.8)';
        ctx.fillStyle = `rgba(168, 85, 247, ${p.life})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Update grid physics
      grid.forEach((p) => {
        const dx = mouse.x - p.currentX;
        const dy = mouse.y - p.currentY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < effectRadius) {
          const force = (effectRadius - dist) / effectRadius;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 12;
          p.vy -= Math.sin(angle) * force * 12;
        }

        p.vx += (p.baseX - p.currentX) * 0.06;
        p.vy += (p.baseY - p.currentY) * 0.06;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.currentX += p.vx;
        p.currentY += p.vy;
      });

      // Draw fluid grid with enhanced visibility
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
      ctx.lineWidth = 1.5;

      // Draw horizontal lines
      for (let y = 0; y < rows; y++) {
        ctx.moveTo(grid[y * cols].currentX, grid[y * cols].currentY);
        for (let x = 1; x < cols; x++) {
          ctx.lineTo(grid[y * cols + x].currentX, grid[y * cols + x].currentY);
        }
      }

      // Draw vertical lines
      for (let x = 0; x < cols; x++) {
        ctx.moveTo(grid[x].currentX, grid[x].currentY);
        for (let y = 1; y < rows; y++) {
          ctx.lineTo(grid[y * cols + x].currentX, grid[y * cols + x].currentY);
        }
      }
      ctx.stroke();

      // Enhanced glow around cursor
      if (mouse.active) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
        grad.addColorStop(0, 'rgba(168, 85, 247, 0.4)');
        grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.15)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Resize handler
    const handleResize = () => {
      initGrid();
    };

    // Initialize
    initGrid();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas for fluid grid and particles */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Central cursor dot with glow and mouse icon */}
      <div
        ref={cursorDotRef}
        className="cursor-center fixed pointer-events-none flex items-center justify-center"
        style={{
          width: '40px',
          height: '40px',
          zIndex: 100,
          transform: 'translate(-50%, -50%)',
          transition: 'none',
          willChange: 'left, top',
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle, #fff 0%, rgba(168, 85, 247, 0.9) 100%)',
            boxShadow: `
              0 0 20px 8px rgba(255, 255, 255, 0.9),
              0 0 40px 20px rgba(168, 85, 247, 0.7),
              0 0 60px 30px rgba(168, 85, 247, 0.4)
            `,
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Mouse cursor icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.8))',
          }}
        >
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            fill="white"
            stroke="rgba(168, 85, 247, 0.9)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
