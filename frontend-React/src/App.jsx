import React from "react";
import Input from "./components/calculator/Input";
import Button from "./components/calculator/Button";
import { useState } from "react";

function App() {
  const [operandA, setOperandA] = useState("");
  const [operandB, setOperandB] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");
  const [currentVal, setCurrentVal] = useState("");

  const Nums = [...new Array(10)];
  const Add = "+";
  const Sub = "-";
  const Mul = "*";
  const Div = "/";
  const Equal = "=";
  const Clear = "C";
  const operations = [Add, Sub, Mul, Div, Equal, Clear];

  const handleOnInput = (value) => {
    if (operandA) {
      if (!operandB) {
        const lastChar = value.split("").at(-1);
        setCurrentVal(lastChar);
        setOperandB(Number(lastChar));
      } else {
        setOperandB(Number(value));
        setCurrentVal(value);
      }
    } else {
      setCurrentVal(value);
    }
  };

  const handleOnClick = () => {
    console.log();
  };

  const handleSelectOperation = (type) => {
    
    return () => {
      setOperation(type);
      if (type === Equal) {
        let res = 0;
        setOperation("");
        if (operation === Add) {
          res = operandA + operandB;
        } else if (operation === Sub) {
          res = operandA - operandB;
        } else if (operation === Mul) {
          res = operandA * operandB;
        } else if (operation === Div) {
          res = operandA / operandB;
        }
        setResult(res);
      } else {
        setOperandA(Number(currentVal));
      }
    };
  };

  return (
    <div>
      <div>
        <Input
          value={currentVal}
          placeholder={"Enter Number"}
          onInput={handleOnInput}
        />
      </div>
      <div>
        {Nums.map((_, i) => (
          <Button key={i} label={i} onClick={handleOnClick} />
        ))}
      </div>
      <div>Selected Operation: {operation}</div>
      <div>Result: {result}</div>
      <div>
        {operations.map((o, i) => (
          <Button
            key={i}
            label={o}
            dataOperation={o}
            onClick={handleSelectOperation(o)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
