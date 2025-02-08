1. Form Handling - form submission par website reload hojati hai and react main focus is on not to reload the page. So to handle it we basically use
- useRef
- controlled components
- React Hook Form

a. useRef - it is a react hook that allows us to store a reference to a value that we want to access later. 
useRef(initialValue) returns an object with a single property current, which is initialized to the initialValue you pass to it.

b. controlled compoenents - Basically, we use useState and update the state through the onChange event of the input field.

