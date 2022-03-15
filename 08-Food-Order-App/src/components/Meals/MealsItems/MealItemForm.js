import React,{useRef,useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const amountEntered = amountInputRef.current.value;
        const amountEnteredNumber = +amountEntered;

        if(amountEntered.trim().length===0 || amountEnteredNumber<1 || amountEnteredNumber>5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(amountEnteredNumber);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{  
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Kindly Enter Valid Amount(1 to 5)</p>}
    </form>
}
export default MealItemForm;