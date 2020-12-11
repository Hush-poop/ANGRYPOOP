class Wand{
    constructor(bodyA,pointB){
      
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
    this.wand1=loadImage("sprites/sling1.png")
    this.wand2=loadImage("sprites/sling2.png")
    this.wand3=loadImage("sprites/sling3.png")
    this.pointB=pointB;
this.wand=Constraint.create(options)
World.add(world,this.wand);
    }
    fly(){
        this.wand.bodyA=null;
    }
    display(){
        image(this.wand1,200,20);
        image(this.wand2,170,20);
        if(this.wand.bodyA){
        var pointA=this.wand.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}