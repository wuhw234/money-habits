import {React, useState} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import LogHabits from './LogHabits'
import ManageHabits from './ManageHabits'

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
</Tabs>
    </div>
  )
}

export default Habits