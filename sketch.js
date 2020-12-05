var fixedrect,movingrect;




function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400, 200, 50, 30);
  movingrect.shapeColor="Green";
 fixedrect= createSprite(600,400,50,80);
 fixedrect.shapeColor="GREEN";
movingrect.debug=true;
fixedrect.debug=true;
}

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}


  drawSprites();
}