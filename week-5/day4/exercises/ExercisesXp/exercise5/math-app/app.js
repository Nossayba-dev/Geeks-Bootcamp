const _ = require('lodash');
const math = require('./math');

const sum = math.add(10, 20);
const product = math.multiply(5, 6);

const numbers = [1, 2, 3, 4, 5];
const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

console.log('Sum (10 + 20):', sum);             
console.log('Product (5 * 6):', product);       
console.log('Max of array:', maxNumber);         
console.log('Min of array:', minNumber);         
