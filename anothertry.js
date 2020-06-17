let x = 0;
function setup() {
   createCanvas(400, 400);
   noLoop();
 }
function draw() {
   background(204);
   line(x, 0, x, height);
   rect(x, 20, 20, 20)
 }
function mousePressed() {
   x += 1;
   redraw();
 }
