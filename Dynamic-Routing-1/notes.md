1. What is Routing?
   Routing is the process of determining which component to render based on the current URL.

2. What is React Router?
   React Router is a library that helps you implement routing in your React applications.

3. How to use React Router?

- To use React Router, you need to install it first. You can install it using npm or yarn.

- npm install react-router-dom

- After installing it, you need to import it in your project. You can import it like this:

- import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

- Then, you need to wrap your application with the Router component.

4. When we use anchor tag, the pages will be refresh every time.

- To prevent this, we need to use the Link tag i.e.<Link to="/about">About</Link>,
  which is given by the react-router-dom library.

- In the Link tag, we need to specify the path of the page we want to navigate to, for that we use the 'to' attribute.

5. At a time, only single component can be rendered at a time.

6. We outsource the routing logic to the router component because it is a common pattern in React applications in the utils name space.

7. NavLink is a component that is used to navigate between routes, but it's a special component that comes with the react-router-dom library i.e. it state that we are active when we are on the route.

8. Using NavLink, we can specify the style of the link based on the active state.

9. It gives us the style prop which is a function that returns an object with the styles we want to apply to the link.

10. We have different ways to highlight the active state of the link.

- Using style prop
- Using className prop

11. Using className prop, the return value of the function is an array of class names, so we need to join them using the space character i.e. [e.isActive ? "text-purple-500" : ""].join(" ")
Overall result will be string of class names.
