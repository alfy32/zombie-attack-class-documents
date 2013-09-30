require('./person.js');
require('./fibonacci.js');

var richie = new Person('Richie', 25, 'Logan');

console.log(richie.getName());
console.log(richie.getAge());
console.log(richie.getInfo());
console.log(richie.getSelectInfo(true, false, true));
console.log(richie.toString());
console.log(fibonacci(5));