import { useEffect, useRef } from "react";

const NODES = [
  { x: 0.15, y: 0.25, r: 5, color: "#F97316" },
  { x: 0.5, y: 0.12, r: 4, color: "#2563EB" },
  { x: 0.82, y: 0.28, r: 5, color: "#16A34A" },
  { x: 0.25, y: 0.6, r: 4, color: "#2563EB" },
  { x: 0.55, y: 0.5, r: 7, color: "#F97316" },
  { x: 0.85, y: 0.65, r: 4, color: "#7C3AED" },
  { x: 0.12, y: 0.85, r: 3, color: "#16A34A" },
  { x: 0.42, y: 0.82, r: 5, color: "#7C3AED" },
  { x: 0.72, y: 0.88, r: 4, color: "#2563EB" },
  { x: 0.92, y: 0.48, r: 3, color: "#F97316" },
  { x: 0.38, y: 0.35, r: 3, color: "#16A34A" },
  { x: 0.68, y: 0.15, r: 3, color: "#7C3AED" },
];

const EDGES = [
  [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5],
  [3, 6], [6, 7], [7, 8], [5, 8], [4, 7], [4, 1],
  [1, 11], [11, 2], [10, 0], [10, 4], [10, 3], [9, 5],
  [9, 2],
];

export default function DotMesh({ className = "" }) {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let startTime = performance.now();

    function draw(timestamp) {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const elapsed = (timestamp - startTime) / 1000;

      const positions = NODES.map((n) => {
        const drift = Math.sin(elapsed * 0.6 + n.x * 8) * 4;
        return {
          px: n.x * w,
          py: n.y * h + drift,
          r: n.r,
          color: n.color,
        };
      });

      ctx.lineWidth = 1;
      EDGES.forEach(([a, b]) => {
        const na = positions[a];
        const nb = positions[b];
        const dist = Math.hypot(na.px - nb.px, na.py - nb.py);
        const maxDist = w * 0.45;
        if (dist > maxDist) return;
        const alpha = (1 - dist / maxDist) * 0.2;
        ctx.beginPath();
        ctx.moveTo(na.px, na.py);
        ctx.lineTo(nb.px, nb.py);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.stroke();
      });

      positions.forEach((n) => {
        const glow = ctx.createRadialGradient(n.px, n.py, 0, n.px, n.py, n.r * 4);
        glow.addColorStop(0, n.color + "40");
        glow.addColorStop(1, n.color + "00");
        ctx.beginPath();
        ctx.arc(n.px, n.py, n.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.px, n.py, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.px, n.py, n.r * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();
      });

      const pulseNode = positions[4];
      {
        const t = (elapsed * 0.8) % 1;
        const radius = NODES[4].r + t * 30;
        const alpha = (1 - t) * 0.25;
        ctx.beginPath();
        ctx.arc(pulseNode.px, pulseNode.py, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`shrink-0 ${className}`}
      style={{ width: 320, height: 240 }}
    />
  );
}
