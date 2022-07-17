import React, {useEffect, useState} from 'react'
import expenseService  from './services/expenseService'

const ExpensesHistory = ({expenses}) => {
  
  console.log(expenses)
  return (
    <div>
      Expenses
      {expenses.map(expense => 
        <>
          <div>{expense.name} {expense.cost}</div>
        </>
      )}
    </div>
  )
}

export default ExpensesHistory