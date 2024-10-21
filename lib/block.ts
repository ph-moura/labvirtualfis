import{ Vector2D } from './vector2D';

const DEG=Math.PI/180.0

class Block {
    pos: Vector2D;
    velocity: Vector2D;
    acceleration: Vector2D;
    gravity: Vector2D;
    forces: Vector2D;
    normal: Vector2D;
    weight: Vector2D;
    friction: Vector2D;
    sfc: number;
    width: number;
    height: number;
    mass: number;
    angle: number;
    g: number;
    cw: number;
    ch: number;
    color: string;
    moving: boolean;

    constructor(p : Vector2D,
                w : number,
                h : number,
                cw: number,
                ch: number,
                theta: number,
                m: number = 1,
                sfc: number = 0.95,
                g: number = 9.8,
                c : string = "gray"
                ) 
    {
        this.color = c;
        this.g = g;
        this.height = h;
        this.mass = m;
        this.cw = cw;
        this.ch = ch;
        this.pos = new Vector2D(p.x, p.y);
        this.width = w;
        this.gravity = new Vector2D(0,g);
        this.acceleration = new Vector2D(0, 0);
        this.velocity = new Vector2D(0, 0);
        this.mass = m;
        this.sfc = sfc;
        this.angle = theta*DEG;
        this.weight = Vector2D.scale(this.gravity, this.mass);
        this.moving = false;

        this.normal = new Vector2D(this.weight.mag()*Math.cos(this.angle)*Math.sin(this.angle), 
                                   -this.weight.mag()*Math.cos(this.angle)*Math.cos(this.angle));

        if (Math.tan(this.angle) < this.sfc ) {
            this.friction =  new Vector2D(-this.normal.x, -this.normal.y-this.weight.y);
        }else{
            this.friction = new Vector2D(0,0);
            this.moving = true;
        }

        this.forces = Vector2D.add(Vector2D.add(this.weight, this.normal), this.friction);
    }

    move() {
        if (this.pos.y <= this.ch) {
            this.acceleration = Vector2D.scale(this.forces, 1.0 / this.mass);
            this.velocity.incrementBy(this.acceleration);
            this.pos.incrementBy(this.velocity);
        }
    }

    public isMoving() {
        return this.moving;
    }

    getAcceleration() {
        this.acceleration = Vector2D.scale(this.forces, 1.0 / this.mass);
        return this.acceleration;
    }

    update(angle: number) {
        this.angle = angle*DEG;
        const sn = Math.sin(this.angle);
        const cs = Math.cos(this.angle);
        const p = new Vector2D( this.cw/2 - this.height*sn/2 - 0.5*this.cw*cs, this.ch - this.width*cs/2 - 0.5*this.cw*sn);
        this.pos = p;
        this.forces = Vector2D.add(Vector2D.add(this.weight, this.normal), this.friction);
    }

    setMass(m) {
        this.mass = m;
        this.weight = Vector2D.scale(this.gravity, this.mass);
    }

    resetForces() {
        this.forces = new Vector2D(0, 0);
        this.weight = new Vector2D(0, 0);
        this.acceleration = new Vector2D(0, 0);
    }

    setBoundaries(w: number, h: number) {
        this.cw = w;
        this.ch = h;
    }

    setPos(p) {
        this.pos = new Vector2D(p.x, p.y);
    }

    getPos() {
        return this.pos;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        this.move();
        ctx.save();
        ctx.translate(this.pos.x + this.width/2.0, this.pos.y + this.height/2.0);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.rect(0, -this.height, this.width, this.height);
        ctx.fill();
        ctx.restore();
    }
}

export { Block };
