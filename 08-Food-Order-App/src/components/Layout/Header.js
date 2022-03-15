import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>KingMeals</h1>
            <HeaderCartButton onCartClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of Meals" />
        </div>
    </>
}

export default Header;