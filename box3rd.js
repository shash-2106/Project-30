class box3rd{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.7,
            friction : 0.5,
            density : 0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       if(this.body.speed < 3){
       
       
        fill("pink");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
       }
       else{
        //World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 1;
        tint(255,this.visibility);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
       } 
    }
}
    