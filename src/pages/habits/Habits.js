import {React, useState} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import LogHabits from './LogHabits'
import ManageHabits from './ManageHabits'
import History from './History'

const Habits = () => {
  return (
    <div>
        <Tabs defaultActiveKey="manageHabits" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="manageHabits" title="Manage">
    <ManageHabits />
  </Tab>
  <Tab eventKey="logHabits" title="Log">
    <LogHabits />
  </Tab>
  <Tab eventKey="history" title="History">
    <History />
  </Tab>
</Tabs>
    </div>
  )
}

export default Habits