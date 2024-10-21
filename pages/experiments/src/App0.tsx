import React, { useEffect, useRef } from 'react';

import { Canvas } from '../../../components/sharedstyles'

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(x: number, y: number, vx: number, vy: number, radius: number) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off the walls
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
  }
}

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const particles: Particle[] = [];

    // Create particles
    for (let i = 0; i < 10; i++) {
      const radius = 10;
      const x = Math.random() * (canvas.width - 2 * radius) + radius;
      const y = Math.random() * (canvas.height - 2 * radius) + radius;
      const vx = (Math.random() - 0.5) * 4;
      const vy = (Math.random() - 0.5) * 4;
      particles.push(new Particle(x, y, vx, vy, radius));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, []);
    return <Canvas ref={canvasRef}/>;
};

export default App;
