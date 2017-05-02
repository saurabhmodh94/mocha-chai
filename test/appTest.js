const assert = require('chai').assert;
const app = require('../app');

// Results
sayHello = app.sayHello();
addNumbers = app.addNumbers(5, 5);

describe('App', function() {
	describe('sayHello()', function() {
		it('app should return hello', function() {
			assert.equal(sayHello, 'hello');
		});
		it('sayHello should return string', function() {
			assert.typeOf(sayHello, 'string');
		});
	});
	describe('addNumbers()', function() {
		it('addNumbers should return value more than 5', function() {
			assert.isAbove(addNumbers, 5);
		});
		it('addNumbers should return number', function() {
			assert.typeOf(addNumbers, 'number');
		});
	});
})
