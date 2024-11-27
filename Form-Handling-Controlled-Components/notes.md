1. Form Handling - Jab bhi hum form submit karte hain toh website reload ho jati hain, aur react k main focus hai k website reload na ho.

2. There are 3 ways to handle form submission in react
   a. useRef()
   b. controlled components
   c. React Form Hooks

3. useRef() - Is tareeke main hum har input ko select kar lete hai and unki value tab nikalte hai jab form submit hota hai.

4. useRef() kisi bhi HTML input ko slelect kar skte hain.

5. useRef() - The argument passed to useRef() is set as the initial value of current.

6. The object returned by useRef() is a mutable ref object whose .current property is initialized to the argument passed to useRef().

7. During the first rendered it will return the initial value of current.

8. After the DOM get's loaded, the value of current will be the DOM element.

9. To make the connection between the DOM element and the ref object, we need to use the ref attribute.

11. Controlled Components - App jab bhi kuch likho useState ke through data real time par update kar dein.

12. Jaise hi kuchh type ho set state kardo nayi value k barabar.

13. To update the state, we use onChange on the input field.


