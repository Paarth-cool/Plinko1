const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var balls = []
var plinkos = []
var divisions = []
var divisionheight = 200
var ground, division, balls
function setup() {
  createCanvas(600,600);
  engine = Engine.create();
world = engine.world;

  ground = new Ground(400,595,800,20)
  for (var i = 75;i<= width;i = i+75){
    plinkos.push(new Plinko(i,75))
  
}
 
for (var i = 50;i<= width;i = i+75){
  plinkos.push(new Plinko(i,165))
}
for (var i = 75;i<= width;i = i+75){
  plinkos.push(new Plinko(i,255))
}
for (var i = 50;i<= width;i = i+75){
  plinkos.push(new Plinko(i,345))
}
}

function draw() {
  background(0);  
  Engine.update(engine);
  if (frameCount%40 === 0){
    balls.push(new Ball(random(width/2-30,width/2+30),10,10))
  }
  for (var i = 0;i< balls.length;i++){
  balls[i].display()
  }
  for (var i = 0;i< plinkos.length;i++){
    plinkos[i].display();
  
}
ground.display();
for (var i = 0;i<width;i=i+80){
divisions.push(new Divisions(i,height-divisionheight/2,10,divisionheight))

}
for (var i = 0;i< divisions.length;i++){
  divisions[i].display();
}
}