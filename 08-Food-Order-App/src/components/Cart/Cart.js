import React,{useContext} from 'react'
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
    const cartCntx = useContext(CartContext);
    const totalAmount = `$${cartCntx.totalAmount.toFixed(2)}`;
    const hasItems = cartCntx.items.length >0;
    const onRemoveHandler = (id) => {
        cartCntx.removeItem(id);
    }
    const onAddHandler = (item) => {
        cartCntx.addItem({...item, amount:1})
    }

    const cartItems = cartCntx.items.map(item => <li><CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={onRemoveHandler.bind(null, item.id)} onAdd={onAddHandler.bind(null, item)}/></li>)

    return <Modal onClick={props.onHideCart}>
        <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>

}

export default Cart;