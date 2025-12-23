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

      // Create particles on movement
      if (Math.abs(mouse.x - mouse.lastX) > 2) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push(createParticle(mouse.x, mouse.y));
        }
      }
    };

    // Animation loop
    const animate = () => {
      const mouse = mouseRef.current;
      const grid = gridRef.current;
      const particles = particlesRef.current;

      // Slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, width, height);

      // Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= p.decay;

        // Draw particle
        ctx.fillStyle = `rgba(168, 85, 247, ${p.life})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

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

      // Draw fluid grid
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.12)';
      ctx.lineWidth = 1;

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

      // Tighter glow around cursor
      if (mouse.active) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
        grad.addColorStop(0, 'rgba(168, 85, 247, 0.3)');
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

      {/* Central cursor dot with glow */}
      <div
        ref={cursorDotRef}
        className="cursor-center fixed pointer-events-none"
        style={{
          width: '20px',
          height: '20px',
          background: '#fff',
          boxShadow: `
            0 0 15px 5px rgba(255, 255, 255, 0.8),
            0 0 30px 15px rgba(168, 85, 247, 0.6)
          `,
          borderRadius: '50%',
          zIndex: 100,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s linear',
        }}
      />
    </>
  );
}
