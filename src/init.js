$(document).ready(function() {
  window.dancers = [];
  $(".addDancerButton").on("click", function(event) {
    if (window.dancers.length < 20) {
      var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
      var dancerMakerFunction = window[dancerMakerFunctionName];
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 400 + 800
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer.$node);
    }
  });
});

