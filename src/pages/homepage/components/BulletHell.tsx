import React, { useRef, useEffect, useState } from 'react';

type Bullet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  id: number;
};

const BulletHell: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const bulletsRef = useRef<Bullet[]>([]);
  const spawnRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const speedMultiplierRef = useRef(1);
  const nextIdRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let last = performance.now();

    const target = { x: canvas.clientWidth / 2, y: canvas.clientHeight / 2, r: 12 };

    const step = (t: number) => {
      const dt = Math.min(50, t - last) / 1000;
      last = t;

      // gradually increase difficulty
      speedMultiplierRef.current *= 1 + dt * 0.02; // slow ramp

      // spawn bullets toward target from spawn point
      if (Math.random() < 0.25 * dt * speedMultiplierRef.current) {
        const sx = spawnRef.current.x || Math.random() * canvas.clientWidth;
        const sy = spawnRef.current.y || Math.random() * canvas.clientHeight;
        const dx = target.x - sx;
        const dy = target.y - sy;
        const dist = Math.hypot(dx, dy) || 1;
        const speed = 80 * speedMultiplierRef.current + Math.random() * 40;
        const vx = (dx / dist) * speed;
        const vy = (dy / dist) * speed;
        bulletsRef.current.push({ x: sx, y: sy, vx, vy, speed, id: nextIdRef.current++ });
      }

      // update bullets
      const bullets = bulletsRef.current;
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        // accelerate slightly
        b.vx *= 1 + dt * 0.1 * (speedMultiplierRef.current - 1);
        b.vy *= 1 + dt * 0.1 * (speedMultiplierRef.current - 1);

        const d = Math.hypot(b.x - target.x, b.y - target.y);
        if (d < target.r) {
          bullets.splice(i, 1);
          setScore((s) => s + 1);
        }
        // remove if out of bounds
        if (b.x < -50 || b.y < -50 || b.x > canvas.clientWidth + 50 || b.y > canvas.clientHeight + 50) {
          bullets.splice(i, 1);
        }
      }

      // render
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // background dot (target)
      ctx.beginPath();
      ctx.fillStyle = '#f59e0b';
      ctx.arc(target.x, target.y, target.r, 0, Math.PI * 2);
      ctx.fill();

      // bullets
      for (const b of bullets) {
        ctx.beginPath();
        ctx.fillStyle = '#ef4444';
        ctx.arc(b.x, b.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = window.requestAnimationFrame(step);
    };

    rafRef.current = window.requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const canvas = canvasRef.current!;
      const rect = canvas.getBoundingClientRect();
      spawnRef.current.x = e.clientX - rect.left;
      spawnRef.current.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="w-full h-72 md:h-96 lg:h-96 mx-auto rounded-md border border-border bg-surface relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-3 right-3 font-mono text-sm text-ink-dim">Score: {score}</div>
    </div>
  );
};

export default BulletHell;
