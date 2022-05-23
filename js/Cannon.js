class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonbase = loadImage("assets/cannon_base.png");
    this.cannon= loadImage("assets/CANON.png")
  }
  display() {
    // change the angle in the upward direction when the left arrow key was pressed
    if(keyIsDown(LEFT_ARROW)&& this.angle> -1.24){
      this.angle-=0.01;
    
    }
   //  changed the angle in the downward direction when the right arrow key was pressed
   if(keyIsDown(RIGHT_ARROW) && this.angle < 0.24){
     this.angle +=0.01;  
     console.log(this.angle)
   }
    
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER  );
    image(this.cannon,0,0, this.width, this.height);

    pop();
    image(this.cannonbase,50,20,230,200);

  }
}
