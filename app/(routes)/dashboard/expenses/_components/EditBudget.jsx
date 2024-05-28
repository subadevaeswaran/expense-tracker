import { Button } from '@/components/ui/button'
import { PenBox } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useUser } from '@clerk/nextjs';
import EmojiPicker from 'emoji-picker-react';
import { Input } from '@/components/ui/input';
import { db } from '@/utils/dbConfig';
import { Budgets } from '@/utils/schema';
import { toast } from 'sonner';
import { eq } from 'drizzle-orm';

function EditBudget({budgetInfo,refreshData}) {
    const [emojiIcon,setEmojiIcon]=useState(budgetInfo?.icon);
    const [openEmojiPicker,setOpenEmojiPicker]=useState(false);
    const [name,setName] =useState(budgetInfo?.name);
    const [amount,setAmount]=useState(budgetInfo?.amount);
    const {user}=useUser();

    useEffect(()=>{
        setEmojiIcon(budgetInfo?.icon);
    },[budgetInfo])
    const onUpdateBudget = async() =>{
        const result  = await db.update(Budgets).set({
            name:name,
            amount:amount,
            icon:emojiIcon,
        }).where(eq(Budgets.id,budgetInfo.id)).returning();

        if(result){
            refreshData();
            toast('Budget Updated')
        }
    }
  return (
    <Dialog>
                    <DialogTrigger asChild>
                    <div><Button className='flex gap-2'> <PenBox/>Edit</Button>
            </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Update Budget</DialogTitle>
                        <DialogDescription>
                                <div className='mt-5'>
                                <Button variant="outline" 
                                size="lg" className= "text-lg"
                                onClick={()=>setOpenEmojiPicker(!openEmojiPicker)}>{emojiIcon}</Button>
                                <div className='absolute z-20'>
                                    <EmojiPicker open={openEmojiPicker}
                                    onEmojiClick={(e)=>{setEmojiIcon(e.emoji)
                                        setOpenEmojiPicker(true)
                                    }}/>
                                </div> 
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium my-1'>Budget Name</h2>
                                    <Input placeholder="e.g, Grocery" defaultValue={budgetInfo?.name}
                                    onChange={(e)=>setName(e.target.value)} />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                                    <Input type="number" placeholder="e.g, Rs. 1000"
                                    defaultValue={budgetInfo?.amount} onChange={(e)=>setAmount(e.target.value)} />
                                </div>
                                
                            </div>                          
                        </DialogDescription>
                        </DialogHeader>
                        <DialogFooter
                        className="sm:justify-start">
                                <DialogClose asChild>
                                <Button className='mt-5 w-full text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2'disabled={!(name&&amount)} onClick={onUpdateBudget}>Update Budget</Button>
                                </DialogClose>
                                </DialogFooter>
                    </DialogContent>
        </Dialog>


  )
}

export default EditBudget