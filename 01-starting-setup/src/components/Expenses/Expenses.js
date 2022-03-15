import React,{useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');
  const filterHandler = (year) => {
    setFilterYear(year);
  }
  const filterItems = props.items.filter(expense => expense.date.getFullYear().toString() === filterYear);



      return(
        <li className="expenses-list">
        <Card className="expenses"> 
        <ExpensesFilter year={filterYear} onFilterHandler={filterHandler}/>
        <ExpenseChart expenses={filterItems}/>
        <ExpenseList items = {filterItems}/>
        </Card>
        </li>
      )
}
export default Expenses;