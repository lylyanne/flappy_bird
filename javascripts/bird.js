var GRAVITY = 0.2;
var BIRD_COLOR = "yellow";
var FLAP_VEL = -5;

function Bird(x, y) {
  this.x = x;
  this.y = y;
  this.vel = 0;
  this.img = new Image();
  this.img.src = "bird.png";
  this.frameTick = 0;
}

Bird.prototype = {
  move: function () {
    if (this.y <= 0 ) {
      this.y = 0;
    }else if (this.y > 440) {
      this.y = 440;
      this.vel = this.vel * -1;
    }
      this.y += this.vel;
      this.vel += GRAVITY;

  },
  draw: function(ctx) {
    var frame = this.frameTick % 5;
    var x = frame * 60;
    var y = 0;
    if (this.frameTick > 9) {
      y = 120;
    } else if (this.frameTick > 4) {
      y = 60;
    }

    ctx.drawImage(
        this.img,        // the image of the sprite sheet
        x, y,60,60, // source coordinates      (x,y,w,h)
        this.x,this.y,50,50 // destination coordinates (x,y,w,h)
        );
    this.frameTick++;
    if(this.frameTick === 14) { this.frameTick = 0; }
  },

  tick: function(ctx) {
    this.move();
    this.draw(ctx);
  },

  flap: function(){
    this.vel = FLAP_VEL;
  },

  getBounds: function() {
    return {
      topLeft: [this.x + 10, this.y + 10],
      bottomRight: [this.x + 35, this.y + 35]
    }
  }
};
