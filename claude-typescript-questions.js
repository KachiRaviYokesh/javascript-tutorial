window.TYPESCRIPT_QUESTIONS = [
  {
    "id": 301,
    "question": "What is TypeScript?",
    "answer": "<p><strong>TypeScript</strong> is a superset of JavaScript made by Microsoft. Means everything that works in JavaScript also works in TypeScript, but TypeScript adds extra features on top - the biggest one being <strong>static types</strong>.</p>\n<p>The browser does not understand TypeScript directly. We write <code>.ts</code> files, then the TypeScript compiler (<code>tsc</code>) converts them into plain JavaScript, and that JS runs in the browser or Node.</p>\n<pre><code>// TypeScript file (greet.ts)\nfunction greet(name: string): string {\n  return \"Hello \" + name;\n}\n\nconsole.log(greet(\"Rahul\")); // works\n// console.log(greet(123));  // Error! number is not assignable to string\n</code></pre>\n<p><strong>In short:</strong> TypeScript = JavaScript + types + better tooling. It catches many bugs at compile time itself, before the code even runs.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 302,
    "question": "What is the difference between TypeScript and JavaScript?",
    "answer": "<p>Both are related but they have some key differences. JavaScript is a scripting language that runs directly in browsers. TypeScript is a typed version of JavaScript that needs to be compiled first.</p>\n<ul>\n  <li><strong>Typing:</strong> JS is dynamically typed. TS is statically typed.</li>\n  <li><strong>Compilation:</strong> JS runs as-is. TS must be compiled to JS.</li>\n  <li><strong>Error checking:</strong> JS errors come at runtime. TS catches many errors at compile time.</li>\n  <li><strong>Tooling:</strong> TS gives much better autocomplete and refactoring in editors like VS Code.</li>\n  <li><strong>Extra features:</strong> TS has interfaces, enums, generics, access modifiers - which plain JS does not have.</li>\n</ul>\n<pre><code>// JavaScript - no error until you run it\nfunction add(a, b) { return a + b; }\nadd(5, \"10\"); // \"510\" - silent bug\n\n// TypeScript - error before running\nfunction add(a: number, b: number): number { return a + b; }\n// add(5, \"10\"); // Compile error!\n</code></pre>\n<p>TypeScript is safer and more predictable for big projects.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 303,
    "question": "Why should we use TypeScript?",
    "answer": "<p>We use TypeScript because it makes our code more reliable and easier to maintain, especially in big projects. Let me give you the main reasons:</p>\n<ul>\n  <li><strong>Catches bugs early:</strong> You see errors in your editor itself, not after deploying to production.</li>\n  <li><strong>Better autocomplete:</strong> Editor suggests properties and methods automatically because it knows the types.</li>\n  <li><strong>Easier refactoring:</strong> Rename a variable and TS will update it everywhere safely.</li>\n  <li><strong>Self-documenting code:</strong> Types tell you what a function expects and returns - no need to read full code.</li>\n  <li><strong>Team friendly:</strong> When many people work together, types prevent miscommunication.</li>\n</ul>\n<pre><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nfunction sendEmail(user: User) {\n  console.log(\"Sending to \" + user.email);\n}\n\nsendEmail({ id: 1, name: \"Rahul\", email: \"r@x.com\" }); // OK\n// sendEmail({ id: 1, name: \"Rahul\" }); // Error! email missing\n</code></pre>\n<p>In real projects with 10+ developers, TypeScript saves hours of debugging every week.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 304,
    "question": "How do you install and compile TypeScript?",
    "answer": "<p>The process is very simple. You install TypeScript using npm, write your code in <code>.ts</code> files, and then run the <code>tsc</code> compiler to convert them into <code>.js</code> files.</p>\n<pre><code># Install globally\nnpm install -g typescript\n\n# Or install in project\nnpm install --save-dev typescript\n\n# Check version\ntsc --version\n\n# Compile a single file\ntsc app.ts        // creates app.js\n\n# Compile in watch mode (recompiles on save)\ntsc app.ts --watch\n\n# Initialize a tsconfig.json for the whole project\ntsc --init\n\n# Compile whole project based on tsconfig\ntsc\n</code></pre>\n<p>Once you have <code>tsconfig.json</code>, just running <code>tsc</code> compiles all <code>.ts</code> files in your project as per the config rules. That's the standard way in real projects.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 305,
    "question": "What is tsconfig.json?",
    "answer": "<p><strong>tsconfig.json</strong> is the configuration file for TypeScript. It tells the compiler how to behave - which files to include, which version of JS to output, how strict to be, where to put output files, and many other things.</p>\n<pre><code>{\n  \"compilerOptions\": {\n    \"target\": \"ES2020\",          // output JS version\n    \"module\": \"commonjs\",         // module system\n    \"strict\": true,               // enable all strict checks\n    \"outDir\": \"./dist\",           // where to put compiled files\n    \"rootDir\": \"./src\",           // source folder\n    \"esModuleInterop\": true,      // better import compatibility\n    \"skipLibCheck\": true,         // skip type checking node_modules\n    \"sourceMap\": true             // generate .map files for debugging\n  },\n  \"include\": [\"src/**/*\"],\n  \"exclude\": [\"node_modules\", \"dist\"]\n}\n</code></pre>\n<p>You generate it using <code>tsc --init</code>. After that, just running <code>tsc</code> in the project root compiles everything based on this file.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 306,
    "question": "What are the basic types in TypeScript?",
    "answer": "<p>TypeScript has all the basic types you would expect, plus some extra ones. Let me show you the most common ones:</p>\n<pre><code>// Primitive types\nlet name: string = \"Rahul\";\nlet age: number = 25;\nlet isActive: boolean = true;\n\n// Arrays - two ways to write\nlet scores: number[] = [10, 20, 30];\nlet names: Array&lt;string&gt; = [\"Amit\", \"Riya\"];\n\n// Tuple - fixed length, fixed types\nlet user: [string, number] = [\"Rahul\", 25];\n\n// Enum\nenum Role { Admin, User, Guest }\nlet myRole: Role = Role.Admin;\n\n// Any - escape hatch, avoid if possible\nlet anything: any = \"hello\";\nanything = 42; // OK\n\n// Unknown - safer any\nlet value: unknown = \"hi\";\n\n// Void - functions that return nothing\nfunction log(msg: string): void { console.log(msg); }\n\n// Null and undefined\nlet x: null = null;\nlet y: undefined = undefined;\n\n// Never - functions that never return\nfunction error(msg: string): never { throw new Error(msg); }\n</code></pre>\n<p>These are the building blocks. Everything else in TypeScript is built on top of these basic types.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 307,
    "question": "What is the 'any' type and when should you avoid it?",
    "answer": "<p><strong>any</strong> is a special type that basically tells TypeScript \"don't check this, I will handle it myself\". When you use <code>any</code>, you lose all the type safety - it becomes like plain JavaScript.</p>\n<pre><code>let value: any = \"hello\";\nvalue = 42;          // OK\nvalue = true;        // OK\nvalue.foo.bar.baz;   // No error, but will crash at runtime!\n</code></pre>\n<p><strong>When to avoid:</strong> Almost always. Using <code>any</code> defeats the whole purpose of using TypeScript. It is like writing JavaScript with extra steps.</p>\n<p><strong>When it is OK:</strong></p>\n<ul>\n  <li>Migrating an old JS project to TS gradually</li>\n  <li>Working with truly dynamic data where you really don't know the type</li>\n  <li>Quick prototype or experiment</li>\n</ul>\n<p><strong>Better alternative:</strong> Use <code>unknown</code> instead. It is also flexible but forces you to check the type before using it.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 308,
    "question": "What is the difference between 'any' and 'unknown'?",
    "answer": "<p>Both <strong>any</strong> and <strong>unknown</strong> can hold any value, but they behave very differently. <code>any</code> is unsafe, <code>unknown</code> is safe.</p>\n<ul>\n  <li><strong>any:</strong> You can do anything with it. No checks. Bugs slip through.</li>\n  <li><strong>unknown:</strong> You must first check or narrow the type before using it. Forces you to be safe.</li>\n</ul>\n<pre><code>let a: any = \"hello\";\na.toUpperCase();    // No error, works\na.foo();            // No error, but crashes at runtime\n\nlet u: unknown = \"hello\";\n// u.toUpperCase(); // Error! Object is of type 'unknown'\n\n// You must narrow first\nif (typeof u === \"string\") {\n  u.toUpperCase();  // Now it works, TS knows u is string here\n}\n</code></pre>\n<p><strong>Rule of thumb:</strong> If you are tempted to use <code>any</code>, try <code>unknown</code> first. It gives flexibility but keeps you safe.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 309,
    "question": "What is type inference in TypeScript?",
    "answer": "<p><strong>type inference</strong> means TypeScript automatically figures out the type of a variable from the value you assign, without you writing the type explicitly.</p>\n<pre><code>// You don't need to write : string\nlet name = \"Rahul\";    // TS infers: string\nlet age = 25;          // TS infers: number\nlet isActive = true;   // TS infers: boolean\n\n// name = 5;           // Error! number not assignable to string\n\n// Works with functions too\nfunction add(a: number, b: number) {\n  return a + b;        // TS infers return type as number\n}\n\nconst result = add(2, 3); // result is inferred as number\n</code></pre>\n<p>Because of inference, you don't have to write types everywhere. Write them when needed - usually for function parameters, public APIs, or when inference is not clear enough.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 310,
    "question": "What are tuples in TypeScript?",
    "answer": "<p>A <strong>tuple</strong> is like an array but with a fixed number of elements and fixed types for each position. The order matters.</p>\n<pre><code>// A tuple with string and number\nlet user: [string, number] = [\"Rahul\", 25];\n\nuser[0].toUpperCase(); // OK - TS knows index 0 is string\nuser[1].toFixed(2);    // OK - TS knows index 1 is number\n\n// user = [25, \"Rahul\"]; // Error! wrong order\n// user = [\"Rahul\"];     // Error! length mismatch\n\n// Optional tuple element\nlet point: [number, number, number?] = [10, 20];\n\n// Rest in tuple\nlet team: [string, ...number[]] = [\"Players\", 1, 2, 3];\n\n// Common use - returning multiple values\nfunction getUser(): [string, number] {\n  return [\"Amit\", 30];\n}\nconst [name, age] = getUser();\n</code></pre>\n<p>Tuples are useful when a function returns multiple related values, like React's <code>useState</code> which returns <code>[value, setter]</code>.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 311,
    "question": "What are enums in TypeScript?",
    "answer": "<p>An <strong>enum</strong> is a way to give friendly names to a set of related constant values. Instead of using random numbers or strings everywhere, you group them under one name.</p>\n<pre><code>// Numeric enum (default starts from 0)\nenum Role {\n  Admin,    // 0\n  User,     // 1\n  Guest     // 2\n}\n\nlet myRole: Role = Role.Admin;\nconsole.log(myRole); // 0\n\n// String enum (more readable)\nenum Status {\n  Active = \"ACTIVE\",\n  Inactive = \"INACTIVE\",\n  Pending = \"PENDING\"\n}\n\nlet s: Status = Status.Active;\nconsole.log(s); // \"ACTIVE\"\n\n// Use in functions\nfunction setStatus(status: Status) {\n  console.log(\"Status: \" + status);\n}\nsetStatus(Status.Pending);\n</code></pre>\n<p>String enums are usually preferred because they are easier to debug. In modern TS, many people use <strong>union of literal types</strong> or <code>as const</code> objects instead of enums, because they are lighter at runtime.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 312,
    "question": "What is the difference between void and never?",
    "answer": "<p>Both look similar but they mean different things. <strong>void</strong> means a function returns nothing. <strong>never</strong> means a function never returns at all.</p>\n<pre><code>// void - function finishes but returns no value\nfunction logMessage(msg: string): void {\n  console.log(msg);\n  // implicitly returns undefined\n}\n\n// never - function never finishes normally\nfunction throwError(msg: string): never {\n  throw new Error(msg);\n  // code after this is unreachable\n}\n\nfunction infiniteLoop(): never {\n  while (true) {\n    console.log(\"running forever\");\n  }\n}\n</code></pre>\n<p><strong>Difference in simple words:</strong></p>\n<ul>\n  <li><code>void</code> - function reaches the end but gives back nothing</li>\n  <li><code>never</code> - function does not reach the end (throws or runs forever)</li>\n</ul>\n<p><code>never</code> is also useful in exhaustive checks with discriminated unions.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 313,
    "question": "What is a type alias?",
    "answer": "<p>A <strong>type alias</strong> is a way to give a custom name to any type. It does not create a new type - it is just a shortcut for an existing type. We use the <code>type</code> keyword.</p>\n<pre><code>// Simple alias\ntype ID = number | string;\n\nlet userId: ID = 101;\nuserId = \"abc-123\"; // also OK\n\n// Object type alias\ntype User = {\n  id: number;\n  name: string;\n  email: string;\n};\n\nconst u: User = { id: 1, name: \"Rahul\", email: \"r@x.com\" };\n\n// Function type alias\ntype Greet = (name: string) =&gt; string;\n\nconst hello: Greet = (name) =&gt; \"Hi \" + name;\n</code></pre>\n<p>Type aliases make complex types reusable and easier to read. They work with primitives, unions, intersections, tuples - basically any type.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 314,
    "question": "What is an interface in TypeScript?",
    "answer": "<p>An <strong>interface</strong> is a way to describe the shape of an object - what properties it has and what types they should be. It is like a contract that an object must follow.</p>\n<pre><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst u: User = {\n  id: 1,\n  name: \"Rahul\",\n  email: \"r@x.com\"\n};\n\n// Missing field gives error\n// const bad: User = { id: 2, name: \"Amit\" }; // Error: email missing\n\n// Use in function\nfunction printUser(user: User) {\n  console.log(user.name + \" - \" + user.email);\n}\n\n// Interface for a class\ninterface Animal {\n  name: string;\n  sound(): void;\n}\n\nclass Dog implements Animal {\n  name = \"Tommy\";\n  sound() { console.log(\"Bark\"); }\n}\n</code></pre>\n<p>Interfaces are very common in TypeScript projects. They make it clear what data structures are expected.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 315,
    "question": "What are optional and readonly properties?",
    "answer": "<p><strong>Optional</strong> properties may or may not be present, marked with <code>?</code>. <strong>Readonly</strong> properties cannot be changed after the object is created, marked with <code>readonly</code>.</p>\n<pre><code>interface User {\n  readonly id: number;   // cannot be changed\n  name: string;\n  email?: string;        // optional - may be missing\n}\n\nconst u: User = { id: 1, name: \"Rahul\" }; // email is optional, OK\nconsole.log(u.email);  // undefined\n\nu.name = \"Amit\";       // OK\n// u.id = 2;           // Error! id is readonly\n\n// Optional in function parameters\nfunction greet(name: string, age?: number) {\n  if (age) console.log(name + \" is \" + age);\n  else console.log(\"Hi \" + name);\n}\n\ngreet(\"Rahul\");        // OK\ngreet(\"Rahul\", 25);    // also OK\n</code></pre>\n<p><code>readonly</code> is like <code>const</code> but for object properties. <code>?</code> is great when some fields are not always required.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 316,
    "question": "How do you type a function in TypeScript?",
    "answer": "<p>You can type a function in several ways - by annotating parameters and return type directly, or by using a type alias / interface for the whole function signature.</p>\n<pre><code>// 1. Direct annotation\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// 2. Arrow function with annotations\nconst multiply = (a: number, b: number): number =&gt; a * b;\n\n// 3. Function type alias\ntype MathOp = (a: number, b: number) =&gt; number;\nconst sub: MathOp = (a, b) =&gt; a - b;\n\n// 4. Interface for function\ninterface Greeter {\n  (name: string): string;\n}\nconst hello: Greeter = (name) =&gt; \"Hi \" + name;\n\n// 5. Optional and default parameters\nfunction log(msg: string, level: string = \"info\", tag?: string) {\n  console.log(`[${level}] ${tag ?? \"\"} ${msg}`);\n}\n\n// 6. Rest parameters\nfunction sum(...nums: number[]): number {\n  return nums.reduce((a, b) =&gt; a + b, 0);\n}\n</code></pre>\n<p>If TypeScript can infer the return type, you don't need to write it. But for public APIs, writing it makes the code clearer.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 317,
    "question": "What are union types?",
    "answer": "<p>A <strong>union type</strong> means a value can be one of several types. We write it using the <code>|</code> symbol.</p>\n<pre><code>// id can be number OR string\nlet id: number | string;\nid = 101;       // OK\nid = \"abc-1\";   // also OK\n// id = true;   // Error!\n\n// Function with union parameter\nfunction printId(id: number | string) {\n  if (typeof id === \"string\") {\n    console.log(id.toUpperCase()); // string method\n  } else {\n    console.log(id.toFixed(2));    // number method\n  }\n}\n\n// Union of literal types - very common\ntype Direction = \"up\" | \"down\" | \"left\" | \"right\";\nlet move: Direction = \"up\";\n// move = \"forward\"; // Error!\n\n// Union with object types\ntype Success = { status: \"ok\"; data: string };\ntype Failure = { status: \"error\"; message: string };\ntype Result = Success | Failure;\n</code></pre>\n<p>Union types are extremely useful. They let you describe values that can take multiple shapes safely.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 318,
    "question": "What are literal types?",
    "answer": "<p>A <strong>literal type</strong> means the value can only be that exact value, not the whole type. So instead of <code>string</code>, you say it must be exactly <code>\"red\"</code> or <code>\"blue\"</code>.</p>\n<pre><code>// string literal type\nlet color: \"red\" | \"green\" | \"blue\";\ncolor = \"red\";    // OK\n// color = \"yellow\"; // Error!\n\n// number literal type\nlet dice: 1 | 2 | 3 | 4 | 5 | 6;\ndice = 3;\n// dice = 7; // Error!\n\n// boolean literal\nlet alwaysTrue: true = true;\n\n// Combine with object types\ntype Button = {\n  type: \"primary\" | \"secondary\" | \"danger\";\n  size: \"sm\" | \"md\" | \"lg\";\n};\n\nconst b: Button = { type: \"primary\", size: \"md\" };\n</code></pre>\n<p>Literal types are usually combined with union types. They are perfect for representing a small fixed set of options like sizes, statuses, or directions.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 319,
    "question": "What is the difference between type and interface?",
    "answer": "<p>Both <strong>type</strong> and <strong>interface</strong> can describe the shape of an object, but they have some differences. For most cases they are interchangeable.</p>\n<ul>\n  <li><strong>interface:</strong> Best for object shapes. Supports declaration merging (you can declare same interface twice and they combine).</li>\n  <li><strong>type:</strong> More flexible. Can describe primitives, unions, intersections, tuples, and complex types.</li>\n</ul>\n<pre><code>// Both can describe objects\ninterface UserI {\n  name: string;\n  age: number;\n}\n\ntype UserT = {\n  name: string;\n  age: number;\n};\n\n// Only type can do unions\ntype ID = number | string;\n\n// Only interface supports declaration merging\ninterface Animal { name: string; }\ninterface Animal { age: number; }\n// Now Animal has both name and age\n\n// Both support extending\ninterface Admin extends UserI { role: string; }\ntype AdminT = UserT &amp; { role: string; };\n</code></pre>\n<p><strong>Rule:</strong> Use <code>interface</code> for object shapes and class contracts. Use <code>type</code> for unions, intersections, and complex stuff. Both are fine in most cases.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 320,
    "question": "What is type assertion in TypeScript?",
    "answer": "<p><strong>Type assertion</strong> is a way to tell TypeScript \"trust me, I know what type this is\". It does not change the actual value at runtime - it only tells the compiler to treat the value as a different type.</p>\n<pre><code>// Using 'as' syntax (recommended)\nlet someValue: unknown = \"Hello World\";\nlet length: number = (someValue as string).length;\n\n// Old angle bracket syntax (does not work in JSX/TSX)\nlet len2: number = (&lt;string&gt;someValue).length;\n\n// Common use - DOM elements\nconst input = document.getElementById(\"name\") as HTMLInputElement;\ninput.value = \"Rahul\"; // now TS knows input has .value\n\n// Be careful - assertion does not check\nlet x: any = \"hello\";\nlet num = x as number; // TS allows this\n// num.toFixed(2); // crashes at runtime!\n</code></pre>\n<p>Type assertion is like a cast but without runtime conversion. Use it only when you really know more than TypeScript does. Otherwise prefer proper type guards.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 321,
    "question": "What are intersection types?",
    "answer": "<p>An <strong>intersection type</strong> combines multiple types into one. The new type has all the properties of every type combined. We use the <code>&amp;</code> symbol.</p>\n<pre><code>type User = {\n  id: number;\n  name: string;\n};\n\ntype Admin = {\n  role: string;\n  permissions: string[];\n};\n\n// Intersection - must have ALL fields\ntype AdminUser = User &amp; Admin;\n\nconst a: AdminUser = {\n  id: 1,\n  name: \"Rahul\",\n  role: \"superadmin\",\n  permissions: [\"read\", \"write\", \"delete\"]\n};\n\n// Useful for mixins\ntype Timestamped = { createdAt: Date; updatedAt: Date };\ntype Post = { title: string; content: string } &amp; Timestamped;\n</code></pre>\n<p><strong>Difference from union:</strong></p>\n<ul>\n  <li><code>A | B</code> - value is A OR B</li>\n  <li><code>A &amp; B</code> - value is A AND B (has everything from both)</li>\n</ul>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 322,
    "question": "What is type narrowing?",
    "answer": "<p><strong>Type narrowing</strong> is when TypeScript figures out a more specific type based on checks you do in your code. It starts wide (like <code>string | number</code>) and narrows down inside an <code>if</code> block.</p>\n<pre><code>function printValue(val: string | number) {\n  if (typeof val === \"string\") {\n    // Inside this block, TS knows val is string\n    console.log(val.toUpperCase());\n  } else {\n    // Here, TS knows val is number\n    console.log(val.toFixed(2));\n  }\n}\n\n// Narrowing with truthiness\nfunction greet(name?: string) {\n  if (name) {\n    // here name is string, not undefined\n    console.log(name.toUpperCase());\n  }\n}\n\n// Narrowing with equality\nfunction example(x: string | number, y: string | boolean) {\n  if (x === y) {\n    // x and y must both be string here\n    console.log(x.toUpperCase());\n  }\n}\n</code></pre>\n<p>Narrowing is one of TypeScript's superpowers. It lets you write safe code without writing extra type assertions everywhere.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 323,
    "question": "What are type guards in TypeScript?",
    "answer": "<p><strong>Type guards</strong> are checks that help TypeScript narrow down types. There are several built-in ones, plus you can write your own custom type guards.</p>\n<pre><code>// 1. typeof - for primitives\nfunction f(x: string | number) {\n  if (typeof x === \"string\") x.toUpperCase();\n}\n\n// 2. instanceof - for class instances\nclass Dog { bark() {} }\nclass Cat { meow() {} }\nfunction sound(a: Dog | Cat) {\n  if (a instanceof Dog) a.bark();\n  else a.meow();\n}\n\n// 3. 'in' operator - check property existence\ntype Fish = { swim: () =&gt; void };\ntype Bird = { fly: () =&gt; void };\nfunction move(animal: Fish | Bird) {\n  if (\"swim\" in animal) animal.swim();\n  else animal.fly();\n}\n\n// 4. Custom type guard (user-defined)\nfunction isString(val: unknown): val is string {\n  return typeof val === \"string\";\n}\n\nfunction process(val: unknown) {\n  if (isString(val)) {\n    val.toUpperCase(); // TS knows val is string\n  }\n}\n</code></pre>\n<p>The <code>val is string</code> syntax is called a <strong>type predicate</strong>. It tells TS that if the function returns true, the value is of that type.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 324,
    "question": "What are discriminated unions?",
    "answer": "<p>A <strong>discriminated union</strong> (also called tagged union) is a union of object types where each one has a common literal property that tells you which type it is. Very useful for handling different shapes of data safely.</p>\n<pre><code>type Square = {\n  kind: \"square\";\n  size: number;\n};\n\ntype Circle = {\n  kind: \"circle\";\n  radius: number;\n};\n\ntype Rectangle = {\n  kind: \"rectangle\";\n  width: number;\n  height: number;\n};\n\ntype Shape = Square | Circle | Rectangle;\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case \"square\":\n      return shape.size * shape.size;\n    case \"circle\":\n      return Math.PI * shape.radius ** 2;\n    case \"rectangle\":\n      return shape.width * shape.height;\n  }\n}\n</code></pre>\n<p>The <code>kind</code> field is the <strong>discriminator</strong>. TypeScript narrows the type automatically inside each case. This pattern is very common in real-world TS code.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 325,
    "question": "What are generics in TypeScript?",
    "answer": "<p><strong>Generics</strong> let you write reusable code that works with multiple types, while still keeping type safety. Think of them as type variables - you tell the function or class \"work with whatever type the user passes\".</p>\n<pre><code>// Without generics - lose type info\nfunction firstAny(arr: any[]): any {\n  return arr[0];\n}\n\n// With generics - keep type info\nfunction first&lt;T&gt;(arr: T[]): T {\n  return arr[0];\n}\n\nconst n = first([1, 2, 3]);     // n is number\nconst s = first([\"a\", \"b\"]);    // s is string\n\n// Generic with multiple type params\nfunction pair&lt;A, B&gt;(a: A, b: B): [A, B] {\n  return [a, b];\n}\n\nconst p = pair(\"Rahul\", 25); // [string, number]\n\n// Generic interface\ninterface Box&lt;T&gt; {\n  value: T;\n}\nconst box: Box&lt;number&gt; = { value: 42 };\n</code></pre>\n<p>Generics are like function parameters but for types. They make your code flexible and type-safe at the same time.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 326,
    "question": "What are generic constraints?",
    "answer": "<p>Sometimes you don't want a generic to accept any type - you want to restrict it to types that have certain properties. We do this using the <code>extends</code> keyword inside the generic declaration.</p>\n<pre><code>// Without constraint - error, T might not have .length\n// function logLength&lt;T&gt;(item: T) {\n//   console.log(item.length); // Error!\n// }\n\n// With constraint - T must have a 'length' property\nfunction logLength&lt;T extends { length: number }&gt;(item: T) {\n  console.log(item.length);\n}\n\nlogLength(\"hello\");          // OK - string has length\nlogLength([1, 2, 3]);        // OK - array has length\n// logLength(42);            // Error - number has no length\n\n// Constraint with keyof\nfunction getProp&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { name: \"Rahul\", age: 25 };\nconst n = getProp(user, \"name\"); // string\nconst a = getProp(user, \"age\");  // number\n// getProp(user, \"email\"); // Error! not a key of user\n</code></pre>\n<p>Constraints make generics more powerful and safer at the same time.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 327,
    "question": "What is the keyof operator?",
    "answer": "<p>The <strong>keyof</strong> operator takes an object type and gives you a union of its property names as string literal types.</p>\n<pre><code>type User = {\n  id: number;\n  name: string;\n  email: string;\n};\n\ntype UserKeys = keyof User;\n// UserKeys is \"id\" | \"name\" | \"email\"\n\nlet k: UserKeys = \"name\"; // OK\n// let k: UserKeys = \"age\"; // Error!\n\n// Common use - safe property access\nfunction get&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst u: User = { id: 1, name: \"Rahul\", email: \"r@x.com\" };\nconst name = get(u, \"name\");  // type is string\nconst id = get(u, \"id\");      // type is number\n</code></pre>\n<p><code>keyof</code> is the foundation of many advanced TypeScript patterns like mapped types and lookup types.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 328,
    "question": "What is the typeof operator in type context?",
    "answer": "<p>JavaScript has <code>typeof</code> at runtime. TypeScript also uses <code>typeof</code> in type positions to grab the type of an existing variable or value. Very handy when you have a value and want to reuse its type.</p>\n<pre><code>const user = {\n  id: 1,\n  name: \"Rahul\",\n  email: \"r@x.com\"\n};\n\n// Get the type of user\ntype User = typeof user;\n// User is { id: number; name: string; email: string }\n\nconst another: User = {\n  id: 2,\n  name: \"Amit\",\n  email: \"a@x.com\"\n};\n\n// Combine with keyof\ntype UserKey = keyof typeof user;\n// \"id\" | \"name\" | \"email\"\n\n// Useful with const objects\nconst Colors = {\n  red: \"#ff0000\",\n  green: \"#00ff00\",\n  blue: \"#0000ff\"\n} as const;\n\ntype ColorName = keyof typeof Colors; // \"red\" | \"green\" | \"blue\"\n</code></pre>\n<p>This pattern is super common - define a value, then derive its type instead of writing it twice.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 329,
    "question": "What are index signatures?",
    "answer": "<p>An <strong>index signature</strong> lets you describe an object whose property names you don't know in advance, but you know the type of all values.</p>\n<pre><code>// Any string key, value is number\ninterface Scores {\n  [name: string]: number;\n}\n\nconst s: Scores = {\n  rahul: 90,\n  amit: 85,\n  riya: 92\n};\n\ns.newGuy = 70; // OK\n\n// Mixed - known keys plus index signature\ninterface Config {\n  name: string;\n  version: string;\n  [key: string]: string; // any other key must be string too\n}\n\n// Number index\ninterface NumberDict {\n  [index: number]: string;\n}\nconst arr: NumberDict = [\"a\", \"b\", \"c\"];\n</code></pre>\n<p>Use index signatures for dictionaries, lookup tables, or dynamic config objects. For more strict structures, prefer <code>Record&lt;K, V&gt;</code> or specific keys.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 330,
    "question": "What are mapped types?",
    "answer": "<p><strong>Mapped types</strong> let you create new types by transforming each property of an existing type. They use <code>keyof</code> and a special syntax to loop over keys.</p>\n<pre><code>type User = {\n  id: number;\n  name: string;\n  email: string;\n};\n\n// Make all properties optional\ntype PartialUser = {\n  [K in keyof User]?: User[K];\n};\n\n// Make all properties readonly\ntype ReadonlyUser = {\n  readonly [K in keyof User]: User[K];\n};\n\n// Make all properties string\ntype Stringify&lt;T&gt; = {\n  [K in keyof T]: string;\n};\n\ntype StringUser = Stringify&lt;User&gt;;\n// { id: string; name: string; email: string }\n</code></pre>\n<p>Mapped types are the building block for utility types like <code>Partial</code>, <code>Required</code>, <code>Readonly</code>, and <code>Pick</code>. Once you understand them, you understand most of TypeScript's type magic.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 331,
    "question": "What are Partial, Required and Readonly utility types?",
    "answer": "<p>These are built-in <strong>utility types</strong> that transform an existing type. They are very commonly used and good to know by heart.</p>\n<pre><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\n// Partial - all fields become optional\ntype UserUpdate = Partial&lt;User&gt;;\n// { id?: number; name?: string; email?: string }\n\nfunction updateUser(id: number, data: Partial&lt;User&gt;) {\n  // can pass only fields you want to update\n}\nupdateUser(1, { name: \"Amit\" });\n\n// Required - all fields become required (opposite of Partial)\ninterface Profile { name?: string; age?: number; }\ntype FullProfile = Required&lt;Profile&gt;;\n// { name: string; age: number }\n\n// Readonly - all fields cannot be changed\ntype FrozenUser = Readonly&lt;User&gt;;\nconst u: FrozenUser = { id: 1, name: \"Rahul\", email: \"r@x.com\" };\n// u.name = \"Amit\"; // Error!\n</code></pre>\n<p>You will use <code>Partial</code> almost daily for update functions and forms.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 332,
    "question": "What are Pick and Omit utility types?",
    "answer": "<p><strong>Pick</strong> creates a new type by selecting specific keys from an existing type. <strong>Omit</strong> does the opposite - it removes specific keys.</p>\n<pre><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n  createdAt: Date;\n}\n\n// Pick - keep only what you need\ntype UserPreview = Pick&lt;User, \"id\" | \"name\"&gt;;\n// { id: number; name: string }\n\n// Omit - remove sensitive fields\ntype PublicUser = Omit&lt;User, \"password\"&gt;;\n// { id, name, email, createdAt }\n\n// Combine multiple\ntype LoginInput = Pick&lt;User, \"email\" | \"password\"&gt;;\n\n// Useful in API responses\nfunction getPublicUser(u: User): PublicUser {\n  const { password, ...rest } = u;\n  return rest;\n}\n</code></pre>\n<p>These are perfect for creating DTOs, API (Application Programming Interface) responses, and form input types from a single source-of-truth interface.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 333,
    "question": "What is the Record utility type?",
    "answer": "<p><strong>Record&lt;K, V&gt;</strong> creates an object type with keys of type K and values of type V. It is a clean way to type dictionaries and lookup tables.</p>\n<pre><code>// Dictionary of string to number\ntype Scores = Record&lt;string, number&gt;;\n\nconst s: Scores = {\n  rahul: 90,\n  amit: 85\n};\n\n// With specific keys (literal union)\ntype Role = \"admin\" | \"user\" | \"guest\";\ntype Permissions = Record&lt;Role, string[]&gt;;\n\nconst p: Permissions = {\n  admin: [\"read\", \"write\", \"delete\"],\n  user: [\"read\", \"write\"],\n  guest: [\"read\"]\n};\n// missing any role gives error - safer than index signature\n\n// Record with object value\ntype Users = Record&lt;number, { name: string; email: string }&gt;;\nconst users: Users = {\n  1: { name: \"Rahul\", email: \"r@x.com\" },\n  2: { name: \"Amit\", email: \"a@x.com\" }\n};\n</code></pre>\n<p><code>Record</code> is more strict and readable than an index signature when keys are known.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 334,
    "question": "What are ReturnType and Parameters utility types?",
    "answer": "<p><strong>ReturnType</strong> extracts the return type of a function. <strong>Parameters</strong> extracts the parameter types as a tuple.</p>\n<pre><code>function getUser(id: number) {\n  return { id, name: \"Rahul\", email: \"r@x.com\" };\n}\n\n// Get return type\ntype User = ReturnType&lt;typeof getUser&gt;;\n// { id: number; name: string; email: string }\n\n// Get parameter types\ntype GetUserParams = Parameters&lt;typeof getUser&gt;;\n// [number]\n\nfunction add(a: number, b: number, c?: number) {\n  return a + b + (c ?? 0);\n}\n\ntype AddParams = Parameters&lt;typeof add&gt;;\n// [number, number, (number | undefined)?]\n\ntype AddReturn = ReturnType&lt;typeof add&gt;;\n// number\n</code></pre>\n<p>These are extremely useful when you want to reuse types from existing functions instead of writing them again. Common in wrappers, decorators, and HOCs.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 335,
    "question": "How do classes work in TypeScript?",
    "answer": "<p>TypeScript adds extra features to JavaScript classes - access modifiers (<code>public</code>, <code>private</code>, <code>protected</code>), <code>readonly</code>, parameter properties, and abstract classes.</p>\n<pre><code>class User {\n  // Access modifiers\n  public name: string;\n  private password: string;\n  protected email: string;\n  readonly id: number;\n\n  constructor(id: number, name: string, email: string, password: string) {\n    this.id = id;\n    this.name = name;\n    this.email = email;\n    this.password = password;\n  }\n\n  greet() {\n    console.log(\"Hi \" + this.name);\n  }\n}\n\n// Parameter properties - shortcut for declare + assign\nclass Product {\n  constructor(\n    public id: number,\n    public name: string,\n    private price: number\n  ) {}\n\n  getPrice() { return this.price; }\n}\n\n// Inheritance\nclass Admin extends User {\n  constructor(id: number, name: string, email: string, password: string, public role: string) {\n    super(id, name, email, password);\n  }\n}\n</code></pre>\n<p><code>private</code> blocks access from outside the class. <code>protected</code> allows access from subclasses. <code>public</code> is the default.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 336,
    "question": "What is the difference between private and #private?",
    "answer": "<p>TypeScript supports two ways to make class fields private - the <code>private</code> keyword and the JavaScript <code>#</code> prefix. They look similar but work differently.</p>\n<ul>\n  <li><strong>private (TS keyword):</strong> Only enforced at compile time. At runtime, the field is still accessible.</li>\n  <li><strong>#field (JS native):</strong> Truly private at runtime. Cannot be accessed from outside, even with hacks.</li>\n</ul>\n<pre><code>class A {\n  private secret = \"ts private\";\n  #realSecret = \"js private\";\n\n  show() {\n    console.log(this.secret, this.#realSecret);\n  }\n}\n\nconst a = new A();\n// a.secret;        // TS error, but works at runtime\n// (a as any).secret; // works! TS private is just a check\n// a.#realSecret;   // SyntaxError, truly private\n</code></pre>\n<p>If you need real privacy at runtime, use <code>#</code>. For most TypeScript code where you trust your team, the <code>private</code> keyword is fine and more readable.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 337,
    "question": "What are abstract classes?",
    "answer": "<p>An <strong>abstract class</strong> is a class that cannot be instantiated directly. It is meant to be extended by other classes. It can have abstract methods (no body) which subclasses must implement.</p>\n<pre><code>abstract class Animal {\n  constructor(public name: string) {}\n\n  // Concrete method - has implementation\n  describe() {\n    console.log(this.name + \" makes a sound\");\n  }\n\n  // Abstract method - no body, must be implemented\n  abstract sound(): void;\n}\n\n// const a = new Animal(\"X\"); // Error! cannot instantiate abstract\n\nclass Dog extends Animal {\n  sound() {\n    console.log(this.name + \" says Woof\");\n  }\n}\n\nclass Cat extends Animal {\n  sound() {\n    console.log(this.name + \" says Meow\");\n  }\n}\n\nnew Dog(\"Tommy\").sound(); // Tommy says Woof\nnew Cat(\"Kitty\").sound(); // Kitty says Meow\n</code></pre>\n<p>Abstract classes are useful when you want to share common code in a base class but force subclasses to provide certain methods.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 338,
    "question": "How do you use generics with classes?",
    "answer": "<p>You can make a class generic by adding type parameters in angle brackets after the class name. The whole class can then work with that type.</p>\n<pre><code>class Box&lt;T&gt; {\n  private items: T[] = [];\n\n  add(item: T): void {\n    this.items.push(item);\n  }\n\n  get(index: number): T | undefined {\n    return this.items[index];\n  }\n\n  getAll(): T[] {\n    return this.items;\n  }\n}\n\nconst numBox = new Box&lt;number&gt;();\nnumBox.add(1);\nnumBox.add(2);\n// numBox.add(\"x\"); // Error!\n\nconst strBox = new Box&lt;string&gt;();\nstrBox.add(\"hello\");\n\n// Multiple type params\nclass KeyValue&lt;K, V&gt; {\n  constructor(public key: K, public value: V) {}\n}\n\nconst kv = new KeyValue(\"name\", \"Rahul\");\n</code></pre>\n<p>Generic classes are perfect for collections, stores, and any data structure that should work with multiple types.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 339,
    "question": "How do you handle modules in TypeScript?",
    "answer": "<p>TypeScript uses the standard ES module syntax - <code>import</code> and <code>export</code>. Each file is its own module.</p>\n<pre><code>// math.ts - exporting\nexport function add(a: number, b: number) {\n  return a + b;\n}\n\nexport const PI = 3.14;\n\nexport interface Point {\n  x: number;\n  y: number;\n}\n\n// Default export\nexport default function multiply(a: number, b: number) {\n  return a * b;\n}\n\n// app.ts - importing\nimport multiply, { add, PI, Point } from \"./math\";\n\nconsole.log(add(2, 3));\nconsole.log(multiply(2, 3));\n\nconst p: Point = { x: 1, y: 2 };\n\n// Import everything\nimport * as math from \"./math\";\nmath.add(1, 2);\n\n// Type-only import (no runtime cost)\nimport type { Point } from \"./math\";\n</code></pre>\n<p>The <code>import type</code> form is good practice when you only need a type - the import gets removed entirely from the compiled JS output.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 340,
    "question": "What are namespaces in TypeScript?",
    "answer": "<p>A <strong>namespace</strong> is the older way of organizing code in TypeScript - it groups related code under a single name. Today, ES modules are preferred over namespaces, but you may still see them in legacy code or type declaration files.</p>\n<pre><code>namespace Geometry {\n  export interface Point {\n    x: number;\n    y: number;\n  }\n\n  export function distance(a: Point, b: Point): number {\n    const dx = a.x - b.x;\n    const dy = a.y - b.y;\n    return Math.sqrt(dx * dx + dy * dy);\n  }\n}\n\nconst p1: Geometry.Point = { x: 0, y: 0 };\nconst p2: Geometry.Point = { x: 3, y: 4 };\nconsole.log(Geometry.distance(p1, p2)); // 5\n</code></pre>\n<p><strong>Important:</strong> In modern TS projects, use ES modules (<code>import/export</code>) instead. Namespaces are mostly seen now in <code>.d.ts</code> files for global libraries.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 341,
    "question": "What are conditional types?",
    "answer": "<p><strong>Conditional types</strong> let you choose a type based on a condition. The syntax looks like a ternary - <code>T extends U ? X : Y</code>. If T is assignable to U, the type is X, else Y.</p>\n<pre><code>type IsString&lt;T&gt; = T extends string ? \"yes\" : \"no\";\n\ntype A = IsString&lt;\"hello\"&gt;; // \"yes\"\ntype B = IsString&lt;42&gt;;      // \"no\"\n\n// Real example - extract array element type\ntype ElementOf&lt;T&gt; = T extends (infer U)[] ? U : T;\n\ntype N = ElementOf&lt;number[]&gt;;   // number\ntype S = ElementOf&lt;string[]&gt;;   // string\ntype X = ElementOf&lt;boolean&gt;;    // boolean (not array)\n\n// Built-in conditional - Exclude\ntype Exclude2&lt;T, U&gt; = T extends U ? never : T;\ntype Colors = \"red\" | \"green\" | \"blue\";\ntype NoRed = Exclude2&lt;Colors, \"red\"&gt;; // \"green\" | \"blue\"\n</code></pre>\n<p>Conditional types are used inside many built-in utility types like <code>Exclude</code>, <code>Extract</code>, <code>NonNullable</code>, and <code>ReturnType</code>.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 342,
    "question": "What is the infer keyword?",
    "answer": "<p>The <strong>infer</strong> keyword is used inside conditional types to extract a type from another type. It is like saying \"I don't know this part - figure it out and give it a name\".</p>\n<pre><code>// Extract return type of any function\ntype MyReturnType&lt;T&gt; = T extends (...args: any[]) =&gt; infer R ? R : never;\n\nfunction getUser() {\n  return { id: 1, name: \"Rahul\" };\n}\n\ntype User = MyReturnType&lt;typeof getUser&gt;;\n// { id: number; name: string }\n\n// Extract first parameter type\ntype FirstParam&lt;T&gt; = T extends (first: infer F, ...args: any[]) =&gt; any ? F : never;\n\nfunction greet(name: string, age: number) {}\ntype P = FirstParam&lt;typeof greet&gt;; // string\n\n// Extract array element type\ntype ArrayElement&lt;T&gt; = T extends (infer E)[] ? E : never;\ntype E = ArrayElement&lt;number[]&gt;; // number\n\n// Extract Promise value type\ntype Awaited2&lt;T&gt; = T extends Promise&lt;infer U&gt; ? U : T;\ntype V = Awaited2&lt;Promise&lt;string&gt;&gt;; // string\n</code></pre>\n<p><code>infer</code> is the magic behind utility types like <code>ReturnType</code>, <code>Parameters</code>, and <code>Awaited</code>.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 343,
    "question": "What are template literal types?",
    "answer": "<p><strong>Template literal types</strong> let you build new string literal types from other string types - similar to JavaScript template literals but at the type level.</p>\n<pre><code>type Greeting = `Hello ${string}`;\nlet g: Greeting = \"Hello World\"; // OK\n// let g: Greeting = \"Hi there\"; // Error\n\n// Combine literal unions\ntype Color = \"red\" | \"blue\";\ntype Shade = \"light\" | \"dark\";\ntype Theme = `${Shade}-${Color}`;\n// \"light-red\" | \"light-blue\" | \"dark-red\" | \"dark-blue\"\n\n// Real-world: event names\ntype EventName&lt;T extends string&gt; = `on${Capitalize&lt;T&gt;}`;\ntype Click = EventName&lt;\"click\"&gt;; // \"onClick\"\n\n// CSS-in-JS-like\ntype CSSValue = `${number}px` | `${number}%`;\nlet w: CSSValue = \"100px\"; // OK\nlet h: CSSValue = \"50%\";   // OK\n</code></pre>\n<p>Combined with <code>Uppercase</code>, <code>Lowercase</code>, <code>Capitalize</code>, <code>Uncapitalize</code> intrinsic types, template literals enable incredibly precise type modeling.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 344,
    "question": "What are distributive conditional types?",
    "answer": "<p>When a conditional type is applied to a union, TypeScript distributes the condition over each member of the union. This is called <strong>distribution</strong>.</p>\n<pre><code>type ToArray&lt;T&gt; = T extends any ? T[] : never;\n\n// Looks like it should give (string | number)[]\n// But actually distributes:\ntype A = ToArray&lt;string | number&gt;;\n// = ToArray&lt;string&gt; | ToArray&lt;number&gt;\n// = string[] | number[]\n\n// Built-in Exclude works due to distribution\ntype Exclude2&lt;T, U&gt; = T extends U ? never : T;\ntype B = Exclude2&lt;\"a\" | \"b\" | \"c\", \"a\"&gt;;\n// = (\"a\" extends \"a\" ? never : \"a\") | (\"b\" extends \"a\" ? never : \"b\") | ...\n// = never | \"b\" | \"c\"\n// = \"b\" | \"c\"\n\n// To prevent distribution, wrap in tuple\ntype NoDistribute&lt;T&gt; = [T] extends [any] ? T[] : never;\ntype C = NoDistribute&lt;string | number&gt;; // (string | number)[]\n</code></pre>\n<p>Distribution is powerful but can be surprising. Knowing when it kicks in (and how to disable it with tuple wrapping) is key in advanced type code.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 345,
    "question": "What is declaration merging?",
    "answer": "<p><strong>Declaration merging</strong> is a TypeScript feature where multiple declarations with the same name are merged into a single combined declaration. It works for interfaces, namespaces, and a few others.</p>\n<pre><code>// Two interfaces with same name merge\ninterface User {\n  id: number;\n  name: string;\n}\n\ninterface User {\n  email: string;\n}\n\n// Now User has all three: id, name, email\nconst u: User = { id: 1, name: \"Rahul\", email: \"r@x.com\" };\n\n// Common use - extending third-party types\ndeclare global {\n  interface Window {\n    myCustomProp: string;\n  }\n}\nwindow.myCustomProp = \"hello\";\n\n// Augmenting Express Request\ndeclare module \"express\" {\n  interface Request {\n    user?: { id: number; name: string };\n  }\n}\n</code></pre>\n<p>Type aliases (<code>type</code>) cannot be merged - only interfaces can. This is one of the main reasons to choose interface over type for object shapes that might need extension.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 346,
    "question": "What is module augmentation?",
    "answer": "<p><strong>Module augmentation</strong> is a way to add new properties or types to an existing module - even one from <code>node_modules</code>. It is built on declaration merging.</p>\n<pre><code>// Suppose 'express' has a Request interface\n// You want to add a 'user' property to it\n\n// types/express.d.ts\nimport \"express\";\n\ndeclare module \"express\" {\n  interface Request {\n    user?: {\n      id: number;\n      name: string;\n    };\n  }\n}\n\n// Now in your route handler\napp.get(\"/profile\", (req, res) =&gt; {\n  console.log(req.user?.name); // TS knows req.user exists\n});\n\n// Augmenting global types\ndeclare global {\n  interface String {\n    toTitleCase(): string;\n  }\n}\n\nString.prototype.toTitleCase = function () {\n  return this.replace(/\\b\\w/g, c =&gt; c.toUpperCase());\n};\n</code></pre>\n<p>Module augmentation is the official way to extend types from libraries without modifying their source code.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 347,
    "question": "What are decorators in TypeScript?",
    "answer": "<p><strong>Decorators</strong> are special functions that you attach to classes, methods, properties, or parameters to modify or annotate them. They start with <code>@</code>. Used heavily in Angular and NestJS.</p>\n<pre><code>// Enable in tsconfig.json:\n// \"experimentalDecorators\": true\n\n// Class decorator\nfunction Logger(constructor: Function) {\n  console.log(\"Class created: \" + constructor.name);\n}\n\n@Logger\nclass User {\n  constructor(public name: string) {}\n}\n\n// Method decorator\nfunction LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {\n  const original = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n    console.log(`Calling ${key} with`, args);\n    return original.apply(this, args);\n  };\n}\n\nclass Service {\n  @LogMethod\n  greet(name: string) {\n    return \"Hi \" + name;\n  }\n}\n\nnew Service().greet(\"Rahul\");\n// Logs: Calling greet with [\"Rahul\"]\n</code></pre>\n<p>Decorators are great for cross-cutting concerns like logging, validation, dependency injection (DI), and routing. TS 5+ supports the new standard ECMAScript decorators too.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 348,
    "question": "What are function overloads?",
    "answer": "<p><strong>Function overloads</strong> let you describe a function that can be called with different argument types, each with its own return type. You write multiple signatures followed by one implementation.</p>\n<pre><code>// Overload signatures\nfunction parse(input: string): object;\nfunction parse(input: number): string;\nfunction parse(input: boolean): number;\n\n// Implementation signature (not visible to callers)\nfunction parse(input: string | number | boolean): object | string | number {\n  if (typeof input === \"string\") return JSON.parse(input);\n  if (typeof input === \"number\") return input.toString();\n  return input ? 1 : 0;\n}\n\nconst a = parse(\"{\\\"x\\\":1}\"); // type: object\nconst b = parse(42);          // type: string\nconst c = parse(true);        // type: number\n\n// Real example - DOM querySelector\nfunction getElement(tag: \"a\"): HTMLAnchorElement;\nfunction getElement(tag: \"img\"): HTMLImageElement;\nfunction getElement(tag: string): HTMLElement;\nfunction getElement(tag: string): HTMLElement {\n  return document.createElement(tag);\n}\n</code></pre>\n<p>Overloads give callers precise return types based on the input. Often, generics or conditional types can do the same job more cleanly.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 349,
    "question": "What is the 'as const' assertion?",
    "answer": "<p>The <strong>as const</strong> assertion (also called const assertion) tells TypeScript to treat a value as deeply readonly and use the most specific literal types possible.</p>\n<pre><code>// Without as const\nconst colors = [\"red\", \"green\", \"blue\"];\n// type: string[]\n\n// With as const\nconst colors2 = [\"red\", \"green\", \"blue\"] as const;\n// type: readonly [\"red\", \"green\", \"blue\"]\n\n// Useful for deriving types\ntype Color = typeof colors2[number]; // \"red\" | \"green\" | \"blue\"\n\n// Object example\nconst config = {\n  url: \"https://api.example.com\",\n  method: \"GET\",\n  retries: 3\n};\n// type: { url: string; method: string; retries: number }\n\nconst config2 = {\n  url: \"https://api.example.com\",\n  method: \"GET\",\n  retries: 3\n} as const;\n// type: { readonly url: \"https://api.example.com\"; readonly method: \"GET\"; readonly retries: 3 }\n</code></pre>\n<p><code>as const</code> is a clean alternative to enums and great for deriving precise literal types from runtime constants.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 350,
    "question": "What is the 'satisfies' operator?",
    "answer": "<p>The <strong>satisfies</strong> operator (TS 4.9+) checks that a value matches a type, but keeps the most specific inferred type instead of widening it.</p>\n<pre><code>type Config = Record&lt;string, string | number&gt;;\n\n// Without satisfies - loses specific types\nconst c1: Config = {\n  url: \"https://api.com\",\n  port: 8080\n};\n// c1.url is string | number, not string\n\n// With satisfies - keeps specific types AND validates\nconst c2 = {\n  url: \"https://api.com\",\n  port: 8080\n} satisfies Config;\n\nc2.url.toUpperCase(); // OK - TS knows url is string\nc2.port.toFixed(2);   // OK - TS knows port is number\n\n// Catches errors too\n// const c3 = {\n//   url: \"https://api.com\",\n//   port: true   // Error! boolean not allowed\n// } satisfies Config;\n</code></pre>\n<p><code>satisfies</code> gives you the best of both worlds - validation against a contract AND precise inferred types. It is one of the most loved modern TS features.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 351,
    "question": "What are recursive types?",
    "answer": "<p><strong>Recursive types</strong> are types that refer to themselves. They are useful for tree-like or nested structures such as JSON (JavaScript Object Notation), file systems, or comments.</p>\n<pre><code>// JSON value type\ntype JSONValue =\n  | string\n  | number\n  | boolean\n  | null\n  | JSONValue[]\n  | { [key: string]: JSONValue };\n\nconst data: JSONValue = {\n  name: \"Rahul\",\n  age: 25,\n  hobbies: [\"reading\", \"coding\"],\n  address: {\n    city: \"Delhi\",\n    pincode: 110001\n  }\n};\n\n// Tree structure\ninterface TreeNode {\n  value: number;\n  children: TreeNode[];\n}\n\nconst tree: TreeNode = {\n  value: 1,\n  children: [\n    { value: 2, children: [] },\n    { value: 3, children: [{ value: 4, children: [] }] }\n  ]\n};\n\n// Recursive utility type - DeepReadonly\ntype DeepReadonly&lt;T&gt; = {\n  readonly [K in keyof T]: T[K] extends object ? DeepReadonly&lt;T[K]&gt; : T[K];\n};\n</code></pre>\n<p>Recursive types are powerful but can be slow if too deep. TS has a recursion depth limit to prevent infinite loops.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 352,
    "question": "What are mixins in TypeScript?",
    "answer": "<p><strong>Mixins</strong> are a pattern to add functionality to classes by composing them, instead of using inheritance. Useful when you want to share behavior across unrelated classes.</p>\n<pre><code>// Constructor type helper\ntype Constructor&lt;T = {}&gt; = new (...args: any[]) =&gt; T;\n\n// Mixin function\nfunction Timestamped&lt;TBase extends Constructor&gt;(Base: TBase) {\n  return class extends Base {\n    timestamp = new Date();\n  };\n}\n\nfunction Loggable&lt;TBase extends Constructor&gt;(Base: TBase) {\n  return class extends Base {\n    log(msg: string) {\n      console.log(`[${new Date().toISOString()}] ${msg}`);\n    }\n  };\n}\n\nclass User {\n  constructor(public name: string) {}\n}\n\n// Compose multiple mixins\nconst TimestampedLoggableUser = Timestamped(Loggable(User));\n\nconst u = new TimestampedLoggableUser(\"Rahul\");\nu.log(\"Hello\");\nconsole.log(u.timestamp);\nconsole.log(u.name);\n</code></pre>\n<p>Mixins solve the \"inherit from multiple classes\" problem in a clean and type-safe way.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 353,
    "question": "What is the polymorphic 'this' type?",
    "answer": "<p>The <strong>polymorphic this</strong> type refers to the current class or its subclass. It is super useful for fluent / builder-style APIs where methods should return the same subclass instance.</p>\n<pre><code>class QueryBuilder {\n  private query = \"\";\n\n  select(fields: string): this {\n    this.query += `SELECT ${fields} `;\n    return this;\n  }\n\n  from(table: string): this {\n    this.query += `FROM ${table} `;\n    return this;\n  }\n\n  where(cond: string): this {\n    this.query += `WHERE ${cond} `;\n    return this;\n  }\n\n  build(): string {\n    return this.query.trim();\n  }\n}\n\nclass MySQLBuilder extends QueryBuilder {\n  limit(n: number): this {\n    this.query += `LIMIT ${n} `;\n    return this;\n  }\n}\n\nconst sql = new MySQLBuilder()\n  .select(\"*\")\n  .from(\"users\")\n  .where(\"age &gt; 18\")\n  .limit(10) // available because this is MySQLBuilder\n  .build();\n</code></pre>\n<p>Without polymorphic <code>this</code>, chaining a parent method would return the parent type and you would lose access to subclass methods.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 354,
    "question": "What are branded / nominal types?",
    "answer": "<p>TypeScript uses <strong>structural typing</strong> by default - if two types have the same shape, they are compatible. <strong>Branded types</strong> are a workaround to create <strong>nominal</strong> (name-based) types so similar shapes are not interchangeable.</p>\n<pre><code>// Without branding - both are just numbers\ntype UserId = number;\ntype OrderId = number;\n\nfunction getUser(id: UserId) {}\nconst orderId: OrderId = 5;\ngetUser(orderId); // No error! both are number\n\n// With branding\ntype Brand&lt;T, B&gt; = T &amp; { __brand: B };\n\ntype UserId2 = Brand&lt;number, \"UserId\"&gt;;\ntype OrderId2 = Brand&lt;number, \"OrderId\"&gt;;\n\nfunction makeUserId(n: number): UserId2 {\n  return n as UserId2;\n}\n\nfunction makeOrderId(n: number): OrderId2 {\n  return n as OrderId2;\n}\n\nfunction getUser2(id: UserId2) {}\n\nconst uid = makeUserId(1);\nconst oid = makeOrderId(2);\ngetUser2(uid); // OK\n// getUser2(oid); // Error! OrderId is not UserId\n</code></pre>\n<p>Branded types are great for IDs, units, validated strings (like Email), and anywhere you need to prevent accidental mixing.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 355,
    "question": "What is strict mode in TypeScript?",
    "answer": "<p>Setting <code>\"strict\": true</code> in <code>tsconfig.json</code> enables a group of strict type-checking options together. These flags catch many subtle bugs and are highly recommended for new projects.</p>\n<pre><code>{\n  \"compilerOptions\": {\n    \"strict\": true\n    // Equivalent to enabling all of these:\n    // \"noImplicitAny\": true,\n    // \"strictNullChecks\": true,\n    // \"strictFunctionTypes\": true,\n    // \"strictBindCallApply\": true,\n    // \"strictPropertyInitialization\": true,\n    // \"noImplicitThis\": true,\n    // \"alwaysStrict\": true,\n    // \"useUnknownInCatchVariables\": true\n  }\n}\n</code></pre>\n<ul>\n  <li><strong>noImplicitAny:</strong> Forbids implicit <code>any</code> types.</li>\n  <li><strong>strictNullChecks:</strong> <code>null</code> and <code>undefined</code> are not assignable everywhere.</li>\n  <li><strong>strictFunctionTypes:</strong> Stricter checks on function parameter types.</li>\n  <li><strong>strictPropertyInitialization:</strong> Class properties must be initialized.</li>\n</ul>\n<p>Always start a new TS project with <code>strict: true</code>. It saves you from a lot of bugs later.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 356,
    "question": "How do you type async functions and Promises?",
    "answer": "<p>An async function always returns a Promise. You type the value the Promise resolves with using <code>Promise&lt;T&gt;</code>.</p>\n<pre><code>// Basic async function\nasync function getUser(id: number): Promise&lt;{ id: number; name: string }&gt; {\n  const res = await fetch(`/api/users/${id}`);\n  return res.json();\n}\n\n// Using the result\nasync function main() {\n  const user = await getUser(1);\n  console.log(user.name); // TS knows user has .name\n}\n\n// Generic async function\nasync function fetchJson&lt;T&gt;(url: string): Promise&lt;T&gt; {\n  const res = await fetch(url);\n  return res.json();\n}\n\ninterface Post { id: number; title: string; }\nconst post = await fetchJson&lt;Post&gt;(\"/api/post/1\");\nconsole.log(post.title);\n\n// Promise.all is also typed\nconst [u, p] = await Promise.all([\n  getUser(1),\n  fetchJson&lt;Post&gt;(\"/api/post/1\")\n]);\n\n// Awaited utility extracts the resolved type\ntype PostType = Awaited&lt;ReturnType&lt;typeof fetchJson&lt;Post&gt;&gt;&gt;; // Post\n</code></pre>\n<p>Async functions and Promises are first-class in TypeScript - you get full type safety from request to response.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 357,
    "question": "What are declaration files (.d.ts)?",
    "answer": "<p><strong>Declaration files</strong> (<code>.d.ts</code>) describe the types of JavaScript code without containing actual implementation. They are how TypeScript knows the shape of libraries written in plain JS.</p>\n<pre><code>// math.d.ts\ndeclare module \"my-math-lib\" {\n  export function add(a: number, b: number): number;\n  export function multiply(a: number, b: number): number;\n  export const PI: number;\n}\n\n// Now in your TS file\nimport { add, PI } from \"my-math-lib\";\nadd(1, 2); // TS knows the signature\n\n// Global declaration\ndeclare global {\n  const APP_VERSION: string;\n  interface Window {\n    analytics: {\n      track(event: string): void;\n    };\n  }\n}\n\n// Ambient module for non-code imports\ndeclare module \"*.svg\" {\n  const content: string;\n  export default content;\n}\n</code></pre>\n<p>Most popular libraries publish their <code>.d.ts</code> files via <strong>DefinitelyTyped</strong> - install them with <code>npm install -D @types/library-name</code>.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 358,
    "question": "What is the difference between unknown, any, and never?",
    "answer": "<p>These three types look similar but serve very different purposes. Understanding them clearly is a sign of a good TypeScript developer.</p>\n<ul>\n  <li><strong>any:</strong> The escape hatch. No type checking. Anything goes. Avoid it.</li>\n  <li><strong>unknown:</strong> The safe top type. Can hold any value but you must narrow before using.</li>\n  <li><strong>never:</strong> The bottom type. No values can be assigned. Used for impossible cases and exhaustiveness checks.</li>\n</ul>\n<pre><code>// any - dangerous\nlet a: any = \"hi\";\na.foo.bar; // No error, crashes at runtime\n\n// unknown - safe\nlet u: unknown = \"hi\";\n// u.toUpperCase(); // Error\nif (typeof u === \"string\") {\n  u.toUpperCase(); // OK after narrowing\n}\n\n// never - impossible\nfunction fail(msg: string): never {\n  throw new Error(msg);\n}\n\n// Exhaustiveness check\ntype Shape = { kind: \"circle\" } | { kind: \"square\" };\nfunction area(s: Shape) {\n  switch (s.kind) {\n    case \"circle\": return 1;\n    case \"square\": return 2;\n    default:\n      const _exhaustive: never = s; // catches missing cases\n      return _exhaustive;\n  }\n}\n</code></pre>\n<p><strong>Quick rule:</strong> Use <code>unknown</code> instead of <code>any</code>. Use <code>never</code> for things that should never happen.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 359,
    "question": "How do you type React components in TypeScript?",
    "answer": "<p>React with TypeScript is a very common combination. You type props and state explicitly, and React provides built-in types for components, hooks, and events.</p>\n<pre><code>import { useState, FC, ChangeEvent } from \"react\";\n\n// Props interface\ninterface ButtonProps {\n  label: string;\n  onClick: () =&gt; void;\n  disabled?: boolean;\n}\n\n// Function component\nconst Button: FC&lt;ButtonProps&gt; = ({ label, onClick, disabled }) =&gt; {\n  return (\n    &lt;button onClick={onClick} disabled={disabled}&gt;\n      {label}\n    &lt;/button&gt;\n  );\n};\n\n// Or without FC (often preferred)\nfunction Input({ value, onChange }: { value: string; onChange: (v: string) =&gt; void }) {\n  return (\n    &lt;input\n      value={value}\n      onChange={(e: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; onChange(e.target.value)}\n    /&gt;\n  );\n}\n\n// useState with type\nconst [count, setCount] = useState&lt;number&gt;(0);\nconst [user, setUser] = useState&lt;User | null&gt;(null);\n\ninterface User { id: number; name: string; }\n</code></pre>\n<p>The React types package <code>@types/react</code> provides everything you need - hooks, events, refs, and component types.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 360,
    "question": "What are some best practices for writing TypeScript?",
    "answer": "<p>Here are the practices most experienced TypeScript developers follow. Following them will keep your code clean, safe, and easy to maintain.</p>\n<ul>\n  <li><strong>Always enable strict mode</strong> - <code>\"strict\": true</code> in tsconfig.</li>\n  <li><strong>Avoid <code>any</code></strong> - prefer <code>unknown</code> when you really need flexibility.</li>\n  <li><strong>Use type inference</strong> - don't annotate when TS already knows the type.</li>\n  <li><strong>Annotate function signatures</strong> - especially public APIs and exported functions.</li>\n  <li><strong>Prefer interface for object shapes</strong>, type for unions and complex types.</li>\n  <li><strong>Use union types and discriminated unions</strong> instead of optional flags.</li>\n  <li><strong>Use utility types</strong> - <code>Partial</code>, <code>Pick</code>, <code>Omit</code>, <code>Record</code> instead of duplicating shapes.</li>\n  <li><strong>Use <code>readonly</code></strong> wherever data should not change.</li>\n  <li><strong>Use <code>as const</code> and <code>satisfies</code></strong> for precise literal types.</li>\n  <li><strong>Avoid type assertions</strong> (<code>as</code>) unless you really know better than TS.</li>\n  <li><strong>Use ESLint with @typescript-eslint</strong> to catch common mistakes.</li>\n  <li><strong>Keep types close to data</strong> - colocate types with the code that uses them.</li>\n  <li><strong>Use <code>import type</code></strong> for type-only imports to keep bundles smaller.</li>\n</ul>\n<p>Good TypeScript code is not about writing more types - it is about letting the types do the work for you.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 361,
    "question": "What is the difference between tsc and Babel for compiling TypeScript?",
    "answer": "<p><strong>tsc</strong> is the official TypeScript compiler. It does both <em>type checking</em> and <em>JS output</em>. <strong>Babel</strong> can also strip TypeScript syntax (via <code>@babel/preset-typescript</code>), but it does NOT do type checking - it just removes the types.</p>\n<ul>\n  <li><strong>tsc:</strong> slower, but verifies types and emits clean JS.</li>\n  <li><strong>Babel:</strong> very fast, integrates with existing JS pipelines, but you need <code>tsc --noEmit</code> separately for type checks.</li>\n</ul>\n<p>Many real projects use Babel for build (speed) + tsc in CI for type checking.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 362,
    "question": "What is implicit vs explicit typing?",
    "answer": "<p><strong>Explicit</strong> typing means you write the type yourself. <strong>Implicit</strong> typing means TypeScript figures it out from the value.</p>\n<pre><code>// Explicit\nlet name: string = \"Rahul\";\n\n// Implicit (inferred)\nlet age = 25; // TS infers number\n</code></pre>\n<p>Use implicit typing whenever the inference is obvious. Use explicit typing for function parameters, public APIs, and when the value alone is not enough to convey intent.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 363,
    "question": "How do you write comments in TypeScript?",
    "answer": "<p>TypeScript supports the same comments as JavaScript - single-line, multi-line, and JSDoc-style.</p>\n<pre><code>// single line comment\n\n/* multi\n   line comment */\n\n/**\n * JSDoc comment - shows in editor tooltips\n * @param name - the user's name\n * @returns greeting string\n */\nfunction greet(name: string): string {\n  return \"Hi \" + name;\n}\n</code></pre>\n<p>JSDoc comments work great with TS - editors show them as hover hints, and they make APIs self-documenting.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 364,
    "question": "How do template literals work in TypeScript?",
    "answer": "<p>Template literals work the same as JavaScript - backticks with <code>${ }</code> for interpolation. TS just adds type checking on the embedded expressions.</p>\n<pre><code>const name: string = \"Rahul\";\nconst age: number = 25;\n\nconst msg = `Hi ${name}, you are ${age} years old`;\n// msg type: string\n\n// Multi-line\nconst html = `\n  &lt;div&gt;\n    &lt;p&gt;${name}&lt;/p&gt;\n  &lt;/div&gt;\n`;\n</code></pre>\n<p>Template literals are also used at the type level (template literal types) for advanced string typing.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 365,
    "question": "How does destructuring work with types?",
    "answer": "<p>You can destructure objects and arrays in TypeScript and add type annotations to the destructured values.</p>\n<pre><code>// Object destructuring with type\nconst user: { name: string; age: number } = { name: \"Rahul\", age: 25 };\nconst { name, age } = user;\n// name: string, age: number (inferred)\n\n// Renaming with types\nconst { name: userName }: { name: string } = user;\n\n// Array destructuring\nconst nums: number[] = [1, 2, 3];\nconst [first, second] = nums; // both numbers\n\n// Function parameter destructuring\nfunction greet({ name, age }: { name: string; age: number }) {\n  console.log(`${name} is ${age}`);\n}\n</code></pre>\n<p>Function parameter destructuring with inline types is very common in modern TS code.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 366,
    "question": "How does the spread operator work in TypeScript?",
    "answer": "<p>The spread operator (<code>...</code>) works the same as in JavaScript - copying or merging arrays and objects. TypeScript infers the resulting type automatically.</p>\n<pre><code>// Spread arrays\nconst a = [1, 2, 3];\nconst b = [4, 5];\nconst merged = [...a, ...b]; // number[]\n\n// Spread objects\nconst user = { name: \"Rahul\", age: 25 };\nconst updated = { ...user, age: 26 };\n// { name: string; age: number }\n\n// Spread in function call\nfunction sum(a: number, b: number, c: number) { return a + b + c; }\nconst nums: [number, number, number] = [1, 2, 3];\nsum(...nums);\n</code></pre>\n<p>For function calls, the spread argument's type must match the function's parameter list - tuples work great here.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 367,
    "question": "What are arrow functions in TypeScript?",
    "answer": "<p>Arrow functions are the same as in JavaScript but support full type annotations for parameters and return type.</p>\n<pre><code>// Basic arrow function\nconst add = (a: number, b: number): number =&gt; a + b;\n\n// Without explicit return type (inferred)\nconst multiply = (a: number, b: number) =&gt; a * b;\n\n// As a callback\nconst nums = [1, 2, 3];\nconst doubled = nums.map((n: number) =&gt; n * 2);\n\n// Arrow function as a class field (auto-bound this)\nclass Counter {\n  count = 0;\n  increment = () =&gt; { this.count++; };\n}\n</code></pre>\n<p>Arrow functions don't have their own <code>this</code>, which is great for callbacks inside classes.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 368,
    "question": "How do default parameters work in TypeScript?",
    "answer": "<p>Default parameters let you specify a value to use if the caller doesn't pass an argument. TS automatically infers the type from the default value.</p>\n<pre><code>// Default value - type inferred as string\nfunction greet(name: string = \"Guest\") {\n  return \"Hi \" + name;\n}\n\ngreet();          // \"Hi Guest\"\ngreet(\"Rahul\");   // \"Hi Rahul\"\n\n// Multiple defaults\nfunction createUser(name: string, role: string = \"user\", active: boolean = true) {\n  return { name, role, active };\n}\n\n// Default with explicit type\nfunction log(msg: string, level: \"info\" | \"warn\" | \"error\" = \"info\") {\n  console.log(`[${level}] ${msg}`);\n}\n</code></pre>\n<p>Parameters with defaults are automatically optional from the caller's perspective.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 369,
    "question": "How do rest parameters work in TypeScript?",
    "answer": "<p>Rest parameters let a function accept any number of arguments as an array. You type them with an array type.</p>\n<pre><code>function sum(...nums: number[]): number {\n  return nums.reduce((a, b) =&gt; a + b, 0);\n}\n\nsum(1, 2, 3, 4, 5); // 15\n\n// Mixed - normal + rest\nfunction logAll(level: string, ...messages: string[]) {\n  messages.forEach(m =&gt; console.log(`[${level}] ${m}`));\n}\n\nlogAll(\"info\", \"a\", \"b\", \"c\");\n\n// Rest with tuple types\nfunction first&lt;T&gt;(...items: [T, ...T[]]): T {\n  return items[0];\n}\n</code></pre>\n<p>Rest must be the last parameter. Combined with tuple types, rest parameters become very expressive.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 370,
    "question": "What is the for...of loop in TypeScript?",
    "answer": "<p>The <code>for...of</code> loop iterates over the values of an iterable (array, string, Set, Map, etc.). TypeScript infers the element type automatically.</p>\n<pre><code>const nums: number[] = [10, 20, 30];\n\nfor (const n of nums) {\n  console.log(n.toFixed(2)); // n is number\n}\n\n// String iteration\nfor (const ch of \"hello\") {\n  console.log(ch); // string\n}\n\n// Map iteration\nconst map = new Map&lt;string, number&gt;([[\"a\", 1], [\"b\", 2]]);\nfor (const [key, value] of map) {\n  console.log(key, value);\n}\n</code></pre>\n<p>Use <code>for...of</code> for values and <code>for...in</code> for keys. <code>for...of</code> is safer in TS because it preserves element types.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 371,
    "question": "What is the non-null assertion operator (!) in TypeScript?",
    "answer": "<p>The <strong>non-null assertion</strong> operator <code>!</code> tells TypeScript \"trust me, this value is not null or undefined\". It removes <code>null</code> and <code>undefined</code> from the type.</p>\n<pre><code>function getUser(): User | null { /* ... */ return null; }\n\nconst user = getUser();\n// user.name; // Error - user might be null\nconst name = user!.name; // OK - we promise user is not null\n\n// DOM example\nconst input = document.getElementById(\"name\")!; // assert it exists\ninput.addEventListener(\"click\", () =&gt; {});\n</code></pre>\n<p><strong>Warning:</strong> If you're wrong, you'll get a runtime crash. Prefer proper null checks (<code>if</code>, <code>?.</code>) when possible. Use <code>!</code> only when you truly know better than TypeScript.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 372,
    "question": "What is the optional chaining operator (?.) in TypeScript?",
    "answer": "<p><strong>Optional chaining</strong> (<code>?.</code>) lets you safely access nested properties or call methods on values that might be <code>null</code> or <code>undefined</code>. If any link in the chain is nullish, the whole expression returns <code>undefined</code> instead of crashing.</p>\n<pre><code>type User = {\n  name: string;\n  address?: { city?: string };\n  greet?: () =&gt; void;\n};\n\nconst u: User = { name: \"Rahul\" };\n\nconst city = u.address?.city; // undefined, no crash\nu.greet?.();                  // safely call if exists\n\n// Optional element access\nconst arr: number[] | null = null;\nconst first = arr?.[0]; // undefined\n</code></pre>\n<p>Optional chaining replaces messy <code>a &amp;&amp; a.b &amp;&amp; a.b.c</code> patterns with clean, safe code.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 373,
    "question": "What is the nullish coalescing operator (??)?",
    "answer": "<p>The <strong>nullish coalescing</strong> operator (<code>??</code>) returns the right-hand value only when the left is <code>null</code> or <code>undefined</code> - not for other falsy values like <code>0</code>, <code>\"\"</code>, or <code>false</code>.</p>\n<pre><code>const a = null ?? \"default\";  // \"default\"\nconst b = undefined ?? \"x\";   // \"x\"\nconst c = 0 ?? 5;             // 0 (zero is not nullish)\nconst d = \"\" ?? \"empty\";      // \"\" (empty string is not nullish)\n\n// Compared to ||\nconst x = 0 || 5;  // 5  (because 0 is falsy)\nconst y = 0 ?? 5;  // 0  (because 0 is not nullish)\n</code></pre>\n<p>Use <code>??</code> when you want defaults only for missing values, not for valid falsy ones like 0 or empty string.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 374,
    "question": "How do you do type casting / conversion in TypeScript?",
    "answer": "<p>TypeScript has two ways to cast (assert) one type to another: the <code>as</code> syntax and the angle-bracket syntax.</p>\n<pre><code>// 'as' syntax (recommended)\nconst value: unknown = \"hello\";\nconst length = (value as string).length;\n\n// Angle bracket syntax (not allowed in TSX/JSX)\nconst length2 = (&lt;string&gt;value).length;\n\n// Convert types at runtime - regular JS\nconst numStr = \"42\";\nconst num = Number(numStr);    // string -&gt; number\nconst str = String(num);        // number -&gt; string\nconst bool = Boolean(num);      // number -&gt; boolean\n</code></pre>\n<p>Type assertion (<code>as</code>) only changes how TS sees the value - it does NOT convert at runtime. Use <code>Number()</code>, <code>String()</code>, etc., for actual runtime conversion.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 375,
    "question": "How do let and const behave in TypeScript with type inference?",
    "answer": "<p>TypeScript infers different types for <code>let</code> vs <code>const</code>. <code>const</code> gets the most specific literal type, while <code>let</code> gets the wider general type.</p>\n<pre><code>const a = \"hello\"; // type: \"hello\"  (literal)\nlet b = \"hello\";   // type: string   (widened)\n\nconst x = 10;      // type: 10\nlet y = 10;        // type: number\n\n// Why? Because const can never change, so its exact value is also its type.\n// let can be reassigned, so TS widens to the general type.\n\n// Object literals widen even with const\nconst obj = { kind: \"circle\" }; // { kind: string }\n// To keep literal: use 'as const'\nconst obj2 = { kind: \"circle\" } as const; // { readonly kind: \"circle\" }\n</code></pre>\n<p>This subtle difference matters when working with discriminated unions and literal types.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 376,
    "question": "What is the bigint type in TypeScript?",
    "answer": "<p><strong>bigint</strong> is a primitive type for very large integers - bigger than what <code>number</code> can safely hold (above 2^53 - 1).</p>\n<pre><code>const big: bigint = 9007199254740993n;\nconst alsoBig = BigInt(\"12345678901234567890\");\n\nconst sum = big + 1n; // must use bigint operands\n// const x = big + 1; // Error! cannot mix number and bigint\n\n// Useful for IDs, timestamps in microseconds, large math\nconst userId: bigint = 9999999999999999n;\n</code></pre>\n<p>BigInt literals use the <code>n</code> suffix. You cannot mix <code>bigint</code> with <code>number</code> directly - convert one to match the other.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 377,
    "question": "What is the symbol type in TypeScript?",
    "answer": "<p><strong>symbol</strong> is a primitive type representing unique, immutable identifiers. Each <code>Symbol()</code> call creates a brand-new value, so symbols are perfect for unique keys.</p>\n<pre><code>const id1: symbol = Symbol(\"id\");\nconst id2: symbol = Symbol(\"id\");\nconsole.log(id1 === id2); // false - always unique\n\n// Symbol as object key - won't clash with strings\nconst KEY = Symbol(\"secret\");\nconst obj = {\n  [KEY]: \"hidden value\",\n  name: \"public\"\n};\n\nconsole.log(obj[KEY]); // \"hidden value\"\n\n// unique symbol type\nconst FOO: unique symbol = Symbol(\"FOO\");\n</code></pre>\n<p>Symbols are mostly used for hidden metadata, well-known protocols (like <code>Symbol.iterator</code>), and clash-free property keys.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 378,
    "question": "What is the difference between Object, object, and {}?",
    "answer": "<p>These three look similar but mean different things in TypeScript - this is a common source of confusion.</p>\n<ul>\n  <li><strong>Object</strong> (capital O) - any value with object methods (<code>toString</code>, etc.). Includes primitives. Avoid using this.</li>\n  <li><strong>object</strong> (lowercase) - any non-primitive value. Means \"some object\". Cannot be string, number, boolean, etc.</li>\n  <li><strong>{}</strong> (empty object type) - any value that is not <code>null</code> or <code>undefined</code>. Even primitives are allowed.</li>\n</ul>\n<pre><code>let a: Object = 42;     // OK (avoid this type)\nlet b: object = 42;     // Error - 42 is primitive\nlet b2: object = {};    // OK\nlet c: {} = 42;         // OK\nlet c2: {} = null;      // Error\n</code></pre>\n<p>For \"any object shape\", use <code>Record&lt;string, unknown&gt;</code> or define an interface. Avoid <code>Object</code> entirely.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 379,
    "question": "How do you use method shorthand in TypeScript object literals?",
    "answer": "<p>You can define methods inside object literals using shorthand syntax - same as JS, but with type annotations.</p>\n<pre><code>const calculator = {\n  // method shorthand\n  add(a: number, b: number): number {\n    return a + b;\n  },\n  // arrow function property\n  multiply: (a: number, b: number): number =&gt; a * b\n};\n\ncalculator.add(2, 3);       // 5\ncalculator.multiply(4, 5);  // 20\n\n// With interface\ninterface Calc {\n  add(a: number, b: number): number;\n  multiply: (a: number, b: number) =&gt; number;\n}\n</code></pre>\n<p>Method shorthand is cleaner. Note: arrow function syntax and method shorthand have subtle differences in <code>this</code> binding and variance under <code>strict</code>.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 380,
    "question": "How do you import a JSON file in TypeScript?",
    "answer": "<p>To import JSON (JavaScript Object Notation) files, you need to enable <code>resolveJsonModule</code> in <code>tsconfig.json</code>. Then you can import them like normal modules with full type inference.</p>\n<pre><code>// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"resolveJsonModule\": true,\n    \"esModuleInterop\": true\n  }\n}\n\n// data.json\n{\n  \"name\": \"Rahul\",\n  \"age\": 25\n}\n\n// app.ts\nimport data from \"./data.json\";\n\nconsole.log(data.name); // TS knows it's string\nconsole.log(data.age);  // number\n</code></pre>\n<p>TypeScript automatically infers types from the JSON structure. Perfect for config files, fixtures, and translations.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 381,
    "question": "What is the difference between for...in and for...of?",
    "answer": "<p>Both loops iterate, but they iterate over different things. <code>for...in</code> iterates over <strong>keys</strong>, <code>for...of</code> iterates over <strong>values</strong>.</p>\n<pre><code>const nums = [10, 20, 30];\n\nfor (const i in nums) {\n  console.log(i); // \"0\", \"1\", \"2\" - keys (as string!)\n}\n\nfor (const n of nums) {\n  console.log(n); // 10, 20, 30 - values\n}\n\n// for...in on objects\nconst user = { name: \"Rahul\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key as keyof typeof user]);\n}\n</code></pre>\n<p><strong>Tip:</strong> For arrays, almost always use <code>for...of</code>. <code>for...in</code> is mainly for object keys.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 382,
    "question": "What are .tsx files in TypeScript?",
    "answer": "<p><strong>.tsx</strong> files are TypeScript files that support <strong>JSX (JavaScript XML)</strong> syntax - the HTML (HyperText Markup Language)-like syntax used by React. Regular <code>.ts</code> files cannot contain JSX.</p>\n<pre><code>// Button.tsx\nimport React from \"react\";\n\ninterface Props {\n  label: string;\n  onClick: () =&gt; void;\n}\n\nfunction Button({ label, onClick }: Props) {\n  return (\n    &lt;button onClick={onClick}&gt;\n      {label}\n    &lt;/button&gt;\n  );\n}\n\nexport default Button;\n</code></pre>\n<p>To use TSX (TypeScript XML), set <code>\"jsx\": \"react-jsx\"</code> (or <code>\"react\"</code>) in <code>tsconfig.json</code>. Inside TSX, the angle-bracket type cast syntax (<code>&lt;Type&gt;value</code>) is not allowed - use <code>value as Type</code> instead.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 383,
    "question": "What is the noImplicitAny option in tsconfig?",
    "answer": "<p><strong>noImplicitAny</strong> is a strict flag that forces you to explicitly type variables and parameters - TypeScript will error if it cannot infer the type and would otherwise fall back to <code>any</code>.</p>\n<pre><code>// With noImplicitAny: false\nfunction greet(name) {           // name is implicitly 'any'\n  return \"Hi \" + name;\n}\n\n// With noImplicitAny: true\n// function greet(name) {        // Error! parameter 'name' implicitly has 'any' type\nfunction greet(name: string) {   // OK\n  return \"Hi \" + name;\n}\n</code></pre>\n<p>This flag is enabled automatically when you use <code>\"strict\": true</code>. It's the single most important flag for type safety.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 384,
    "question": "How do you install type definitions for libraries?",
    "answer": "<p>If a library is written in JavaScript and doesn't ship its own types, you can install community-maintained type definitions from <strong>DefinitelyTyped</strong> via the <code>@types</code> npm scope.</p>\n<pre><code># Install library and its types\nnpm install lodash\nnpm install --save-dev @types/lodash\n\n# Now you get full IntelliSense\nimport _ from \"lodash\";\nconst result = _.chunk([1, 2, 3, 4], 2); // typed!\n\n# Common @types packages\nnpm install --save-dev @types/node\nnpm install --save-dev @types/react\nnpm install --save-dev @types/express\n</code></pre>\n<p>Modern libraries (like Vue, Axios, etc.) usually ship their own types - you don't need <code>@types</code> for them.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 385,
    "question": "How do you debug TypeScript code?",
    "answer": "<p>The trick is to enable <strong>source maps</strong> so the debugger can map compiled JS back to your TS source.</p>\n<pre><code>// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"sourceMap\": true,\n    \"inlineSources\": true\n  }\n}\n</code></pre>\n<ul>\n  <li><strong>VS Code:</strong> Set breakpoints directly in <code>.ts</code> files. Use the \"Run and Debug\" panel.</li>\n  <li><strong>Browser:</strong> Chrome DevTools shows your <code>.ts</code> files in the Sources panel when source maps are enabled.</li>\n  <li><strong>Node:</strong> Use <code>ts-node</code> or compile first then run with <code>node --inspect</code>.</li>\n  <li><strong>Console:</strong> <code>console.log</code>, <code>console.table</code>, <code>console.dir</code> all work normally.</li>\n</ul>\n<p>With source maps on, debugging TS feels exactly like debugging JS.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 386,
    "question": "How does TypeScript handle NaN and Infinity?",
    "answer": "<p><code>NaN</code>, <code>Infinity</code>, and <code>-Infinity</code> are all of type <strong>number</strong> in TypeScript. There is no separate type for them.</p>\n<pre><code>const a: number = NaN;\nconst b: number = Infinity;\nconst c: number = -Infinity;\n\n// Check for NaN safely\nconst x = parseInt(\"abc\");\nconsole.log(Number.isNaN(x));    // true\nconsole.log(Number.isFinite(x)); // false\n\n// Common pitfall: NaN === NaN is false!\nconsole.log(NaN === NaN); // false\n// Always use Number.isNaN to check\n</code></pre>\n<p>If a numeric operation might produce NaN, validate the result with <code>Number.isFinite()</code> before using it.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 387,
    "question": "How do you work with Date in TypeScript?",
    "answer": "<p>The built-in <code>Date</code> object works the same as JavaScript - TypeScript just adds the <code>Date</code> type for it.</p>\n<pre><code>const now: Date = new Date();\nconst birthday: Date = new Date(\"1995-08-15\");\n\nconsole.log(now.getFullYear());      // number\nconsole.log(now.toISOString());      // string\nconsole.log(now.getTime());          // number (timestamp ms)\n\n// Function taking Date\nfunction format(d: Date): string {\n  return d.toLocaleDateString();\n}\n\n// Difference in days\nfunction daysBetween(a: Date, b: Date): number {\n  const diff = Math.abs(a.getTime() - b.getTime());\n  return Math.floor(diff / (1000 * 60 * 60 * 24));\n}\n</code></pre>\n<p>For complex date handling, use libraries like <code>date-fns</code> or <code>dayjs</code> - both ship their own TS types.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 388,
    "question": "How does Math work in TypeScript?",
    "answer": "<p><code>Math</code> is the same global object as in JavaScript. All its methods are typed to take and return <code>number</code>.</p>\n<pre><code>const a: number = Math.max(1, 2, 3);     // 3\nconst b: number = Math.min(5, 10, 15);   // 5\nconst c: number = Math.floor(3.7);        // 3\nconst d: number = Math.ceil(3.2);         // 4\nconst e: number = Math.round(3.5);        // 4\nconst f: number = Math.sqrt(16);          // 4\nconst g: number = Math.pow(2, 8);         // 256\nconst h: number = Math.random();          // 0..1\n\n// Random integer between min and max\nfunction randInt(min: number, max: number): number {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n</code></pre>\n<p>For arbitrary precision math, use <code>bigint</code> or libraries like <code>decimal.js</code>.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 389,
    "question": "How does the runtime typeof work in TypeScript?",
    "answer": "<p>The runtime <code>typeof</code> works the same as JavaScript. TypeScript also uses it for <strong>type narrowing</strong> - inside an <code>if (typeof x === \"...\")</code> block, TS narrows the type automatically.</p>\n<pre><code>function process(x: string | number) {\n  console.log(typeof x); // \"string\" or \"number\"\n\n  if (typeof x === \"string\") {\n    // Inside this block, TS knows x is string\n    console.log(x.toUpperCase());\n  } else {\n    // Here, TS knows x is number\n    console.log(x.toFixed(2));\n  }\n}\n</code></pre>\n<p>Possible runtime values: <code>\"string\"</code>, <code>\"number\"</code>, <code>\"boolean\"</code>, <code>\"undefined\"</code>, <code>\"object\"</code>, <code>\"function\"</code>, <code>\"symbol\"</code>, <code>\"bigint\"</code>. Note <code>typeof null === \"object\"</code> (a famous JS quirk).</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 390,
    "question": "What are the common file extensions in TypeScript projects?",
    "answer": "<p>TypeScript projects use a few different file extensions, each with a specific purpose:</p>\n<ul>\n  <li><strong>.ts</strong> - regular TypeScript file (no JSX (JavaScript XML))</li>\n  <li><strong>.tsx</strong> - TypeScript file with JSX support (used with React)</li>\n  <li><strong>.d.ts</strong> - declaration file containing only type information, no code</li>\n  <li><strong>.mts</strong> - ES module TypeScript file</li>\n  <li><strong>.cts</strong> - CommonJS TypeScript file</li>\n  <li><strong>tsconfig.json</strong> - TypeScript compiler configuration</li>\n  <li><strong>tsconfig.build.json</strong> - separate config for production builds (common convention)</li>\n</ul>\n<p>The <code>.mts</code> and <code>.cts</code> extensions exist to make Node.js explicitly treat the file as ESM (ECMAScript Modules) or CommonJS.</p>",
    "topic": "typescript",
    "level": "beginner"
  },
  {
    "id": 391,
    "question": "What are getters and setters in TypeScript classes?",
    "answer": "<p>Getters (<code>get</code>) and setters (<code>set</code>) let you access a property like a normal field but run code under the hood. Great for validation, computed values, and encapsulation.</p>\n<pre><code>class User {\n  private _age: number = 0;\n\n  get age(): number {\n    return this._age;\n  }\n\n  set age(value: number) {\n    if (value &lt; 0) throw new Error(\"Age cannot be negative\");\n    this._age = value;\n  }\n}\n\nconst u = new User();\nu.age = 25;        // calls setter\nconsole.log(u.age); // calls getter, prints 25\n// u.age = -1;     // throws error\n</code></pre>\n<p>From outside, getters and setters look exactly like regular properties - clean API (Application Programming Interface), hidden logic.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 392,
    "question": "What are static members in TypeScript classes?",
    "answer": "<p><strong>Static</strong> members belong to the class itself, not to instances. You access them via the class name, not via <code>this</code>.</p>\n<pre><code>class MathUtil {\n  static PI = 3.14159;\n\n  static circleArea(r: number): number {\n    return MathUtil.PI * r * r;\n  }\n\n  static square(n: number): number {\n    return n * n;\n  }\n}\n\nconsole.log(MathUtil.PI);              // 3.14159\nconsole.log(MathUtil.circleArea(5));   // 78.5\nconsole.log(MathUtil.square(4));       // 16\n\n// No instance needed\n// const m = new MathUtil(); // unnecessary\n</code></pre>\n<p>Use static members for constants, factory methods, or utility functions that belong to a class but don't depend on instance state.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 393,
    "question": "How does method overriding and super work?",
    "answer": "<p>A subclass can <strong>override</strong> a method from its parent class. Use <code>super.methodName()</code> to call the parent's version from within the override.</p>\n<pre><code>class Animal {\n  speak(): void {\n    console.log(\"Some sound\");\n  }\n}\n\nclass Dog extends Animal {\n  speak(): void {\n    super.speak();        // call parent's version first\n    console.log(\"Woof!\");\n  }\n}\n\nnew Dog().speak();\n// Some sound\n// Woof!\n\n// super in constructor\nclass Cat extends Animal {\n  constructor(public name: string) {\n    super(); // must call parent constructor first\n  }\n}\n</code></pre>\n<p>If a class extends another, its constructor must call <code>super()</code> before using <code>this</code>.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 394,
    "question": "What is the difference between extends and implements?",
    "answer": "<p>Both <code>extends</code> and <code>implements</code> are used in classes but mean different things.</p>\n<ul>\n  <li><strong>extends:</strong> inherits from a parent class - gets its fields, methods, and behavior.</li>\n  <li><strong>implements:</strong> says \"I will satisfy this interface contract\" - no inheritance, you must provide everything yourself.</li>\n</ul>\n<pre><code>interface Greeter {\n  greet(): void;\n}\n\nclass Animal {\n  move() { console.log(\"moving\"); }\n}\n\n// extends - inherits move()\nclass Dog extends Animal {\n  bark() { console.log(\"bark\"); }\n}\n\n// implements - must provide greet() yourself\nclass Hello implements Greeter {\n  greet() { console.log(\"Hi\"); }\n}\n\n// Both at once\nclass Cat extends Animal implements Greeter {\n  greet() { console.log(\"Meow\"); }\n}\n</code></pre>\n<p>A class can <code>extends</code> only one class but <code>implements</code> multiple interfaces.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 395,
    "question": "Can interfaces extend other interfaces?",
    "answer": "<p>Yes! Interfaces can extend one or multiple other interfaces, combining all their members. This is how you compose related shapes.</p>\n<pre><code>interface Person {\n  name: string;\n  age: number;\n}\n\ninterface Employee extends Person {\n  salary: number;\n  department: string;\n}\n\n// Employee now has name, age, salary, department\nconst e: Employee = {\n  name: \"Rahul\",\n  age: 25,\n  salary: 50000,\n  department: \"Engineering\"\n};\n\n// Multiple inheritance\ninterface Timestamped { createdAt: Date; }\ninterface Loggable { log(): void; }\n\ninterface Order extends Timestamped, Loggable {\n  id: number;\n  total: number;\n}\n</code></pre>\n<p>Multiple inheritance for interfaces is fine because interfaces only describe shape - no behavior conflicts.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 396,
    "question": "Can an interface extend a class?",
    "answer": "<p>Yes - this is a less-known feature. When an interface extends a class, it inherits the class's members (including private and protected ones) but not the implementation.</p>\n<pre><code>class Control {\n  private state: any;\n}\n\ninterface SelectableControl extends Control {\n  select(): void;\n}\n\n// Only classes that descend from Control can implement this\nclass Button extends Control implements SelectableControl {\n  select() { console.log(\"selected\"); }\n}\n\n// Error - Image does not extend Control,\n// so it cannot satisfy the private 'state' member\n// class Image implements SelectableControl {\n//   select() {}\n// }\n</code></pre>\n<p>This pattern is used to restrict an interface to only a particular class hierarchy.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 397,
    "question": "What are call and construct signatures in TypeScript?",
    "answer": "<p>An interface can describe both regular function calls (<strong>call signature</strong>) and constructor calls with <code>new</code> (<strong>construct signature</strong>).</p>\n<pre><code>// Call signature\ninterface Greeter {\n  (name: string): string; // can be called like a function\n}\n\nconst hello: Greeter = (name) =&gt; \"Hi \" + name;\nhello(\"Rahul\");\n\n// Construct signature\ninterface UserConstructor {\n  new (name: string, age: number): User;\n}\n\nclass User {\n  constructor(public name: string, public age: number) {}\n}\n\nconst Ctor: UserConstructor = User;\nconst u = new Ctor(\"Rahul\", 25);\n\n// Mixed - has both\ninterface Counter {\n  (start: number): string;     // call\n  reset(): void;                // method\n  count: number;                // property\n}\n</code></pre>\n<p>Construct signatures are useful when you want to accept a class as a parameter (factory patterns).</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 398,
    "question": "How do you type a callback function?",
    "answer": "<p>You type a callback by writing its function signature - parameters and return type. Use a function type, type alias, or interface.</p>\n<pre><code>// Inline function type\nfunction onClick(handler: (event: MouseEvent) =&gt; void) {\n  // ...\n}\n\n// Type alias for reuse\ntype ClickHandler = (e: MouseEvent) =&gt; void;\nfunction setup(handler: ClickHandler) {}\n\n// Common: data callback\nfunction fetchData(callback: (err: Error | null, data?: string) =&gt; void) {\n  // simulate async\n  callback(null, \"hello\");\n}\n\n// Generic callback\nfunction map&lt;T, U&gt;(arr: T[], fn: (item: T, index: number) =&gt; U): U[] {\n  return arr.map(fn);\n}\n\nconst doubled = map([1, 2, 3], (n) =&gt; n * 2); // number[]\n</code></pre>\n<p>Always type your callbacks - it makes APIs predictable and gives users autocomplete.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 399,
    "question": "How do you type higher-order functions?",
    "answer": "<p>Higher-order functions take or return other functions. Type them by writing function types as parameters or return values.</p>\n<pre><code>// Returns a function\nfunction makeMultiplier(factor: number): (x: number) =&gt; number {\n  return (x) =&gt; x * factor;\n}\n\nconst double = makeMultiplier(2);\nconsole.log(double(5)); // 10\n\n// Takes a function, returns a function (decorator-like)\nfunction logged&lt;A extends any[], R&gt;(fn: (...args: A) =&gt; R): (...args: A) =&gt; R {\n  return (...args: A) =&gt; {\n    console.log(\"calling with\", args);\n    return fn(...args);\n  };\n}\n\nconst loggedAdd = logged((a: number, b: number) =&gt; a + b);\nloggedAdd(2, 3); // logs and returns 5\n</code></pre>\n<p>Generics make higher-order functions reusable across many function shapes.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 400,
    "question": "What is currying in TypeScript?",
    "answer": "<p><strong>Currying</strong> is transforming a function that takes multiple arguments into a chain of single-argument functions. TypeScript types each step explicitly.</p>\n<pre><code>// Regular\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Curried\nfunction addCurried(a: number): (b: number) =&gt; number {\n  return (b) =&gt; a + b;\n}\n\nconst add5 = addCurried(5);\nconsole.log(add5(3));  // 8\nconsole.log(add5(10)); // 15\n\n// Three-level curry\nfunction triple(a: number) {\n  return (b: number) =&gt; (c: number) =&gt; a + b + c;\n}\nconsole.log(triple(1)(2)(3)); // 6\n</code></pre>\n<p>Currying is great for creating specialized functions from generic ones, and is a cornerstone of functional programming.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 401,
    "question": "What are user-defined type guards (type predicates)?",
    "answer": "<p>A <strong>type predicate</strong> is a function that returns a boolean and tells TS \"if this returns true, the value is of this type\". The syntax is <code>parameterName is Type</code>.</p>\n<pre><code>interface Cat { meow(): void; }\ninterface Dog { bark(): void; }\n\n// Type predicate\nfunction isCat(animal: Cat | Dog): animal is Cat {\n  return (animal as Cat).meow !== undefined;\n}\n\nfunction handle(animal: Cat | Dog) {\n  if (isCat(animal)) {\n    animal.meow(); // TS now knows it's Cat\n  } else {\n    animal.bark(); // TS knows it's Dog\n  }\n}\n\n// Common pattern - validate unknown\nfunction isString(val: unknown): val is string {\n  return typeof val === \"string\";\n}\n</code></pre>\n<p>Type predicates let you encapsulate complex narrowing logic in reusable functions.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 402,
    "question": "What are assertion functions?",
    "answer": "<p>An <strong>assertion function</strong> throws if a condition is false, and tells TypeScript that the condition is true after the call. Syntax: <code>asserts paramName</code> or <code>asserts paramName is Type</code>.</p>\n<pre><code>// Simple assertion\nfunction assert(condition: any, msg?: string): asserts condition {\n  if (!condition) throw new Error(msg || \"Assertion failed\");\n}\n\nfunction process(value: string | null) {\n  assert(value !== null, \"value is null\");\n  // After this line, TS knows value is string\n  console.log(value.toUpperCase());\n}\n\n// Type assertion function\nfunction assertString(val: unknown): asserts val is string {\n  if (typeof val !== \"string\") throw new Error(\"not string\");\n}\n\nfunction handle(x: unknown) {\n  assertString(x);\n  console.log(x.length); // x is now string\n}\n</code></pre>\n<p>Assertion functions are great for validating inputs at the boundary of your application.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 403,
    "question": "What are excess property checks?",
    "answer": "<p>When you assign a fresh object literal to a typed variable, TypeScript checks for <strong>extra properties</strong> that are not in the type - even if the rest of the shape matches.</p>\n<pre><code>interface Config {\n  url: string;\n  timeout: number;\n}\n\n// Error - 'retries' is not in Config\n// const c: Config = { url: \"x\", timeout: 30, retries: 3 };\n\n// Workaround 1: assign to variable first (no excess check)\nconst opts = { url: \"x\", timeout: 30, retries: 3 };\nconst c: Config = opts; // OK\n\n// Workaround 2: type assertion\nconst c2 = { url: \"x\", timeout: 30, retries: 3 } as Config;\n\n// Workaround 3: add index signature\ninterface Config2 {\n  url: string;\n  timeout: number;\n  [key: string]: any;\n}\n</code></pre>\n<p>Excess property checks help catch typos like writing <code>colour</code> instead of <code>color</code>.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 404,
    "question": "What is structural typing in TypeScript?",
    "answer": "<p>TypeScript uses <strong>structural typing</strong> - two types are compatible if they have the same shape, regardless of their declared name. This is different from many other languages that use nominal typing.</p>\n<pre><code>interface Point {\n  x: number;\n  y: number;\n}\n\nclass Vector {\n  constructor(public x: number, public y: number) {}\n}\n\nfunction logPoint(p: Point) {\n  console.log(p.x, p.y);\n}\n\nconst v = new Vector(1, 2);\nlogPoint(v); // OK! Vector has same shape as Point\n\n// Even unrelated types work\nconst obj = { x: 5, y: 10, z: 15 };\nlogPoint(obj); // OK - has x and y\n</code></pre>\n<p>This is sometimes called \"duck typing\" - if it walks like a duck and quacks like a duck, it's a duck. Use branded types when you need nominal-style restrictions.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 405,
    "question": "What is type widening in TypeScript?",
    "answer": "<p><strong>Widening</strong> is when TypeScript chooses a more general type than the literal value. It happens with <code>let</code>, function parameters, and object literals.</p>\n<pre><code>const a = \"hello\"; // type: \"hello\" (literal, narrow)\nlet b = \"hello\";   // type: string (widened)\n\nconst obj = { kind: \"circle\" }; // { kind: string } - widened\n\n// Widening can cause issues\ntype Shape = { kind: \"circle\" } | { kind: \"square\" };\nconst s = { kind: \"circle\" };\n// const sh: Shape = s; // Error! kind is widened to string\n\n// Fix: as const\nconst s2 = { kind: \"circle\" } as const;\nconst sh: Shape = s2; // OK\n</code></pre>\n<p>Use <code>as const</code> when you want literal types preserved instead of widened.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 406,
    "question": "What are readonly arrays and tuples?",
    "answer": "<p>You can make arrays and tuples <strong>read-only</strong> so their contents cannot be modified. Use <code>readonly T[]</code> or <code>ReadonlyArray&lt;T&gt;</code>.</p>\n<pre><code>const nums: readonly number[] = [1, 2, 3];\n// nums.push(4);   // Error! push not available\n// nums[0] = 10;   // Error!\n\n// Same with ReadonlyArray\nconst items: ReadonlyArray&lt;string&gt; = [\"a\", \"b\"];\n\n// Readonly tuple\nconst point: readonly [number, number] = [1, 2];\n// point[0] = 5; // Error!\n\n// Common pattern - prevent mutation in function args\nfunction sum(nums: readonly number[]): number {\n  return nums.reduce((a, b) =&gt; a + b, 0);\n}\n</code></pre>\n<p>Use readonly types to clearly signal immutability and protect data from accidental changes.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 407,
    "question": "What are tuple labels?",
    "answer": "<p>Since TS 4.0, you can give names (labels) to tuple elements. The labels are purely for documentation - they don't affect type checking but make signatures much more readable.</p>\n<pre><code>// Without labels - hard to read\ntype Range = [number, number];\n\n// With labels - much clearer\ntype Range2 = [start: number, end: number];\n\nfunction range([start, end]: Range2) {\n  console.log(`from ${start} to ${end}`);\n}\n\n// Especially useful with rest\ntype Args = [first: string, ...rest: number[]];\n\nfunction process(...args: Args) {\n  // hover shows: process(first: string, ...rest: number[])\n}\n</code></pre>\n<p>Labels show up in IDE (Integrated Development Environment) tooltips, making your APIs self-documenting.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 408,
    "question": "What are variadic tuple types?",
    "answer": "<p><strong>Variadic tuple types</strong> let you use a spread (<code>...T</code>) inside a tuple type definition. They allow you to express \"this tuple plus some other stuff\" in the type system.</p>\n<pre><code>// Concat any tuple with [boolean]\ntype WithBool&lt;T extends unknown[]&gt; = [...T, boolean];\n\ntype A = WithBool&lt;[number, string]&gt;; // [number, string, boolean]\n\n// Generic concat function\nfunction concat&lt;T extends unknown[], U extends unknown[]&gt;(\n  a: T, b: U\n): [...T, ...U] {\n  return [...a, ...b];\n}\n\nconst r = concat([1, 2], [\"a\", \"b\"]);\n// type: [number, number, string, string]\n\n// Drop first element\ntype Tail&lt;T extends any[]&gt; = T extends [any, ...infer R] ? R : [];\ntype B = Tail&lt;[1, 2, 3]&gt;; // [2, 3]\n</code></pre>\n<p>Variadic tuples power many advanced patterns like function composition and curry typing.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 409,
    "question": "What are generic default types?",
    "answer": "<p>Generic type parameters can have <strong>default values</strong>, just like function parameters. If the caller doesn't supply a type, the default is used.</p>\n<pre><code>// Default to string\nfunction createArray&lt;T = string&gt;(length: number, value: T): T[] {\n  return Array(length).fill(value);\n}\n\nconst a = createArray(3, \"x\");      // string[]\nconst b = createArray&lt;number&gt;(3, 0); // number[]\n\n// Common in React component types\ninterface Props&lt;T = unknown&gt; {\n  data: T;\n  onChange: (val: T) =&gt; void;\n}\n\n// Multiple defaults\ninterface Pair&lt;K = string, V = number&gt; {\n  key: K;\n  value: V;\n}\n\nconst p: Pair = { key: \"x\", value: 5 }; // Pair&lt;string, number&gt;\n</code></pre>\n<p>Defaults make generic APIs easier to use - users can opt out of providing types when defaults are good enough.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 410,
    "question": "How do mapped type modifiers work?",
    "answer": "<p>Mapped types support modifiers to add or remove <code>readonly</code> and optional (<code>?</code>) flags. Use <code>+</code> to add and <code>-</code> to remove.</p>\n<pre><code>interface User {\n  readonly id: number;\n  name?: string;\n  email?: string;\n}\n\n// Remove readonly and optional - make all required &amp; mutable\ntype StrictUser = {\n  -readonly [K in keyof User]-?: User[K];\n};\n// { id: number; name: string; email: string }\n\n// Add readonly and optional\ntype LooseUser = {\n  +readonly [K in keyof User]+?: User[K];\n};\n// All readonly &amp; optional\n\n// This is how Required and Readonly are built\ntype MyRequired&lt;T&gt; = { [K in keyof T]-?: T[K] };\ntype MyReadonly&lt;T&gt; = { readonly [K in keyof T]: T[K] };\n</code></pre>\n<p>The <code>+</code> is implicit when omitted. The <code>-</code> form is the powerful one - it lets you strip modifiers.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 411,
    "question": "How do you create a recursive mapped type?",
    "answer": "<p>You can call a mapped type recursively to apply transformations deeply through nested objects. Common examples are <code>DeepReadonly</code> and <code>DeepPartial</code>.</p>\n<pre><code>type DeepReadonly&lt;T&gt; = {\n  readonly [K in keyof T]: T[K] extends object ? DeepReadonly&lt;T[K]&gt; : T[K];\n};\n\ntype DeepPartial&lt;T&gt; = {\n  [K in keyof T]?: T[K] extends object ? DeepPartial&lt;T[K]&gt; : T[K];\n};\n\ninterface Settings {\n  ui: { theme: string; layout: { spacing: number } };\n  user: { name: string };\n}\n\ntype FrozenSettings = DeepReadonly&lt;Settings&gt;;\n// All nested fields become readonly\n\ntype PatchSettings = DeepPartial&lt;Settings&gt;;\n// All nested fields become optional\n</code></pre>\n<p>TypeScript has a recursion depth limit, so very deep types may break - test your types in real code.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 412,
    "question": "How do you type DOM event handlers?",
    "answer": "<p>The DOM (Document Object Model) library types provide specific event types like <code>MouseEvent</code>, <code>KeyboardEvent</code>, <code>InputEvent</code>, etc. Use them when typing event handlers.</p>\n<pre><code>// Click handler\nconst btn = document.querySelector(\"button\")!;\nbtn.addEventListener(\"click\", (e: MouseEvent) =&gt; {\n  console.log(e.clientX, e.clientY);\n});\n\n// Keyboard handler\ndocument.addEventListener(\"keydown\", (e: KeyboardEvent) =&gt; {\n  if (e.key === \"Enter\") console.log(\"submit\");\n});\n\n// Input change\nconst input = document.querySelector&lt;HTMLInputElement&gt;(\"#name\")!;\ninput.addEventListener(\"input\", (e: Event) =&gt; {\n  const target = e.target as HTMLInputElement;\n  console.log(target.value);\n});\n\n// React event\nfunction handleClick(e: React.MouseEvent&lt;HTMLButtonElement&gt;) {\n  e.preventDefault();\n}\n</code></pre>\n<p>Each event type has its own properties - <code>MouseEvent</code> has <code>clientX</code>, <code>KeyboardEvent</code> has <code>key</code>, etc.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 413,
    "question": "What is the 'in' keyword used for?",
    "answer": "<p>The <code>in</code> keyword has two distinct uses in TypeScript - as a runtime operator for property checks, and as a type-level operator inside mapped types.</p>\n<pre><code>// 1. Runtime - check if property exists (also a type guard)\ntype Fish = { swim: () =&gt; void };\ntype Bird = { fly: () =&gt; void };\n\nfunction move(animal: Fish | Bird) {\n  if (\"swim\" in animal) {\n    animal.swim(); // TS narrows to Fish\n  } else {\n    animal.fly();  // TS narrows to Bird\n  }\n}\n\n// 2. Type-level - in mapped types\ntype Roles = \"admin\" | \"user\" | \"guest\";\ntype Permissions = {\n  [K in Roles]: string[];\n};\n// { admin: string[]; user: string[]; guest: string[] }\n</code></pre>\n<p>The first form is a type guard. The second form drives mapped types and is fundamental to TypeScript's type-level programming.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 414,
    "question": "How do you type a Promise chain?",
    "answer": "<p>Each <code>.then()</code> in a promise chain returns a new Promise, and TypeScript automatically infers the resolved type as long as your return values are typed.</p>\n<pre><code>function fetchUser(id: number): Promise&lt;{ name: string }&gt; {\n  return Promise.resolve({ name: \"Rahul\" });\n}\n\nfetchUser(1)\n  .then((user) =&gt; user.name)        // returns string\n  .then((name) =&gt; name.length)      // returns number\n  .then((len) =&gt; console.log(len)); // void\n\n// Catching errors\nfetchUser(1)\n  .then((u) =&gt; u.name)\n  .catch((err: Error) =&gt; console.error(err.message));\n\n// async/await is usually cleaner\nasync function main() {\n  const user = await fetchUser(1);\n  console.log(user.name.length);\n}\n</code></pre>\n<p>Async/await is preferred for readability, but explicit <code>.then</code> chains type just as cleanly.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 415,
    "question": "How do you create an enum-like object using as const?",
    "answer": "<p>Instead of using <code>enum</code>, you can create a frozen object with <code>as const</code> and derive a union type from it. This is the modern, lighter-weight approach.</p>\n<pre><code>const Status = {\n  Active: \"ACTIVE\",\n  Inactive: \"INACTIVE\",\n  Pending: \"PENDING\"\n} as const;\n\n// Derive type from values\ntype Status = typeof Status[keyof typeof Status];\n// \"ACTIVE\" | \"INACTIVE\" | \"PENDING\"\n\nfunction setStatus(s: Status) {\n  console.log(s);\n}\n\nsetStatus(Status.Active);   // OK\nsetStatus(\"PENDING\");       // also OK\n// setStatus(\"DELETED\");    // Error\n</code></pre>\n<p>Benefits over enum: zero runtime cost (just an object literal), tree-shakeable, plays nicer with bundlers, and easier to JSON (JavaScript Object Notation)-serialize.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 416,
    "question": "What is the difference between function declarations and function expressions in TS?",
    "answer": "<p>Both are typed the same way, but function declarations are <strong>hoisted</strong> while function expressions are not. Both can be fully typed in TypeScript.</p>\n<pre><code>// Function declaration - hoisted\nsayHi(\"Rahul\"); // works, even though declared below\nfunction sayHi(name: string): void {\n  console.log(\"Hi \" + name);\n}\n\n// Function expression - NOT hoisted\n// sayBye(\"Rahul\"); // Error! used before declaration\nconst sayBye = function (name: string): void {\n  console.log(\"Bye \" + name);\n};\n\n// Arrow function expression\nconst greet = (name: string): string =&gt; \"Hi \" + name;\n</code></pre>\n<p>Use declarations for top-level utilities. Use arrow expressions for callbacks and class fields where you want lexical <code>this</code>.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 417,
    "question": "How do you make a function's return type depend on its input type?",
    "answer": "<p>Use <strong>generics</strong> or <strong>conditional types</strong> to make the return type vary based on what the user passes in.</p>\n<pre><code>// Simple generic\nfunction identity&lt;T&gt;(x: T): T {\n  return x;\n}\nconst a = identity(5);     // number\nconst b = identity(\"hi\");  // string\n\n// Conditional return type\nfunction wrap&lt;T&gt;(x: T): T extends string ? string[] : T[] {\n  return [x] as any;\n}\n\nconst x = wrap(\"hi\"); // string[]\nconst y = wrap(42);   // number[]\n\n// Overloads also work\nfunction parse(s: \"int\"): number;\nfunction parse(s: \"str\"): string;\nfunction parse(s: string): any {\n  return s === \"int\" ? 0 : \"\";\n}\n</code></pre>\n<p>This pattern is core to building APIs that feel \"smart\" - the return type changes based on the call.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 418,
    "question": "What is the difference between unknown[] and any[]?",
    "answer": "<p><code>any[]</code> lets you do anything with array elements without checks. <code>unknown[]</code> forces you to check the type before using each element. <code>unknown[]</code> is much safer.</p>\n<pre><code>// any[] - unsafe\nfunction processAny(arr: any[]) {\n  arr.forEach(item =&gt; {\n    item.toUpperCase(); // No error, may crash\n  });\n}\n\n// unknown[] - safe\nfunction processUnknown(arr: unknown[]) {\n  arr.forEach(item =&gt; {\n    // item.toUpperCase(); // Error\n    if (typeof item === \"string\") {\n      console.log(item.toUpperCase()); // OK\n    }\n  });\n}\n\nprocessUnknown([1, \"hi\", true, null]); // works\n</code></pre>\n<p>Always prefer <code>unknown[]</code> when accepting arrays of mixed or untrusted data.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 419,
    "question": "How do you type-only import and export?",
    "answer": "<p>Use <code>import type</code> and <code>export type</code> when you only need to import or export a type. The compiler removes these completely from the JS output - zero runtime cost.</p>\n<pre><code>// types.ts\nexport type User = { id: number; name: string };\nexport interface Post { title: string }\nexport const PI = 3.14;\n\n// app.ts - type-only import\nimport type { User, Post } from \"./types\";\nimport { PI } from \"./types\"; // value import\n\nconst u: User = { id: 1, name: \"Rahul\" };\n\n// Re-export as type only\nexport type { User } from \"./types\";\n\n// Mixed - inline type modifier\nimport { type User as U, PI } from \"./types\";\n</code></pre>\n<p>Type-only imports help with circular dependencies, faster builds, and smaller bundles. Recommended whenever you import only types.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 420,
    "question": "What is method chaining and how do you type it?",
    "answer": "<p><strong>Method chaining</strong> is calling multiple methods one after another on the same object. To enable it, each method must return <code>this</code> (or the same type).</p>\n<pre><code>class StringBuilder {\n  private value = \"\";\n\n  add(text: string): this {\n    this.value += text;\n    return this;\n  }\n\n  upper(): this {\n    this.value = this.value.toUpperCase();\n    return this;\n  }\n\n  build(): string {\n    return this.value;\n  }\n}\n\nconst result = new StringBuilder()\n  .add(\"hello \")\n  .add(\"world\")\n  .upper()\n  .build();\nconsole.log(result); // \"HELLO WORLD\"\n</code></pre>\n<p>Returning <code>this</code> (the polymorphic this type) ensures chaining still works correctly in subclasses.</p>",
    "topic": "typescript",
    "level": "intermediate"
  },
  {
    "id": 421,
    "question": "What is variance (covariance and contravariance) in TypeScript?",
    "answer": "<p><strong>Variance</strong> describes how subtype relationships flow through type constructors like arrays and functions.</p>\n<ul>\n  <li><strong>Covariant:</strong> If <code>Dog</code> is a subtype of <code>Animal</code>, then <code>Dog[]</code> is a subtype of <code>Animal[]</code>. Outputs are covariant.</li>\n  <li><strong>Contravariant:</strong> Function parameters are contravariant. <code>(a: Animal) =&gt; void</code> is a subtype of <code>(d: Dog) =&gt; void</code>.</li>\n  <li><strong>Bivariant:</strong> Method parameters in TS are bivariant by default (a hole in the type system, fixed by <code>strictFunctionTypes</code>).</li>\n</ul>\n<pre><code>class Animal {}\nclass Dog extends Animal { bark() {} }\n\nlet animals: Animal[] = [];\nlet dogs: Dog[] = [];\nanimals = dogs; // OK - covariant\n\ntype AnimalFn = (a: Animal) =&gt; void;\ntype DogFn = (d: Dog) =&gt; void;\nlet df: DogFn = (a: Animal) =&gt; {}; // OK - contravariant\n</code></pre>\n<p>Understanding variance is key to writing safe generic code.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 422,
    "question": "What does the strictFunctionTypes flag do?",
    "answer": "<p><strong>strictFunctionTypes</strong> makes function parameters checked <strong>contravariantly</strong> instead of bivariantly, which is the mathematically correct behavior. This catches more bugs.</p>\n<pre><code>// With strictFunctionTypes\ntype AnimalFn = (a: { name: string }) =&gt; void;\ntype DogFn = (d: { name: string; bark: () =&gt; void }) =&gt; void;\n\nconst dogFn: DogFn = (d) =&gt; d.bark();\n\n// const af: AnimalFn = dogFn; // Error with strictFunctionTypes\n// Why? AnimalFn might be called with Animal that doesn't have bark\n</code></pre>\n<p><strong>Note:</strong> Method syntax (<code>method(arg): void</code>) is still bivariant for backwards compat. Only function-property syntax (<code>method: (arg) =&gt; void</code>) gets the strict check.</p>\n<p>This flag is enabled with <code>\"strict\": true</code> and is highly recommended.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 423,
    "question": "Is the TypeScript type system sound?",
    "answer": "<p>No - TypeScript's type system is intentionally <strong>not fully sound</strong>. There are escape hatches and design choices that allow type errors to slip through to runtime. This is by design, prioritizing pragmatism and JS compatibility.</p>\n<p>Examples of unsoundness:</p>\n<ul>\n  <li><strong>any:</strong> turns off all checks</li>\n  <li><strong>Type assertions:</strong> trust the developer with no runtime validation</li>\n  <li><strong>Bivariant method parameters</strong> (without strictFunctionTypes)</li>\n  <li><strong>Object index access:</strong> <code>obj[key]</code> may return undefined but type says otherwise (unless <code>noUncheckedIndexedAccess</code>)</li>\n  <li><strong>void return:</strong> can be assigned from non-void functions</li>\n</ul>\n<pre><code>const arr = [1, 2, 3];\nconst x = arr[10]; // type: number, but value: undefined!\n</code></pre>\n<p>Enable <code>noUncheckedIndexedAccess</code> and <code>strict</code> to minimize unsound spots.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 424,
    "question": "How does the Awaited utility type work?",
    "answer": "<p><strong>Awaited&lt;T&gt;</strong> recursively unwraps Promise types. It's the type-level equivalent of <code>await</code>. Built into TS since 4.5.</p>\n<pre><code>type A = Awaited&lt;Promise&lt;string&gt;&gt;;\n// string\n\ntype B = Awaited&lt;Promise&lt;Promise&lt;number&gt;&gt;&gt;;\n// number (recursively unwrapped)\n\ntype C = Awaited&lt;boolean&gt;;\n// boolean (non-promise types pass through)\n\n// Useful with generics\nasync function fetchData(): Promise&lt;{ id: number }&gt; {\n  return { id: 1 };\n}\n\ntype Data = Awaited&lt;ReturnType&lt;typeof fetchData&gt;&gt;;\n// { id: number }\n\n// Custom implementation (simplified)\ntype MyAwaited&lt;T&gt; = T extends Promise&lt;infer U&gt; ? MyAwaited&lt;U&gt; : T;\n</code></pre>\n<p><code>Awaited</code> is essential when working with async APIs and you need the resolved value's type.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 425,
    "question": "What is the NoInfer utility type?",
    "answer": "<p><strong>NoInfer&lt;T&gt;</strong> (TS 5.4+) blocks TypeScript from using a type position for type inference. Useful when you want one parameter to drive the inference but not another.</p>\n<pre><code>function pickFrom&lt;T&gt;(items: T[], chosen: NoInfer&lt;T&gt;): T {\n  if (!items.includes(chosen)) throw new Error(\"not in list\");\n  return chosen;\n}\n\npickFrom([\"red\", \"green\", \"blue\"], \"red\"); // OK\n// Without NoInfer, TS would infer T = \"red\" | \"green\" | \"blue\" | typo\n// pickFrom([\"red\", \"green\"], \"yellow\"); // Error - not in list\n\n// Common in defaults / config functions\nfunction createState&lt;T&gt;(initial: T, validate: (v: NoInfer&lt;T&gt;) =&gt; boolean) {\n  // ...\n}\n</code></pre>\n<p>Before TS 5.4, library authors used hacky workarounds like intersections with <code>{}</code>. <code>NoInfer</code> gives a clean, official solution.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 426,
    "question": "What are const type parameters?",
    "answer": "<p><strong>const type parameters</strong> (TS 5.0+) make a generic infer the most specific literal type, like <code>as const</code> on arguments. Use the <code>const</code> modifier in the generic declaration.</p>\n<pre><code>// Without const\nfunction first&lt;T&gt;(arr: T[]): T {\n  return arr[0];\n}\nconst a = first([\"x\", \"y\"]); // type: string\n\n// With const\nfunction firstConst&lt;const T&gt;(arr: T[]): T {\n  return arr[0];\n}\nconst b = firstConst([\"x\", \"y\"]); // type: \"x\" | \"y\"\n\n// Common in routes, configs, etc.\nfunction defineRoutes&lt;const T extends readonly string[]&gt;(routes: T): T {\n  return routes;\n}\n\nconst routes = defineRoutes([\"/home\", \"/about\"]);\n// type: readonly [\"/home\", \"/about\"]\n</code></pre>\n<p>Saves callers from having to write <code>as const</code> on every call site.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 427,
    "question": "How do you build a type-safe event emitter?",
    "answer": "<p>By using a generic event map, you can ensure each event has the correct payload type at compile time.</p>\n<pre><code>type EventMap = {\n  click: { x: number; y: number };\n  login: { userId: number };\n  logout: void;\n};\n\nclass Emitter&lt;T extends Record&lt;string, any&gt;&gt; {\n  private listeners: Partial&lt;{ [K in keyof T]: ((data: T[K]) =&gt; void)[] }&gt; = {};\n\n  on&lt;K extends keyof T&gt;(event: K, fn: (data: T[K]) =&gt; void) {\n    (this.listeners[event] ||= []).push(fn);\n  }\n\n  emit&lt;K extends keyof T&gt;(event: K, data: T[K]) {\n    this.listeners[event]?.forEach(fn =&gt; fn(data));\n  }\n}\n\nconst e = new Emitter&lt;EventMap&gt;();\ne.on(\"click\", (d) =&gt; console.log(d.x, d.y));\ne.emit(\"click\", { x: 1, y: 2 });\n// e.emit(\"click\", { foo: 1 }); // Error!\n</code></pre>\n<p>This pattern is used by many real-world libraries to give users a fully type-safe pub/sub API (Application Programming Interface).</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 428,
    "question": "What is type compatibility in TypeScript?",
    "answer": "<p><strong>Type compatibility</strong> (also called assignability) determines whether a value of one type can be assigned to a variable of another type. TS uses structural compatibility - two types are compatible if their shapes match.</p>\n<pre><code>interface Named { name: string; }\n\nclass Person {\n  constructor(public name: string) {}\n}\n\nlet n: Named;\nn = new Person(\"Rahul\"); // OK - Person has name\n\n// Functions - parameters are checked contravariantly\ntype Handler = (e: { type: string }) =&gt; void;\nconst h: Handler = (e: { type: string; data: any }) =&gt; {};\n// Error - h would receive events without 'data'\n\n// Return types are covariant\ntype Maker = () =&gt; Named;\nconst m: Maker = () =&gt; ({ name: \"x\", extra: 1 }); // OK\n</code></pre>\n<p>Once you understand structural compatibility plus variance, most TS errors start to make sense.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 429,
    "question": "What are project references in TypeScript?",
    "answer": "<p><strong>Project references</strong> let you split a large TypeScript codebase into smaller, independently buildable projects. Each project has its own <code>tsconfig.json</code> and lists its dependencies.</p>\n<pre><code>// packages/core/tsconfig.json\n{\n  \"compilerOptions\": {\n    \"composite\": true,\n    \"outDir\": \"./dist\"\n  }\n}\n\n// packages/app/tsconfig.json\n{\n  \"compilerOptions\": {\n    \"outDir\": \"./dist\"\n  },\n  \"references\": [\n    { \"path\": \"../core\" }\n  ]\n}\n\n# Build with --build mode\ntsc --build\n</code></pre>\n<p><strong>Benefits:</strong> faster incremental builds, clear dependency graph, parallel builds, and better separation between subprojects. Used heavily in monorepos.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 430,
    "question": "What is incremental compilation in TypeScript?",
    "answer": "<p><strong>Incremental compilation</strong> saves type-check info to a <code>.tsbuildinfo</code> file so subsequent builds only re-check what actually changed. Massively faster on large codebases.</p>\n<pre><code>// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"incremental\": true,\n    \"tsBuildInfoFile\": \"./.tsbuildinfo\"\n  }\n}\n</code></pre>\n<p>First build is normal speed. Subsequent builds reuse cached info and skip unchanged files. Combine with <code>watch</code> mode for the smoothest dev loop:</p>\n<pre><code>tsc --watch --incremental\n</code></pre>\n<p>For project references, <code>composite: true</code> implies <code>incremental: true</code> automatically.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 431,
    "question": "What is the composite option in tsconfig?",
    "answer": "<p>The <strong>composite</strong> option marks a project as a buildable subproject for the project references system. It enables several requirements at once.</p>\n<pre><code>{\n  \"compilerOptions\": {\n    \"composite\": true\n    // implies:\n    // \"incremental\": true\n    // \"declaration\": true     (must emit .d.ts)\n    // require explicit \"rootDir\"\n    // include all source files explicitly\n  }\n}\n</code></pre>\n<p>When you enable <code>composite</code>, TypeScript can treat your subproject as a unit that other projects can reference. Required for monorepo setups using <code>tsc --build</code>.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 432,
    "question": "What is the paths option in tsconfig?",
    "answer": "<p>The <strong>paths</strong> option in <code>tsconfig.json</code> lets you create import aliases - shortcut names for long module paths.</p>\n<pre><code>{\n  \"compilerOptions\": {\n    \"baseUrl\": \"./\",\n    \"paths\": {\n      \"@components/*\": [\"src/components/*\"],\n      \"@utils/*\": [\"src/utils/*\"],\n      \"@/*\": [\"src/*\"]\n    }\n  }\n}\n</code></pre>\n<pre><code>// Now you can write\nimport Button from \"@components/Button\";\nimport { format } from \"@utils/date\";\nimport config from \"@/config\";\n\n// Instead of\nimport Button from \"../../../components/Button\";\n</code></pre>\n<p><strong>Important:</strong> <code>paths</code> only affects type checking. For actual runtime, you need a bundler (Webpack, Vite, etc.) or runtime resolver to handle them too.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 433,
    "question": "What is the InstanceType utility type?",
    "answer": "<p><strong>InstanceType&lt;T&gt;</strong> extracts the instance type of a class type (a constructor function). Useful when you have a reference to a class and need the type of one of its instances.</p>\n<pre><code>class User {\n  constructor(public name: string, public age: number) {}\n}\n\ntype U = InstanceType&lt;typeof User&gt;;\n// equivalent to: User\n\n// Useful in generics\nfunction createInstance&lt;T extends new (...args: any[]) =&gt; any&gt;(\n  Cls: T,\n  ...args: ConstructorParameters&lt;T&gt;\n): InstanceType&lt;T&gt; {\n  return new Cls(...args);\n}\n\nconst u = createInstance(User, \"Rahul\", 25);\n// u is User\n</code></pre>\n<p>Pairs perfectly with <code>ConstructorParameters</code> to write generic factory functions.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 434,
    "question": "What are ConstructorParameters and ThisType utility types?",
    "answer": "<p><strong>ConstructorParameters&lt;T&gt;</strong> extracts a class's constructor parameters as a tuple. <strong>ThisType&lt;T&gt;</strong> hints the type of <code>this</code> inside an object literal.</p>\n<pre><code>class User {\n  constructor(public name: string, public age: number) {}\n}\n\ntype Args = ConstructorParameters&lt;typeof User&gt;;\n// [string, number]\n\nconst args: Args = [\"Rahul\", 25];\nconst u = new User(...args);\n\n// ThisType - used in object literal patterns\ninterface Helpers {\n  log(): void;\n}\n\nconst obj: { data: number } &amp; ThisType&lt;Helpers&gt; = {\n  data: 5,\n  // inside methods, 'this' is typed as Helpers (set by framework)\n};\n</code></pre>\n<p><code>ThisType</code> is mostly used by framework authors (like Vue's options API (Application Programming Interface)) to give users typed <code>this</code> inside config objects.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 435,
    "question": "What are NonNullable, Extract and Exclude utility types?",
    "answer": "<p>These are very common conditional utility types built into TypeScript.</p>\n<ul>\n  <li><strong>NonNullable&lt;T&gt;</strong> - removes <code>null</code> and <code>undefined</code> from T</li>\n  <li><strong>Exclude&lt;T, U&gt;</strong> - removes types in U from T</li>\n  <li><strong>Extract&lt;T, U&gt;</strong> - keeps only types in T that are assignable to U</li>\n</ul>\n<pre><code>type A = NonNullable&lt;string | null | undefined&gt;;\n// string\n\ntype B = Exclude&lt;\"a\" | \"b\" | \"c\", \"a\"&gt;;\n// \"b\" | \"c\"\n\ntype C = Extract&lt;\"a\" | \"b\" | 1 | 2, string&gt;;\n// \"a\" | \"b\"\n\n// Real example - filter event handlers\ntype Handlers = { onClick: () =&gt; void; onChange: () =&gt; void; data: string };\ntype EventKeys = Extract&lt;keyof Handlers, `on${string}`&gt;;\n// \"onClick\" | \"onChange\"\n</code></pre>\n<p>These are essential for type-level filtering and slicing of unions.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 436,
    "question": "How do you convert a tuple to a union?",
    "answer": "<p>Use indexed access with <code>[number]</code> on a tuple/array type to get a union of all its element types.</p>\n<pre><code>type Tuple = [\"red\", \"green\", \"blue\"];\ntype Union = Tuple[number];\n// \"red\" | \"green\" | \"blue\"\n\n// Works with any array type\nconst colors = [\"red\", \"green\", \"blue\"] as const;\ntype Color = typeof colors[number];\n// \"red\" | \"green\" | \"blue\"\n\n// Practical example\nconst routes = [\"/home\", \"/about\", \"/contact\"] as const;\ntype Route = typeof routes[number];\n\nfunction navigate(route: Route) {\n  console.log(\"going to \" + route);\n}\nnavigate(\"/home\"); // OK\n// navigate(\"/foo\"); // Error\n</code></pre>\n<p>This is the standard pattern for deriving string union types from a list of constants.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 437,
    "question": "How do you convert a union to an intersection?",
    "answer": "<p>This is a famous TS trick using <strong>contravariance</strong> in function parameters. It's not built-in but can be implemented with conditional types.</p>\n<pre><code>type UnionToIntersection&lt;U&gt; =\n  (U extends any ? (k: U) =&gt; void : never) extends ((k: infer I) =&gt; void)\n    ? I\n    : never;\n\ntype A = UnionToIntersection&lt;{ a: 1 } | { b: 2 }&gt;;\n// { a: 1 } &amp; { b: 2 }\n\ntype B = UnionToIntersection&lt;\"x\" | \"y\"&gt;;\n// \"x\" &amp; \"y\" (= never, since strings can't intersect)\n</code></pre>\n<p>This trick exploits how contravariant positions force TS to compute the intersection of distributed function types. It's often used in advanced library code, e.g., for builder patterns.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 438,
    "question": "What are phantom types in TypeScript?",
    "answer": "<p><strong>Phantom types</strong> use a generic parameter that doesn't appear in the actual structure - it exists only at the type level to distinguish otherwise identical types. They are a form of branding.</p>\n<pre><code>// Phantom type - 'Tag' is never used in the value\ntype Tagged&lt;T, Tag&gt; = T &amp; { __tag?: Tag };\n\ntype Meters = Tagged&lt;number, \"Meters\"&gt;;\ntype Feet = Tagged&lt;number, \"Feet\"&gt;;\n\nfunction toMeters(m: Meters) { return m; }\n\nconst dist1 = 10 as Meters;\nconst dist2 = 30 as Feet;\n\ntoMeters(dist1); // OK\n// toMeters(dist2); // Error - Feet is not Meters\n</code></pre>\n<p>Phantom types prevent mixing values that share the same runtime type but represent different concepts (units, IDs, currencies, etc.).</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 439,
    "question": "How do you implement DeepPartial?",
    "answer": "<p><strong>DeepPartial</strong> recursively makes every property optional, including nested objects. Useful for patch / merge operations.</p>\n<pre><code>type DeepPartial&lt;T&gt; = {\n  [K in keyof T]?: T[K] extends object\n    ? T[K] extends Function\n      ? T[K]\n      : DeepPartial&lt;T[K]&gt;\n    : T[K];\n};\n\ninterface Settings {\n  ui: {\n    theme: string;\n    layout: { spacing: number; sidebar: boolean };\n  };\n  user: { name: string; age: number };\n}\n\nconst patch: DeepPartial&lt;Settings&gt; = {\n  ui: {\n    layout: { spacing: 12 } // sidebar not required!\n  }\n};\n</code></pre>\n<p>Watch out for arrays, functions, and built-ins (Date, Map) - production-quality DeepPartial often special-cases them.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 440,
    "question": "How do you type a Redux-style reducer?",
    "answer": "<p>You use a discriminated union for actions, then a reducer function that pattern-matches on the action type.</p>\n<pre><code>type State = {\n  count: number;\n  user: string | null;\n};\n\ntype Action =\n  | { type: \"INCREMENT\" }\n  | { type: \"DECREMENT\" }\n  | { type: \"SET_USER\"; payload: string }\n  | { type: \"LOGOUT\" };\n\nfunction reducer(state: State, action: Action): State {\n  switch (action.type) {\n    case \"INCREMENT\":\n      return { ...state, count: state.count + 1 };\n    case \"DECREMENT\":\n      return { ...state, count: state.count - 1 };\n    case \"SET_USER\":\n      return { ...state, user: action.payload };\n    case \"LOGOUT\":\n      return { ...state, user: null };\n    default:\n      const _exhaustive: never = action;\n      return state;\n  }\n}\n</code></pre>\n<p>The <code>never</code> default ensures that if you forget to handle a case, TS will complain.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 441,
    "question": "How do you simulate higher-kinded types in TypeScript?",
    "answer": "<p>TypeScript doesn't natively support <strong>higher-kinded types</strong> (HKT (Higher Kinded Types)) - you can't directly pass a generic type as a parameter. But you can simulate HKT using a registry pattern.</p>\n<pre><code>interface TypeMap&lt;A&gt; {\n  Array: A[];\n  Promise: Promise&lt;A&gt;;\n  Maybe: A | null;\n}\n\ntype Apply&lt;K extends keyof TypeMap&lt;any&gt;, A&gt; = TypeMap&lt;A&gt;[K];\n\ntype X = Apply&lt;\"Array\", string&gt;;   // string[]\ntype Y = Apply&lt;\"Promise\", number&gt;; // Promise&lt;number&gt;\ntype Z = Apply&lt;\"Maybe\", boolean&gt;;  // boolean | null\n</code></pre>\n<p>This pattern is used by libraries like fp-ts to bring functional programming concepts (Functor, Monad) to TypeScript despite the lack of native HKT support.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 442,
    "question": "What is type-level arithmetic in TypeScript?",
    "answer": "<p>You can do basic arithmetic at the type level using tuple length tricks. It's slow and limited, but a fun demonstration of TS's expressiveness.</p>\n<pre><code>// Build a tuple of given length\ntype BuildTuple&lt;L extends number, T extends any[] = []&gt; =\n  T['length'] extends L ? T : BuildTuple&lt;L, [...T, any]&gt;;\n\n// Add two numbers\ntype Add&lt;A extends number, B extends number&gt; =\n  [...BuildTuple&lt;A&gt;, ...BuildTuple&lt;B&gt;]['length'];\n\ntype Three = Add&lt;1, 2&gt;; // 3\ntype Five = Add&lt;2, 3&gt;;  // 5\n\n// Subtract\ntype Subtract&lt;A extends number, B extends number&gt; =\n  BuildTuple&lt;A&gt; extends [...BuildTuple&lt;B&gt;, ...infer Rest] ? Rest['length'] : never;\n\ntype Two = Subtract&lt;5, 3&gt;; // 2\n</code></pre>\n<p>Limited to small numbers (TS recursion limit). Used in libraries like type-fest and ts-toolbelt for advanced type manipulation.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 443,
    "question": "What is the difference between assertion functions and type guards?",
    "answer": "<p>Both narrow types, but they work in different ways:</p>\n<ul>\n  <li><strong>Type guard:</strong> returns boolean. You use it inside an <code>if</code> to narrow.</li>\n  <li><strong>Assertion function:</strong> throws if false. After the call, the type is narrowed in the rest of the function.</li>\n</ul>\n<pre><code>// Type guard\nfunction isString(x: unknown): x is string {\n  return typeof x === \"string\";\n}\n\nfunction g(x: unknown) {\n  if (isString(x)) {\n    x.toUpperCase(); // narrowed only inside if\n  }\n}\n\n// Assertion function\nfunction assertString(x: unknown): asserts x is string {\n  if (typeof x !== \"string\") throw new Error(\"not string\");\n}\n\nfunction a(x: unknown) {\n  assertString(x);\n  x.toUpperCase(); // narrowed for the rest of the function\n}\n</code></pre>\n<p>Use guards when you want both branches handled. Use assertion functions when you want to fail fast on invalid input.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 444,
    "question": "What is the noUncheckedIndexedAccess flag?",
    "answer": "<p><strong>noUncheckedIndexedAccess</strong> adds <code>undefined</code> to the type returned by index access (like <code>arr[0]</code> or <code>obj[key]</code>). This catches a common source of runtime bugs.</p>\n<pre><code>// Without the flag\nconst arr = [1, 2, 3];\nconst x = arr[10]; // type: number, but value: undefined!\nx.toFixed(2);      // crashes\n\n// With noUncheckedIndexedAccess\nconst y = arr[10]; // type: number | undefined\n// y.toFixed(2);   // Error - object possibly undefined\nif (y !== undefined) {\n  y.toFixed(2);    // OK\n}\n\n// Same for objects\nconst dict: Record&lt;string, number&gt; = { a: 1 };\nconst v = dict[\"missing\"]; // number | undefined\n</code></pre>\n<p>Highly recommended for new projects - it forces you to handle the \"key doesn't exist\" case.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 445,
    "question": "What is the difference between an interface and a type alias for declaration merging?",
    "answer": "<p>This is the key advantage of <strong>interface</strong> over <strong>type</strong>. Interfaces support <strong>declaration merging</strong> - if you declare the same interface twice, TS combines them. Type aliases cannot be merged.</p>\n<pre><code>// Works with interface\ninterface User { name: string; }\ninterface User { age: number; }\n// User has both name and age\n\n// Does NOT work with type\ntype Account = { id: number };\n// type Account = { name: string };\n// Error: Duplicate identifier 'Account'\n</code></pre>\n<p>This is why libraries like Express use interfaces for things like <code>Request</code> - so users can augment them in their own code.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 446,
    "question": "How do you write a type-safe deep get function?",
    "answer": "<p>Using template literal types and recursive conditional types, you can build a function that takes a dot-separated path and returns the correctly typed value.</p>\n<pre><code>type DeepGet&lt;T, P extends string&gt; =\n  P extends `${infer K}.${infer Rest}`\n    ? K extends keyof T\n      ? DeepGet&lt;T[K], Rest&gt;\n      : never\n    : P extends keyof T\n      ? T[P]\n      : never;\n\nfunction get&lt;T, P extends string&gt;(obj: T, path: P): DeepGet&lt;T, P&gt; {\n  return path.split(\".\").reduce((acc: any, k) =&gt; acc?.[k], obj);\n}\n\nconst data = {\n  user: { profile: { name: \"Rahul\", age: 25 } }\n};\n\nconst name = get(data, \"user.profile.name\"); // string\nconst age = get(data, \"user.profile.age\");   // number\n// get(data, \"user.invalid\");                // Error\n</code></pre>\n<p>Real-world libraries like <code>lodash</code> have hand-written type definitions for this. Building your own is a great learning exercise.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 447,
    "question": "How do you optimize TypeScript compile time?",
    "answer": "<p>For large codebases, build performance matters. Several config and code patterns can speed things up dramatically.</p>\n<ul>\n  <li><strong>Enable incremental:</strong> <code>\"incremental\": true</code></li>\n  <li><strong>Use project references</strong> in monorepos</li>\n  <li><strong>skipLibCheck:</strong> skip type checking <code>node_modules</code></li>\n  <li><strong>Use type-only imports</strong> to reduce module graph weight</li>\n  <li><strong>Avoid deeply recursive types</strong> - they slow down inference</li>\n  <li><strong>Use <code>interface</code> over large <code>type</code> aliases</strong> - they cache better</li>\n  <li><strong>Use <code>tsc --noEmit</code></strong> in CI; let bundler emit JS</li>\n  <li><strong>Use <code>swc</code> or <code>esbuild</code></strong> for JS output (no type checking, much faster)</li>\n  <li><strong>Run <code>tsc --extendedDiagnostics</code></strong> to see what's slow</li>\n</ul>\n<p>For really big projects, a hybrid approach (tsc for types, esbuild for JS) is the sweet spot.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 448,
    "question": "How do you migrate a JavaScript project to TypeScript?",
    "answer": "<p>The trick is to migrate <strong>gradually</strong> instead of all at once. TypeScript is designed to support a mix of <code>.js</code> and <code>.ts</code> files.</p>\n<ol>\n  <li>Install TypeScript: <code>npm i -D typescript @types/node</code></li>\n  <li>Add a <code>tsconfig.json</code> with <code>\"allowJs\": true</code> and <code>\"checkJs\": false</code></li>\n  <li>Rename files one at a time from <code>.js</code> to <code>.ts</code></li>\n  <li>Fix the type errors that appear (start with <code>any</code> if needed)</li>\n  <li>Install <code>@types/*</code> packages for your dependencies</li>\n  <li>Gradually enable strict flags one at a time:\n    <ul>\n      <li><code>noImplicitAny</code></li>\n      <li><code>strictNullChecks</code></li>\n      <li><code>strict</code> (everything)</li>\n    </ul>\n  </li>\n  <li>Replace <code>any</code> with proper types over time</li>\n</ol>\n<p>You can also add <code>// @ts-check</code> to JS files to get type checking on plain JavaScript with JSDoc - a cheap way to start.</p>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 449,
    "question": "What are common pitfalls in TypeScript?",
    "answer": "<p>Even experienced devs hit these. Knowing them upfront saves time.</p>\n<ul>\n  <li><strong>Overusing <code>any</code></strong> - defeats the whole point. Prefer <code>unknown</code>.</li>\n  <li><strong>Type assertions to silence errors</strong> instead of fixing them - hides bugs.</li>\n  <li><strong>Mutable arrays in props</strong> - use <code>readonly T[]</code> to prevent surprise mutations.</li>\n  <li><strong>Object index access</strong> returning the value type without <code>undefined</code> - enable <code>noUncheckedIndexedAccess</code>.</li>\n  <li><strong>Forgetting <code>strict</code> mode</strong> on new projects.</li>\n  <li><strong>Bivariant method parameters</strong> hiding bugs - enable <code>strictFunctionTypes</code>.</li>\n  <li><strong>Returning too-wide types</strong> - narrow with <code>as const</code> or <code>satisfies</code>.</li>\n  <li><strong>Confusing <code>type</code> and <code>interface</code></strong> - both work, but interface supports merging.</li>\n  <li><strong>Importing types as values</strong> - use <code>import type</code> for type-only imports.</li>\n  <li><strong>Recursive types that are too deep</strong> - hit the recursion limit.</li>\n</ul>",
    "topic": "typescript",
    "level": "advanced"
  },
  {
    "id": 450,
    "question": "How do you test TypeScript types themselves?",
    "answer": "<p>You can write tests for your types - making sure refactors don't break public type contracts. Use small assertion helpers or libraries like <code>tsd</code> or <code>expect-type</code>.</p>\n<pre><code>// Simple assertion helpers\ntype Equal&lt;A, B&gt; =\n  (&lt;T&gt;() =&gt; T extends A ? 1 : 2) extends\n  (&lt;T&gt;() =&gt; T extends B ? 1 : 2) ? true : false;\n\ntype Expect&lt;T extends true&gt; = T;\n\n// Test cases\ntype Test1 = Expect&lt;Equal&lt;ReturnType&lt;() =&gt; string&gt;, string&gt;&gt;; // OK\n// type Test2 = Expect&lt;Equal&lt;1, 2&gt;&gt;; // compile error\n\n// Using tsd\nimport { expectType, expectError } from \"tsd\";\n\nexpectType&lt;string&gt;(\"hello\");\nexpectError(add(\"a\", 1)); // expect this to be an error\n</code></pre>\n<p>Type testing is essential for library authors - it locks in your public API (Application Programming Interface) and catches breaking changes early.</p>",
    "topic": "typescript",
    "level": "advanced"
  }
];
