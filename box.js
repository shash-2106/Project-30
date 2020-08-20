class box{
    constructor(x,y,width,height,colour){
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 0.5,
            density : 0.3,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.colour = colour;
        this.visibility = 255;
        World.add(world,this.body);
    }
    display(){
        //var angle = this.body.angle;
       var pos = this.body.position;
       
        if(this.body.speed < 0.5){
            var pos = this.body.position;
            fill(this.colour);
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            fill(this.colour);
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }
        /*push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();*/
       
    }
}