var makeVelocityDancer = function(top, left) {
  this.updateRate = 10;
  makeDancer.call(this, top, left, this.updateRate);
  this.oldStep = makeDancer.prototype.step;
  this.vMax = 5;
  this.velocity = {x:Math.random()*this.vMax-this.vMax/2,
                   y:Math.random()*this.vMax-this.vMax/2};
  this.top = +this.$node.css('top').slice(0,-2);
  this.left = +this.$node.css('left').slice(0,-2);
  this.colorString = '10px solid ' + this.velocityToColor();
  this.$node.css({border: this.colorString});
  this.className = 'velocityDancer';
};

makeVelocityDancer.prototype.step = function() {
  this.oldStep();
  this.updatePosition();
  this.boundToScreen();
  this.updateStyle();
};

makeVelocityDancer.prototype.velocityToColor = function() {
  var colorString = '#F';
  colorString += Math.floor(this.velocity.x/this.vMax*16+8).toString(16);
  colorString += Math.floor(this.velocity.y/this.vMax*16+8).toString(16);
  return colorString;
};

makeVelocityDancer.prototype.updateStyle = function() {
  this.colorString = '10px solid ' + this.velocityToColor();
  var styleSettings = {
    top: this.top,
    left: this.left,
    border: this.colorString,
  };
  this.$node.css(styleSettings);
};

makeVelocityDancer.prototype.updatePosition = function() {
  this.top += this.velocity.y * this.updateRate;
  this.left += this.velocity.x * this.updateRate;
};

makeVelocityDancer.prototype.boundToScreen = function() {
  this.top %= $('body').height();
  this.left %= $('body').width();
};