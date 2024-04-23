
* A variable is an information storage area.

* languages, like C or Java, require variable types to always be defined. This is called **static typing**.

* JavaScript is a **dynamically typed language**, varibles type is deduced from the value stored in the variable and may change while the program rune.

* string called a **template literal** Inside a template literal, expressions are identified by the `${expression}` syntax. --> `${x} + ${y} = ${x + y}`

* **Implicit conversions**, They happen automatically without the programmer's intervention.
* **Explicit conversion**, JavaScript has the `Number()` and `String()` commands that convert the value between the parenthesis to a number or a string.

### Function

* A function is a group of statements that performs a particular task.

* A parameter is information that the function needs in order to work.

* A function body must be kept simple, or otherwise split into several sub-functions. As a rule of thumb, 30 lines of code should be a max for non-specific cases.

* Variables declared inside a function are limited in scope to the function body. They are called local variables.

*  For a particular call, supplied parameter values are called arguments.

### Objects

* Object-oriented programming (OOP for short) is a way to write programs using objects. When using OOP, you write, create, and modify objects, and the objects make up your program.

* As stated earlier, a JavaScript object can be created by simply setting its properties within a pair of curly braces: {...}. Each property is a key/value pair. This is called an **object literal**.

* After creating an object, you can access the value of its properties using **dot notation** such as ``myObject.myProperty``.

* An object property whose value is a function is called a **method**. Methods are used to define actions for an object. A method adds some behavior to an object. 

```
* describe(aurora) calls the describe() function with the aurora object as an argument. The function is external to the object. This is an example of procedural programming.

* aurora.describe() calls the describe() function on the aurora object. The function is one of the object's properties: it is a "method". This is an example of object-oriented programming.

```
```
The JavaScript language has many predefined objects serving various purposes. We have already encountered some of them:
	- The console object gives access to the environment console. console.log() is actually a method call.

	- The Math object contains many mathematical properties. For example, Math.PI returns an approximate value of the number π (Pi) and the Math.random() function returns a random number between 0 and 1.
```

* A JavaScript object literal is created by simply setting its properties within a pair of curly braces.

### Arrays

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


### OOP

* Most object-oriented languages use classes as abstractions for the ideas or concepts manipulated by a program. A class is used to create objects representing a concept. It offers a convenient syntax to give both data and behavior to these objects.

```
class MyClass {
  constructor(param1, param2, ...) {
    this.property1 = param1;
    this.property2 = param2;
    // ...
  }
  method1(/* ... */) {
    // ...
  }
  method2(/* ... */) {
    // ...
  }
  // ...
}

const myObject = new MyClass(arg1, arg2, ...);
myObject.method1(/* ... */);
// ...
```

* In class-based object-oriented languages like C++, Java and C#, classes are static blueprints (templates). When an object is created, the methods and properties of the class are copied into a new entity, called an instance. After instantiation, the newly created object has no relation whatsoever with its class.

* **JavaScript's object-oriented model is based on prototypes, not classes,**

* In JavaScript, a class is itself an object, not a static blueprint.

* The JavaScript class syntax is merely a more convenient way to create relationships between objects through prototypes. Classes were introduced to emulate the class-based OOP model on top of JavaScript's own prototype-based model. It's an example of what programmers call syntactic sugar.

* Object-Oriented Programming, or OOP, is a programming paradigm that uses objects containing both data and behavior to create programs.

* A class is an object-oriented abstraction for an idea or a concept manipulated by a program. It offers a convenient syntax to create objects representing this concept.

* A JavaScript class is defined with the class keyword. It can only contain methods. The constructor() method, called during object creation, is used to initialize the object, often by giving it some data properties. Inside methods, the this keyword represents the object on which the method was called. 

* There are several ways to create and link JavaScript objects through prototypes. One is to use the Object.create() method.

### functional programming 

* JavaScript is a multi-paradigm language: you can write programs using an imperative, object-oriented or functional programming style.

```
const titles = movies => movies.map(movie => movie.title);
const byNolan = movie => movie.director === "Christopher Nolan";
const filter = (movies, func) => movies.filter(func);
const goodRating = movie => movie.imdbRating >= 7.5;
const ratings = movies => movies.map(movie => movie.imdbRating);
const average = array => array.reduce((sum, value) => sum + value, 0) / array.length;

console.log(titles(movieList));
const nolanMovieList = filter(movieList, byNolan);
console.log(nolanMovieList.length);
console.log(titles(filter(movieList, goodRating)));
console.log(average(ratings(nolanMovieList)));
```
* A function that operates on another function (taking it as a parameter or returning it) is called a higher-order function.

* 







### Web development 101

