# Angular Knowledge round-up
## Component
### Briefly explain Event Binding in Angular?
An event handler is specified inside the template using round brackets to denote event binding. This event handler is then coded in the class to process the event.
Example:
```javascript
import {Component} from '@angular/core';
@Component({
  selector: 'counter',
  template: `
	<div>
	  <p>Count: {{ num }}</p>
	  <button (click)="increment()">Increment</button>
	</div>
`
})
export class Counter {
  num: number = 0;
  increment() {
    this.num++;
  }
}
```
### Briefly explain Data Binding in Angular?
Data binding is one of the most powerful features of software development technologies. Data binding is the connection bridge between View and the business logic (View Model) of the application. Data binding in Angular is the automatic synchronization between Model and the View. When the Model changes, the Views are automatically updated and vice-versa. 

There are many ways to bind the data in Angular. Following are the types of data binding in Angular 2.

* Interpolation
* One-way binding (unidirectional)
* Two-way binding
* Event binding
### What are Event Emitters and how it works in Angular?
#### What are Event Emitters ?
* When you start learning Angular one of the first things you learn is how to communicate between child and parent components.
Data flows into your component via property bindings and flows out of your component through event bindings.

* ```EventEmitter``` is a class in angular framework. It has emit() method that emits custom events. 
* We can use ```EventEmitter``` in custom event binding. To achieve it first we need to import it in our component file as given below.

#### How it work in Angular ?
```
import {Component, EventEmitter, Input, Output} from '@angular/core'; 
```
And then initialize it using @Output decorator as follows.
```
@Output() updateEmployee = new EventEmitter<Employee>(); 
```
Here ```Employee``` is our TypeScript class. ```@Output()``` defines an output variable. ```updateEmployee``` will be a custom event name. Using ```emit()``` method of ```EventEmitter``` class we emits ```Employee ```object to parent component in custom event binding as follows.

### Explain the life cycle hooks of Angular application?
A component has a lifecycle managed by Angular itself. Angular manages creation, rendering, data-bound properties etc. It also offers hooks that allow us to respond to key lifecycle events.
Here is the complete lifecycle hook interface inventory:

* `ngOnChanges` : called when an input binding value changes.
* `ngOnInit` : after the first `ngOnChanges`.
* `ngDoCheck` : after every run of change detection.
* `ngAfterContentInit ` : after component content initialized.
* `ngAfterContentChecked` :  after every check of component content.
* `ngAfterViewInit` : after component's view(s) are initialized.
* `ngAfterViewChecked` : after every check of a component's view(s).
* `ngOnDestroy` : just before the component is destroyed.

### Explain the `ContentChild`, `ContentChildren` and write an example?
* The `@ViewChild` and `@ViewChildren` decorators provide access to the classe of child
component from the containing component.
* The `@ViewChild` is a decorator function that takes the name of a component class as its input and finds its selector in the template of the containing component to bind to.
When there are multiple embedded components in the template, we can also use `@ViewChildren`.
* `@ContentChild` and `@ContentChildren@` work the same way as the equivalent `@ViewChild` and `@ViewChildren`
* However, the key difference is that `@ContentChild` and `@ContentChildren` select from the projected content within the component. 
* `@ContentChild` and `@ContentChildren` queries will return directives existing inside the <ng-content></ng-content> element of your view, whereas @ViewChild and @ViewChildren only look at elements that are on your view template directly.

* Note that content children will not be set until `ngAfterContentInit`
component lifecycle hook.
####Example
File hello.component.ts

```
import {Input, Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: '<p [ngStyle]="{'color': color}">Hello, {{name}}!</p>'
})
export class Hello {
  @Input() name: string;
  color: string = 'black';

  constructor() {}

  private getRandomColor() {
      let letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  randomizeColor() {
    this.color = this.getRandomColor();
  }
}

```

File hello-list.component.ts

```
import {Component, ContentChild, ContentChildren, QueryList} from '@angular/core';
import {Hello} from './hello.component';

@Component({
	selector: 'hello-list',
	template: '
	  <p>Projected content:</p>
    <div>
	    <ng-content></ng-content>
	  </div>
	  <button (click)="onClickAll()">Randomize Hello colors</button>
	  <button (click)="onClickLast()">Randomize only last Hello color</button>'
})
export class HelloList implements AfterContentInit {
  @ContentChildren(Hello) helloChildren: QueryList<Hello>;
  @ContentChild('last') lastChild: Hello;

  constructor() {}
  ngAfterContentInit() {
    // Content children now set
    this.onClickAll();
  }

  onClickAll() {
    this.helloChildren.forEach( child => child.randomizeColor());
  }

  onClickLast() {
    this.lastChild.randomizeColor();
  }
}

```

File app.component.ts

```
import {Component} from '@angular/core';

@Component({
	selector: 'app',
	template: '
	  <hello-list>
	    <hello name="World"></hello>
	    <hello name="Other World"></hello>
	    <hello #last name="Last World"></hello>
	  </hello-list>
	  <p>Calls function on child component classes to randomize color of them.</p>'
})
export class App {
  constructor() {}
}

```
# Extra
### Briefly explain ElementRef in Angular? Write an example.
ElementRef is provides access to the underlying native element (DOM element).
Example:
```
import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>
  <input type="text" #nameInput>
  <button (click)="sayHello()">Click me</button>

</div>',

})
export class AppComponent {
  title = 'app';
  // title = 'app works!';
  @ViewChild('nameInput') name: ElementRef;

  sayHello() {
    alert('Hello World!');
    this.name.nativeElement.focus();
  }
}
```
