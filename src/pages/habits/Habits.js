import React, {useState, useEffect} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import LogHabits from './LogHabits'
import ManageHabits from './ManageHabits'
import History from './History'
import habitService from './services/habitService'

const Habits = ({user}) => {
  const [habits, setHabits] = useState([])
  useEffect(() => {
    const getHabits = async () => {
      const token = habitService.getToken(user?.token)
      const userHabits = await habitService.getAll(token)
      console.log('userhabits', userHabits)
      setHabits(userHabits)
    }
    getHabits()
  }, [user])
  return (
    <div>
        <Tabs defaultActiveKey="manageHabits" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="manageHabits" title="Manage">
    <ManageHabits user={user} habits={habits} setHabits={setHabits}/>
  </Tab>
  <Tab eventKey="logHabits" title="Log">
    <LogHabits user={user} habits={habits} setHabits={setHabits}/>
  </Tab>
  <Tab eventKey="history" title="History">
    <History user={user} habits={habits} setHabits={setHabits}/>
  </Tab>
</Tabs>
    </div>
  )
}

export default Habits