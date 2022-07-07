import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import LogExpenses from './LogExpenses'
import ExpensesHistory from './ExpensesHistory'

const Spending = () => {
  return (
    <div>
        <Tabs defaultActiveKey="logExpenses" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="logExpenses" title="Log">
    <LogExpenses />
  </Tab>
  <Tab eventKey="seeSpending" title="Spending History">
    <ExpensesHistory />
  </Tab>
</Tabs>
    </div>
  )
}

export default Spending