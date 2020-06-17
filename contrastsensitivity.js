//This test starts with a grid that slowly
//disappears with each mousepress
//The console log shows the actual value of the
//lines with each click to give a score of contrast
//sensitivity... I would recommend starting with startx
//at 15 or 20 and let sensitivityx start at 0.5 or 0.25
//When the grid is gone look at the console for the score
let startx = 15//starting gray scale (0-255)
let sensitivityx = 0.5//steps of gray subtracted with each click
let testx = 0
let x = 0

function setup() {
  createCanvas(400,400)
  background(0);
  noLoop();
}

function draw() {
  stroke(startx-testx)//color of lines
  strokeWeight(1)//width of lines
  for(x=0;x<=width;x=x+20){//spacing of lines
    for (y=0;y<=height;y=y+20){
    line(x, 0, x, height)
    line(0, y, width, y)

    fill(startx-testx)//fixation dot changes with clicks
    ellipse(width/2, height/2, 5, 5)//fixation dot

}
}
}
function mousePressed() {
   redraw(1);
   console.log(startx-testx);//displayed gray 0-255...
 x=x+1
 testx=testx+1*sensitivityx//for the next redraw
 }
