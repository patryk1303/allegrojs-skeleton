class GameObject {
    x: number;
    y: number;
    _gfx: any;
    
    constructor(sprite: string, x: number = 0, y:number = 0) {
        this.x = x;
        this.y = y;
        this._gfx = load_bmp(sprite);
    }
    
    getGfx() {
        return this._gfx;
    }
    
    draw() {
        draw_sprite(canvas, this._gfx, this.x, this.y);
    }
    
    update() {}
    
    collision(obj: GameObject) {
        // TODO implement collision
    }
}