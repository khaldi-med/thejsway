
* A variable is an information storage area.

* languages, like C or Java, require variable types to always be defined. This is called **static typing**.

* JavaScript is a **dynamically typed language**, varibles type is deduced from the value stored in the variable and may change while the program rune.

* string called a **template literal** Inside a template literal, expressions are identified by the `${expression}` syntax. --> `${x} + ${y} = ${x + y}`

* **Implicit conversions**, They happen automatically without the programmer's intervention.
* **Explicit conversion**, JavaScript has the `Number()` and `String()` commands that convert the value between the parenthesis to a number or a string.

#### Function-------

* A function is a group of statements that performs a particular task.

* A parameter is information that the function needs in order to work.

* A function body must be kept simple, or otherwise split into several sub-functions. As a rule of thumb, 30 lines of code should be a max for non-specific cases.

* Variables declared inside a function are limited in scope to the function body. They are called local variables.

*  For a particular call, supplied parameter values are called arguments.

#### Objects-------

* Object-oriented programming (OOP for short) is a way to write programs using objects. When using OOP, you write, create, and modify objects, and the objects make up your program.

* As stated earlier, a JavaScript object can be created by simply setting its properties within a pair of curly braces: {...}. Each property is a key/value pair. This is called an **object literal**.

* After creating an object, you can access the value of its properties using **dot notation** such as ``myObject.myProperty``.

* An object property whose value is a function is called a **method**. Methods are used to define actions for an object. A method adds some behavior to an object. 

```
* describe(aurora) calls the describe() function with the aurora object as an argument. The function is external to the object. This is an example of procedural programming.

* aurora.describe() calls the describe() function on the aurora object. The function is one of the object's properties: it is a "method". This is an example of object-oriented programming.

```
```
- The JavaScript language has many predefined objects serving various purposes. We have already encountered some of them:
	- The console object gives access to the environment console. console.log() is actually a method call.

	- The Math object contains many mathematical properties. For example, Math.PI returns an approximate value of the number π (Pi) and the Math.random() function returns a random number between 0 and 1.
```

* A JavaScript object literal is created by simply setting its properties within a pair of curly braces.

#### Arrays-------

* The number of elements stored in an array is called its **size**. 
* Each item in an array is identified by a number called its **index** - an integer pointer that identifies an element of the array. 

* Iterating over an array:
	- Use a for loop 
	- Use forEach() method
	- Use the for-of loop -> 
				for (const myElement of myArray) {
  				// Use myElement to access each array element one by one
				}

* You add a new item to an array with the push() method. --> end of the array.
* unshift() method --> at the beginning of an array.
* remove the last element of an array using the pop()
* remove the first element of an array using the shift()
* use the splice() method with two parameters: the first one is the index from which to begin removing, and the second one is the number of elements to remove. 

### Strings

* It's important to understand that once created, a string value never changes: strings are immutable in JavaScript.

* The JavaScript method Array.from() can be used to turn a string into an array. 
* 


























