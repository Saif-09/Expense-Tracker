import './App.css';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import ExpenseInfo from './Components/ExpenseInfo/ExpenseInfo';
import ExpenseList from './Components/ExpenseList/ExpenseList';

function App() {
  return (
    <>
    <h2 className='mainHeading'>Expense Tracker</h2>
    <div className='App'>
      <ExpenseForm/>
      <div className='expenseContainer'>
        <ExpenseInfo/>
        <ExpenseList/>
      </div>
    </div>
    </>
  );
}

export default App;
