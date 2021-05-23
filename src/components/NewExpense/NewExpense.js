import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [isShown, setIsShown] = useState(false);

  const handleShow = () => {
    setIsShown(true);
  };

  const handleCancel = () => {
    setIsShown(false);
  };

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsShown(false);
  };

  return (
    <div className='new-expense'>
      {!isShown && <button onClick={handleShow}>Add New Expense</button>}
      {isShown && (
        <ExpenseForm
          isShown={handleCancel}
          onSaveExpenseData={handleSaveExpenseData}
        />
      )}
    </div>
  );
}

export default NewExpense;
