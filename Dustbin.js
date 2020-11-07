class Dustbin{
    constructor(width,height){
        //this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        
        //World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        push();
        image(this.image,800,310,this.width,this.height)
        pop();
    }
}
