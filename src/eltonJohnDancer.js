var makeEltonJohnDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('elton-john');
  this.oldStep = makeDancer.prototype.step;
};

makeEltonJohnDancer.prototype.step = function() {
  this.oldStep();
  
  // this.$node.rotate({bind:{
  // click: function(){
  //   $(this).rotate({
  //     angle: 0,
  //     animateTo:180
  //     });
  //   }
  // }

// });
  // var styleSettings = {
  //   //color: 'blue',
  //   border: '2px solid blue'
  // };
  // this.$node.css(styleSettings);
};