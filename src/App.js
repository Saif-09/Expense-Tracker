import './App.css';

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
