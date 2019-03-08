var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // calculator.add() - add 1 to 4 and get 5
  it('add 1 to 4 and get 5', function(){
    const expected = 5;
    calculator.previousTotal=4;
    calculator.add(1);
    const actual=calculator.runningTotal;
    assert.equal(actual, expected)
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('subtract 4 from 7 and get 3', function(){
    const expected = 3;
    calculator.previousTotal=7;
    calculator.subtract(4);
    const actual=calculator.runningTotal;
    assert.equal(actual, expected)
  })
  // calculator.multiply() - multiply 3 by 5 and get 15
  it('multiply 3 by 5 and get 15', function(){
    const expected = 15;
    calculator.previousTotal=3;
    calculator.multiply(5);
    const actual=calculator.runningTotal;
    assert.equal(actual, expected)
  })
  // calculator.divide() - divide 21 by 7 and get 3
  it('divide 21 by 7 and get 3', function(){
    const expected = 3;
    calculator.previousTotal=21;
    calculator.divide(7);
    const actual=calculator.runningTotal;
    assert.equal(actual, expected)
  })
  // calculator.numberClick() - concatenate multiple number button clicks
  it('concatenate multiple number button clicks', function(){
    const expected = 22;
    calculator.numberClick(2);
    calculator.numberClick(2);
    const actual=calculator.runningTotal;
    assert.equal(actual, expected)
  })
  // calculator.operatorClick() - chain multiple operations together
  it('chain multiple operations together', function(){
    const expected = 46;
    calculator.numberClick(4);
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    const actual=calculator.runningTotal;
    assert.equal(actual, expected)
  })
  // calculator.clearClick() - clear the running total without affecting the calculation
  it('clear the running total without affecting the calculation', function(){
    const expected = 46;
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    const actual=calculator.runningTotal;
    assert.equal(actual, expected)
  })



});
