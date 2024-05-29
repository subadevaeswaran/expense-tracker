import React from 'react'
import BudgetList from './_components/BudgetList'

function Budgets() {
  return (
    <div className='h-screen bg-gradient-to-r from-purple-50 to-violet-50'>
    <div className='p-10'>
        <h2 className='font-bold text-3xl'>My Budgets</h2>
        <BudgetList />
    </div>
    </div>
  )
}

export default Budgets