```
Network protocols are sets of rules or standards used by devices to communicate with each other over a network.

Some examples of network protocols are:

HTTP, used for web browsing
SMTP, used for email
FTP, used for file transfers
```
* One model that categorizes network protocols into layers is the TCP/IP model. It has 4 layers:
|
> application layer: The Application Layer relies on protocols like TCP/UDP in the Transport Layer.
| 
|
> tronsport layer: This layer's job is to provide reliable data transfer between two devices.
|	* The most commonly used Transport Layer protocols are:
|		- TCP, for reliable delivery of data
|		- UDP, for fast but less reliable delivery
|
|
> internet layer: It is responsible for routing data across different networks to get it to the right destination.
|		- The fundamental protocol in this layer is the Internet Protocol (IP). But there are others too:
|
|		- ICMP, used by programs like ping to test connectivity
|		- ARP, used to map IP addresses to MAC addresses
|
|
> link layer --> It is responsible for sending data over a physical medium, such as a cable or a wireless connection.
	Some examples of Link Layer protocols are:
		- Ethernet
		- Wi-Fi
		- Bluetooth	






* To be online, a web site has to be published on a server. This is a special kind of machine whose task is to listen and answer to the demands of clients. A server that publishes resources on the Web is logically called a web server.

* The machine asking a server for a resource is called a web client. Actually, the real client is a software program running on the machine. A well-known type of web client is the browser, a program specialized in displaying web pages.

* The main HTTP methods are GET to access a resource and POST to push some information on the server. Other ones exist, such as HEAD, PUT or DELETE.

``` 
The HTTP status codes belong to different families, depending on their first digit.

Family	Meaning	Examples
1xx	Information	
2xx	Success	200: request handled successfully
3xx	Redirection	
4xx	Client error	404: resource not found
5xx	Server error	500: internal server error
```

* The set of technologies enabling the creation of web applications is codenamed AJAX (Asynchronous JavaScript and XML). An AJAX call is an asynchronous HTTP request made to retrieve or send data from/to a server.

* In a synchronous exchange, the asker waits until he gets the needed info. A telephone call is an example of a synchronous exchange.

* On the contrary, the asker in an asynchronous exchange can do something else while waiting for the completion of his request. Email is an example of an asynchronous exchange.

* Enabling cross-domain requests is done by setting on cross-origin resource sharing (CORS) in the server configuration.

* The "X" letter in AJAX stands for XML, a generic markup language that used to be the standard for cross-platform data exchanges.

* JSON, or JavaScript Object Notation, is a textual syntax for describing structured information. As you'll see in the following example, JSON borrows heavily from the JavaScript object syntax.

* A JSON document is a set of name/value pairs. Names are always within double quotes "". Values can be numbers, strings, booleans, arrays or objects.

* Web resources are uniquely addressed by their URL (Uniform resource locator). A URL is a text of the form http://www.mywebsite.com/myresourcepath/myresource.

* Cross-domain AJAX requests are only possible if the server has been configured to accept them by setting on cross-origin resource sharing **(CORS)**.

```
The standard way to send asynchronous HTTP requests in JavaScript is to use the fetch() method. Here is its general usage form.

// Sends an asynchronous HTTP request to the target url
fetch(url)
  .then(() => {
    // Code called in the future when the request ends successfully
  })
  .catch(() => {
    // Code called in the future when an errors occurs during the request
  });
```

```
When the fetch() method is executed, it immediately returns a promise, which is a wrapper for an operation whose result might be available in the future. A promise is in one of these states:

pending: initial state, not fulfilled or rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
A JavaScript promise is an object with then() and catch() methods. then() is called when the promise is fulfilled. It takes the operation result as a parameter. On the contrary, catch() is called when the promise is rejected.

What's great about promises is that they can be chained together. Here's how you could perform a series of asynchronous operations in JavaScript.
```
```
getData()
  .then(a => filterData(a)) // Called asynchronously when getData() returns
  .then(b => processData(b)) // Called asynchronously when filterData() returns
  .then(c => displayData(c)) // Called asynchronously when processData() returns
  // ...
```

```
By nature, external HTTP requests are subject to errors: network failure, missing resource, etc. Handling these errors is done by adding a catch() method to the fetch() call. A basic level of error handling is to log the error message in the console.

fetch("http://non-existent-resource")
  .catch(err => {
    console.error(err.message);
  });

```

* JSON and JavaScript
The JavaScript language offers native support for the JSON format:
	- The JSON.parse() method transforms a JSON string into a JavaScript object.
	- On the contrary, the JSON.stringify() method transforms a JavaScript object into a JSON string.
	- These methods can also handle JSON arrays.

* The json() method of the HTTP Response object returns a promise that resolves with the result of parsing the response text as JSON. 





























