let imgPlayer;
function Player(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  //this is the name of your ground picture.
  imgPlayer =loadImage("mario2.gif");
  this.display = function(){
    if(this.show){
      image(imgPlayer, this.x, this.y,this.w,this.h);
    }//end if
  }//end function
  
  this.update = function(){
   
  }//end function
}//end Ground