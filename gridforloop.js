//builds a grid of lines!!!

function setup() {
  createCanvas (400,400)
  background (0)

  // put setup code here

  }

  function draw() {
    stroke(255)//color of lines
    strokeWeight(0.5)//width of lines
    for(x=0;x<=width;x=x+20){//spacing of lines
      for (y=0;y<=height;y=y+20){
      line(x, 0, x, height)
      line(0, y, width, y)

}
}


  // put drawing code here
}
