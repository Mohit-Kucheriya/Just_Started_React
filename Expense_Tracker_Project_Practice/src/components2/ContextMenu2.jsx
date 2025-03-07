import React from "react";

const ContextMenu2 = ({
    contextMenuPosition,
    setContextMenuPosition,
    setExpenseData,
    rowId,
    setAllExpense,
    expenseData,
    setEditRowId
}) => {
    if (!contextMenuPosition.left) return;

    return (
        <div className="context-menu" style={contextMenuPosition}>
            <div
                onClick={() => {
                    const { title, category, amount } = expenseData.find(
                        (expense) => expense.id === rowId
                    );
                    setEditRowId(rowId)
                    setAllExpense({ title, category, amount });
                    setContextMenuPosition({});
                }}
            >
                Edit
            </div>
            <div
                onClick={() => {
                    setExpenseData((prevExpenseData) =>
                        prevExpenseData.filter((expense) => expense.id !== rowId)
                    );
                    setContextMenuPosition({});
                }}
            >
                Delete
            </div>
        </div>
    );
};

export default ContextMenu2;
