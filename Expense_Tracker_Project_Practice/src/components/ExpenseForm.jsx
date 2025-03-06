import { useRef, useState } from "react";

const ExpenseForm = ({ setExpense }) => {

    /* By using the Construction function i.e. new FormData(form) we can get the form data 

        const handleSubmit = (e) => {
            e.preventDefault();
            const getExpenseData = getFormData(e.target);
            const newExpenseData = { ...getExpenseData, id: crypto.randomUUID() };
            setExpense((prevExpense) => [...prevExpense, newExpenseData])
            e.target.reset()
        }
    
        function getFormData(form) {
            const formData = new FormData(form)
            const data = {}
            for (const [key, value] of formData.entries()) {
                console.log(key, value);
                data[key] = value;
            }
            return data
        }
        */

    /* Using controlled components 
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = { title, category, amount, id: crypto.randomUUID() }
        setExpense((prevExpense) => [...prevExpense, expense])
    }
    */

    /*  
    const [allExpense, setAllExpense] = useState({
        title: "",
        category: "",
        amount: "",
    });
   
    const { title, category, amount } = allExpense;
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setExpense((prevExpense) => [
            ...prevExpense,
            { ...allExpense, id: crypto.randomUUID() },
        ]);
        setAllExpense({
            title: "",
            category: "",
            amount: "",
        });
    };
    */

    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const amountRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setExpense((prevExpense) => [
            ...prevExpense,
            {
                title: titleRef.current.value,
                category: categoryRef.current.value,
                amount: amountRef.current.value,
                id: crypto.randomUUID(),
            },
        ]);
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title" // To use in the form data i.e. new FormData(form)
                    ref={titleRef} // While using useRef to get the value of the input

                /*
                      value={title}
                      onChange={(e) =>
                          setAllExpense((prevExpense) => ({
                              ...prevExpense,
                              title: e.target.value,
                          }))
                      }
                      */
                />
            </div>
            <div className="input-container">
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    name="category"
                    ref={categoryRef}

                /*
                      value={category}
                      onChange={(e) =>
                          setAllExpense((prevExpense) => ({
                              ...prevExpense,
                              category: e.target.value,
                          }))
                      }
                      */
                >
                    <option value="" hidden>
                        Select Category
                    </option>
                    <option value="grocery">Grocery</option>
                    <option value="clothes">Clothes</option>
                    <option value="bills">Bills</option>
                    <option value="education">Education</option>
                    <option value="medicine">Medicine</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="amount">Amount</label>
                <input
                    id="amount"
                    name="amount"
                    ref={amountRef}
                /*
                      value={amount}
                      onChange={(e) =>
                          setAllExpense((prevExpense) => ({
                              ...prevExpense,
                              amount: e.target.value,
                          }))
                      }
                      */
                />
            </div>
            <button className="add-btn">Add</button>
        </form>
    );
};

export default ExpenseForm;
