var BlackHole = function(top, left) {
  makeGravityDancer.call(this, top, left);
  this.velocity = {x:0, y:0};
  this.mass = 200;
  this.colorString = '50px solid #111';
  this.className = 'blackHole';
  this.$node.addClass('blackHoleStyle')

};

BlackHole.prototype = Object.create(makeGravityDancer.prototype);
BlackHole.prototype.constructor = BlackHole;

