let imgPlayer;
function Player(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  this.yVelocity = 0;
  this.jumpStrength = 10;
  this.gravity = 0.9;
  //this is the name of your ground picture.
  imgPlayer = loadImage("mario2.gif");
  this.display = function () {
    if (this.show) {
      image(imgPlayer, this.x, this.y, this.w, this.h);
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
    
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if(keyIsDown(32)){
      this.yVelocity += -this.jumpStrength;
    }//end if
  }; //end function
} //end Ground
