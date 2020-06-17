let x = 0;
let transx = 0
let transy = 0
let fillx = 0

function setup() {
  createCanvas(400, 400);
  //noLoop();
  frameRate(10);
  rectMode(CENTER);
  background(0, 0, 255);//moving this into the loop makes each test
  //disappear each time effecively resetting the field, but also
  //causing the automapping to disappear... not sure which way to go here
  fill(255)
  //ellipse(width/2, height/2, 5,5)

}

function draw() {

  noStroke()
  fill(0+fillx, 0+fillx, 255-fillx)//the color of the target is here
  let step = frameCount % 20;
  let angle = map(step, 0, 20, 0, TWO_PI);
  let cos_a = cos(angle);
  let sin_a = sin(angle);
  //ellipse(width/2, height/2, 5, 5)//centers the fixation target
  translate(transx, transy);//the x,y location of the rectangle
  // Equivalent to rotate(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  rect(0, 0, 40, 40);//the size of the rectangle is here
  //adding +fillx to the starting size makes the target grow!!!
  fillx = fillx+10
}

function mousePressed() {
  loop();

  transx = random(0,width)
  transy = random(0,height)
  fillx = 0
}
function mouseReleased() {
  noLoop();
  console.log("fillx =" +fillx)
  console.log("x = "+transx)
  console.log("y = "+transy);

  if (fillx > 60) {
    //fill(255)
    //ellipse(transx, transy, 50, 50)
  console.log("SCOTOMA!"+ transx ,transy);
} else {
  console.log ("ok")}

}
