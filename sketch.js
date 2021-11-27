var bgImg,bg
var topGround,bottomGround
var balloon,balloonImg
var obstacleTop,obstop1,obstop2
var obstacleBottom,obsbottom1,obsbottom2,obsbottom3

function preload() {
  bgImg=loadImage("sprites/bg.png")
  balloonImg=loadAnimation("sprites/balloon1.png","sprites/balloon2.png","sprites/balloon3.png")

    obstop1=loadImage("sprites/obsTop1.png")
    obstop2=loadImage("sprites/obsTop2.png")
    obsbottom1=loadImage("sprites/obsBottom1.png")
    obsbottom2=loadImage("sprites/obsBottom2.png")
    obsbottom3=loadImage("sprites/obsBottom3.png")


}

function setup(){
   bg=createSprite(170,400)
   bg.addImage(bgImg)
   bg.scale=1.1

   topGround=createSprite(200,10,700,20)
   topGround.visible=false

   bottomGround=createSprite(200,390,700,20)
   bottomGround.visible=false

   balloon=createSprite(100,200,20,50)
   balloon.addAnimation("balloon",balloonImg)
   balloon.scale=0.2
}

function draw(){
   background("black")
 
    if(keyDown("space")){

        balloon.velocityY=-6

    }

    balloon.velocityY=balloon.velocityY+2

    bar()
   drawSprites()

  spawnObstaclesTop()

}

function spawnObstaclesTop(){

   if(World.frameCount%60===0){
       obstacleTop=createSprite(400,50,50,50)
    obstacleTop.velocityX=-4
    obstacleTop.scale=0.1
    obstacleTop.y=Math.round(random(10,100))
    var rand=Math.round(random(1,2))
    switch(rand){
        case 1:obstacleTop.addImage(obstop1)
        break;

        case 2:obstacleTop.addImage(obstop2)
        break;
        default:break;
    }

    obstacleTop.lifetime=100
    //balloon.depth=baloon.depth+1




   }
}

function bar(){

    if(World.frameCount%60===0){

        var bar=createSprite(400,200,10,400)
        bar.velocityX=-6 
        bar.depth=balloon.depth
        bar.lifetime=70
        bar.visible=false

    }

}




/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/