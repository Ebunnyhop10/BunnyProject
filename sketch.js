var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  leaf2Img = loadImage("redImage.png")
}

function setup(){

  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,399,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  //apples();
  leaf();
  //leaf2()
  
  drawSprites();
  
  

}




function leaf(){

    var selectSprites = Math.round(random(1,2))

    if(frameCount % 80==0){
      if (selectSprites == 1){
        var apples = createSprite(200, 0, 10,10);
        apples.velocityY = 4;
        apples.addImage(appleImg);
        apples.scale = 0.05
        apples.x = Math.round(random(30,370));
        apples.depth = rabbit.depth;
        rabbit.depth = rabbit.depth+1; 
      }
      else{
        var leaves2 = createSprite(200, 0, 10,10);
        leaves2.velocityY = 2;
        leaves2.addImage(leaf2Img);
        leaves2.scale = 0.05;
        leaves2.x = Math.round(random(30,370));
        leaves2.depth = rabbit.depth;
        rabbit.depth = rabbit.depth+1; 
      }
        if (frameCount % 50 == 0){
        var leaves = createSprite(200, 0, 10,10);
        leaves.velocityY = 1;
        leaves.addImage(leafImg);
        leaves.scale = 0.05;
        leaves.x = Math.round(random(30,370));
        leaves.depth = rabbit.depth;
        rabbit.depth = rabbit.depth+1;  
      }
      
    }


  
  

  
    
    
  } 
