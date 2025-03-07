import { useState } from "react";
import SelectField2 from "./SelectField2";
import { useFilter } from "../hooks/useFilter";
import ContextMenu2 from "./ContextMenu2";

const ExpenseTable2 = ({
    expenseData,
    setExpenseData,
    setAllExpense,
    setEditRowId,
}) => {
    const [filteredData, setQuery] = useFilter(
        expenseData,
        (data) => data.category
    );

    // setContextMenu
    const [contextMenuPosition, setContextMenuPosition] = useState({});

    const [rowId, setRowId] = useState("");

    const totalAmount = filteredData.reduce(
        (acc, curr) => acc + parseInt(curr.amount),
        0
    );

    const [sortCallback, setSortCallback] = useState(() => () => { });

    return (
        <>
            <ContextMenu2
                contextMenuPosition={contextMenuPosition}
                setContextMenuPosition={setContextMenuPosition}
                setExpenseData={setExpenseData}
                rowId={rowId}
                setAllExpense={setAllExpense}
                expenseData={expenseData}
                setEditRowId={setEditRowId}
            />
            <table
                className="expense-table"
                onClick={() => {
                    if (contextMenuPosition.left) setContextMenuPosition({});
                }}
            >
                <thead>
                    <tr>
                        <th className="amount-column">
                            <div>
                                <span>Title</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    viewBox="0 0 384 512"
                                    className="arrow up-arrow"
                                    onClick={() =>
                                        setSortCallback(() => (a, b) => a.title.localeCompare(b.title))
                                    }
                                >
                                    <title>Ascending</title>
                                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    viewBox="0 0 384 512"
                                    className="arrow down-arrow"
                                    onClick={() =>
                                        setSortCallback(() => (a, b) => b.title.localeCompare(a.title))
                                    }
                                >
                                    <title>Descending</title>
                                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <SelectField2
                                onChange={(e) => setQuery(e.target.value)}
                                optionsValue={[
                                    "Grocery",
                                    "Clothes",
                                    "Bills",
                                    "Education",
                                    "Medicine",
                                    "Personal",
                                ]}
                                defaultValue="All"
                                className="tabel-category"
                            />
                        </th>
                        <th className="amount-column">
                            <div>
                                <span>Amount</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    viewBox="0 0 384 512"
                                    className="arrow up-arrow"
                                    onClick={() =>
                                        setSortCallback(() => (a, b) => a.amount - b.amount)
                                    }
                                >
                                    <title>Ascending</title>
                                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    viewBox="0 0 384 512"
                                    className="arrow down-arrow"
                                    onClick={() =>
                                        setSortCallback(() => (a, b) => b.amount - a.amount)
                                    }
                                >
                                    <title>Descending</title>
                                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData
                        .sort(sortCallback)
                        .map(({ id, title, category, amount }) => (
                            <tr
                                key={id}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    setContextMenuPosition({
                                        left: e.clientX + 4,
                                        top: e.clientY + 4,
                                    });
                                    setRowId(id);
                                }}
                            >
                                <td>{title}</td>
                                <td>{category}</td>
                                <td>₹{amount}</td>
                            </tr>
                        ))}
                    <tr>
                        <th>Total</th>
                        <th
                            className="clear-sort"
                            onClick={() => setSortCallback(() => () => { })}
                        >
                            Clear Sort
                        </th>
                        <th>₹{totalAmount}</th>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ExpenseTable2;
