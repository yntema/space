var makeGravityDancer = function(top, left) {
  makeVelocityDancer.call(this, top, left);
  this.mass = Math.random()*10;
  this.accelleration = {x:0, y:0};
  this.className = 'gravityDancer';
  this.oldStep = makeDancer.prototype.step;
};

makeGravityDancer.prototype.constructor = makeGravityDancer;
makeGravityDancer.prototype = Object.create(makeVelocityDancer.prototype);

makeGravityDancer.prototype.step = function() {
  this.oldStep();
  // this.updateAccelleration();
  this.updateVelocity();
  this.updatePosition();
  this.boundToScreen();
  this.updateStyle();
};


makeGravityDancer.prototype.updateVelocity = function() {
  this.velocity.x += this.accelleration.x * this.updateRate;
  this.velocity.y += this.accelleration.y * this.updateRate;
};


