window.JAVASCRIPT_QUESTIONS = [
{
  id: 1,
  question: "What are the differences between var, let, and const in JavaScript?",
  answer: "var is old way to declare variable. It is function scope and can be re-declared and updated. let is block scope and value can be updated but not re-declared in same scope. const is also block scope but value cannot be changed after assign.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 2,
  question: "What is variable hoisting in JavaScript?",
  answer: "Hoisting means JS moves variable and function declaration to top before execution. var becomes undefined if used before declaration. let and const are also hoisted but cannot be accessed before declaration.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 3,
  question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
  answer: "TDZ is the time between variable declaration and initialization. During this time, let and const variables cannot be used. If you try to access, it gives error.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 4,
  question: "Why is const preferred for declaring variables in modern JavaScript?",
  answer: "const is preferred because it prevents reassignment. It makes code more safe and predictable. Use let only when value needs to change.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 5,
  question: "What is the difference between block scope and function scope?",
  answer: "Function scope means variable works inside entire function. Block scope means variable works only inside {} block. var is function scope and let, const are block scope.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 6,
  question: "What are the primitive data types in JavaScript?",
  answer: "Primitive data types are string, number, boolean, null, undefined, symbol and bigint. These store simple values and cannot be changed directly.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 7,
  question: "What is the difference between primitive and reference types?",
  answer: "Primitive types store actual value. Reference types like object and array store memory reference. Changing one reference value can affect another.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 8,
  question: "How does the typeof operator work in JavaScript?",
  answer: "typeof is used to check data type of a value. It returns result as string like 'string', 'number' or 'object'. Note that typeof null shows 'object'.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 9,
  question: "What is type coercion in JavaScript?",
  answer: "Type coercion means automatic type conversion by JS. It happens when different types are used together in operations like + or comparison.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 10,
  question: "What are truthy and falsy values in JavaScript?",
  answer: "Falsy values are false, 0, empty string, null, undefined and NaN. All other values are considered truthy in JavaScript.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 11,
  question: "What is the difference between == and === in JavaScript?",
  answer: "== checks only value and allows type conversion. === checks both value and type without conversion. So === is safer and mostly recommended.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 12,
  question: "How do logical operators (&&, ||, !) work in JavaScript?",
  answer: "&& returns first false value or last true value. || returns first true value. ! is used to reverse boolean value from true to false or false to true.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 13,
  question: "What is the ternary operator and how do you use it?",
  answer: "Ternary operator is short form of if-else. Syntax is condition ? value1 : value2. It is useful for simple conditions in one line.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 14,
  question: "What is the nullish coalescing operator (??) in JavaScript?",
  answer: "?? returns right side value only if left side is null or undefined. It does not treat 0 or empty string as false like || operator.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 15,
  question: "What is the optional chaining operator (?.) in JavaScript?",
  answer: "Optional chaining is used to safely access nested properties. If any value is null or undefined, it stops and returns undefined without error.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 16,
  question: "What are template literals in JavaScript?",
  answer: "Template literals use backticks (`). They allow multi-line strings and also allow variables inside string using ${}.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 17,
  question: "What are the most commonly used string methods in JavaScript?",
  answer: "Common string methods are length, toUpperCase, toLowerCase, trim, includes, slice, split and replace. These help to read and modify strings.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 18,
  question: "How do you convert between strings and other data types?",
  answer: "Use String(), Number() and Boolean() to convert values. parseInt and parseFloat are used to convert string to numbers.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 19,
  question: "How do you check if a string contains a substring in JavaScript?",
  answer: "Use includes() method to check substring. You can also use indexOf(), startsWith() and endsWith() methods.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 20,
  question: "What is the difference between slice(), substring(), and substr()?",
  answer: "slice supports negative index and is mostly used. substring does not support negative values. substr is old method and not recommended now.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 21,
  question: "How do parseInt() and parseFloat() work in JavaScript?",
  answer: "parseInt converts string to integer number. parseFloat converts string to decimal number. Both stop reading when non-number character comes.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 22,
  question: "What is NaN in JavaScript and how do you check for it?",
  answer: "NaN means Not a Number. It comes when a calculation fails. Use Number.isNaN() to check it because NaN is not equal to itself.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 23,
  question: "What is Infinity in JavaScript?",
  answer: "Infinity is a special value in JS. It comes when number is too large or when dividing by zero. There is also -Infinity.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 24,
  question: "What are the commonly used methods of the Math object?",
  answer: "Common methods are Math.max, Math.min, Math.round, Math.floor, Math.ceil, Math.random and Math.sqrt. These are used for calculations.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 25,
  question: "Why does 0.1 + 0.2 not equal 0.3 in JavaScript?",
  answer: "JS uses floating point numbers. Some decimal values cannot be stored exactly in memory, so small precision error happens.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 26,
  question: "How do you create arrays in JavaScript?",
  answer: "Arrays can be created using [] or Array constructor. You can also use Array.of() and Array.from() methods.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 27,
  question: "What are push(), pop(), shift(), and unshift() in JavaScript?",
  answer: "push adds element at end. pop removes last element. unshift adds element at beginning. shift removes first element.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 28,
  question: "What is the difference between splice() and slice()?",
  answer: "slice returns new array without changing original. splice changes original array by adding or removing elements.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 29,
  question: "How do concat(), join(), and includes() work on arrays?",
  answer: "concat joins arrays and returns new array. join converts array to string. includes checks if value exists in array.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 30,
  question: "How do you find the index of an element in an array?",
  answer: "Use indexOf() to find index of value. Use findIndex() when you need to check with condition.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 31,
  question: "How does the forEach() method work in JavaScript?",
  answer: "forEach runs a function for each element in array. It does not return a new array. It is mainly used for looping.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 32,
  question: "How does the map() method work in JavaScript?",
  answer: "map creates a new array by applying function to each element. It returns new array with same length.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 33,
  question: "How does the filter() method work in JavaScript?",
  answer: "filter creates a new array with elements that match a condition. Only values that pass condition are returned.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 34,
  question: "How does the reduce() method work in JavaScript?",
  answer: "reduce converts array into single value. It uses accumulator to combine values step by step.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 35,
  question: "How do find() and some()/every() work on arrays?",
  answer: "find returns first matching element. some returns true if at least one value matches. every returns true only if all values match.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 36,
  question: "How do you create and access properties of objects in JavaScript?",
  answer: "Objects are created using {}. Properties can be accessed using dot notation like obj.name or bracket notation like obj['name'].",
  topic: "javascript",
  level: "beginner"
},
{
  id: 37,
  question: "What is object destructuring in JavaScript?",
  answer: "Destructuring means taking values from object and assigning to variables easily. It reduces code and improves readability.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 38,
  question: "How does the spread operator work with objects?",
  answer: "Spread operator (...) is used to copy or merge objects. It creates a shallow copy of object.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 39,
  question: "What are Object.keys(), Object.values(), and Object.entries()?",
  answer: "Object.keys returns all keys. Object.values returns all values. Object.entries returns key-value pairs as array.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 40,
  question: "How do Object.assign() and Object.freeze() work?",
  answer: "Object.assign is used to copy properties from one object to another. Object.freeze makes object read-only so values cannot be changed.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 41,
  question: "What are the different ways to define functions in JavaScript?",
  answer: "Functions can be created using function declaration, function expression and arrow function. Each method has slightly different behavior.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 42,
  question: "What are arrow functions and how do they differ from regular functions?",
  answer: "Arrow functions have shorter syntax. They do not have their own this value and use parent this. They are useful for small functions.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 43,
  question: "What are default parameters and rest parameters in functions?",
  answer: "Default parameters give default value if argument is not passed. Rest parameters collect multiple arguments into an array.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 44,
  question: "What is scope in JavaScript?",
  answer: "Scope defines where variables can be accessed. Types are global scope, function scope and block scope.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 45,
  question: "What is closure in JavaScript?",
  answer: "Closure means a function can access variables from its outer function even after outer function has finished execution.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 46,
  question: "What is callback function in JavaScript?",
  answer: "Callback is a function passed as argument to another function. It is used to run code after some operation like async tasks.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 47,
  question: "What is setTimeout and setInterval in JavaScript?",
  answer: "setTimeout runs a function once after some delay. setInterval runs a function again and again after fixed time.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 48,
  question: "What is the difference between synchronous and asynchronous code?",
  answer: "Synchronous code runs line by line. Asynchronous code runs in background and does not block execution like API calls.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 49,
  question: "What is a Promise in JavaScript?",
  answer: "Promise is used to handle async operations. It has three states: pending, fulfilled and rejected.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 50,
  question: "What is async and await in JavaScript?",
  answer: "async and await are used to write async code in simple way. await pauses execution until promise is resolved.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 51,
  question: "What is the event loop in JavaScript?",
  answer: "Event loop is a system that handles async tasks in JS. It checks call stack and moves tasks from queue to stack when it is empty.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 52,
  question: "What is the call stack in JavaScript?",
  answer: "Call stack is where JS keeps track of function calls. It follows LIFO order. When function finishes, it is removed from stack.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 53,
  question: "What is the callback queue?",
  answer: "Callback queue stores async functions like setTimeout callbacks. Event loop moves them to call stack when it is free.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 54,
  question: "What is the difference between null and undefined?",
  answer: "undefined means variable is declared but not assigned. null is assigned value that means no value intentionally.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 55,
  question: "What is the DOM?",
  answer: "DOM means Document Object Model. It represents HTML as objects so JavaScript can read and change content and structure.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 56,
  question: "How do you select elements in the DOM?",
  answer: "Use methods like getElementById, getElementsByClassName, querySelector and querySelectorAll to select elements.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 57,
  question: "What is an event in JavaScript?",
  answer: "Event is an action like click, key press or mouse move. JavaScript can listen and respond to these actions.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 58,
  question: "What is an event listener?",
  answer: "Event listener is used to listen for events. It runs a function when a specific event happens.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 59,
  question: "What is preventDefault()?",
  answer: "preventDefault is used to stop default browser behavior like form submit or link navigation.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 60,
  question: "What is stopPropagation()?",
  answer: "stopPropagation is used to stop event from moving to parent elements during bubbling.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 61,
  question: "What is event bubbling in JavaScript?",
  answer: "Event bubbling means event starts from target element and moves up to parent elements. Child event will trigger parent handlers.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 62,
  question: "What is event capturing in JavaScript?",
  answer: "Event capturing means event starts from parent and goes down to target element. It is opposite of bubbling.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 63,
  question: "What is localStorage?",
  answer: "localStorage is used to store data in browser. Data will not be removed even after refresh or closing browser.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 64,
  question: "What is sessionStorage?",
  answer: "sessionStorage stores data for one tab session. Data is removed when tab is closed.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 65,
  question: "What is JSON?",
  answer: "JSON stands for JavaScript Object Notation. It is used to store and transfer data in key-value format.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 66,
  question: "What is JSON.stringify()?",
  answer: "JSON.stringify converts JavaScript object into JSON string. It is used before sending data to server.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 67,
  question: "What is JSON.parse()?",
  answer: "JSON.parse converts JSON string into JavaScript object. It is used after receiving data from server.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 68,
  question: "What is the Fetch API?",
  answer: "Fetch API is used to make HTTP requests to server. It returns a promise and is used for API calls.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 69,
  question: "What is error handling in JavaScript?",
  answer: "Error handling is used to manage errors in code. It is done using try, catch and finally blocks.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 70,
  question: "What is try-catch in JavaScript?",
  answer: "try block contains code that may give error. catch block handles the error and prevents program crash.",
  topic: "javascript",
  level: "beginner"
},
{
  id: 71,
  question: "How does async/await work in JavaScript?",
  answer: "async/await is used to handle promises in simple way. async function returns a promise and await waits for the result before moving to next line.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 72,
  question: "How do you handle errors with async/await?",
  answer: "Use try and catch block with async/await. If error happens in await, it will go to catch block.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 73,
  question: "What is Promise chaining?",
  answer: "Promise chaining means using multiple .then() methods one after another. Each then gets result from previous step.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 74,
  question: "What are Promise.resolve() and Promise.reject()?",
  answer: "Promise.resolve creates a resolved promise with value. Promise.reject creates a rejected promise with error.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 75,
  question: "What is finally() in Promises?",
  answer: "finally runs after promise is completed. It runs for both success and failure. It is used for cleanup code.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 76,
  question: "What is execution order in the event loop?",
  answer: "First synchronous code runs. Then microtasks like promises run. After that macrotasks like setTimeout run.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 77,
  question: "What is the difference between microtasks and macrotasks?",
  answer: "Microtasks have higher priority and run first like promise callbacks. Macrotasks run later like setTimeout.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 78,
  question: "What is debouncing in JavaScript?",
  answer: "Debouncing delays function execution until user stops action. It is useful for search input and resize events.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 79,
  question: "What is throttling in JavaScript?",
  answer: "Throttling limits function execution to fixed time interval. It prevents function from running too many times.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 80,
  question: "What are modern DOM selection methods?",
  answer: "querySelector selects first matching element. querySelectorAll selects all matching elements using CSS selectors.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 81,
  question: "How do you create, insert, and remove DOM elements?",
  answer: "Use createElement to create element. Use append or prepend to insert into DOM. Use remove or removeChild to delete element.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 82,
  question: "What is event delegation and why is it useful?",
  answer: "Event delegation means adding event listener to parent element instead of each child. It improves performance and works for dynamic elements.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 83,
  question: "What is classList in JavaScript?",
  answer: "classList is used to add, remove, toggle and check CSS classes of an element. It makes class handling easy.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 84,
  question: "What is dataset in JavaScript?",
  answer: "dataset is used to access custom data attributes of HTML elements. Example data-id can be accessed using element.dataset.id.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 85,
  question: "What is the difference between innerHTML and textContent?",
  answer: "innerHTML can read and write HTML tags. textContent returns only text. innerHTML can be unsafe if used with user input.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 86,
  question: "What is the Browser Object Model (BOM)?",
  answer: "BOM allows JavaScript to interact with browser. It includes objects like window, location, history and navigator.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 87,
  question: "What is window object in JavaScript?",
  answer: "window is global object in browser. All global variables and functions are part of window object.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 88,
  question: "What is location object in JavaScript?",
  answer: "location object contains information about current URL. It can be used to redirect or reload page.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 89,
  question: "What is navigator object in JavaScript?",
  answer: "navigator object gives information about browser and device like user agent, platform and online status.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 90,
  question: "What is history object in JavaScript?",
  answer: "history object is used to navigate browser history. Methods like back, forward and go are available.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 91,
  question: "What is ES6 in JavaScript?",
  answer: "ES6 is a version of JavaScript released in 2015. It introduced new features like let, const, arrow functions, classes and modules.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 92,
  question: "What are modules in JavaScript?",
  answer: "Modules are used to split code into separate files. You can export code from one file and import into another file.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 93,
  question: "What is export and import in JavaScript?",
  answer: "export is used to send variables or functions from a file. import is used to bring them into another file.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 94,
  question: "What is default export in JavaScript?",
  answer: "Default export allows only one main value to export from a file. It can be imported with any name.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 95,
  question: "What is named export in JavaScript?",
  answer: "Named export allows multiple values to export from a file. It must be imported using same name inside {}.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 96,
  question: "What is strict mode in JavaScript?",
  answer: "Strict mode is used to run code in strict way. It helps to catch errors and avoid unsafe actions. It is enabled using 'use strict'.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 97,
  question: "What is class in JavaScript?",
  answer: "Class is a blueprint to create objects. It contains properties and methods.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 98,
  question: "What is constructor in a class?",
  answer: "Constructor is a special method inside class. It runs when object is created and is used to initialize values.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 99,
  question: "What is inheritance in JavaScript?",
  answer: "Inheritance means one class can use properties and methods of another class using extends keyword.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 100,
  question: "What is super keyword in JavaScript?",
  answer: "super is used to call parent class constructor or methods from child class.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 101,
  question: "What is encapsulation in JavaScript?",
  answer: "Encapsulation means keeping data and methods inside a class and controlling access. It helps to protect data from outside changes.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 102,
  question: "What is polymorphism in JavaScript?",
  answer: "Polymorphism means same method name can have different behavior. It can be achieved using method overriding.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 103,
  question: "What is abstraction in JavaScript?",
  answer: "Abstraction means hiding internal details and showing only important features. It helps to reduce complexity.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 104,
  question: "What is prototypal inheritance in JavaScript?",
  answer: "Prototypal inheritance means objects can inherit properties from other objects using prototype chain.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 105,
  question: "What is prototype in JavaScript?",
  answer: "Prototype is an object from which other objects can inherit properties and methods.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 106,
  question: "What is __proto__ in JavaScript?",
  answer: "__proto__ is a reference to the object's prototype. It is used to access prototype chain.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 107,
  question: "What is call(), apply(), and bind() in JavaScript?",
  answer: "call and apply are used to call function with specific this value. bind returns a new function with fixed this value.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 108,
  question: "What is currying in JavaScript?",
  answer: "Currying means converting a function with multiple arguments into multiple functions with one argument each.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 109,
  question: "What is memoization in JavaScript?",
  answer: "Memoization is optimization technique. It stores result of function calls and reuses them to improve performance.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 110,
  question: "What is recursion in JavaScript?",
  answer: "Recursion is when a function calls itself. It is used to solve problems like factorial and tree structures.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 111,
  question: "What is a higher-order function in JavaScript?",
  answer: "A higher-order function is a function that takes another function as argument or returns a function. Example is map, filter and reduce.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 112,
  question: "What is function composition in JavaScript?",
  answer: "Function composition means combining multiple functions to create a new function. Output of one function becomes input of another.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 113,
  question: "What is pure function in JavaScript?",
  answer: "Pure function always returns same output for same input. It does not change external data or have side effects.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 114,
  question: "What are side effects in JavaScript?",
  answer: "Side effects are changes outside the function like modifying global variable or DOM. Pure functions avoid side effects.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 115,
  question: "What is immutability in JavaScript?",
  answer: "Immutability means data cannot be changed after creation. Instead of modifying, new data is created.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 116,
  question: "What is shallow copy and deep copy?",
  answer: "Shallow copy copies only first level. Deep copy copies all nested levels. Changes in deep copy do not affect original.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 117,
  question: "What is Object.create()?",
  answer: "Object.create is used to create a new object using an existing object as prototype.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 118,
  question: "What is Object.defineProperty()?",
  answer: "Object.defineProperty is used to define or modify properties with control like writable, enumerable and configurable.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 119,
  question: "What is Object.seal()?",
  answer: "Object.seal prevents adding or removing properties. But existing properties can still be updated.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 120,
  question: "What is Object.is()?",
  answer: "Object.is compares two values strictly. It is similar to === but handles NaN and -0 correctly.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 121,
  question: "What is a Set in JavaScript?",
  answer: "Set is a collection of unique values. It does not allow duplicate values and maintains insertion order.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 122,
  question: "What is a Map in JavaScript?",
  answer: "Map is a collection of key-value pairs. Keys can be of any data type and it keeps insertion order.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 123,
  question: "What is WeakSet in JavaScript?",
  answer: "WeakSet is similar to Set but stores only objects. It does not prevent garbage collection.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 124,
  question: "What is WeakMap in JavaScript?",
  answer: "WeakMap is similar to Map but keys must be objects. It allows garbage collection of unused objects.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 125,
  question: "What is garbage collection in JavaScript?",
  answer: "Garbage collection is automatic memory cleanup process. It removes unused objects from memory.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 126,
  question: "What is memory leak in JavaScript?",
  answer: "Memory leak happens when memory is not released properly. It can slow down application.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 127,
  question: "What is a Web Worker?",
  answer: "Web Worker is used to run JavaScript in background thread. It helps to avoid blocking main UI.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 128,
  question: "What is a Service Worker?",
  answer: "Service Worker runs in background and is used for caching, offline support and push notifications.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 129,
  question: "What is Progressive Web App (PWA)?",
  answer: "PWA is a web application that works like mobile app. It supports offline mode and can be installed on device.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 130,
  question: "What is CORS in JavaScript?",
  answer: "CORS means Cross-Origin Resource Sharing. It allows or blocks requests between different domains.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 131,
  question: "What is AJAX in JavaScript?",
  answer: "AJAX stands for Asynchronous JavaScript and XML. It is used to send and receive data from server without reloading the page.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 132,
  question: "What is the difference between synchronous and asynchronous requests?",
  answer: "Synchronous request blocks execution until response comes. Asynchronous request runs in background and does not block code.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 133,
  question: "What is XMLHttpRequest?",
  answer: "XMLHttpRequest is old way to make HTTP requests in JavaScript. It is replaced by fetch API in modern apps.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 134,
  question: "What is REST API?",
  answer: "REST API is a way to communicate between client and server using HTTP methods like GET, POST, PUT and DELETE.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 135,
  question: "What is GraphQL?",
  answer: "GraphQL is a query language for APIs. It allows client to request only required data instead of full response.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 136,
  question: "What is JWT (JSON Web Token)?",
  answer: "JWT is a token used for authentication. It securely transfers user data between client and server.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 137,
  question: "What is authentication and authorization?",
  answer: "Authentication checks who the user is. Authorization checks what the user is allowed to do.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 138,
  question: "What is HTTPS?",
  answer: "HTTPS is secure version of HTTP. It encrypts data between client and server for safety.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 139,
  question: "What is XSS (Cross-Site Scripting)?",
  answer: "XSS is a security attack where attacker injects malicious script into web page. It can steal user data.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 140,
  question: "What is CSRF (Cross-Site Request Forgery)?",
  answer: "CSRF is an attack where unauthorized actions are performed on behalf of user without their knowledge.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 141,
  question: "What is SEO in web development?",
  answer: "SEO means Search Engine Optimization. It helps website rank better in search results.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 142,
  question: "What is performance optimization in JavaScript?",
  answer: "Performance optimization means improving speed and efficiency of application. It includes reducing load time and memory usage.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 143,
  question: "What is lazy loading in JavaScript?",
  answer: "Lazy loading means loading resources only when needed. It helps to improve performance and reduce initial load time.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 144,
  question: "What is code splitting?",
  answer: "Code splitting means breaking code into smaller parts and loading them when required. It improves performance.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 145,
  question: "What is tree shaking?",
  answer: "Tree shaking removes unused code from final bundle. It helps to reduce file size.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 146,
  question: "What is bundling in JavaScript?",
  answer: "Bundling means combining multiple files into one file using tools like Webpack or Vite.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 147,
  question: "What is transpiling?",
  answer: "Transpiling means converting modern JavaScript code into older version so it can run in all browsers.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 148,
  question: "What is Babel?",
  answer: "Babel is a tool used to transpile modern JavaScript into older version for browser compatibility.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 149,
  question: "What is Webpack?",
  answer: "Webpack is a module bundler. It bundles JavaScript, CSS and other files into one or more files.",
  topic: "javascript",
  level: "intermediate"
},
{
  id: 150,
  question: "What is Vite?",
  answer: "Vite is a modern build tool. It provides fast development server and quick build process.",
  topic: "javascript",
  level: "intermediate"
}
]