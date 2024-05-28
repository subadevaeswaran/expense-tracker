"use client"
import React, { useEffect, useState } from 'react'
import { UserButton ,useUser } from '@clerk/nextjs';
import { User } from 'lucide-react';
import DashboardHeader from './_components/DashboardHeader';
import SideNav from './_components/SideNav';
import CardInfo from './_components/CardInfo';
import { db } from '@/utils/dbConfig';
import { eq, getTableColumns, sql } from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';
import BarChartDashboard from './_components/BarChartDashboard';
import BudgetItem from './budgets/_components/BudgetItem';
import ExpenseListTable from './expenses/_components/ExpenseListTable';

function Dashboard() {

    const [budgetList,setBudgetList]=useState([]);
    const [expensesList,setExpensesList]=useState([]);
  
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
    <div className='p-5'>
      <h2 className='font-bold text-3xl'>Hi, {user?.fullName} </h2>
      <p className='text-gray-500'>Here's what happening with your money , Lets manage your expense </p>
      <CardInfo budgetList={budgetList} />
      <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-5'>
        <div className='md:col-span-2'>
          <BarChartDashboard budgetList={budgetList} />
          <div className='hover:shadow-md shadow-sm'>
          <ExpenseListTable expensesList={expensesList} refreshData={()=>getBudgetList()} />
          </div>

          </div>
            <div className='grid gap-6'>
              <h2 className='font-bold text-lg'>Budgets</h2>
              {budgetList.map((budget,index)=>(
                <BudgetItem budget={budget} key={index}/>
              )

              )}
            </div>
          </div>

        </div>
  )
}


export default Dashboard;