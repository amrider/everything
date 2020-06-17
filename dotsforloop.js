//builds a grid of dots!!!

function setup() {
  createCanvas (400,400)
  background (0)

  // put setup code here

  }

  function draw() {
    stroke(255)
    for(x=0;x<=width;x=x+20){
      for (y=0;y<=height;y=y+20){
      line(x, y, x, y)
}
}


  // put drawing code here
}
