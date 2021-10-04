let imgPlayer;
let imgJump;
function Player(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  this.yVelocity = 0;
  this.jumpStrength = 30;
  this.gravity = 0.9;
  //this is the name of your ground picture.
  imgPlayer = loadImage("mario2.gif");
  //make sure the filename (the part in Green) matches
  //the name of your file, that you uploaded.
  imgJump = loadImage("jump.jpg");
  this.display = function () {
    if (this.show) {
      if(this.isOnGround()){
        image(imgPlayer, this.x, this.y, this.w, this.h);
      }else{
        image(imgJump, this.x, this.y, this.w, this.h);
      }
      
    } //end if
  }; //end function

  this.update = function () {
    this.yVelocity += this.gravity;
    this.yVelocity *= 0.9;
    this.y += this.yVelocity;
    if(this.y + this.h > g.y){
      this.y = g.y - this.h;
      this.yVelocity = 0;
    }//end if
    
    if (keyIsDown(RIGHT_ARROW) && this.x <251) {
      this.x += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if(keyIsDown(32) && this.isOnGround()){
      this.yVelocity += -this.jumpStrength;
    }//end if
  }; //end function
  this.isOnGround = function(){
      return this.y == g.y - this.h;
  }//end isOnGround
} //end Ground
