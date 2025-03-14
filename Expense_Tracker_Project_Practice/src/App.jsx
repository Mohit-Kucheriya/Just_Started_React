import "./App.css";

/*
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
*/

import React, { useState } from "react";
import ExpenseForm2 from "./components2/ExpenseForm2";
import ExpenseTable2 from "./components2/ExpenseTable2";
import expenseData2 from "./expenseData2";

const App = () => {
  const [allExpense, setAllExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [expenseData, setExpenseData] = useState(expenseData2);

  const [editRowId, setEditRowId] = useState("")

  return (
    <main>
      <h1>Track Your Expense</h1>

      <div className="expense-tracker">
        <ExpenseForm2
          setExpenseData={setExpenseData}
          allExpense={allExpense}
          setAllExpense={setAllExpense}
          editRowId={editRowId}
          setEditRowId={setEditRowId}
        />
        <ExpenseTable2
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          setAllExpense={setAllExpense}
          setEditRowId={setEditRowId}
        />
      </div>
    </main>
  );
};

export default App;
