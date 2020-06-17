//two horizontal lines are presented
//each mousepress spreads the pixels in the
//lines further apart until the patient
//no longer notes distortion


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
//drawing two horizontal lines

  for(mtestx=0;mtestx<width;mtestx=mtestx+1+x){
    noStroke()
  fill(255)
ellipse(mtestx,195,1,1)
}

for(mtestx=0;mtestx<width;mtestx=mtestx+1+x){
  noStroke()
fill(255)
ellipse(mtestx,205,1,1)
}
//fixation dashes

  ellipse (200, 190, 1, 5)
  ellipse (200, 210, 1, 5)

  console.log(x);

x=x+1
}
function mousePressed() {
   redraw(1);
 }
