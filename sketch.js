const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var backgroundImage;
var snowfall,si;
var s1=[]


function preload(){
  si=loadImage("snow3.jpg")
  
  
  }

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;

}




function draw() {
  background(si);  
 Engine.update(engine)
  if(frameCount%10===0){
    s1.push(new snow(random(10,800),-30))
  }

  for(var j=0;j<s1.length;j++){
s1[j].display();

  }
}