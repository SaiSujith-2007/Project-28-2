class stone
{
    constructor(x,y,radius){
    this.image = loadImage("Sprites/stone.png");
    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
    
}