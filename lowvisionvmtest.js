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
  for(y=0;y<height;y=y+1+x){
    noStroke()
  fill(255)
ellipse(200,y,5,5)
}
  ellipse (175, 200, 10, 3)
  ellipse (225, 200, 10, 3)

  console.log(x);

x=x+1
}
function mousePressed() {
   redraw(1);
 }
