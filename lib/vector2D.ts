class Vector2D {
    x : number;
    y : number;
    distance : number;

    constructor(x : number, y : number)
    {
        this.x = x;
        this.y = y;
    }

    angle()
    {
        if (this.x === 0 &&this.y === 0) {
            return;
        } else if (this.x === 0) {
            return (this.y / Math.abs(this.y)) * 90;
        } else if (this.y === 0) {
            return this.x < 0 ? 180 : 0;
        } else {
            const theta = Math.atan(this.y / this.x) * 180 / Math.PI;
            return this.x < 0 ? 180 + theta : theta;
        }
    }

    mag() { return Math.sqrt(this.x * this.x + this.y * this.y); }

    normalize()
    {
        let mag = this.mag();
        if (mag > 0) {
            this.x /= mag;
            this.y /= mag;
        }
    }

    invert()
    {
        this.x = -this.x;
        this.y = -this.y;
    }

    public incrementBy(v : Vector2D)
    {
        this.x += v.x;
        this.y += v.y;
    }

    decrementBy(v : Vector2D)
    {
        this.x -= v.x;
        this.y -= v.y;
    }

    scaleBy(k : number)
    {
        this.x *= k;
        this.y *= k;
    }

    public static scale(v: Vector2D, k: number) { return new Vector2D(k*v.x, k*v.y); }

    public static subtract(v1 : Vector2D, v2 : Vector2D) { return new Vector2D(v1.x - v2.x, v1.y - v2.y); }

    public static distance(v1 : Vector2D, v2 : Vector2D) { return Vector2D.subtract(v1, v2).mag(); }

    public static add(v1 : Vector2D, v2 : Vector2D) { return new Vector2D(v1.x + v2.x, v1.y + v2.y); }

    public static angle(v1 : Vector2D, v2 : Vector2D)
    {
        return Math.acos(Vector2D.dotProduct(v1, v2) / (v1.mag() * v2.mag()));
    }

    public static dotProduct(v1 : Vector2D, v2 : Vector2D) { return (v1.x * v2.x + v1.y * v2.y); }
}

export {Vector2D};
