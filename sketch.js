let g;
let g2;
let p;
let pf = [];
let whenToSend;
let yRnd;
let activePlatform = 0

function setup() {
  createCanvas(400, 400);
  g = new Ground(0, 300, 600, 100);
  g2 = new Ground(400, 300, 600, 100);
  p = new Player(100, 150, 50, 50);
  yRnd = Math.floor(Math.random() * (height - 100));
  pf.push(new Platform(width, yRnd, 30, 10));
  whenToSend = 500;
} //end Setup

function draw() {
  background(0);
  whenToSend--;
  if (whenToSend < 0) {
    yRnd = Math.floor(Math.random() * (height - 100));
    pf.push(new Platform(width, yRnd, 30, 10));
    whenToSend = 50;
  }
  for (var i = 0; i < pf.length; i++) {
    pf[i].display();
    pf[i].update();
    if (
      p.x < pf[i].x + pf[i].w &&
      p.x + p.w > pf[i].x &&
      p.y > pf[i].y - p.h *2 &&
      p.y + p.h < pf[i].y + 5 
    ) {
      p.ground = pf[i].y - p.h;
      activePlatform = i;
      p.x -= 1;
    } else {
      // p.ground = 250
    }//end if
  }//end loop

 
  p.display();
  p.update();
  g.display();
  g2.display();
  if (p.x > 250) {
    g.update();
    g2.update();
  }
  
  if(!(onPlatForm(activePlatform))){
    p.ground = g.y - p.h;
  }
} //end draw

//This function is gonna check to see if Player is
//on a platform.
//It will return TRUE if the player is.
//And return false once the Player is no longer on Platform.
function onPlatForm(thisPf){
  return( p.x < thisPf.x + thisPf.w &&
      p.x + p.w > thisPf.x &&
      p.y < thisPf.y &&
      p.y + p.h > thisPf.y)
}
