const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball,ball1,ball2,ball3,ball4,ball5;
var pole;
var poison;
var mouseClickTime=false;
var player,playerSprite;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,580,1200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution:0.5
    }
    ball = Bodies.circle(200,100,5,ball_options);
    World.add(world,ball);
    pole = Bodies.circle(600,200,5,ground_options);
    World.add(world,pole);
    rope = new Rope(pole, ball);
    //poison = new Poison(600,600,20,20);
    ball1 = Bodies.circle(100,100,5,ball_options);
    World.add(world,ball1);
    rope1 = new Rope(ball, ball1);
    ball2 = Bodies.circle(20,100,5,ball_options);
    World.add(world,ball2);
    rope2 = new Rope(ball1, ball2);
    ball3 = Bodies.circle(100,100,5,ball_options);
    World.add(world,ball3);
    rope3 = new Rope(ball2, ball3);
    ball4 = Bodies.circle(100,100,5,ball_options);
    World.add(world,ball4);
    rope4 = new Rope(ball3, ball4);
    ball5 = Bodies.circle(100,100,5,ball_options);
    World.add(world,ball5);
    rope5 = new Rope(ball4, ball5);
    ball6 = Bodies.circle(100,100,5,ball_options);
    World.add(world,ball6);
    rope6 = new Rope(ball5, ball6);
    ball7 = Bodies.circle(100,100,5,ball_options);
    World.add(world,ball7);
    rope7 = new Rope(ball6, ball7);
    var player_options={
        restitution:0.1
    }
    player = Bodies.circle(100,200,20,player_options);
    World.add(world,player);
    rope8 = new Rope(ball7,player);
    playerSprite=createSprite(100,200,20,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
    rectMode(CENTER);
    rect(player.position.x,player.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(pole.position.x,pole.position.y,5,5);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,5,5);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,5,5);
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,5,5);
    ellipseMode(RADIUS);
    ellipse(ball3.position.x,ball3.position.y,5,5);
    ellipseMode(RADIUS);
    ellipse(ball4.position.x,ball4.position.y,5,5);
    ellipseMode(RADIUS);
    ellipse(ball5.position.x,ball5.position.y,5,5);
    ellipseMode(RADIUS);
    ellipse(ball6.position.x,ball6.position.y,5,5);
    ellipseMode(RADIUS);
    ellipse(ball7.position.x,ball7.position.y,5,5);
    //rect(pole.position.x,pole.position.y,20,20);
    //poison.display()
    rope.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    rope6.display();
    rope7.display();
    //console.log(mouseClickTime);
    //Matter.Body.setPosition(pole,{x:mouseX,y:mouseY});
    rope8.display();
    playerSprite.x=player.position.x
    playerSprite.y=player.position.y
    player.position.x=playerSprite.x
    player.position.y=playerSprite.y
    drawSprites();
    if(keyCode===32){
        playerSprite.velocityY=-10
    }

    
    
    
}
function mouseClicked(){
    
}