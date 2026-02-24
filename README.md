


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1.Ans: getElementById is a unique element selector here use('id').  getElementsByClassName is a multiple elements selector by their class name , here use('class-name').
 querySelector is a single element selector by ID, HTML Tag.
 querySelectorAll is method of JS ,Multiple elements of HTML can be select by it.

### 2. How do you create and insert a new element into the DOM?
2.Ans: Create a document is document.createElement( "html tag"). Insert document is: .appendChild();

### 3. What is Event Bubbling? And how does it work?
3.Ans: Event Bubbling is a behavior of JS where an event starts from the target element  that was clicked and then “bubbles up” through its parent elements all the way to the root (document).
How to work it:
When an event happens (like click), the browser processes it in three phases:
Capturing phase ,Target phase, Bubbling phase .
 


### 4. What is Event Delegation in JavaScript? Why is it useful?
4.Ans: Event Delegation is a technique where  attach a single event listener to a parent element instead of attaching separate listeners to multiple child elements.
Useful of Event Delegation : One parent listener handles multiple children.
Uses event bubbling , Improves performance, Works for dynamically.Clean code.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

5.Ans : preventDefault():Stops the browser’s default behavior of an element.
It does not stop event bubbling.


stopPropagation(): It is a  event method that stops the event from bubbling (or capturing) to parent elements.





