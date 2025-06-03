"use client";
import { navLinks, navphonelinks } from '@/app/constants/navlinks';
import {  ChevronDown, ChevronUp, Menu , X} from 'lucide-react'
import Link from 'next/link';
import { useState } from 'react'
import Servicesmobile from './Servicesmobile';


const Mobilenav = () => {
    const [isopen , setIsopen] = useState <Boolean>(false)
    const[visible, setVisible] = useState<boolean>(false)
    const togleMenu = () => {
        setIsopen(!isopen)
    }  
  return (
    <span className="md:hidden flex  cursor-pointer pr-5"onClick={togleMenu}>
       
       {isopen ? <X className='text-black'/> : <Menu className='text-black'/>}

       <div className={` ${isopen ? '' : 'hidden'} tracking-wide absolute  w-[90%] p-5 rounded-xl  left-[5%] top-18 bg-white backdrop-blur-md drop-shadow-lg drop-shadow-black/40  text-center text-black/70`}>
      
      
        {navphonelinks.map((link, index) => (
        <Link key={index} href={link === 'About Us' ? '/#About' : link === 'News' ? '/#News' :link === 'Contact' ? '/#Contact' :link === 'FAQs' ? '/#FAQ' : link === 'Order Tracking' ? '/IDorder' : '/order' } 
        className="block py-2 text-black/70 hover:bg-black/5 font-normal rounded-3xl px-4  hover:text-black transition-all duration-300">
          {link}
        </Link>
        ))}      
       </div>

       
    </span>
  )
}

export default Mobilenav
