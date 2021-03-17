var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;
var wall1;
var wall2;
var wall3;
var wall4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
wall1=createSprite(750,200,20,800)
wall1.shapeColor="white";

wall2=createSprite(100,200,20,800)
wall2.shapeColor="white";

wall3=createSprite(400,550,800,20)
wall3.shapeColor="white";

wall4=createSprite(400,50,800,20)
wall4.shapeColor="white";

box1=createSprite(200,500,100,20);
box1.shapeColor="red";
box2=createSprite(350,500,100,20);
box2.shapeColor="green";
box3=createSprite(500,500,100,20);
box3.shapeColor="blue";
box4=createSprite(650,500,100,20);
box4.shapeColor="purple";
ball =createSprite(100,500,50,50);
ball.shapeColor="black"
    //create box sprite and give velocity
    ball.velocityX=4;
ball.velocityY=-4;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    
ball.bounceOff(wall1);
ball.bounceOff(wall2);
ball.bounceOff(wall3);
ball.bounceOff(wall4);




ball.bounceOff(box4);

if(ball.isTouching(box1)){
    ball.bounceOff(box1);
    ball.shapeColor="red"
  
}

else if(ball.isTouching(box2)){
    ball.bounceOff(box2);
    ball.shapeColor="green"
    
}
else if(ball.isTouching(box3)){
    ball.bounceOff(box3);
    ball.shapeColor="blue"
    
}
else if(ball.isTouching(box4)){
    ball.bounceOff(box4);
    ball.shapeColor="purple"
    
}


drawSprites();

    //add condition to check if box touching surface and make it box
    
}
