import Link from 'next/link'
import React from 'react'

function BudgetItem({budget}) {

    const calcualteProgressPrec = () =>{
        // (spend/total)*100
        const prec = (budget?.totalSpend/budget?.amount)*100;
        // return prec.toFixed(2);
        return prec.toFixed(2);
        // console.log(prec.toFixed(2));
    }

  return (
    <Link href={'expenses/'+budget?.id} className='p-5 border rounded-lg shadow-sm hover:shadow-lg cursor-pointer h-[170px]'>
        <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
            <h2 className='text-2xl p-3 px-4 bg-slate-100 rounded-full'>{budget?.icon}</h2>
            <div>
                <h2 className='font-bold'>{budget?.name}</h2>
                <h2 className='text-sm text-gray-500'>{budget?.totalItem} Item</h2>
            </div>
           
        </div>
        <h2 className='font-bold text-primary cursor-pointer hover:text-blue-200'> ₹{budget?.amount}</h2>
        </div>
        <div className='mt-5'>
            <div className='flex items-center justify-between'>
               <h2 className='text-xs text-slate-400'>₹{budget?.totalSpend?budget.totalSpend: 0} Spend</h2>
               <h2 className='text-xs text-slate-400'>₹{budget?.amount-budget?.totalSpend} Remaining</h2>  
            </div>
            <div className='w-full bg-slate-300 h-2  rounded-full'>
                <div className='h-2 bg-primary  rounded-full'
                style={{
                    width:`${calcualteProgressPrec()}%`}}></div>
            </div>
        </div>
    </Link>
  )
}

export default BudgetItem