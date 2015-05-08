function Score(){
  this.score = 0;
}

Score.prototype = {
  draw: function(ctx){
    ctx.font="25px Verdana";
    ctx.fillText("SCORE: " + this.score,20, 20);
  }
}
