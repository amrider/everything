let pg;//for the grid overlay
function setup() {
  createCanvas(400, 400);
  pg = createGraphics(400, 400);//for the grid overlay
}
function draw() {//this whole function is the grid overlay
  //background(0,0,255);
  //noLoop()
  pg.background(0, 0, 0, 0);
  //pg.noStroke();
  pg.stroke(0)//color of the lines
  pg.strokeWeight(7)//disappears if <7
  pg.fill(0)//color of dots and fixation dot
  pg.ellipse(width/2, height/2, 2, 2);//location of dots
  //pg.stroke()
  //pg.line(width/2, 0, width/2, height)
  //pg.line(0, height/2, width, height/2)
  pg.line(width, 0, width, height)
  pg.line(0, height, width, height)
  pg.line(0, 0, 0, height)
  pg.line(0, 0, width, 0)

  for(x=0;x<width;x=x+20){
    for(y=0;y<height;y=y+20){
    line(x, y, 20, 20)
}
}
  image(pg, 0, 0);
  //image(pg, 100, 70, 50, 50);//(pg, x, y, size, size)
  for(x=0;x<width;x=x+20){
    for(y=0;y<height;y=y+20){
    image(pg, x, y, 20, 20)
}
}
}
