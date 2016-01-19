var makeTinyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.oldStep = makeDancer.prototype.step;
};

makeTinyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
  var styleSettings = {
    //color: 'blue',
    border: '2px solid blue'
  };
  this.$node.css(styleSettings);
};
