import{ Vector2D } from './vector2D';

class Particle {
    r : Vector2D;
    v : Vector2D;
    g : Vector2D;
    radius : number;
    tmp : Vector2D;

    constructor(r : Vector2D, v : Vector2D, radius : number)
    {
        this.r      = r;
        this.v      = v;
        this.radius = radius;
        this.g      = new Vector2D(0, 0.02);
        this.tmp    = r;
    }

    update(width : number, height : number)
    {

        if (Math.abs(this.v.x) <= 0.02) {
            this.v.x = 0;
        }

        const vy = this.v.y + this.g.mag();
        this.tmp = Vector2D.add(this.r, this.v);

        if (Math.abs(this.v.y) < 0.02 && (this.tmp.y + this.radius >= height)) {
            this.v.y = 0;
            this.r.y = height - this.radius;
        } else {
            this.v.incrementBy(this.g);
            this.r = this.tmp;
        }
        // Bounce off the walls
        if ((this.r.x + this.radius > width) || (this.r.x - this.radius < 0)) {
            this.v.x = -this.v.x;
        }

        if ((this.r.y + this.radius >= height) || (this.r.y - this.radius <= 0)) {
            this.v.y = -this.v.y;
            this.v.scaleBy(0.8);
        }
    }

    draw(ctx : CanvasRenderingContext2D)
    {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.r.x, this.r.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.restore();
        ctx.closePath();
    }
}

export { Particle };
