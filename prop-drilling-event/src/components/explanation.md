# Explanation of the App Component and its Workflow

## 1. **Initial Data Setup**

- The `data` array contains the initial set of character objects, each having properties like `name`, `job`, `image`, and `friends` (initially set to `false`).

```javascript
const data = [
  { name: "Harry Potter", job: "Wizard", friends: false, image: "URL" },
  { name: "Ron Wesely", job: "Wizard", friends: false, image: "URL" },
  { name: "Hermoine Granger", job: "Wizard", friends: false, image: "URL" },
  { name: "Neville Longbottom", job: "Wizard", friends: false, image: "URL" },
];
```

realData is set to data using useState, and it will hold the current state.

## 2. **State Initialization**

- realData is initialized with the data array. This state holds the data of all characters and will be modified when the "Friends" button is clicked.

```javascript
const [realData, setRealData] = useState(data);
```

## 3. **Rendering Components**

- The map method is used to iterate over realData, rendering a Card component for each character.
- The Card component receives the following props:

  - values: The current character object.
  - handleFriendsButton: A function to toggle the friends property.
  - index: The index of the current item in the array.

  **Example:**

  ```javascript
  {
    realData.map((item, index) => (
      <Card
        values={item}
        key={index}
        handleFriendsButton={handleFriendsButton}
        index={index}
      />
    ));
  }
  ```

## 4. **Button Click Workflow**

- When a user clicks the "Friends" button in a Card, the handleFriendsButton function is triggered.

- This function takes cardIndex (the index of the clicked card) as a parameter.

**Example:**

- If the button for "Harry Potter" is clicked, handleFriendsButton(0) is called.

## 5. **State Update Logic**

- The `setRealData` function is used to update the state by modifying the friends property of the clicked character.

- `setRealData` receives a callback function that maps over `realData`:

  - If the index of the character matches the cardIndex, it toggles the friends property.
  - Otherwise, it returns the character unchanged.

- Before clicking the button, realData might look like:

  ```javascript
  realData = [
  { name: "Harry Potter", friends: false, ... },
  { name: "Ron Wesely", friends: false, ... },
  { name: "Hermione Granger", friends: false, ... },
  { name: "Neville Longbottom", friends: false, ... },
  ];
  ```

- After clicking the "Friends" button for "Harry Potter" (cardIndex = 0), the friends property for "Harry Potter" toggles to true:

```javascript
realData = [
  { name: "Harry Potter", friends: true, ... },
  { name: "Ron Wesely", friends: false, ... },
  { name: "Hermione Granger", friends: false, ... },
  { name: "Neville Longbottom", friends: false, ... },
];
```

## 6. **Re-rendering**

- React detects the state change in `realData` and automatically triggers a re-render of the component.
- The UI is updated to reflect the new `friends` status of the character that was toggled.

## 7. **Repeatable Interaction**

- The user can click the "Friends" button multiple times on different characters.
- Every click toggles the `friends` status between `true` and `false` for that character.
- React re-renders the component each time, ensuring the UI is up to date with the latest state.
