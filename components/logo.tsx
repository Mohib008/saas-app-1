"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import LogoImage from '@logos/1.png'

function logo() {
  return (
    <Link href='/' prefetch={false} className='overflow-hidden'>
     <div className='flex items-center w-74 h-14'>
        <AspectRatio 
          ratio={16/9}
          className='flex items-center justify-center'
        >
          <Image
            className="dark:filter dark:invert w-40 h-40"
            priority
            src={LogoImage}
            alt="logo"
          />
        </AspectRatio>
     </div>
    </Link>
  )
}

export default logo