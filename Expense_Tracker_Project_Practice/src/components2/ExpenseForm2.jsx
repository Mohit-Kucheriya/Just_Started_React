import { useState } from "react";
import InputField2 from "./InputField2";
import SelectField2 from "./SelectField2";

const ExpenseForm2 = ({
    setExpenseData,
    allExpense,
    setAllExpense,
    editRowId,
    setEditRowId,
}) => {
    const { title, category, amount } = allExpense;

    const [err, setErr] = useState({});

    function validateForm(formData) {
        const errorData = {};

        if (!formData.title) {
            errorData.title = "Title is required";
        }

        if (!formData.category) {
            errorData.category = "Please select a category";
        }

        if (!formData.amount) {
            errorData.amount = "Amount is required";
        }

        setErr(errorData);
        return errorData;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const expense = { ...allExpense, id: crypto.randomUUID() };

        const getErrorData = validateForm(expense);

        if (Object.entries(getErrorData).length) return;

        if (editRowId) {
            setExpenseData((prevExpenseData) =>
                prevExpenseData.map((expense) => {
                    if (expense.id === editRowId) {
                        return { ...allExpense, id: editRowId };
                    }
                    return expense;
                })
            );
            setAllExpense({
                title: "",
                category: "",
                amount: "",
            });
            setEditRowId("");
            return;
        }

        setExpenseData((prevExpenseData) => [...prevExpenseData, expense]);

        setAllExpense({
            title: "",
            category: "",
            amount: "",
        });
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setAllExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value,
        }));

        setErr({});
    };

    return (
        <form className="expense-form" onSubmit={handleFormSubmit}>
            <InputField2
                id="title"
                label="Title"
                name="title"
                value={title}
                onChange={handleOnChange}
                error={err.title}
            />

            <SelectField2
                id="category"
                label="Category"
                name="category"
                value={category}
                onChange={handleOnChange}
                optionsValue={[
                    "Grocery",
                    "Clothes",
                    "Bills",
                    "Education",
                    "Medicine",
                    "Personal",
                ]}
                defaultValue="Select Category"
                error={err.category}
            />

            <InputField2
                id="amount"
                label="Amount"
                name="amount"
                value={amount}
                onChange={handleOnChange}
                error={err.amount}
            />
            <button className="add-btn">{editRowId ? "Save" : "Add"}</button>
        </form>
    );
};

export default ExpenseForm2;
