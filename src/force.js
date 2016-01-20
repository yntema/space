var Force = function(to, from) {
  this.to = to;
  this.from = from;
  this.x = 0;
  this.y = 0;
  this.r = 0;
  this.mag = 0;
  this.theta = 0;
};

var gravity = 100;

var pow = Math.pow;
var sqrt = Math.sqrt;
var atan = Math.atan;
var cos = Math.cos;
var sin = Math.sin;

Force.prototype.update = function() {
  console.log('update');
  this.r = sqrt(pow(this.to.top - this.from.top, 2) + pow(this.to.left - this.from.left, 2));
  this.mag = gravity*this.to.mass*this.from.mass/pow(r, 2);
  this.theta = atan((this.to.top - this.from.top)/(this.to.left - this.from.left));
  this.x = this.mag * cos(this.theta);
  this.y = this.mag * sin(this.theta);
};

var negativeForce = function(positiveForce) {
  var oppositeForce = $.extend({}, positiveForce);
  console.assert(typeof(oppositeForce.update) === 'function');
  // oppositeForce.prototype.update = Force.prototype.update;
  var tempForce = oppositeForce.to;
  oppositeForce.to = oppositeForce.from;
  oppositeForce.from = tempForce;
  oppositeForce.x *= -1;
  oppositeForce.y *= -1;
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