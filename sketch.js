const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var right;
var left;
var top_wall;
var ball;

var botton1;
var botton2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  botton1 = createImg('push.png');
  botton1.position(240, 30);
  botton1.size(50, 50);
  botton1.mouseClicked(hForce);

  botton2 = createImg('push.png');
  botton2.position(180, 30);
  botton2.size(50, 50);
  botton2.mouseClicked(vForce);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground = new Ground(200, 390, 400, 20);
  right = new Ground(390, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 400, 20);
  
  var ball_option = {
    restitution: 0.95
  };
  ball = Bodies.circle(200, 100, 20, ball_option);
  World.add(world, ball)  
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 20);
  Engine.update(engine);
  ground.show();
  right.show();
  left.show();
  top_wall.show();
}
function hForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.05, y: 0});
  
}
function vForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: -0.05});

}

