import React,{useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 'eId1',
    title : 'Car Insurance',
    amount : 50,
    date : new Date(2021,10,28)
  },
  {
    id: 'eId2',
    title : 'Bike Insurance',
    amount : 60,
    date : new Date()
  },
  {
    id: 'eId3',
    title : 'Life Insurance',
    amount : 70,
    date : new Date(2021,11,29)
  }
]
function App() {

  const[expenses, setExpense]=useState(INITIAL_EXPENSES);

  const expanseHandler = (expense) => {
    setExpense(prevExpense => {
      expense.date = new Date(expense.date);
      return [expense, ...prevExpense];
    })
  }

  return (
    <div>
      <NewExpense onExpenseData={expanseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
