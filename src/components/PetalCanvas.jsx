import React, { useEffect, useRef } from 'react';

export default function PetalCanvas({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Blossom Petal class
    const petalsCount = Math.min(32, Math.floor(window.innerWidth / 45));
    const petals = [];

    const colors = [
      { r: 254, g: 205, b: 211, a: 0.65 }, // Soft Sakura Rose
      { r: 251, g: 113, b: 133, a: 0.55 }, // Vibrant Cherry Pink
      { r: 244, g: 63, b: 94, a: 0.45 },   // Rose Gold
      { r: 216, g: 180, b: 254, a: 0.5 },  // Lilac Petal
      { r: 249, g: 168, b: 212, a: 0.6 }   // Blossom Pink
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -20;
        this.size = Math.random() * 9 + 8; // 8 - 17px
        this.speedY = Math.random() * 0.9 + 0.6;
        this.speedX = (Math.random() - 0.3) * 0.8;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.025;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = Math.random() * 0.03 + 0.01;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.008) * 0.6;
        this.rotation += this.rotationSpeed;
        this.flip += this.flipSpeed;

        if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.scale(Math.sin(this.flip), 1);

        context.beginPath();
        // Draw an organic petal shape with bezier curves
        context.moveTo(0, -this.size);
        context.bezierCurveTo(
          this.size * 0.75,
          -this.size * 0.6,
          this.size * 0.75,
          this.size * 0.6,
          0,
          this.size
        );
        context.bezierCurveTo(
          -this.size * 0.75,
          this.size * 0.6,
          -this.size * 0.75,
          -this.size * 0.6,
          0,
          -this.size
        );

        const { r, g, b, a } = this.color;
        context.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        context.fill();

        // Delicate inner vein
        context.beginPath();
        context.moveTo(0, -this.size * 0.7);
        context.lineTo(0, this.size * 0.7);
        context.strokeStyle = `rgba(255, 255, 255, ${a * 0.4})`;
        context.lineWidth = 0.8;
        context.stroke();

        context.restore();
      }
    }

    for (let i = 0; i < petalsCount; i++) {
      petals.push(new Petal());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70 transition-opacity duration-1000"
      style={{ willChange: 'transform' }}
    />
  );
}
