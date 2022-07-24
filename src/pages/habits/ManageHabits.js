import React, {useState} from 'react'
import habitService from './services/habitService'

const ManageHabits = ({user, habits, setHabits}) => {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('user', user)
      const token = habitService.getToken(user?.token)
      const habit = await habitService.postHabit(token, {name, value})
      setHabits([habit, ...habits])
      setName('')
      setValue('')
    }
    catch (error) {
      console.log(error)
    }  
  }
  return (
  <div>
  <h1>Total Money Made From Habits:</h1>
  <h2>Manage your habits:</h2>
  
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
        <label for='value' className='form-label'>Cost</label>
        <input 
          id='value' 
          type='number' 
          className='form-control'
          value={value}
          onChange={({target}) => setValue(target.value)}
        />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
</div>
  )
}

export default ManageHabits