let g;
let g2;
let p;

function setup() {
  createCanvas(400, 400);
  g = new Ground(0,300, 600,100);
  g2 = new Ground(400,300,600,100);
  p = new Player(100, 250,50,50);
}//end Setup

function draw() {
  background(0);
  p.display();
  p.update();
  g.display();   
  g2.display();
  if(p.x> 250){
    g.update();
    g2.update();
  }
  
 
  
}//end draw

