import React,{useContext,useState,useEffect} from 'react';
import CartIcon from '../../components/Cart/CartIcon'
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const CartCtxt = useContext(CartContext);
    const [btnBump, setBtnBump] = useState(false);
    const {items} = CartCtxt;
    const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`
    const noOfItemsInCart = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0)

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnBump(true);

        setTimeout(()=>{
            setBtnBump(false);
        },300)

    },[items])

    return <>
        <button className={btnClasses} onClick={props.onCartClick}>
            <span className={classes.icon}><CartIcon></CartIcon></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{noOfItemsInCart}</span>
        </button>
    </>
}

export default HeaderCartButton;