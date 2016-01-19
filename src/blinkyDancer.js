var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.oldStep = makeDancer.prototype.step;
};

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};