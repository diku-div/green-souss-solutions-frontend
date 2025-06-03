import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerlink } from '../constants/Linkfooter'

const Footer = () => {
    return (
     <section className='flex flex-col md:flex-row md:justify-between items-center space-y-5 '>
        <Link href={'/#Home'}> 
        <Image src='/green souss logo.png'  alt='logo' width={150} height={10} />
        </Link>
        <div className='space-x-5'>
            {footerlink.map((link: string, index: number) => {
                return (
                    <Link key={index} href={link === 'Admin' ? '/Login' :link === 'About Us' ? '/#About' : '/#'+link} className='text-black/50 font-medium hover:text-black transition-all duration-300'>
                        {link}
                    </Link>
                );
            })}
        </div>
        <div className='flex flex-row space-x-5 '>
            <Link href={''}> <Image src='/facebook.png' alt='facebook ' width={20} height={20} className='opacity-50 hover:opacity-75 transition-all duration-300'/></Link>
            <Link href={''}> <Image src='/instagram.png' alt='instagram ' width={20} height={20}  className='opacity-50 hover:opacity-75 transition-all duration-300'/></Link>
            <Link href={''}> <Image src='/message.png' alt='linkden' width={20} height={20}  className='opacity-50 hover:opacity-75 transition-all duration-300' /></Link>
            <Link href={''}> <Image src='/twitter.png' alt='twiter' width={20} height={20}  className='opacity-50 hover:opacity-75 transition-all duration-300'/></Link>
        </div>
     </section>
    )
}


export default Footer
