var bg, bgimg , bgimg2;
var player, playerimg;
var pillarstart, pillarstartimg;
var pillargroup;
var pillar, pillarimg , pillarimg2 ,pillarimg3;
 
var gameState = "start" ;

var pillarGroup ;





function preload(){
//
bgimg = loadImage("bg1.jpg");
bgimg2 = loadImage("bg2.jpg");

playerimg = loadImage("player.png");

//pillarstartimg = loadImage("s.png");
pillarimg = loadImage("p1.png"); 
pillarimg2 = loadImage("p2.png");
pillarimg3 = loadImage("p3.png");
}


function setup(){
  createCanvas(1200,600);
  bg = createSprite(400,200); 
  bg.addImage(bgimg);
  bg.scale = 1.5 ;

  bg.x = bg.width /2;
 bg.velocityX = -6 ;
 //-(6 + 3*score/100);

 pillarGroup =  new Group();
}

function draw(){
background(0)

if (bg.x < 0){
  bg.x = bg.width/2;
}

spawnpillar();

drawSprites();

}


function spawnpillar() {
  if(frameCount % 90 === 0) {
    var pillar  = createSprite(1300,random(475,575),10,40);
    //pillar .debug = true;
    pillar.velocityX = -6 ;
    //-(6 + 3*score/100);
    
    //generate random pillar s
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: pillar .addImage(pillarimg);
              break;
      case 2: pillar .addImage(pillarimg2);
              break;
      case 3: pillar .addImage(pillarimg3);
              break;      
      default: break;
    }

    //assign scale and lifetime to the pillar            
    pillar .scale = 1.5;
    pillar .lifetime = 300;
    //add each pillar  to the group
   pillarGroup.add(pillar );

  }
}
