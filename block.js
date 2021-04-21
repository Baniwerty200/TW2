class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibilty=255;
        this.image=loadImage("block.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        if (this.body.speed<3){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        }else{
          World.remove(world,this.body);
          push();
          this.visibilty=this.visibilty-20;
          tint(255,this.visibilty   );
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }
                
         }
      }

