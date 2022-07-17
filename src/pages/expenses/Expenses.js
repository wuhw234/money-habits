import React, {useState, useEffect} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import LogExpenses from './LogExpenses'
import ExpensesHistory from './ExpensesHistory'
import expenseService  from './services/expenseService'

const Expenses = ({user}) => {
  const [expenses, setExpenses] = useState([])
  useEffect(() => {
    const getExpenses = async () => {
      const token = expenseService.getToken(user?.token)
      const userExpenses = await expenseService.getAll(token)
      console.log('userexpenses', userExpenses)
      setExpenses(userExpenses)
    }
    getExpenses()
  }, [user])

  return (
    <div>
        <Tabs defaultActiveKey="logExpenses" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="logExpenses" title="Log">
    <LogExpenses user={user} expenses={expenses} setExpenses={setExpenses}/>
  </Tab>
  <Tab eventKey="seeSpending" title="Spending History">
    <ExpensesHistory expenses={expenses} />
  </Tab>
</Tabs>
    </div>
  )
}

export default Expenses