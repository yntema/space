var lineup = function() {
  var styleSettings = {
    left : '10px'
  };
  window.dancers.forEach(function(dancer) {
    dancer.css(styleSettings);
  });
};

var horizontalCenter = Math.floor(window.innerWidth/2);
var verticalCenter = Math.floor(window.innerHeight/2);
var time = 0;
var theta = 0;
var radius = 300;
var following = false;
var revolving = false;
var chase = function() {
  $('.revolve').css({display: 'inline'});
  if (window.dancers.length < 1) {
    return;
  }
  incrementTime();
  revolve(window.dancers[0]);
};

var incrementTime = function() {
  var timeInterval = setInterval(function() {
    time += 0.008;
    if (revolving) {
     revolve(window.dancers[0]);  
    }
    if (!following) {
      getCloser(window.dancers[0], window.dancers[window.dancers.length-1]); 
    }
    for (var i = 1; i < window.dancers.length; i++) {
      if (window.dancers[i].attr('class').split(' ').indexOf('velocityDancer') === -1) {
        getCloser(window.dancers[i], window.dancers[i-1]);
      }
    }

  }, 50);
};

var startRevolve = function(){ 
  revolving = true;
};

var revolve = function($node) {
  var theta = (2*Math.PI/10 * time)%(2*Math.PI);
  var top = verticalCenter + radius*Math.sin(theta);
  var left = horizontalCenter + radius*Math.cos(theta);
  var styleSettings = {
    top: top,
    left: left
  };
  $node.css(styleSettings);
};

var getCloser = function($chaser, $chasee) {
  var chaserTop = Number($chaser.css('top').slice(0,this.length-2));
  var chaserLeft = Number($chaser.css('left').slice(0,this.length-2));
  
  var chaseeTop = Number($chasee.css('top').slice(0,this.length-2));
  var chaseeLeft = Number($chasee.css('left').slice(0,this.length-2));
  
  var topDiff =  chaseeTop - chaserTop;
  var leftDiff = chaseeLeft - chaserLeft;

  chaserTop += topDiff * 0.1;
  chaserLeft += leftDiff * 0.1;

  var styleSettings = {
    top: chaserTop,
    left: chaserLeft
  };
  $chaser.css(styleSettings);
};

$(document).ready(function(){
  Mousetrap.bind("r", function(e) { $('.rainbow').click()});
  Mousetrap.bind("e", function(e) { $('.elton').click()});
  Mousetrap.bind("t", function(e) { $('.tiny').click()});
  Mousetrap.bind("c", function(e) { $('.chase').click()});
  Mousetrap.bind("f", function(e) { $('.follow').click()});
  Mousetrap.bind("v", function(e) { $('.velocity').click()});
  Mousetrap.bind("o", function(e) { $('.revolve').click()});

});

var follow = function() {
  following = true;
  $(document).mousemove(function(e){
    window.dancers[0].css({top:e.pageY, left:e.pageX});
  });
};

var unFollow = function() {
  following = false;
  $(document).off('mousemove', mouse);
};
