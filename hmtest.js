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
  fill(255)
ellipse(mtestx,200,2,2)
}
  ellipse (200, 200, 5, 5)

  noStroke()
  fill(x*2)
  ellipse(random(400), random(400), 30, 30)
  console.log(x);

x=x+1
}
function mousePressed() {
   redraw(1);
 }
