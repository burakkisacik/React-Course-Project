import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDay: '',
  });

  const handleTitleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const handleAmountChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const handleDayChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDay: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDay),
    };

    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDay: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={handleTitleChange}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.enteredAmount}
            onChange={handleAmountChange}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={userInput.enteredDay}
            onChange={handleDayChange}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.isShown}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
