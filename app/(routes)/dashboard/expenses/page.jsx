"use client"
import React, { useEffect, useState } from 'react'
import ExpenseListTable from './_components/ExpenseListTable';
import Dashboard from '../page';
import { db } from '@/utils/dbConfig';
import { getTableColumns, sql ,eq} from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';

function expense() {
    const [expensesList,setExpensesList] = useState([]);
    const [budgetList,setBudgetList]=useState([]);
    const{user}=useUser();
  
    useEffect(()=>{
      user&&getBudgetList();
    },[user])
  

    const getBudgetList=async()=>{
      const result = await db.select({
        ...getTableColumns(Budgets),totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),totalItem: sql `count(${Expenses.id})`.mapWith(Number)
      }).from(Budgets).leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId)).where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress)).groupBy(Budgets.id);
  
      setBudgetList(result);
  
      getAllExpenses();
    }
    const getAllExpenses =async () =>{
      const result = await db.select({
        id:Expenses.id,
        name:Expenses.name,
        amount:Expenses.amount,
        createdAt:Expenses.createdAt
      }).from(Budgets).rightJoin(Expenses,eq(Budgets.id,Expenses.budgetId)).where(eq(Budgets.createdBy,user?.primaryEmailAddress.emailAddress))

     setExpensesList(result);
     
    }
  return (
    <div className='h-screen bg-gradient-to-r from-purple-50 to-violet-50' > <h2 className="font-bold text-2xl p-5 ml-2 ">All Expenses</h2>
<div className='mx-6 hover:shadow-md'>
<ExpenseListTable expensesList={expensesList} refreshData={()=>getBudgetList()} />
</div>
    </div>
    
  )
}

export default expense;