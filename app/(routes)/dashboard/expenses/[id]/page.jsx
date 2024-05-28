"use client"
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq, getTableColumns, sql } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import BudgetItem from '../../budgets/_components/BudgetItem';
import AddExpenses from '../_components/AddExpenses';
import ExpenseListTable from '../_components/ExpenseListTable';
import { Button } from '@/components/ui/button';
import { PenBox, Trash } from 'lucide-react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import EditBudget from '../_components/EditBudget';
// import { useRouter } from 'next/router';


function ExpensesScreen({params}) {
    const {user} = useUser();
    const [budgetInfo,setBudgetInfo]=useState();
    const [expensesList,setExpensesList] = useState([]);
    const route= useRouter();
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

        const deleteBudget=async()=>{

          const deleteExpesneResult =await db.delete(Expenses).where(eq(Expenses.budgetId,params.id)).returning();
          if(deleteExpesneResult){
            const result = await db.delete(Budgets).where(eq(Budgets.id,params.id)).returning();
          }
            toast('Expenses deleted!')
            route.push('/dashboard/budgets');
           
        }
  
  return (
    <div className='p-10'>
        <h2 className='text-2xl font-bold flex justify-between items-center'>My Expense 
        <div className='flex gap-2 items-center '>
        
        <EditBudget budgetInfo={budgetInfo} refreshData={()=>getBudgetInfo()}/>
        <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button className='flex  gap-2' variant='destructive'><Trash /> Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.This Will permenantly delete your expenses 
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>deleteBudget()}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
       </AlertDialog>
       </div>

       




        </h2>
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
            <ExpenseListTable expensesList={expensesList} refreshData={()=>getBudgetInfo()}/>
        </div>
    </div>
  )
}

export default ExpensesScreen