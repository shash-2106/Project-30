class box2nd{
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
        
       var pos = this.body.position;
        if(this.body.speed < 0.5){
            var pos = this.body.position;
            fill("cyan");
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.Visiblity);
            rect(pos.x,pos.y,this.width,this.height);
        }
    }
}