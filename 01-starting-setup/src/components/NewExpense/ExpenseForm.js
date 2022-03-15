import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    // const [titleChange, setTitleChange] = useState('');
    // const [amountChange, setAmountChange] = useState('');
    // const [dateChange, setDateChange] = useState('');

    // const titleChangeHandler = (event) => {
    //     setTitleChange(event.target.value);
    // }
    // const amountChangeHandler = (event) => {
    //     setAmountChange(event.target.value);
    // }
    // const dateChangeHandler = (event) => {
    //     setDateChange(event.target.value);
    // }
    const userObj = {title:'',amount:'',date:''};
    const [userDetails, setUserDetails] = useState(userObj);
    const titleChangeHandler = (event) => {
       // setUserDetails({...userDetails, title:event.target.value});
        setUserDetails((prevStates)=>{
            return {...prevStates,title:event.target.value}
        })
    }
    const amountChangeHandler = (event) => {
        //setUserDetails({...userDetails, amount:event.target.value});
        setUserDetails((prevStates)=>{
            return {...prevStates,amount:+event.target.value}
        })
    }
    const dateChangeHandler = (event) => {
       // setUserDetails({...userDetails, date:event.target.value});
        setUserDetails((prevStates)=>{
            return {...prevStates,date:event.target.value}
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userDetails);
        setUserDetails(userObj);
        props.onSaveExpenseData(userDetails);
    }


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userDetails.title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="10" onChange={amountChangeHandler}  value={userDetails.amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userDetails.date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancelExpense}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;