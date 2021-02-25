const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var ball;
var rope;

//building 1
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    ball = Bodies.circle(400, 100, 30);
    World.add(world, ball);

    rope = new Rope(ball, {x:400 , y:100});

    //building 1
    box1 = new Box(560, 130, 60, 60);
    box2 = new Box(550, 160, 60, 60);
    box3 = new Box(560, 200, 60, 60);
    box4 = new Box(570, 240, 60, 60);
    box5 = new Box(560, 280, 60, 60);
    box6 = new Box(550, 320, 60, 60);
}

function draw(){
    background(220);
    var angle = ball.angle;
    var pos = ball.position;

    Engine.update(engine);

    ground.display();
    
    //below are the lines for ball code only
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("#3399ff")
    ellipse(0,0, 30*2);
    pop();
    //till here

    push();
    strokeWeight(6);
    rope.display();
    pop();

    //building 1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball, {x:mouseX, y:mouseY});
}