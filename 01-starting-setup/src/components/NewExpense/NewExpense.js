import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseHandler = (saveExpense) =>{
        const expenseData = {
            ...saveExpense,
            id:(Math.random()*10).toString()
        }
        console.log(expenseData);
        props.onExpenseData(expenseData);
        cancelExpense();
    }
    const newExpeseHandler = () => {
        setIsEditing(true);
    }
    const cancelExpense = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={newExpeseHandler}>Add New Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelExpense={cancelExpense}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;