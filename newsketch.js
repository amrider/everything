let pg;
function setup() {
  createCanvas(400, 400);
  pg = createGraphics(400, 400);
}
function draw() {
  background(200);
  pg.background(100);
  pg.noStroke();
  pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);
  image(pg, 50, 50);
  image(pg, 0, 0, 50, 50);
}




  // put drawing code here
}
