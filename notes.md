
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


### Interactive web pages

* The structured representation of a web page is called DOM, short for Document Object Model. The DOM defines the structure of a page and a way to interact with it. This means it's a programming interface, or API (Application Programming Interface). JavaScript is the language of choice for interacting with the DOM.

* A web page is a set of nested tags. You can represent a web page in a hierarchical form called a tree. The <html> element sets up your document as HTML and contains two sub-elements, <head> and <body>, which themselves contain several sub-elements.

* Each entity in the tree is called a node. There are two types of nodes:
	- HTML tags like <body> or <p>. These nodes are called element nodes and they can have subnodes, called child nodes or children.
	- text nodes and do not have children. that match the textual content of the page

* The DOM represents a web page as a hierarchy of objects, where each object corresponds to a node in the nested HTML element tree. DOM objects have properties and methods that you can manipulate with JavaScript.

* Each object has a property called nodeType which indicates its type. The value of this property is document.ELEMENT_NODE for an "element" node (otherwise known as an HTML tag) and document.TEXT_NODE for a text node.

* Each element-typed object in the DOM has a property called childNodes. This is an ordered collection containing all its child nodes as DOM objects. You can use this array-like collection to access the different children of a node.
	 
The childNodes property of an element node is not a real JavaScript array, but rather a NodeList object. 

```
 // Access the first child of the body node
console.log(document.body.childNodes[0]);
```

* Each DOM object has a property called parentNode that returns its parent node as a DOM object.

* All DOM elements have a method called **getElementsByTagName()**. This returns, under the form of a NodeList object, a list of items that have the name of the tag that's passed as a parameter. 
 
* select element according to class: **getElementsByClassName()**.

* To turn a NodeList object into an array, use the **Array.from()** method.

* **getElementById()** that returns the element with the specified ID among all elements of the document.

* **querySelectorAll()**

* **querySelector()**

* Since they use CSS selectors, querySelectorAll() and querySelector() could cover all your needs, but they might perform slower than the others.

* The innerHTML property will retrieve the HTML content of your DOM element.
  ```
  // The HTML content of the DOM element with ID "content"
  console.log(document.getElementById("content").innerHTML);
  ```
* The textContent property returns all the text content of a DOM element, without any HTML markup.
  ```
  // The textual content of the DOM element with ID "content"
  console.log(document.getElementById("content").textContent);
  ```
* The getAttribute() method can be applied to a DOM element and will return the value of a given attribute.
  ```
    // Show href attribute of the first link
    console.log(document.querySelector("a").getAttribute("href"));
  ```
* You can check for the existence of an attribute using the hasAttribute() method as seen in the example below.
```
if (document.querySelector("a").hasAttribute("target")) {
  console.log("The first link has a target attribute.");
   } else {
     console.log("The first link does not have a target attribute."); // Will be shown
     }
```

* The **innerHTML** property can be used to change the content of an element within the DOM.

* When using innerHTML, you put HTML content into strings. To keep your code readable and avoid mistakes, you should only use innerHTML to make small content changes. 

* Use the textContent property to modify the text content of a DOM element. **document.querySelector("h3").textContent += " for programming";**

* The setAttribute() method sets the value of an attribute of an element. You pass the name and value of the attribute as parameters.
    - **document.querySelector("h3").setAttribute("id", "title");**
    - **document.querySelector("h3").id = "title";**

* You can use the classList property to add or remove classes from a DOM element!
  ```
  const titleElement = document.querySelector("h3"); // Grab the first h3
  titleElement.classList.remove("beginning");        // Remove the class "beginning"
  titleElement.classList.add("title");               // Add a class called "title"
  console.log(titleElement);
  ``` 
* You'd create an element using the **createElement()** method. This method is used on the document object and takes the tag of the new element as a parameter. This method also returns the element created as an object 

* Insert a new node in the DOM. The most common is to call the **appendChild()** method on the element that will be the future parent of the new node. The new node is added to the end of the list of child nodes of that parent.

* you can create a textual node with the **createTextNode()** method. This node can then be added to the new element with **appendChild()**.

* use the **insertBefore()** method. Called on the future parent, this method takes as parameters the new node and the node before which the new one will be inserted.

```
There is a method to more precisely define the position of inserted elements: insertAdjacentHTML(). Call it on an existing element and pass it the position and a string of HTML characters that represent the new content to be added. The new content's position should be either:

beforebegin: before the existing element.
afterbegin: inside the existing element, before its first child.
beforeend: inside the existing element, after its last child.
afterend: after the existing element.
Here's how these positions translate relative to an existing <p> tag.

<!-- beforebegin -->
<p>
  <!-- afterbegin -->
    foo
      <!-- beforeend -->
      </p>
      <!-- afterend -->
```

* A DOM element can be replaced with the replaceChild() method. This replaces a child node of the current element with another node. The new node and node-to-be-replaced are passed as parameters (in that order).

* Lastly, you can delete a node called **removeChild()**, to which you'll pass the node-to-be-removed as a parameter. 

* A better solution for accessing element styles is to use a function called **getComputedStyle()**. This function takes a DOM node as a parameter and returns an object that represents the element's style. You can then see the different CSS properties of the object.
  - const paragraphStyle = getComputedStyle(document.getElementById("para"));
      * console.log(paragraphStyle.fontStyle);

* CSS properties that involve multiple words are written in camelCase when dealing with JavaScript. For example, font-family becomes fontFamily.

* To add more interactivity, the page should react to the user's actions. This way of writing programs is called **event-driven programming**. It is often used by user interfaces, and more generally anytime a program needs to interact with a user.

* Called on a DOM element, the addEventListener() method adds a handler for a particular event. This method takes as parameter the event type and the associated function. This function gets called whenever an event of the corresponding type appears for the DOM element.


* In some particular cases, you might want to stop reacting to an event on a DOM element. To achieve this, call the **removeEventListener()** on the element, passing as a parameter the function which used to handle the event.

  > buttonElement.removeEventListener("click", showMessage);

* This can only work if the handler function is not anonymous.

* Page loading:
  Depending on how complex it is, a web page can take time to be entirely loaded by the browser. You can add an event listener on the load event produced by the window object (which represents the browser window) to know when this happens. This avoids messy situations where JavaScript interacts with pages that aren’t fully loaded.

  The following code displays a message in the console once the page is fully loaded.
   >  window.addEventListener("load", e => {
      > console.log("The page has been loaded!");


* The DOM represents a web page as a hierarchy of nodes. Events triggered on a child node are going to get triggered on the parent node, then the parent node of the parent node, up until the root of the DOM (the document variable). This is called event propagation.

  > by calling the stopPropagation() method on the Event object from an event handler. This is useful to avoid the same event being handled multiple times.

* Most of the user actions on a page are associated to a default behavior. Clicking on a link navigates to the link target
  * Calling the **preventDefault()** method on an Event object cancels the default behavior associated with the action that triggered the event.










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






























