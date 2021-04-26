class Chain {
    constructor (bodyX,bodyY) {
         var options = {
            bodyA : bodyX,
            bodyB : bodyY,
            stiffness : 0.04,
            length : 10
        }
        this.chain = new Constraint.create (options);
        World.add(myWorld,this.chain);
    }

    display () {
        var point1 = this.chain.bodyA.position;
        var point2 =  this.chain.bodyB.position;
        strokeWeight(5);
        line(point1.x,point1.y,point2.x,point2.y);
    }
}