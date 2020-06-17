let x = 0
let mtestx = 0
let mtestx2 = 0

function setup() {
  createCanvas(400, 400);
  background(0);
  noLoop();
}

function draw() {
  background(0)
  fill (255)
  for(mtestx=0;mtestx<width;mtestx=mtestx+1+x){
    noStroke()
  fill(255)
ellipse(mtestx,200,5,5)
}
  ellipse (200, 225, 3, 10)
  ellipse (200, 175, 3, 10)

  console.log(x);

x=x+1
}
function mousePressed() {
   redraw(1);
 }
