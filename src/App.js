import { useState } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import ExpenseInfo from './Components/ExpenseInfo/ExpenseInfo';
import ExpenseList from './Components/ExpenseList/ExpenseList';

function App() {

  const[expenses, setExpenses] = useState([]);

  const addExpense = (expense)=>{
    setExpenses((prevState)=>[expense, ...prevState]);
  };

  const deleteExpense=(id)=>{
    setExpenses((prevExpenses)=>{
      return prevExpenses.filter((expense)=>expense.id!==id);
    })
  }


  return (
    <>
    <h2 className='mainHeading'>Expense Tracker</h2>
    <div className='App'>
      <ExpenseForm addExpense={addExpense}/>
      <div className='expenseContainer'>
        <ExpenseInfo expenses={expenses}/>
        <ExpenseList expenses={expenses} deleteExpense = {deleteExpense}/>
      </div>
    </div>
    </>
  );
}

export default App;
