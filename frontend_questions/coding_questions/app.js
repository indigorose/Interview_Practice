// Based off the front-end developer interview questions pack on github.

// Question 1 - What is the value of foo?

// var foo = 10 + '20';

// console.log(typeof(foo));

// document.getElementById('answer').innerHTML = typeof(foo) + " " + foo;

/* The answer is a string with the value of 1020. It appears that the number value becomes a string with added with a string. */

// Question 2 - What will be the output of the code below.

// console.log(0.1 + 0.2 == 0.3);
// console.log(1 + 2 == 3);

// This issues a false statement to the console. This is a loos equality test. == means loose equality. The values must be symmetric for a true, as with example, maths with floats do not produce equal answers. The follow up does produce a true value.

// Question 3 - What value is returned from the following statement.

// var statement = "i'm a lasagna hog".split('').reverse().join('');

// console.log(statement)

// In theory, the above should be split by spaces into an array, reversed and then joined back with a space. And, it has!!!

// Question 4 - What is the outcome of the two alerts below?

// var foo = 'Hello';
// (function () {
// 	var bar = ' World';
// 	alert(foo + bar);
// })();
// alert(foo + bar);

// The first alert occurs because the function is called at the end. However the second causes an uncaught reference error because 'bar' isn't defined. In this example, 'bar' is a local variable to the function, unlike 'foo' which is outside and considered 'global' and accessible.

// Question 5 - What is the value of foo.length?

// var foo = [];
// foo.push(1);
// foo.push(2);

// console.log(foo.length)

// In the first instance, the length of 'foo' will be null or 0, but as you 'push'/add values 1 and 2, it should return 2 to the console.

// Question 6 - What is the value of foo.x?
// var foo = { n: 1 };
// var bar = foo;
// foo.n = foo = { n: 2 };

// const foo = { n: 1 };
// var bar = foo;
// foo.n = { n: 2 };

// console.log(foo.n)
// console.log(foo)
// Not sure on the logic, as 'foo' is a variable but not a const object and that is a unknown 'x' value. The value is 'undefined', possibly due to the logical set up of above and the object. We must also note that we cannot change const names or call them. When we change the variable to a const, remove the double call and refactor the 'n' object, it works with 'n' making a nested object.

// Question 7 - What does the following code print?

// console.log('one');
// setTimeout(function () {
// 	console.log('two');
// }, 0);
// Promise.resolve().then(function () {
// 	console.log('three');
// });
// console.log('four');

// The above prints out 'one, four, three, two', this in relation to the order that setTimeout and Promises take when called.

// Question 8 - What is the difference between these four promises?

// doSomething().then(function () {
// 	return doSomethingElse();
// });

// doSomething().then(function () {
// 	doSomethingElse();
// });

// doSomething().then(doSomethingElse());

// doSomething().then(doSomethingElse);

// Nothing, 'doSomething' is not defined. - Need to learn promises, callback, await and async. 


// Question 9 - What will the code below output to the console and why?

// (function () {
// 	var a = (b = 3);
// })();

// console.log('a defined? ' + (typeof a !== 'undefined'));
// console.log('b defined? ' + (typeof b !== 'undefined'));


// This is another logic question. in the first instance, a would be undefined as it is superseded the variable b. Note that 'a' is greyed out. The console.log value has to be false as we are unable to print 'undefined'.  

// Question 10 - Consider the two functions below. Will they both return the same thing? Why or why not?

// function foo1() {
// 	return {
// 		bar: 'hello',
// 	};
// }

// function foo2() {
// 	return;
// 	{
// 		bar: 'hello';
// 	}
// }

// console.log(foo1());
// With this question, we must note the syntax rules of objects. Objects are like dictionaries in python, they must end with a comma to be valid. 'foo1' should return a value, 'foo2' it has been incorrectly written. 