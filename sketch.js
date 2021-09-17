let g;


function setup() {
  createCanvas(400, 400);
  g = new Ground(0,300, 400,100);
  
}

function draw() {
  background(50);
  g.display();
  g.update();
}
