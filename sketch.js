var C1, C2, C3;
var O1, O2, O3, O4;
var D1, D2, D3, D4; 
var V1, V2, V3;
var I1, I2, I3;
var boundary1, boundary2, boundary3, boundary4;
var player, playerImg;
var corona1, corona2, corona3, corona4, corona1Img, corona2Img, corona3Img, corona4Img;
var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
var mask1, mask2, mask3, mask4, maskImg;

function preload(){
  playerImg = loadImage("Doraemon 2.png");
  maskImg = loadImage("Mask.jpg");
}
function setup() {
  createCanvas(1900,800);

  player = createSprite(10, 10, 80, 80);
  player.shapeColor = "green"
  player.addImage("Tikki", playerImg);
  player.scale = 0.3;

  M1 = new Group();
  for(var i = 180; i < 1800; i = i + 110){
    mask1 = createSprite(i, 70, 50, 50);
    mask1.shapeColor = "blue";
    mask1.addImage("mask", maskImg);
    mask1.scale = 0.4;
    M1.add(mask1)
  }

  for(var i = 160; i < 750; i = i + 100){
    mask2 = createSprite(70, i, 50, 50);
    mask2.shapeColor = "blue";
    mask2.addImage("mask", maskImg);
    mask2.scale = 0.4;
  }

  for(var i = 70; i < 750; i = i + 100){
    mask3 = createSprite(1820, i, 50, 50);
    mask3.shapeColor = "blue";
    mask3.addImage("mask", maskImg);
    mask3.scale = 0.4;
  }

  for(var i = 70; i < 1850; i = i + 110){
    mask4 = createSprite(i, 750, 50, 50);
    mask4.shapeColor = "blue";
    mask4.addImage("mask", maskImg);
    mask4.scale = 0.4;  
  }

  C1 = createSprite(150, 350, 50, 400);
  C1.shapeColor = "red";
  C2 = createSprite(250, 150, 250, 50);
  C2.shapeColor = "red";
  C3 = createSprite(250, 550, 250, 50);
  C3.shapeColor = "red";

  O1 = createSprite(690, 350, 50, 400);
  O1.shapeColor = "red";
  O2 = createSprite(490, 350, 50, 400);
  O2.shapeColor = "red";
  O3 = createSprite(590, 150, 250, 20);
  O3.shapeColor = "lightPink";
  O4 = createSprite(590, 550, 250, 20);
  O4.shapeColor = "lightPink";

  V1 = createSprite(884, 350, 50, 450);
  V1.shapeColor = "red";
  V1.rotation = -16;
  V2 = createSprite(1004, 350, 50, 450);
  V2.shapeColor = "red";
  V2.rotation = 16;
  V3 = createSprite(944, 548, 50, 50);
  V3.shapeColor = "red";

  I1 = createSprite(1304, 350, 50, 400);
  I1.shapeColor = "red";
  I2 = createSprite(1300, 165, 250, 50);
  I2.shapeColor = "red";
  I3 = createSprite(1300, 545, 250, 50);
  I3.shapeColor = "red";
 
  D1 = createSprite(1554, 350, 50, 450);
  D1.shapeColor = "red";
  D2 = createSprite(1634, 207, 50, 200);
  D2.shapeColor = "red";
  D2.rotation = -50;
  D3 = createSprite(1704, 351, 50, 196);
  D3.shapeColor = "red";
  D4 = createSprite(1634, 494, 50, 200);
  D4.shapeColor = "red";
  D4.rotation = 51;
  
  boundary1 = createSprite(1000, 10, 2100, 20);
  boundary1.shapeColor = "yellow";
  boundary2 = createSprite(10, 300, 20, 1000);
  boundary2.shapeColor = "yellow";
  boundary3 = createSprite(1000, 790, 2100, 20);
  boundary3.shapeColor = "yellow";
  boundary2 = createSprite(1890, 300, 20, 1000);
  boundary2.shapeColor = "yellow";

  corona1 = createSprite(410, 340, 40, 50);
  corona1.shapeColor = "orange";
  corona1.velocityY = +8;
  
  corona2 = createSprite(770, 340, 40, 50);
  corona2.shapeColor = "orange";
  corona2.velocityY = -8;

  corona3 = createSprite(1140, 340, 40, 50);
  corona3.shapeColor = "orange";
  corona3.velocityY = +8;

  corona4 = createSprite(1470, 340, 40, 50);
  corona4.shapeColor = "orange";
  corona4.velocityY = -8;
  
  //corona5 = createSprite(1770, 340, 40, 50);
  //corona5.shapeColor = "orange";

  Group1 = new Group();
  Group1.add(boundary1);

  Group2 = new Group();
  Group2.add(boundary3);

}

function draw() {
  background("black");
  if(keyDown("left")){
    player.x = player.x - 3;
  } 
  if(keyDown("right")){
    player.x = player.x + 3;
  } 
  if(keyDown("up")){
    player.y = player.y - 3;
  } 
  if(keyDown("down")){
    player.y = player.y + 3;
  } 

  if(player.isTouching(mask1)){
    mask1.destroy();
  }

  corona1.bounceOff(Group2);
  corona1.bounceOff(Group1);

  corona2.bounceOff(Group1);
  corona2.bounceOff(Group2);

  corona3.bounceOff(Group1);
  corona3.bounceOff(Group2);

  corona4.bounceOff(Group1);
  corona4.bounceOff(Group2);

  drawSprites();
}

