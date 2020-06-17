
//this test presents two vertical lines that
//drawn with one pixel wide dots that get further
//and further apart until the patient no longer
//sees any distortion

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

  //fill in the vertical line with increasing
  //spaces between one pixel-wide dots
  for(y=0;y<height;y=y+1+x){
    noStroke()
  fill(255)
ellipse(195,y,1,1)
}

for(y=0;y<height;y=y+1+x){
  noStroke()
fill(255)
ellipse(205,y,1,1)
}
//fixation dots

  ellipse (175, 200, 5, 1)
  ellipse (225, 200, 5, 1)

//note how many cycles in console log to give m-score
  console.log(x)

x=x+1
}
function mousePressed() {
   redraw(1);
 }
