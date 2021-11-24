var hr,min,sec;
var secAngle,minAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  
  translate(400,200);
  hr = hour();
  min = minute();
  sec = second(); 
  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr,0,60,0,360)
  push();
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(3)
  line(0,0,150,0)
  pop();

//minute
  push();
  rotate(minAngle)
  stroke(0,0,120)
  strokeWeight(5)
  line(0,0,125,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(0,180,0)
  strokeWeight(6)
  line(0,0,75,0)
  pop();
  push();
  stroke(245, 1, 0)
  strokeWeight(9)
  noFill();
  arc(0, 0, 315, 315, 100,secAngle);
  pop();
  push();
  stroke(0,0,120)
  strokeWeight(9)
  noFill();
  arc(0, 0, 300, 300, 100,minAngle);
  pop();
  push();
  stroke(0,180,0)
  strokeWeight(9    )
  noFill();
  arc(0, 0, 280, 280, 100,hrAngle);
  pop();
  drawSprites();
}