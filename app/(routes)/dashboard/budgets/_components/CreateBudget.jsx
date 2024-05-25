"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import EmojiPicker from 'emoji-picker-react'
  import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { toast } from 'sonner'
import { DialogFooter , DialogClose } from '@/components/ui/dialog'
  

function CreateBudget({refreshData}) {

    const [emojiIcon,setEmojiIcon]=useState('😊');
    const [openEmojiPicker,setOpenEmojiPicker]=useState(false);
    const [name,setName] =useState();
    const [amount,setAmount]=useState();
    const {user}=useUser();
    const onCreateBudget =async () =>{
        const result = await db.insert(Budgets).values({
            name:name,
            amount:amount,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            icon:emojiIcon
        }).returning({insertedId:Budgets.id})

        if(result){
            refreshData();
           toast('New Budget Created !') 
        }
    }

  return (
    <div>
            <Dialog>
                    <DialogTrigger asChild>
                    <div className='bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Budget</h2>
            </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Create New Budget</DialogTitle>
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
                                    <Input placeholder="e.g, Grocery"
                                    onChange={(e)=>setName(e.target.value)} />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                                    <Input type="number" placeholder="e.g, Rs. 1000" onChange={(e)=>setAmount(e.target.value)} />
                                </div>
                                
                            </div>                          
                        </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="sm:justify-start">
                                <DialogClose asChild>
                                <Button className='mt-5 w-full text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2'disabled={!(name&&amount)} onClick={onCreateBudget}>Create Budget</Button>
                                </DialogClose>
                                </DialogFooter>
                    </DialogContent>
        </Dialog>

    </div>
  )
}

export default CreateBudget