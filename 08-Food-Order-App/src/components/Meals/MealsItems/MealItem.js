import React,{useContext} from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
    const price = `$${props.price}`;
    const cartContx = useContext(CartContext);
    const addToCartHandler = amount => {
        cartContx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} id={Math.floor(Math.random()*100)}/>
        </div>
    </li>

}

export default MealItem;