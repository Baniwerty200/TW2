class sling{
    constructor(BA,PB){
    var options={
    length:10,
    stiffness:0.04,
    bodyA:BA,
    pointB:PB
    }
    this.bodyA=BA;
    this.pointB=PB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA=null;
   
    }
    attach(BA){
        this.sling.bodyA=BA;
        
    }
    display(){
        if (this.sling.bodyA){

        
    var BAP=this.bodyA.position;
    var PBP=this.pointB;
    strokeWeight(2);
    line(BAP.x,BAP.y,PBP.x,PBP.y);
        }
    }
    
}