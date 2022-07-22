import React from 'react'
import expenseService from './services/expenseService'

const ExpensesHistory = ({user, expenses, setExpenses}) => {
  const handleDelete= async (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
    const token = expenseService.getToken(user?.token)
    await expenseService.deleteExpense(token, id)
  }
  return (
    <div>
      <h2>
      Expenses
      </h2>
      {expenses?.map(expense => 
        <div className="flex-container" key={expense.id}>
          <div className="flex-child box-input">
            {expense.name}
          </div>
          <div className="flex-child box-input">
            {expense.cost}
          </div>
          <button className="flex-child" onClick={() => handleDelete(expense.id)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default ExpensesHistory