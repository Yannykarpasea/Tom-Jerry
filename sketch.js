var canvas,bg,together,tom,tomimage1,tomimage2,jerry,jerryimage1,jerryimage2
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    tomimage1 = loadAnimation("images/cat1.png")
    tomimage2 = loadAnimation("images/cat2.png","images/cat3.pmg")
    tomimage3 = loadAnimation("images/cat4.png")
    jerryimage1 = loadAnimation("images/mouse1.png")
    jerryimage2  = loadAnimation("images/mouse2.png","images/mouse3.pmg")
    jerryimage3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    canvas = createCanvas(1000,800)
    tom = createSprite(870,600)
    tom.addAnimation("tomsleeping",tomimage1)
    tom.scale = 0.2
    jerry = createSprite(200,600)
    jerry.addAnimation("jerrystamding",jerryimage1)
    jerry.scale = 0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    
if(tom.x - jerry.x < (tom.width - jerry.width)/2) { 
    tom.velocityX=0; 
    tom.addAnimation("tomLastImage", tomimage3);
     tom.x =300;
     tom.scale=0.2; tom.changeAnimation("tomLastImage");
      jerry.addAnimation("jerryLastImage", jerryimage3);
       jerry.scale=0.15; 
       jerry.changeAnimation("jerryLastImage");
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
       tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomimage3);
         tom.x =300;
          tom.scale=0.2;
           tom.changeAnimation("tomLastImage");
            jerry.addAnimation("jerryLastImage", jerryimage3); 
            jerry.scale=0.15; 
            jerry.changeAnimation("jerryLastImage"); }


        }
