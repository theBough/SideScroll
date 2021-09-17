let img;
let gSpeed = -3;

function Ground(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  img =loadImage("sideScroll.png");
  this.display = function(){
    if(this.show){
      image(img, this.x, this.y);
    }//end if
  }//end function
  
  this.update = function(){
    this.x += gSpeed;
  }//end function
}//end Ground
