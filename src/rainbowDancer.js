var makeRainbowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.oldStep = makeDancer.prototype.step;
};

makeRainbowDancer.prototype.step = function() {
  this.oldStep();
  colorString = this.hexHash();
  colorString = '10px solid ' + colorString;
  var styleSettings = {
    border: colorString,
  };
  this.$node.css(styleSettings);
};

makeRainbowDancer.prototype.hexHash = function() {
  var colorString = '#';
  for (var i = 0; i < 3; i++) {
    colorString += (Math.floor(Math.random()*16)).toString(16);
  }
  return colorString;
};
