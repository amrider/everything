let x = 0
function setup() {
  createCanvas(400, 400);
  background(0);
  noLoop();
}

function draw() {
  background(0)
  fill (255)
  ellipse(200,200,10,10)

  for(y=0;y<height;y=y+20){stroke(x*2)
  line(0,y,width,y)
  fill(x)
ellipse(200,y,5,5)
}

  noStroke()
  fill(x*2)
  ellipse(random(400), random(400), 30, 30)
  console.log(x);
x=x+1


}
function mousePressed() {
   redraw(1);
 }
