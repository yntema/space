var makeGravityDancer = function(top, left) {
  makeVelocityDancer.call(this, top, left);
  this.mass = Math.random()*10;
  // this.oldStep = makeDancer.prototype.step; //???
  this.className = 'gravityDancer';
};

makeGravityDancer.prototype = Object.create(makeVelocityDancer.prototype);
makeGravityDancer.prototype.constructor = makeGravityDancer;

makeGravityDancer.prototype.step = function() {
  this.oldStep();
  this.top += this.velocity.x * this.updateRate;
  this.left += this.velocity.y * this.updateRate;
  this.top %= $('body').height();
  this.left %= $('body').width();
  
  this.colorString = '10px solid ' + this.velocityToColor();
  var styleSettings = {
    top: this.top,
    left: this.left,
    border: this.colorString,
  };
  this.$node.css(styleSettings);
};

makeGravityDancer.prototype.velocityToColor = function() {
  var colorString = '#F';
  colorString += Math.floor(this.velocity.x/this.vMax*16+8).toString(16);
  colorString += Math.floor(this.velocity.y/this.vMax*16+8).toString(16);
  return colorString;
};
