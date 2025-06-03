import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-end px-5 md:px-10  '>
      <Link href='/#Home'>
      <Image
        src='/green souss logo.png' 
        alt='logo'
        width={150}
        height={100}/>
      </Link>
      
    </div>
  )
}

export default Logo
