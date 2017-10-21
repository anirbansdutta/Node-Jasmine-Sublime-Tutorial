var basicfunc = require('../../app/scripts/basicFunction.js');
var classUtility = require('../../app/scripts/classUtil.js');

describe('basicFunction.js', function(){
var result;
	it('the Addition of two numbers', function(){

result = basicfunc.Add(10,20);

expect(result).toBe(30);

	})
});
describe('classUtil.js',function()
{
it('is employee of',function()
{

var employee = new classUtility.Employee();

expect(employee.DoWork()).toBe("Hi");

});
});