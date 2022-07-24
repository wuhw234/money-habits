import React from 'react'

const History = ({user, habits, setHabits}) => {
  return (
    <div>
      <h2>
      Habits
      </h2>
      {habits?.map(habit => 
        <div className="flex-container" key={habit.id}>
          <div className="flex-child box-input">
            {habit.name}
          </div>
          <div className="flex-child box-input">
            {habit.value}
          </div>
          {/* <button className="flex-child" onClick={() => handleDelete(habit.id)}>delete</button> */}
        </div>
      )}
    </div>
  )
}

export default History