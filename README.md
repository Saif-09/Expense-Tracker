# Expense Tracker App


## Overview

The Expense Tracker App is a React-based application that allows users to track their expenses, manage transactions, and view their financial balance. It provides a user-friendly interface to add new expenses, categorize them as income or expenses, and view a summary of their financial activities.

## Live
https://expense-tracker-saif.netlify.app/

## Features

- Add new expenses with a name and amount.
- Categorize expenses as income or expenses.
- View the total balance, income, and expenses.
- Edit or delete existing transactions.
- Mobile-responsive layout for easy access on all devices.

## How it Works

The app is built using React, taking advantage of the `useState` hook to manage the state of expenses. It consists of several components, each serving a specific purpose:

1. **App Component:** The main component of the application that manages the state of expenses. It includes functions to add and delete expenses, which are passed down to child components.

2. **ExpenseForm Component:** Allows users to add new expenses. It captures user input for expense name and amount and triggers the `addExpense` function in the App component when a new expense is submitted.

3. **ExpenseInfo Component:** Displays the total balance, income, and expenses based on the data in the `expenses` array. It calculates the grand total and separates transactions into profits (income) and losses (expenses) using the `reduce` method.

4. **ExpenseList Component:** Renders a list of all expenses. It iterates over the `expenses` array and renders a `Transaction` component for each transaction, providing options to edit or delete the transactions.

5. **Transaction Component:** Represents a single transaction in the list. It displays the name, amount, and options (edit and delete) for each transaction. Additional options appear when the user hovers over a transaction.

## Installation

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
4. Open your web browser and visit `http://localhost:3000` to access the Expense Tracker App.

## Technologies Used

- React.js
- CSS (with CSS modules for component-specific styles)

## Screenshots

![Desktop View]([./src/Screenshots/Desktop%20view.png](https://imgur.com/a/frCUOFg))
![Mobile View](./src/Screenshots/Mobile%20Phone%20View.png)


