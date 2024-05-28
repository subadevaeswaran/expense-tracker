import { db } from '@/utils/dbConfig'
import { Expenses } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

function ExpenseListTable({expensesList,refreshData}) {
  const deleteExpense=async(expense)=>{
    const result = await db.delete(Expenses).where(eq(Expenses.id,expense.id)).returning();
    if(result){
      toast('expense deleted')
      refreshData()
    }
  }

  
  return (
    <div className='mt-3 border rounded-md'>
        <div className='grid grid-cols-4 bg-slate-200 p-2'>
            <h2 className='font-bold'>Name</h2>
            <h2 className='font-bold'>Amount</h2>
            <h2 className='font-bold ml-5'>Date</h2>
            <h2 className='font-bold'>Action</h2>
        </div>
        {expensesList.map((expenses,index)=>(
        <div className='grid grid-cols-4 bg-slate-50 p-2  odd:bg-white even:bg-slate-100 hover:bg-sky-50 gap-4 '>
           <h2 className='my-1'>{expenses?.name}</h2>
            <h2 className='text-green-600 flex items-center ml-2 font-medium '> ₹{expenses?.amount}</h2>
            <h2 className='my-1'>{expenses?.createdAt}</h2>
            <h2>
              <Trash className='text-red-600 cursor-pointer ml-2 my-1' onClick={()=>deleteExpense(expenses)} />
            </h2>
        </div>
        ))}

    </div>
  )
}

export default ExpenseListTable