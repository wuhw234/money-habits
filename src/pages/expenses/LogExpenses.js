import React, {useState} from 'react'
import {Link} from "react-router-dom"
import expenseService from './services/expenseService'

const LogExpenses = ({user, expenses, setExpenses}) => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const token = expenseService.getToken(user?.token)
      const expense = await expenseService.postExpense(token, {name, cost})
      setExpenses(expenses.concat(expense))
      setName('')
      setCost('')
    }
    catch (error) {
      console.log(error)
    }  
  }

  return (
    <div>
      <h1>Your total spending is:</h1>
      <form onSubmit={handleSubmit}>
        <h2>Log a spending</h2>
        <label for='name' className='form-label'>Name</label>
        <input 
          id='name' 
          type='text' 
          className='form-control'
          value={name}
          onChange={({target}) => setName(target.value)}
          />
        <label for='cost' className='form-label'>Cost</label>
        <input 
          id='cost' 
          type='number' 
          className='form-control'
          value={cost}
          onChange={({target}) => setCost(target.value)}
        />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default LogExpenses