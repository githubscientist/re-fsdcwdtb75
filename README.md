# React 

Single Page Application:

React is called a JavaScript library for building user interfaces, particularly for single-page applications where you need a fast and interactive user experience.

single page application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without requiring a full page reload.

Component Based Architecture:

React applications are built using components, which are reusable and self-contained pieces of UI. Each component manages its own state and can be composed to create complex user interfaces. This approach promotes modularity, maintainability, and reusability of code.

render:

render means displaying the component's UI on the screen.

or 

render means inserting the component's UI into the DOM.

JSX:

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is used in React to describe the structure and appearance of the UI components. JSX makes it easier to visualize the component's layout and improves code readability.

props:

Props (short for properties) are read-only inputs passed from a parent component to a child component. They allow data to flow from the parent to the child, enabling dynamic and reusable components. Props are used to customize the behavior and appearance of components without modifying their internal state.

Inheritance:

Inheritance means inheriting properties and methods from a parent class or component.

Method Overriding:

Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its parent class. The overridden method in the child class replaces the implementation in the parent class when called on an instance of the child class.

class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    greet() {
        console.log("Hello from Child");
    }
}

let child = new Child();
child.greet(); // Output: "Hello from Child"

components in React:

- Component is a piece of reusable and self-contained UI.
- Component can be created as either class components or functional components.

class components vs functional components:

Class Components:
- Class components are ES6 classes that extend the `React.Component` class.
- They have a `render` method that returns the JSX to be rendered.
- They can have state and lifecycle methods.

Functional Components:
- Functional components are JavaScript functions that return JSX.
- They do not have their own state or lifecycle methods (prior to React Hooks).
- They are simpler and easier to read and test.
- With React Hooks introduced in React 16.8 (in the year 2019), functional components can now use state and other React features.