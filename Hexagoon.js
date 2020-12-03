class Hexagoon
{
    constructor(x,y,width,height)
    {
        var options =
        {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.image = loadImage("polygon.png");
        this.scale=(3);
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}