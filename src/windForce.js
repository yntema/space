var WindForce = function(belongsTo) {
  Force.call(this);
  this.belongsTo = belongsTo;
  this.springPower = 0.00001;
  this.windPower = 0.0001;
  this.magicForce = 0.01;
  this.idealVelocity = 0.5;
  this.x = 0;
  this.y = 0;
};

WindForce.prototype.constructor = WindForce;
WindForce.prototype = Object.create(makeVelocityDancer.prototype);

WindForce.prototype.update = function() {
  if (this.belongsTo.top < 0) {
    this.x = -this.windPower * this.belongsTo.top; //this.magicForce;
    if (this.belongsTo.velocity.x > this.idealVelocity) {
      this.x = 0;
    }
  } else if (this.belongsTo.top > window.screenHeight) {
    this.x = this.windPower * (window.screenHeight - this.belongsTo.top);
    if (this.belongsTo.velocity.x < -this.idealVelocity) {
      this.x = 0;
    }
  } else {
    this.x = 0;
  }

  this.x *= Math.log(this.belongsTo.mass);
 
  if (this.belongsTo.left < 0) {
    this.y = -this.windPower * this.belongsTo.left;//this.magicForce;
    if (this.belongsTo.velocity.y > this.idealVelocity) {
      this.y = 0;
    }
  } else if (this.belongsTo.left - 50 > window.screenWidth) {
    this.y = this.windPower * (window.screenHeight - this.belongsTo.left - 50);
    if (this.belongsTo.velocity.y < -this.idealVelocity) {
      this.y = 0;
    }
  } else {
    this.y = 0;
  }

  this.y *= Math.log(this.belongsTo.mass);



};
