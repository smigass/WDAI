import Vector from "./Vector.js";

class Zombie {
    speed = 0;
    spriteImg = new Image()
    SPRITE_WIDTH = 200
    SPRITE_HEIGHT = 312
    ticks = 0



    constructor(MAX_ZOMBIE_SPEED, MIN_ZOMBIE_SIZE) {
        this.position = 100 + Math.floor(Math.random() * 400)
        this.speed = 1 + Math.floor(Math.random() * MAX_ZOMBIE_SPEED);
        this.spriteImg.src = 'images/walkingdead.png'
        let scale = 0.9 - Math.random() * (1 - MIN_ZOMBIE_SIZE)
        this.width = this.SPRITE_WIDTH * scale
        this.height = this.SPRITE_HEIGHT * scale
        this.currentPosition = new Vector(1050, this.position)
        this.corner = new Vector(
            this.currentPosition.x + this.width,
            this.currentPosition.y + this.height,
        )
    }

    draw(ctx) {
        ctx.drawImage(
            this.spriteImg,
            Math.floor(this.ticks / (10 - Math.min(this.speed, 9))) % 10 * this.SPRITE_WIDTH,
            0, this.SPRITE_WIDTH,
            this.SPRITE_HEIGHT,
            this.currentPosition.x,
            this.currentPosition.y,
            this.width,
            this.height
        )


        this.ticks += 1
    }

    update() {
        this.currentPosition.x -= this.speed
        this.corner = new Vector(
            this.currentPosition.x + this.width,
            this.currentPosition.y + this.height,
        )
    }

    isOnCrosshair(aim) {
        return (this.currentPosition.x <= aim.x && aim.x <= this.corner.x
            && this.currentPosition.y <= aim.y && aim.y <= this.corner.y)

    }


}

export default Zombie