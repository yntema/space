var Planet = function(top, left, velocity, mass, color) {
  makeGravityDancer.call(this, top, left);
  this.velocity = velocity;
  this.mass = mass;
  this.colorString = this.massToSize() + 'px solid ' + color;
  this.className = 'Planet';
  this.$node.addClass('PlanetStyle');
  this.top = top;
  this.left = left;
};

Planet.prototype = Object.create(makeGravityDancer.prototype);
Planet.prototype.constructor = Planet;

Planet.prototype.massToSize = function() {

  return Math.ceil(Math.log(this.mass+1.1)*10);
};

var Earth = function() {
  this.screenWidth = $('body').width();
  this.screenHeight = $('body').height();
  this.centerScreen = { x: this.screenWidth/2,
                        y: this.screenHeight/2 };
  Planet.call(this, this.centerScreen.y - this.screenHeight/4, this.centerScreen.x, {x:0,y:-0.9}, 3, '#00f');
};

Earth.prototype = Object.create(Planet.prototype);
Earth.prototype.constructor = Earth;

var Mars = function() {
  this.screenWidth = $('body').width();
  this.screenHeight = $('body').height();
  this.centerScreen = { x: this.screenWidth/2,
                        y: this.screenHeight/2 };
  Planet.call(this, this.centerScreen.y + this.screenHeight/4 + 50, this.centerScreen.x, {x:0,y:1}, 1.3, '#c0392b');
};

Mars.prototype = Object.create(Planet.prototype);
Mars.prototype.constructor = Mars;

var Jupiter = function() {
  this.screenWidth = $('body').width();
  this.screenHeight = $('body').height();
  this.centerScreen = { x: this.screenWidth/2,
                        y: this.screenHeight/2 };
  Planet.call(this, this.centerScreen.y, this.centerScreen.x + this.screenHeight/4 + 80, {x:-1.3,y:0}, 6, '#c99039');
};

Jupiter.prototype = Object.create(Planet.prototype);
Jupiter.prototype.constructor = Jupiter;

var Saturn = function() {
  this.screenWidth = $('body').width();
  this.screenHeight = $('body').height();
  this.centerScreen = { x: this.screenWidth/2,
                        y: this.screenHeight/2 };
  Planet.call(this, this.centerScreen.y, this.centerScreen.x - this.screenHeight/4 - 100, {x:1.5,y:0}, 5, '#d8ca9d');
};

Saturn.prototype = Object.create(Planet.prototype);
Saturn.prototype.constructor = Saturn;

var Pluto = function() {
  this.screenWidth = $('body').width();
  this.screenHeight = $('body').height();
  this.centerScreen = { x: this.screenWidth/2,
                        y: this.screenHeight/2 };
  Planet.call(this, this.centerScreen.y, this.centerScreen.x - this.screenWidth/4 - 200, {x:1.1,y:0}, 0.002, '#ecf0f1');
};

Pluto.prototype = Object.create(Planet.prototype);
Pluto.prototype.constructor = Pluto;

var Sun = function() {
  this.screenWidth = $('body').width();
  this.screenHeight = $('body').height();
  this.centerScreen = { x: this.screenWidth/2 - 50,
                        y: this.screenHeight/2 - 50};
  Planet.call(this, this.centerScreen.y, this.centerScreen.x, {x:0,y:0}, 100, '#ffa500');
  this.$node.addClass('Sun');
  this.$node.addClass('Big');
  var windForce = new WindForce(this);
  this.forceArray.push(windForce);
};

Sun.prototype = Object.create(Planet.prototype);
Sun.prototype.constructor = Sun;

var BlackHole = function(top, left) {
  makeGravityDancer.call(this, top, left);
  this.velocity = {x:0, y:0};
  this.mass = 200;
  this.colorString = '50px solid #111';
  this.className = 'blackHole';
  this.$node.addClass('blackHoleStyle')
  this.$node.addClass('Big');

};

BlackHole.prototype = Object.create(makeGravityDancer.prototype);
BlackHole.prototype.constructor = BlackHole;


