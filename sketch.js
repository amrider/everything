//builds a grid of rectangles and fills
//them with color
//

function setup() {
  createCanvas (400,400)
  background (0)

  // put setup code here

  }

  function draw() {
    for(x=0;x<=width;x=x+20){
      for (y=0;y<=height;y=y+20){
      //ellipse (x, y, 40, 40)
      fill (random(0,200))
      rect(x, y, 20, 20)
  //if x>width, (x=x*-1)
}
}


  // put drawing code here
}
