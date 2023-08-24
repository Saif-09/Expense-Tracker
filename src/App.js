import { useState, useReducer } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import ExpenseInfo from './Components/ExpenseInfo/ExpenseInfo';
import ExpenseList from './Components/ExpenseList/ExpenseList';


const reducer = (state, action)=>{

  const {payload} = action;
  switch(action.type){
    case "ADD_EXPENSE":{
      return {
        expenses:[payload.expense, ...state.expenses]
      }
    }
    case "REMOVE_EXPENSE":{
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      }
    }
    case "UPDATE_EXPENSE":{
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return{
        expenses: expensesDuplicate
      }
    }
    default:{
      return state;
    }
  }

}


function App() {

  const[state, dispatch] = useReducer(reducer, {expenses:[]});
  const [expenseToUpdate, setExpanseToUpdate] = useState(null);

  const addExpense = (expense)=>{
    dispatch({type:'ADD_EXPENSE', payload:{expense}});
  };

  const deleteExpense=(id)=>{
    dispatch({type:'REMOVE_EXPENSE', payload:{id}})
  }
  const resetExpenseToUpdate = ()=>{
    setExpanseToUpdate(null);
  }

  const updateExpense = (expense)=>{
    const expensePos  = state.expenses
      .map(function(exp){
        return exp.id;
      })
      .indexOf(expense.id);

    if(expensePos ===-1){
      return false;
    }

    dispatch({type: 'UPDATE_EXPENSE', payload:{expensePos, expense}});
    return true;

  }


  return (
    <>
    <h2 className='mainHeading'>Expense Tracker</h2>
    <hr/>
    <div className='App'>
      <ExpenseForm addExpense={addExpense}
                   expenseToUpdate={expenseToUpdate}
                   updateExpense={updateExpense}
                   resetExpenseToUpdate={resetExpenseToUpdate}/>
      <div className='expenseContainer'>
        <ExpenseInfo expenses={state.expenses}/>
        <ExpenseList 
         expenses={state.expenses} 
         deleteExpense = {deleteExpense}
         changeExpenseToUpdate={setExpanseToUpdate}/>
      </div>
    </div>
    </>
  );
}
  
export default App;
