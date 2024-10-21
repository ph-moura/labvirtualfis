import React, { useEffect, useRef, useState } from 'react';
import { Container, ChartWrapper, ControlPanel, Main, Title, CodeTag } from '../../../components/sharedstyles';
import { Canvas } from '../../../components/sharedstyles';
import { Particle } from '../../../lib/particle';
import { Vector2D } from '../../../lib/vector2D';
import { Arrow } from '../../../lib/arrow';

const DEG=3.14/180.0

const styles={
    table:{
       width: 180,
       margin:'auto',
    },
    cell:{
        width: 90,
    },
}

const Projectile: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [theta, setRadius] = useState<number>(0);
    const [velocity, setVelocity] = useState<number>(5);
    const [update, setUpdate] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        const particles: Particle[] = [];

        const radius = canvas.height/30;
        const x = radius+2;
        const y = (canvas.height - 2 * radius) + radius;

        const vx = Math.cos(theta*DEG) * velocity / 6;
        const vy = -Math.sin(theta*DEG)  * velocity / 6;

        const pos = new Vector2D(x, y);
        const v = new Vector2D(vx, vy);

        var particle = new Particle(pos, v, radius);

        const transferidor = new Image();
        //transferidor.src ='../images/protractor3.webp';
        //transferidor.src ='../images/transferidor(134x135).png';
        transferidor.src ='../images/transferidor(141x135).png';
        transferidor.onload = () => { };

    function animate() {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled;
      if(show){
          ctx.drawImage(transferidor,0, canvas.height-135 - radius);
      }
      if (update){
        particle.update(canvas.width, canvas.height);
      }   
      particle.draw(ctx);

        const vec = new Arrow(particle.r, 
                              particle.v.mag() * 10, 
                              particle.v.angle(),
                              //Vector2D.angle(particle.g, particle.v),
                              'black');

        //if(particle.v.y !== 0.0) {
            vec.draw(ctx);
        //}
      ctx.restore();
      requestAnimationFrame(animate);
    }

    animate();
  }, [show, velocity, theta, update]);


    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadius(Number(event.target.value));
        setUpdate(false);
    };

    const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdate(!update);
        setShow(false);
    }

    const handleVelocityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVelocity(Number(event.target.value));
        setUpdate(false);
    }

    const showProtractor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShow(!show);
        setUpdate(false);
    }





    return (
        <ChartWrapper> 
            <ControlPanel>
            <table style={styles.table}>
                <tbody>
                    <tr>
                        <td><label htmlFor="inclinationSlider">Inclinação: </label></td>
                        <td>
                            <input 
                                type="range" 
                                id="inclinationSlider" 
                                min="0" 
                                max="90" 
                                value={theta} 
                                onChange={handleSliderChange} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="massSlider">Velocidade:<span style={{width: '15px'}}> {velocity} m/s</span></label>
                        </td>
                        <td>
                            <input 
                                type="range" 
                                id="massSlider" 
                                min="5" 
                                max="15" 
                                value={velocity} 
                                onChange={handleVelocityChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="launch">Lançar:</label>
                        </td>
                        <td>
                            <input type="checkbox"
                                   id="protractor"
                                   style={{margin: '15px'}}
                                   checked={update}
                                   onChange={handleUpdate}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="protractor">Transferidor:</label>
                        </td>
                        <td>
                            <input type="checkbox"
                                   id="protractor"
                                   style={{margin: '15px'}}
                                   checked={show}
                                   onChange={showProtractor}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            </ControlPanel>
            
            <Canvas ref={canvasRef}/>
        </ChartWrapper>
    );

};

export default Projectile;
