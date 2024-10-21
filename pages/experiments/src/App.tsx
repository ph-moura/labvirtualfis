import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '../../../components/sharedstyles';

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

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off the walls
    if (this.x + this.radius > 800 || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > 600 || this.y - this.radius < 0) {
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
  const [radius, setRadius] = useState<number>(10);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const particles: Particle[] = particlesRef.current;

    if (particles.length === 0) {
      // Create particles
      for (let i = 0; i < 10; i++) {
        const radius = 10;
        const x = Math.random() * (canvas.width - 2 * radius) + radius;
        const y = Math.random() * (canvas.height - 2 * radius) + radius;
        const vx = (Math.random() - 0.5) * 4;
        const vy = (Math.random() - 0.5) * 4;
        particles.push(new Particle(x, y, vx, vy, radius));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.radius = radius;
        particle.update();
        particle.draw(ctx);
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, [radius]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(event.target.value));
  };

  return (
    <div>
      <div className="slider-container">
        <label htmlFor="radiusSlider">Particle Radius: </label>
        <input 
          type="range" 
          id="radiusSlider" 
          min="1" 
          max="50" 
          value={radius} 
          onChange={handleSliderChange} 
        />
        <span id="radiusValue">{radius}</span>
      </div>
      <Canvas ref={canvasRef} width="800" height="600" />
    </div>
  );
};

export default App;
