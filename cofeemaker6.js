function CoffeeMaker(power, capacity) { 
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 0.00117;
  var timeToBoil;
  function getTimeToBoil() {
  	var tHour=waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	var tMin=tHour * 60;
  	timeToBoil=parseFloat(tMin.toFixed(1));
  	return timeToBoil;
  }
   this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }
    waterAmount = amount;
  };
  this.getWaterAmount = function() {
    return waterAmount;
  };
  function onReady() {
    alert( 'Кофе готов!' );
  }
  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
	console.log(timeToBoil);
  };
}
var coffeeMaker = new CoffeeMaker(2, 2);
coffeeMaker.setWaterAmount(1.5); 
coffeeMaker.run();
console.log( coffeeMaker.getWaterAmount() ); 





