import React from "react";

const ContextMenu2 = ({ contextMenuPosition, setContextMenuPosition, setExpenseData, rowId }) => {
    if (!contextMenuPosition.left) return;
    console.log(contextMenuPosition)
    return (
        <div className="context-menu" style={contextMenuPosition}>

            <div
                onClick={() => {
                    setContextMenuPosition({})
                }}
            >
                Edit
            </div>
            <div onClick={() => {
                setExpenseData((prevExpenseData) => prevExpenseData.filter((expense) => expense.id !== rowId));
                setContextMenuPosition({})
            }}>Delete</div>
        </div>
    );
};

export default ContextMenu2;
