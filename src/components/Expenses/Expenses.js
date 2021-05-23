import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenseList = props.items.filter((item) => {
    let year = item.date.getFullYear();
    year = year.toString();
    return year === filteredYear;
  });

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      <ExpensesChart expenses={filteredExpenseList} />
      <ExpensesList items={filteredExpenseList} />
    </Card>
  );
};

export default Expenses;
