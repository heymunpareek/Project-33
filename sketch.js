//constants
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

//variables
var engine, world;

//gameStates
var level1 = 1;
var level2 = 2;
var level3 = 3;
var finish = 0;
var gs = level1 //initially, the game is at level1

//backgrounds of levs
var snowImg3, snowImg2, snowImg1;

//sprite
var santaAnimation, santaImg, santaSprite;

//maxSnow
var maxSnow = 100;
var snowfall =[];
var randomX, randomY;
var snow1;
var audio;

function preload() {
  snowImg1 = loadImage("snow3.jpg");
  snowImg2 = loadImage("snow2.jpg");
  snowImg3 = loadImage("snow1.jpg");
  audio = loadSound("jingles audio.mp3");

  santaAnimation = loadAnimation("spriteImg1.png","spriteImg2.png","spriteImg3.png","spriteImg4.png",
  "spriteImg5.png","spriteImg6.png","spriteImg7.png","spriteImg8.png");
  santaImg = loadAnimation("spriteImg1.png");
  
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  for (var i = 0; i <= maxSnow; i++) {
    snowfall.push(new Snow(random(0,width-1), random(0,height-1)))

  }
  
  santaSprite = createSprite((1000/2048)*width, (850/1000)*height, 25, 75);
  santaSprite.addAnimation("santa", santaImg);
  santaSprite.addAnimation("santaWalking", santaAnimation);
  santaSprite.scale = 0.75;

  console.log(snowfall);
  audio.play();
  if(audio) {
    userStartAudio();
  }
  
  
  

}

function draw() {
  Engine.update(engine);
  
  
  
    if(gs === level1) {
      background(snowImg3);
      
    }
    else if(gs === level2) {
      background(snowImg2);
    }
    else if(gs === level3) {
      background(snowImg1);
    }
    else if(gs === finish) {
      background(0);
      santaSprite.destroy();
      textAlign(CENTER);
      textSize((40/1000)*height);
      fill("white");
      stroke(2);
      text("I ate so much on the Christmas Day,", width/2, (100/1000)*height);
      text("I sank in the snow when I sat on my sleigh.", width/2, (150/1000)*height);
      text("Santa's raindeer Came to say", width/2, (200/1000)*height);
      text("I'll pull you out if you pay", width/2, (250/1000)*height);
      text("Santa muttered - I have no dough, I only have hay", width/2, (300/1000)*height);
      text("He replied - Well, hey man, then there you will stay!", width/2, (350/1000)*height);
      textSize((60/1000)*height);
      text("Merry Christmas!", width/2, (450/1000)*height);

    }
    

    //levels change
    if(gs === level1 && santaSprite.x < 0) {
      gs = level2;
      santaSprite.x = (508/2048)*width;
    }
    if(gs === level2 && santaSprite.x < 0) {
      gs = level3;
      santaSprite.x = (2000/2048)*width;
    }
    if(gs === level3 && santaSprite.x <= (435/2048)*width){
      gs = finish;
    }
    //console.log((santaSprite.x/2048)*width);
    movement();
    for(var a = 0; a <= maxSnow; a++) {
      snowfall[a].display();
      snowfall[a].updateDrops();
    }

    if(gs === level1) {
    push();
    textAlign(CENTER);
    rectMode(CENTER);
    fill("white");
    stroke("blue");
    strokeWeight(2);
    rect(677,94,350,70);
    textSize(20);
    fill("blue")
    text("Press left arrow to move",677,94)




    pop();
    }
  drawSprites();
  
}

function movement() {
  if(keyDown("left")) {
    santaSprite.changeAnimation("santaWalking");
    santaSprite.x = santaSprite.x - ((10/2048)*width);
  }
  else{
    santaSprite.changeAnimation("santa");
  }
}

