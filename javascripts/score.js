function Score(){
  this.score = 0;
}

Score.prototype = {
  draw: function(ctx){
    ctx.fillStyle = "red";
    ctx.font="18px Verdana";
    ctx.fillText("Score: " + this.score, 20, 20);
  }
}
