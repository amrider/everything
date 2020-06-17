// draw a spinning box
// with width, height and depth of 50
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50, 70, 30,3, 3);
}
