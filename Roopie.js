class Roopie{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.roo = Constraint.create(options);
        World.add(world, this.roo);
    }

    fly(){
        this.roo.bodyA = null;
    }
    display(){
        //rect(this.roo,200,20);
       //rect(this.roo,2,170,20);
        if(this.roo.bodyA){
            var pointA = this.roo.bodyA.position;
            var pointB = this.pointB;
            
            //push();
            strokeWeight(15);
            stroke("blue");

            line(pointB.x,pointB.y,pointA.x,pointA.y);
            //pop();
        }
    }
    
}