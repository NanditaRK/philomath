import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
   return (
      <Link href="/" className="flex items-center">
         <Image
            src={'/logo.jpg'}
            alt="Logo"
            width={68}
            height={68}
            priority
         />
      </Link>
   )
}
