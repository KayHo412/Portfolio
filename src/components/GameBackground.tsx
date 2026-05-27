import { useEffect, useRef } from 'react';

type Pixel = { x: number; y: number; s: number; c: string; vx: number; vy: number };

const GameBackground = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = window.innerWidth < 768 ? 60 : 120;
    let px = 0;
    let py = 0;
    let raf = 0;
    let visible = document.visibilityState === 'visible';

    const pixels: Pixel[] = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: Math.random() * 1.4 + 0.6,
      c: Math.random() < 0.8
        ? 'rgba(232,232,232,0.24)'
        : Math.random() < 0.95
          ? 'rgba(0,255,136,0.18)'
          : 'rgba(255,68,68,0.12)',
      vx: (Math.random() - 0.5) * 0.0005,
      vy: 0.0001 + Math.random() * 0.00035,
    }));

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      pixels.forEach((p) => {
        p.x = (p.x + p.vx + 1) % 1;
        if (!reduced) p.y += p.vy;
        if (p.y > 1.02) p.y = -0.02;
        const x = p.x * window.innerWidth;
        const y = p.y * window.innerHeight;
        const d = Math.hypot(x - px, y - py);
        const size = p.s * (d < 40 ? 1.8 : 1);
        ctx.fillStyle = p.c;
        ctx.fillRect(x, y, size, size);
      });
      if (visible && !reduced) raf = requestAnimationFrame(draw);
    };

    const move = (e: MouseEvent) => {
      px = e.clientX;
      py = e.clientY;
    };

    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
      if (visible && !reduced) draw();
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />;
};

export default GameBackground;
