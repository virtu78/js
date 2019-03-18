function CoffeeMaker(power) {
  this.waterAmount = 0;
  var WATER_HEAT_CAPACITY = 0.00117;;
  var self = this;
  function getBoilTime() { 
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  } 
  function onReady() {
    alert( 'Кофе готов!' );
  }
  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };
}
var coffeeMaker = new CoffeeMaker(1000);
coffeeMaker.waterAmount = 200;
coffeeMaker.run();






