$(document).ready(function() {
  window.dancers = [];
  window.velocityDancers = [];
  window.gravityDancers = [];
  window.gravityDancer$Nodes = [];
  window.screenWidth = $('body').width();
  window.screenHeight = $('body').height();
  $(".addDancerButton").on("click", function(event) {
    if (window.dancers.length < 500) {
      var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
      var dancerMakerFunction = window[dancerMakerFunctionName];
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 400 + 800
      );
      $('body').append(dancer.$node);
      if(dancer.className === 'gravityDancer' || dancer.className === 'blackHole' || dancer.className === 'Planet') {
        window.gravityDancers.push(dancer); 
        window.gravityDancer$Nodes.push(dancer.$node);
      } else if (dancer.className === 'velocityDancer') {
        window.velocityDancers.push(dancer.$node); 
      } else {
        window.dancers.push(dancer.$node); 
      }
    }
  });
});

