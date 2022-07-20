import React, {useEffect, useState} from 'react'
import expenseService  from './services/expenseService'

const ExpensesHistory = ({expenses}) => {
  const [editing, setEditing] = useState(-1)

  const isEditing = (id) => editing === id ? true : false
  const toggleEditing = (id) => {
    if (id === editing) {
      setEditing(-1)
    }
    else {
      setEditing(id)
    }
  }
  return (
    <div>
      <h2>
      Expenses
      </h2>
      {expenses.map(expense => 
        <div className="flex-container" id={expense.id}>
          <input className="flex-child box-input" disabled={!isEditing(expense.id)} value={expense.name}/>
          <input className="flex-child box-input" disabled={!isEditing(expense.id)} value={expense.cost} />
          <button className="flex-child" onClick={() => toggleEditing(expense.id)}>
            {isEditing(expense.id) 
            ? 'Done'
            : 'Edit'
            }
          </button>
          <button className="flex-child">delete</button>
        </div>
      )}
    </div>
  )
}

export default ExpensesHistory