import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import { DUMMY_MEALS } from './dummy-meals';
import MealItem from './MealsItems/MealItem';

const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
    return <section className={classes.meals}>
        <Card>
            {meals}
        </Card>
    </section>
}

export default AvailableMeals;