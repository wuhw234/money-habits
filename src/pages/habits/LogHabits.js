import React from 'react'

const LogHabits = ({user, habits, setHabits}) => {
  return (
    <div className="flex-container">
      <h2>
      Habits
      </h2>
      {habits?.map(habit => 
        <div className="log-button">
          {habit.name}
        </div>
      )}
    </div>
  )

}

export default LogHabits