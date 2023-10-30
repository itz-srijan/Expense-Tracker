import "./App.css";
import { useState } from "react";
import Expense from "./components/Expense-Components/Expense";
import NewExpense from "./components/newExpense/NewExpense";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 200,
    date: new Date(2023, 4, 25),
  },
  {
    id: "e2",
    title: "Car Insurence",
    amount: 1000,
    date: new Date(2023, 7, 24),
  },
  { id: "e3", title: "House Rent", amount: 800, date: new Date(2023, 8, 12) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const expenseDataHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div className='app'>
      <NewExpense onAddExpense={expenseDataHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
