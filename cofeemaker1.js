function CoffeeMachine(power) {
  this.waterAmount = 0; 
  alert( 'Создана кофеварка мощностью: ' + power + ' ватт' );
}
var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200; 
coffeeMachine();




