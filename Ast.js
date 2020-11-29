class Ast{
    constructor(x,y,width,height){
        var options={
            isStatic:true
            //frictionAir:0.004,
            //friction:0.4
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.body.velocity.x = 3;
        //this.body.velocity.y = 5;
        this.image = loadImage("Images/Ast2.png");
        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}