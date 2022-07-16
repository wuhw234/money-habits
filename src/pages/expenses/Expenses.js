import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import LogExpenses from './LogExpenses'
import ExpensesHistory from './ExpensesHistory'

const Expenses = ({user}) => {
  return (
    <div>
        <Tabs defaultActiveKey="logExpenses" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="logExpenses" title="Log">
    <LogExpenses user={user}/>
  </Tab>
  <Tab eventKey="seeSpending" title="Spending History">
    <ExpensesHistory user={user}/>
  </Tab>
</Tabs>
    </div>
  )
}

export default Expenses