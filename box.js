class Box{
    constructor(x, y, width, height){
        var options= {
            'restitution': 0.8,
            'friction': 1,
            'density': 0.04
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width=width;
        this.height=height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("#6666ff");
        rect(0, 0, this.width, this.height);
        pop();
    }
}