import ExpenseItem from "./ExpenseItem";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expense.css";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = (
    <p className='expenses-list_fallback'>No expense found</p>
  );
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      ></ExpenseItem>
    ));
  }
  return (
    <Card className='expense'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      {expenseContent}
    </Card>
  );
}
export default Expense;
