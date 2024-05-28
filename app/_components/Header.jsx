"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  const handleUserButtonClick = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  };

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <div>
        <Image src={"/expenso-high-resolution-logo (1).png"} alt="logo" width={200} height={150} />
      </div>
      {isSignedIn ? (
        <div onClick={handleUserButtonClick}>
          <UserButton />
        </div>
      ) : (
        <Link href={'/sign-in'}>
          <Button>Sign In</Button>
        </Link>
      )}
    </div>
  )
}

export default Header
