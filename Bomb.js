class Bomb{
    constructor(x,y,width,height){
        var options={
            //isStatic:true
            frictionAir:0.004,
            //friction:0.4
            //restitution:0.8
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/bomb.png");
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