var Force = function(to, from) {
  this.to = to;
  this.from = from;
  this.x = 0;
  this.y = 0;
  this.r = 0;
  this.mag = 0;
  this.theta = 0;
};

var gravity = 5;

var pow = Math.pow;
var sqrt = Math.sqrt;
var atan2 = Math.atan2;
var cos = Math.cos;
var sin = Math.sin;

Force.prototype.update = function() {
  this.r = sqrt(pow(this.to.top - this.from.top, 2) + pow(this.to.left - this.from.left, 2));
  if (this.r < 300) { 
    this.r = 300;
  }
  this.mag = gravity*this.to.mass*this.from.mass/pow(this.r, 2);
  this.theta = atan2((this.to.left - this.from.left), (this.to.top - this.from.top));
  this.x = this.mag * cos(this.theta);
  this.y = this.mag * sin(this.theta);
};

var negativeForce = function(positiveForce) {
  positiveForce.update();
  var oppositeForce = new Force(positiveForce.from, positiveForce.to);

  // var oppositeForce = $.extend({}, positiveForce);
  // // oppositeForce.prototype.update = Force.prototype.update;
  // var tempForce = oppositeForce.to;
  // oppositeForce.to = oppositeForce.from;
  // oppositeForce.from = tempForce;
  // oppositeForce.x *= -1;
  // oppositeForce.y *= -1;
  return oppositeForce;
};

var updateForces = function() {
  var currGravDancer;
  for (var i = 0; i < window.gravityDancers.length; i++) {
    currGravDancer = window.gravityDancers[i];
    for (var j = 0; j < currGravDancer.forceArray.length; j++) {
      currGravDancer.forceArray[j].update();
    }
  }
};