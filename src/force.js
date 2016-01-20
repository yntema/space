var Force = function(from, to) {
  this.x = 0;
  this.y = 0;
  this.r = 0;
  this.mag = 0;
  this.theta = 0;
};

var gravity = 1;

var pow = Math.pow;
var sqrt = Math.sqrt;
var atan = Math.atan;
var cos = Math.cos;
var sin = Math.sin;

Force.prototype.update = function() {
  this.r = sqrt(pow(to.top - from.top, 2) + pow(to.left - from.left, 2));
  this.mag = gravity*to.mass*from.mass/pow(r, 2);
  this.theta = atan((to.top - from.top)/(to.left - from.left));
  this.x = this.mag * cos(this.theta);
  this.y = this.mag * sin(this.theta);
};
