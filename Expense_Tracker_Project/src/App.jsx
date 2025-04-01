import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ContextMenu from "./components/ContextMenu";
import expenseData from "./expenseData";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState(expenseData);

  return (
    <main>
      <h1 className="title">Track Your Expense</h1>

      <div className="expense-tracker">
        <ExpenseForm setExpense={setExpense} />
        <ExpenseTable expense={expense} setExpense={setExpense} />
      </div>

    </main>
  );
}

export default App;
