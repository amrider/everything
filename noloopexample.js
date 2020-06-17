let x = 0;
function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(204);
  x = x + 0.1;
  if (x > width) {
    x = 0;
  }
  line(x, 0, x, height);
  ellipse(x, random(0,100), 30, 30)
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
