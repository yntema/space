var makeEltonJohnDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('elton-john');
  this.timeBetweenSteps = 50;
  this.oldStep = makeDancer.prototype.step;
  this.rotation = 0;
};

makeEltonJohnDancer.prototype.step = function() {
  this.oldStep();

  this.rotation += 5;
  this.$node.rotate(this.rotation);
  // this.$node.click(function() {
  //   $(this).rotate(this.rotation);
  // });
//   this.$node.rotate(
//     { bind:{
//         click: function(){
//           $(this).rotate({
//             angle: 0,
//             animateTo:180
//           });
//         }
//       }
//     }
//   );
};

var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

// $('.elton-john').click(function() {
//     rotation += 5;
//     $(this).rotate(rotation);
// });