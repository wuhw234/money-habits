import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import LogSpending from './LogSpending'
import SpendingHistory from './SpendingHistory'

const Spending = () => {
  return (
    <div>
        <Tabs defaultActiveKey="logSpending" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="logSpending" title="Log">
    <LogSpending />
  </Tab>
  <Tab eventKey="seeSpending" title="Spending History">
    <SpendingHistory />
  </Tab>
</Tabs>
    </div>
  )
}

export default Spending