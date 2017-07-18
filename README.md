# Typescript And ES6
##**Typescript**
###1.What is TypeScript and Why do we need it?
####What is this?
* TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.
 
* TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

#### Why do we use it?
 * TypeScript is not the only typed language that compiles to JavaScript. There are other languages with stronger type systems that in theory can provide absolutely phenomenal tooling. But in practice most of them do not have anything other than a compiler. This is because building rich dev tools has to be an explicit goal from day one, which it has been for the TypeScript team. That is why they built language services that can be used by editors to provide type checking and autocompletion.
 
###2. How can you get TypeScript and install it?
#### We can get it with:
The command-line TypeScript compiler can be installed as a Node.js package.
#### Install
```bash
npm install -g typescript
```


###3. How do you compile TypeScript files?
#### Compile normally:
```bash
tsc basic.ts
```
A file basic.js will create and transcompile.
#### Auto compile realtime:
```bash
tsc -w basic.ts
```
###4. Which Object Oriented terms are supported by TypeScript? Write an example.
There are some main things provided by any Object Oriented Design.

* Modules
* Classes and Objects
* Interfaces
* Data types
* Member Functions
#### Modules
* Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. 
* Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.
Export:
```typescript
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
```
Import:
```typescript
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
```
####Classes and Objects
* Class is a blue print which we create by observing a real world entity. Class is a abstract signature of properties and methods that belongs to a particular entity.
* Objects are the real concrete things which executes the behavior specified by a class. All objects of a particular class share the common blueprint.
```typescript
class Car { 
   //field 
   engine:string; 
   
   //constructor 
   constructor(engine:string) { 
      this.engine = engine;
   } 
   
   //function 
   disp():void { 
      console.log("Function displays Engine is  :   "+this.engine) ;
   } 
} 

//create an object 
var obj = new Car("XXSY1");

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine);

//access the function
obj.disp();

```
#### Data types
TypeScript adds new useful features to JavaScript. One such feature is type system in TypeScript. In JavaScript types are dynamic,this means that variable are not of any specific type.So a variable can be assigned values of different types during its lifetime.
#####Static typing
TypeScript is a statically typed language.This means that the types are known at compile time.So for example if we declare a variable as
```typescript
var a : number = 1;
```
#### Member Functions
Functions are the fundamental building block of any applications in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things. TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.
```typescript
// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x+y; };
```
####Interfaces
Interfaces are very good constructs in any programming language. An interface is a list of properties and methods a class to implement. If we are telling a class is implementing an interface, then that class must have all properties and should implement methods in interface.
```typescript
class Vehicle implements IVehicle{
    constructor(public color:string){
    }
    start(type:string){
        return 'the ' + this.color + ' ' + type + ' started';
    }
}
interface IVehicle {
    start(type:string): string;
}
```
###5 How do you implement inheritance in TypeScript? Write an example.
We can implement inhertitance in TypeScript use keyword extents with base class or implements with many interfaces...
Example:
```typescript
class Vehicle implements IVehicle{
    constructor(public color:string){
    }
    start(type:string){
        return 'the ' + this.color + ' ' + type + ' started';
    }
}
interface IVehicle {
    start(type:string): string;
}
class Car extends Vehicle {
    constructor(color:string) {
        super(color);
    }
    start(){
        return super.start('car');
    }
}
```



##**ES6**
###Write an example for each of the following new features in ES6:  
#### Block scope variable
`let` is the new `var`. ES6 provides two new ways for declaring variables: `let` and `const`. These pretty much replace the ES3 or ES5 way of declaring variables using var. By using block-level scoping, these two keywords help developers avoid common mistakes they make not because they write bad code, but because they don’t fully understand the idiosyncrasies of how JavaScript handles variables.
Example:
```javascript
function demoBlockScopeVariable(value) {
  const constValue = value;

  if (value) {
    var varValue = value;
    let letValue = value;
    console.log('inside block', varValue, letValue);
  }

  console.log('outside block');

  // varValue is available even though it was defined
  // in if-block because it was "hoisted" to function scope
  console.log(varValue);
  // letValue is a ReferenceError because it
  // was defined w/in if-block
  console.log(letValue);
  // SyntaxError to try and update a variable
  // declared via const
  constValue += 1;
  
}
demoBlockScopeVariable(2);

```
#### Template Literals 

ES6 template literals are a brand new type of string literal, delimited by backticks (`), that natively support string interpolation (token substitution) and multi-line strings. And because they use backticks as a delimiter, they can include single and double quotes without needing to escape them.
Example:
```javascript
let firstName = 'Ben', lastName = `Ilegbodu`;

// Basic template literal is surrounding by
// backticks so single/double quotes do need
// to be escaped
// output: He said, "It's your fault!"
console.log(`He said, "It's your fault!"`);

// Template literals support interpolation.
// The values within `firstName` and `lastName`
// are substituted into where the tokens are
// output: Name: Ilegbodu, Ben
console.log(`Name: ${lastName}, ${firstName}`);

```
#### Multi-line strings 
```javascript
// Template literals support multi-line strings
// output: This is
// 		multi-line text, so that
//		newline characters are
//
//
//		not needed. All whitespace
//			is respected, including tabs.
//
//
console.log(`This is
	multi-line text, so that
	newline characters are


	not needed. All whitespace
		is respected, including tabs.

`);
```
#### Arrow functions
Arrow functions are more or less a shorthand form of anonymous function expressions that already exist in JavaScript. In ES6 this looks like:
```javascript
var squares = [1, 2, 3].map(x => x * x);
```
in ES5:
```javascript
var squares = [1, 2, 3].map(function (x) {
	return x * x;
});
```
#### For...of 

The new for-of loop introduced with ES6 allows for iterating over an array (or any iterable) in a succinct fashion similar to how we can iterate over the keys of an object using for-in.
Example: 
```javascript
var arr = [3, 5, 7];
for (var i in arr) {
   console.log(i); 
   // output:  "0", "1", "2"
}

for (var i of arr) {
   console.log(i); 
   //output: "3", "5", "7"
}
```

#### Default parameters
ES6 allows for function headers to define default values for parameters, marking them as optional:
```javascript
function getData(data, useCache=true) {
  if (useCache) {
    console.log('using cache for', data);
  }
  else {
    console.log('not using cache', data);
  }
}

// `useCache` is missing and is `undefined`.
// therefore `useCache `defaults to `true`
getData({q:'churches+in+Pittsburg'});

```
