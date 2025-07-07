// Test JavaScript file for syntax highlighting
const greeting = "Hello, World!";
let numbers = [1, 2, 3, 4, 5];

function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new Person("Alice", 30);
person.greet();

// Arrow function
const square = (x) => x * x;

// Template literals
const message = `The sum of numbers is: ${calculateSum(numbers)}`;
console.log(message);

// Async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Modern JavaScript features
const { name, age } = person;
const newArray = [...numbers, 6, 7, 8];
