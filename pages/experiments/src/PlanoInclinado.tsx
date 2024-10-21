import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from   '../../../components/sharedstyles';
import { Vector2D } from '../../../lib/vector2D';
import { Arrow } from    '../../../lib/arrow';
import { Block } from    '../../../lib/block';

import { Container, ChartWrapper, ControlPanel, Main, Title, CodeTag } from '../../../components/sharedstyles';

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

function mydraw(ctx: CanvasRenderingContext2D, width: number, height: number, theta: number) {
    const length = 0.5*width;
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.imageSmoothingEnabled;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = '#8AA6A3';
    ctx.strokeStyle=  '#008600';
    ctx.moveTo(width/2, height);
    ctx.lineTo(width/2 - length*Math.cos(theta*DEG), height);
    ctx.lineTo(width/2 - length*Math.cos(theta*DEG), height - length*Math.sin(theta*DEG));
    ctx.lineTo(width/2, height);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}

const PlanoInclinado: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    const [theta, setRadius] = useState<number>(0);
    const [mass, setMass] = useState<number>(10);
    const [update, setUpdate] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(false);
    const [isMoving, setMooving] = useState<boolean>(false);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        const pos = new Vector2D(-50, -50);
        const block = new Block(pos, 2*mass, 2*mass, canvas.width, canvas.height, theta, mass);

        const transferidor = new Image();
        transferidor.src ='../images/protractor3.webp';
        transferidor.onload = () => { };

        function animate() {
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            mydraw(ctx, canvas.width, canvas.height, theta);
            if(show){
                ctx.drawImage(transferidor,2, 0);
            }else
            if(update) {
                block.setBoundaries(canvas.width, canvas.height);
                block.setMass(mass);
                block.update(theta);
                setMooving(block.isMoving());
                block.draw(ctx);
            }
            ctx.restore();
            requestAnimationFrame(animate);
        }
        animate();
    }, [isMoving, theta, show, mass]);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!isMoving) {
            setRadius(Number(event.target.value));
            setUpdate(Boolean(event.target.value));
        }
    };

    const showProtractor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShow(!show);
    }

    const handleMassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMass(Number(event.target.value));
        setUpdate(Boolean(event.target.value));
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
                            <label htmlFor="massSlider">Massa:<span style={{width: '15px'}}> {mass} kg</span></label>
                        </td>
                        <td>
                            <input 
                                type="range" 
                                id="massSlider" 
                                min="5" 
                                max="15" 
                                value={mass} 
                                onChange={handleMassChange}
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
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Massa (kg)</th>
                        <th>Ângulo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type={'number'} step={'0.01'} min={'0'} style={styles.cell}/></td>
                        <td><input type={'number'} step={'0.01'} min={'0'} style={styles.cell}/></td>
                    </tr>
                    <tr>
                        <td><input type={'number'} step={'0.01'} min={'0'} style={styles.cell}/></td>
                        <td><input type={'number'} step={'0.01'} min={'0'} style={styles.cell}/></td>
                    </tr>
                    <tr>
                        <td><input type={'number'} step={'0.01'} min={'0'} style={styles.cell}/></td>
                        <td><input type={'number'} step={'0.01'} min={'0'} style={styles.cell}/></td>
                    </tr>
                    <tr>
                        <td><input type={'number'} step={'0.01'} min={'0'} style={styles.cell}/></td>
                        <td><input type={'number'} step={'0.01'} min={'0'} style={styles.cell}/></td>
                    </tr>
                </tbody>
            </table>
        </ChartWrapper>
    );
};

export default PlanoInclinado;
