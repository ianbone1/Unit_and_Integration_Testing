var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

// Do the number buttons update the display of the running total?
it('should have working number buttons 1,2,3,4,5,6,7,8,9,0', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number2')).click();
  element(by.css('#number3')).click();
  element(by.css('#number4')).click();
  element(by.css('#number5')).click();
  element(by.css('#number6')).click();
  element(by.css('#number7')).click();
  element(by.css('#number8')).click();
  element(by.css('#number9')).click();
  element(by.css('#number0')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1234567890')
})
// Do the arithmetical operations update the display with the result of the operation?
it('Does one arithmetical operation update the display with the result of the operation (see below for fuller test of all operators.)', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('16')
})

// Can multiple operations be chained together?
it('Can multiple operations be chained together?', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('12')
})

// Do the arithmetical operations update the display with the result of the operation?
it('Chain all operators to prove all operators work.', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number6')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('8')
})
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
it('Can do negative numbers', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-21')
})

it('Can do decimals numbers', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
})

it('Can do large numbers', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number2')).click();
  element(by.css('#number3')).click();
  element(by.css('#number4')).click();
  element(by.css('#number5')).click();
  element(by.css('#number6')).click();
  element(by.css('#number7')).click();
  element(by.css('#number8')).click();
  element(by.css('#number9')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number2')).click();
  element(by.css('#number3')).click();
  element(by.css('#number4')).click();
  element(by.css('#number5')).click();
  element(by.css('#number6')).click();
  element(by.css('#number7')).click();
  element(by.css('#number8')).click();
  element(by.css('#number9')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1524157875019052000')
})
// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
it('Divide by zero should return zero', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0')
})

});
