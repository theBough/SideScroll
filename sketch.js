let g;
let g2;
let p;

function setup() {
  createCanvas(400, 400);
  g = new Ground(0,300, 600,100);
  g2 = new Ground(400,300,600,100);
  p = new Player(100, 100,50,50);
}

function draw() {
  background(0);
  p.display();
  g.display();
  g2.display();
  g.update();
  g2.update();
}
