import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const ExpenseForm = ({ setExpense }) => {
    const [allExpense, setAllExpense] = useState({
        title: "",
        category: "",
        amount: "",
    });

    const { title, category, amount } = allExpense;

    const [error, setError] = useState({});

    // Validation Configuration
    const validationConfig = {
        title: [
            { required: true, message: "Title is required" },
            { minLength: 5, message: "Title should be atleast 5 characters" },
        ],
        category: [{ required: true, message: "Please select a category" }],
        amount: [{ required: true, message: "Amount is required" }],
    };

    const validateForm = (formData) => {
        const errorData = {};

        Object.entries(formData).forEach(([key, value]) => {
            console.log(key, value);
            validationConfig[key].forEach((rule) => {
                if (rule.required && !value) {
                    errorData[key] = rule.message;
                }

                if (rule.minLength && value.length < rule.minLength) {
                    errorData[key] = rule.message;
                }
            });
        });

        setError(errorData);
        return errorData;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const getErrorData = validateForm(allExpense);

        if (Object.keys(getErrorData).length) return;

        setExpense((prevExpense) => [
            ...prevExpense,
            { ...allExpense, id: crypto.randomUUID() },
        ]);

        // Resetting the fields
        setAllExpense({
            title: "",
            category: "",
            amount: "",
        });
    };

    // Common handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAllExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value,
        }));

        setError({});
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <InputField
                label="Title"
                id="title"
                name="title"
                error={error.title}
                value={title}
                onChange={handleChange}
            />

            <SelectField
                label="Category"
                id="category"
                name="category"
                error={error.category}
                value={category}
                onChange={handleChange}
                optionsValue={[
                    "Grocery",
                    "Clothes",
                    "Bills",
                    "Education",
                    "Medicine",
                    "Personal",
                ]}
                defaultOptionValue="Select Category"
            />

            <InputField
                label="Amount"
                id="amount"
                name="amount"
                error={error.amount}
                value={amount}
                onChange={handleChange}
            />

            <button className="add-btn">Add</button>
        </form>
    );
};

export default ExpenseForm;
