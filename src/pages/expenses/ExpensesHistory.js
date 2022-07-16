import React, {useEffect, useState} from 'react'
import expenseService  from './services/expenseService'

const ExpensesHistory = ({user}) => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const getExpenses = async () => {
      const token = expenseService.getToken(user?.token)
      const userExpenses = await expenseService.getAll(token)
      console.log('userexpenses', userExpenses)
      setExpenses(userExpenses)
    }
    getExpenses()
  }, [user])
  console.log(expenses)
  return (
    <div>
      Expenses
      {expenses.map(expense => 
        <>
          <div>{expense.name}</div>
          <div>{expense.cost}</div>
        </>
      )}
    </div>
  )
}

export default ExpensesHistory