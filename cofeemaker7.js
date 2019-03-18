function CoffeeMaker(power, capacity) {
  //...
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
}
var coffeeMaker = new CoffeeMaker(1000, 500);
coffeeMaker.setWaterAmount(450);
alert( coffeeMaker.getWaterAmount() ); // 450






