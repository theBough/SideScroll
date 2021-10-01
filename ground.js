let img;
let gSpeed = -1;

function Ground(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  //this is the name of your ground picture.
  img =loadImage("objects/bricksMario.png");
  this.display = function(){
    if(this.show){
      image(img, this.x, this.y, this.w,this.h);
    }//end if
  }//end function
  
  this.update = function(){
    this.x += gSpeed;
    if (this.x < -399){
      this.x = 400;
    }
  }//end function
}//end Ground
