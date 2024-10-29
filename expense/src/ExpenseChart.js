import React from 'react';

const ExpenseChart = ({ expenses }) => {
  const getExpenseByCategory = () => {
    return expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
  };

  const categoryData = getExpenseByCategory();

  return (
    <div>
      <h2>Expense Summary by Category</h2>
      <ul>
        {Object.keys(categoryData).map((category) => (
          <li key={category}>
            {category}: ${categoryData[category].toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseChart;
