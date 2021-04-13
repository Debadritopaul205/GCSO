var wall,car;
var speed,weight;

function setup() {
  createCanvas(1500,400);
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(1300,200,60,100);
 

 speed=random(55,90)
 weight=random(400,1500);

 car.velocityX=speed;
}

function draw() {
  background("black");
 
  console.log(car.shapeColor)
  

  if(wall.x-car.x <(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    
    if(deformation===180 || deformation>180){
      car.shapeColor=color("yellow");
      wall.shapeColor=color("white");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color("green")
      wall.shapeColor=color("white")
    }
    if(deformation<100){
      car.shapeColor=color("red")
      wall.shapeColor=color("white")
    }
    if(deformation>185){
      deformation=184
    }
  }
  

  drawSprites();
}