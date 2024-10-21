import React, { useEffect, useRef } from 'react';
import { Container, ChartWrapper, ControlPanel, Main, Title, CodeTag } from '../../../components/sharedstyles';
import { Canvas } from '../../../components/sharedstyles';
import { Particle } from '../../../lib/particle';
import { Vector2D } from '../../../lib/vector2D';
import { Arrow } from '../../../lib/arrow';


const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const particles: Particle[] = [];

    for (let i = 0; i < 2; i++) {
      const radius = canvas.height/50;
      const x = Math.random() * (canvas.width - 2 * radius) + radius;
      const y = Math.random() * (canvas.height - 2 * radius) + radius;

      const vx = (Math.random() - 0.5) * 5;
      const vy = (Math.random() - 0.5) * 5;

      const pos = new Vector2D(x, y);
      const v = new Vector2D(vx, vy);

      particles.push(new Particle(pos, v, radius));
    }

    
    function animate() {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled;
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);

        const vec = new Arrow(particle.r, 
                              5*particle.v.mag(), 
                              particle.v.angle(),
                              //Vector2D.angle(particle.g, particle.v),
                              'black');

        if(particle.v.y !== 0.0) {
            vec.draw(ctx);
        }

      });
      ctx.restore();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);
    return (
      <ChartWrapper> 
         <ControlPanel>
            <div style={{margin: '0 0 3px 0'}}>
               <label htmlFor="radiusSlider">Inclinação: </label>
               <input 
                   type="range" 
                   id="radiusSlider" 
                   min="0" 
                   max="90" 
                   value={45} 
                />
            </div>
        </ControlPanel>
        <Canvas ref={canvasRef}/>
    </ChartWrapper>
    );
};

export default Particles;
