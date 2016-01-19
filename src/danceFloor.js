var lineup = function() {
  var styleSettings = {
    left : '10px'
    // left: $("body").width()
  };
  window.dancers.forEach(function(dancer) {
    dancer.css(styleSettings);
    // this.$node.css(styleSettings);
  });
};

