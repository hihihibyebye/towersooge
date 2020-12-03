class Roopie{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.roo = Constraint.create(options);
        World.add(world, this.roo);
    }

    fly(){
        this.roo.bodyA = null;
    }
    display(){
        rect(this.roo,200,20);
        rect(this.roo,2,170,20);
        if(this.roo.bodyA){
            var pointA = this.roo.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke("blue");
            fill("yellow");
            push();
            stroke(48,22,8);
            if(pointA.x<220)
            {
           
           line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
           line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
           image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else
            {
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();
        }
    }
    
}