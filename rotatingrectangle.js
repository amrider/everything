function setup() {
  frameRate(10);
  rectMode(CENTER);
  createCanvas(400, 400)
}

function draw() {
  let step = frameCount % 20;
  let angle = map(step, 0, 20, 0, TWO_PI);
  let cos_a = cos(angle);
  let sin_a = sin(angle);
  background(200);
  translate(200, 200);//the x,y location of the rectangle
  // Equivalent to rotate(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  rect(0, 0, 20, 20);//the size of the rectangle is here
}
