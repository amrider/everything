//builds a grid of rectangles and fills
//them with color
//

function setup() {
  createCanvas (400,400)
  background (127)
  // put setup code here
}
function draw() {
  for(x=0;x<=width;x=x+40){
    for (y=0;y<=height;y=y+40){
    //ellipse (x, y, 40, 40)
    fill (x/2,0,y/2)
    rect(x, y, 40, 40)


    }
  }




  // put drawing code here
}
