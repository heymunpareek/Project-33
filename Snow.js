class Snow {
    constructor(x,y) {
        var op={
            isStatic: false, density: 0.2, frictionAir: 0.3
        }
        this.body = Bodies.rectangle(x,y,25,25,op);
        this.width = 25;
        this.height = 25;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }
    updateDrops() {
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body, {x: random(0,width-1), y: 0})
        }
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}