var makeGravityDancer = function(top, left) {
  makeVelocityDancer.call(this, top, left);
  this.mass = 1; //Math.random()*10;
  this.accelleration = {x:0, y:0};
  this.className = 'gravityDancer';
  this.oldStep = makeDancer.prototype.step;
  this.forceArray = [];
  var windForce = new WindForce(this);
  this.forceArray.push(windForce);
  this.netForce = {x:0, y:0};
  this.addForces();
};

makeGravityDancer.prototype.constructor = makeGravityDancer;
makeGravityDancer.prototype = Object.create(makeVelocityDancer.prototype);

makeGravityDancer.prototype.step = function() {
  this.oldStep();
  this.updateForces();
  this.sumForces();
  this.updateAccelleration();
  this.updateVelocity();
  this.updatePosition();
  // this.boundToScreen();
  this.updateStyle();
};


makeGravityDancer.prototype.updateVelocity = function() {
  this.velocity.x += this.accelleration.x * this.updateRate;
  this.velocity.y += this.accelleration.y * this.updateRate;
};

makeGravityDancer.prototype.addForces = function() {
  for (var i = 0; i < window.gravityDancers.length; i++) {
    var newForce = new Force(this, window.gravityDancers[i]);
    window.gravityDancers[i].forceArray.push(newForce);
    this.forceArray.push(negativeForce(newForce));
  }
};

makeGravityDancer.prototype.sumForces = function() {
  this.netForce = this.forceArray.reduce(function(sum, force){
    sum.x += force.x;
    sum.y += force.y;
    return sum;
  }, {x:0, y:0});
};
makeGravityDancer.prototype.updateAccelleration = function() {
  this.accelleration.x = this.netForce.x/this.mass;
  this.accelleration.y = this.netForce.y/this.mass; 
};

makeGravityDancer.prototype.updateForces = function() {
  for (var j = 0; j < this.forceArray.length; j++) {
    this.forceArray[j].update();
  }
};
