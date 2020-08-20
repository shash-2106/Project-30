class box1st{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 0.5,
            density : 0.3,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world,this.body);
    }
    display(){
        //var angle = this.body.angle;
       var pos = this.body.position;
       
        if(this.body.speed < 3){
            var pos = this.body.position;
            fill("yellow");
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }
        /*push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();*/
       
    }
}