var ghost;
var gamestate = "play";
var rain;
var plane;
var planegroup;

function preload(){
ghostImage = loadImage("ghost.png");
rainImage = loadImage("rain.jpg");
planeImage = loadImage("cartoonplane.png");

}

function setup() {
   createCanvas(600,600);

   
    bg = createSprite(200,300);
    bg.addImage(rainImage);
    bg.scale = 5;
    bg.velocityX = -5;

    ghost = createSprite(200,300);
    ghost.addImage(ghostImage);
    ghost.scale = 0.5;
    ghost.setCollider("rectangle",0,0,200,400);
    ghost.debug = false;
    

     planegroup =  createGroup();

     

    
    
}

function draw() {
background("white")
     


if(gamestate === "play"){
    if(keyIsDown(UP_ARROW)){
        ghost.velocityY = -10
    }
    
    if(keyIsDown(DOWN_ARROW)){
        ghost.velocityY = 10
    }
    
    
    if(bg.x < 0 ){
    bg.x = 300;
    }
    
    spawnplane();
    
    if(ghost.isTouching(planegroup)){
        gamestate = "end"
        textSize(40);
        text("game over",100,300);
        planegroup.setVelocityXEach(0);
        ghost.velocityY = 0;
        bg.velocityX = 0;


    }
}



 drawSprites();
}

function spawnplane(){
    if(frameCount %100 === 0){
        plane = createSprite(600,Math.round(random(50,550)));
        plane.addImage(planeImage);
        plane.scale = 0.5;

        plane.velocityX = -10;
        plane.setCollider("rectangle",0,0,300,200);
        plane.debug = false;

        planegroup.add(plane);


        
    }
}

