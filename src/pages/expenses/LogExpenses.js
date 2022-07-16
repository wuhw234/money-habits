import React from 'react'
import {Link} from "react-router-dom"

const LogExpenses = () => {
  return (
    <div>
      <h1>Your total spending is:</h1>
      <form>
        <h2>Log a spending</h2>
        <label for='name' className='form-label'>Name</label>
        <input id='name' type='text' className='form-control'/>
        <label for='price' className='form-label'>Cost</label>
        <input id='price' type='number' className='form-control'/>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default LogExpenses