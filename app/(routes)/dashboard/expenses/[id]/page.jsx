"use client"
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq, getTableColumns, sql } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import BudgetItem from '../../budgets/_components/BudgetItem';
import AddExpenses from '../_components/AddExpenses';
import ExpenseListTable from '../_components/ExpenseListTable';

function ExpensesScreen({params}) {
    const {user} = useUser();
    const [budgetInfo,setBudgetInfo]=useState();
    const [expensesList,setExpensesList] = useState([]);
    useEffect(()=>{
      
        user&&getBudgetInfo();
        getExpensesList();
    },[user]);

    const getBudgetInfo=async()=>{
        const result = await db.select({
            ...getTableColumns(Budgets),totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),totalItem: sql `count(${Expenses.id})`.mapWith(Number)
          }).from(Budgets).leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId)).where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress)).where(eq(Budgets.id,params.id)).groupBy(Budgets.id);
          setBudgetInfo(result[0]);
          getExpensesList();

         
        }

        const getExpensesList=async()=>{
            const result = await db.select().from(Expenses).where(eq(Expenses.budgetId,params.id));
            setExpensesList(result);
            console.log(result)
        }
  
  return (
    <div className='p-10'>
        <h2 className='text-2xl font-bold'>My Expense</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-5'>
          {budgetInfo?  <BudgetItem 
            budget = {budgetInfo}/>:
            <div className='h-[150px] w-full bg-slate-300 rounded-lg animate-pulse'>

                </div>}
                <AddExpenses budgetId={params.id}user={user}
                refreshData={()=>getBudgetInfo()} />
        </div>
        <div>
            <h2>Latest Expenses</h2>
            <ExpenseListTable expensesList={expensesList}/>
        </div>
    </div>
  )
}

export default ExpensesScreen