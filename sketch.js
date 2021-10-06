let g;
let g2;
let p;
let pf = [];
let whenToSend;
let yRnd;

function setup() {
  createCanvas(400, 400);
  g = new Ground(0,300, 600,100);
  g2 = new Ground(400,300,600,100);
  p = new Player(100, 250,50,50);
  yRnd = Math.floor(Math.random()* (height - 100));
  pf.push(new Platform(width, yRnd,30,10));
  whenToSend = 50;
}//end Setup

function draw() {
  background(0);
  whenToSend --;
  if(whenToSend < 0){
    yRnd = Math.floor(Math.random()* (height - 100));
    pf.push(new Platform(width, yRnd,30,10));
    whenToSend = 50;
  }
  for(var i = 0 ; i < pf.length ; i++){
    pf[i].display();
    pf[i].update();
  }
  
  p.display();
  p.update();
  g.display();   
  g2.display();
  if(p.x> 250){
    g.update();
    g2.update();
  }
  
 
  
}//end draw

