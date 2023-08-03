import React, { useRef } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm({ addExpense }) {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  //Use the useEffect hook here, to check if an expense is to be updated
  //if yes, the autofill form value with the text and the amount of the expense

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseInt(expenseAmount) === 0) {
      return;
    }

    const expense = {
      text: expenseText,
      amount: expenseAmount,
      id: new Date().getTime(),
    };

    addExpense(expense);
    clearInput();
    return;

    //Logic to update expense here
  };

  const clearInput = () => {
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {/*change the text to edit transaction if an expense is to be updated  */}
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter Text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(use -ve for Expense and +ve for Income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        ref={expenseAmountInput}
        placeholder="Enter Amount..."
        required
      />
      <button className={styles.submitBtn}>
        {/*change the text to edit transaction if an expense is to be updated  */}
        Add Transaction
      </button>
    </form>
  );
}
