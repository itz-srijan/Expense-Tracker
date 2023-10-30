import "./NewExpense.css";
import { useState } from "react";
function NewExpense(props) {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     expenseTitle: event.target.value,
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     expenseAmount: event.target.value,
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     expenseDate: event.target.value,
  //   });
  // };
  const inputChangeHandler = (identifier, event) => {
    const value = event.target.value;
    if (identifier === "title") setExpenseTitle(value);
    else if (identifier === "amount") setExpenseAmount(value);
    else setExpenseDate(value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate("");
    props.onAddExpense(expenseData);
    // console.log(inputData);
  };
  return (
    <div className='new-expense'>
      <form onSubmit={submitHandler}>
        <div className='new-expense_controls'>
          <div className='new-expense_control'>
            <label>Title</label>
            <input
              type='text'
              value={expenseTitle}
              onChange={(event) => {
                inputChangeHandler("title", event);
              }}
            />
          </div>
          <div className='new-expense_control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={expenseAmount}
              onChange={(event) => {
                inputChangeHandler("amount", event);
              }}
            />
          </div>
          <div className='new-expense_control'>
            <label>Date</label>
            <input
              type='date'
              min='2023-01-01'
              max='2023-12-31'
              value={expenseDate}
              onChange={(event) => {
                inputChangeHandler("date", event);
              }}
            />
          </div>
          <div className='new-expense_actions'>
            <button type='submit'>Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default NewExpense;
