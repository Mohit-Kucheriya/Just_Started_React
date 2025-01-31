# React useState Hook: Complete Guide

## Table of Contents

1. [What is useState?](#what-is-usestate)
2. [Why Do We Need useState?](#why-usestate)
3. [How useState Works](#how-it-works)
4. [Basic Syntax](#basic-syntax)
5. [Step-by-Step Working](#step-by-step-working)
6. [Examples](#examples)
7. [Common Pitfalls](#common-pitfalls)
8. [Best Practices](#best-practices)

---

## <a id="what-is-usestate"></a>1. What is useState?

`useState` is a React Hook that lets you add **state** to functional components. It's equivalent to `this.state` and `setState` in class components, but more powerful and flexible.

Key characteristics:

- Preserves state between re-renders
- Triggers re-renders when state changes
- Can be used multiple times in a component

---

## <a id="why-usestate"></a>2. Why Do We Need useState?

In React, UI = f(state). We need state to:

- Store dynamic information (values that can change)
- Make components interactive
- Remember information between renders
- React to user input/events

Without state, components would always show the same output (static).

---

## <a id="how-it-works"></a>3. How useState Works

### Under the Hood

1. **Initialization**: On first render, creates a state "cell" to store the value
2. **Preservation**: Maintains state between re-renders using closure
3. **Update Mechanism**: When state changes:
   - Saves new value
   - Queues re-render
   - Updates UI with new state

### Mental Model

Imagine useState as a pair:

- `[currentValue, setValueFunction]`
- Similar to a "box" that holds your value

---

## <a id="basic-syntax"></a>4. Basic Syntax

```jsx
const [state, setState] = useState(initialValue);
```

## <a id="step-by-step-working"></a>5. Step-by-Step Working

1. **Initial Render**: <br>

```jsx
function Component() {
  const [count, setCount] = useState(0); // Initialize with 0
  // ...
}
```

- React creates state variable count = 0

2. **State Update**: <br>

```jsx
setCount(5); // Request state change
```

- React adds update to its internal queue

- Does NOT update immediately

3. **Re-render**: <br>

- React processes queued updates

- Gives component the new state value

- Component re-renders with updated state

## <a id="examples"></a>6. Examples

### Example 1: Counter

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Example 2: Text Input

```jsx
function NameInput() {
  const [name, setName] = useState("");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
```

### Example 3: Toggle (Boolean State)

```jsx
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
}
```

### Example 5: Array State

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
```

## <a id="common-pitfalls"></a>7. Common Pitfalls

1. **Direct Mutation (Objects/Arrays)**: <br>
   ❌ Wrong:

```jsx
const [user, setUser] = useState({ name: "John" });
user.name = "Doe"; // Direct mutation
setUser(user); // Won't trigger re-render
```

✅ Correct:

```jsx
setUser({ ...user, name: "Doe" });
```

2. **Stale State**: <br>
   When using current state to update:

```jsx
const increment = () => {
  setCount(count + 1); // count is stale here if called multiple times
  setCount(count + 1);
};
// Result: +1 instead of +2
```

✅ Fix with Functional Update:

```jsx
setCount((prev) => prev + 1);
```

3. **Initial State Computation**: <br>
   For expensive initializations:

```jsx
// ❌ Runs on every render
const [data] = useState(calculateExpensiveValue());

// ✅ Only runs once
const [data] = useState(() => calculateExpensiveValue());
```

## <a id="best-practices"></a>8. Best Practices

- Use multiple useState hooks instead of one big object

- Use functional updates when new state depends on previous state

- Split complex state into smaller states

- Name state variables descriptively: [user, setUser] instead of [data, setData]

- Initialize state properly (consider null for unloaded data)
