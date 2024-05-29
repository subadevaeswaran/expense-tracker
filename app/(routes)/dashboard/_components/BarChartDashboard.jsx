import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}) {
  return (
    <div className='border rounded-lg p-5 hover:shadow-md hover:bg-slate-50'>
      <h2 className='font-bold text-lg'>Amount</h2>
      <ResponsiveContainer width={'80%'} height={300} > 
       <BarChart
      data={budgetList}
      margin={{
        top:7,
        // right:5,
        // left:5,
        // bottom:5

      }}>
        <XAxis dataKey='name'/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='totalSpend' stackId="a" fill='#8654FC' />
        <Bar dataKey='amount' stackId="a" fill="#ab8afb" />
      </BarChart>
      </ResponsiveContainer>
    
    </div>
  )
}

export default BarChartDashboard