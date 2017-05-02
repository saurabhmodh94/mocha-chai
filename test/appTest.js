const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function() {
	it('app should return hello', function() {
		let result = sayHello();
		assert.equal(result, 'hello');
	});

	it('sayHello should return string', function() {
		let result = sayHello();
		assert.typeOf(result, 'string');
	});

	it('addNumbers should return value more than 5', function() {
		let result = addNumbers(5, 5);
		assert.isAbove(result, 5);
	});

	it('addNumbers should return number', function() {
		let result = addNumbers(5, 5);
		assert.typeOf(result, 'number');
	});
})