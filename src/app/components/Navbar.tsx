'use client';
import Link from "next/link";
import Logo from "./Logo";
import { navLinks } from "@/app/constants/navlinks";
import Button from "./Button";
import MobileNav from "./Mobilenav";
import Services from "./Services";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const  Navbar : React.FC = () => {
   const[visible,setVisible] = useState<boolean>(false)

  
  return (
    <header className="fixed flex justify-between backdrop-blur-md bg-white/40 p-4 w-full z-30 items-center px-2 lg:px-20 ">
      <Logo/>
       <nav className="hidden md:flex justify-end  lg:gap-4">
        <div  className={`text-black/70 hover:bg-black/5 font-normal rounded-3xl md:px-4 py-2 hover:text-black transition-all duration-300 cursor-pointer flex flex-row  justify-between `} >
          <span>Services</span>
          {visible ? (
            <span onClick={() => setVisible(false)}><ChevronUp /></span> 
          ) : (
            <span onClick={() => setVisible(true)}><ChevronDown /></span>
          )}
          </div>
        {navLinks.map((link,index) => (
          <Link
            key={index}
            href={link === 'About Us' ? '/#About' :  '/#'+link}
            className="text-black/70 hover:bg-black/5 font-normal rounded-3xl md:px-4 py-2 hover:text-black transition-all duration-300 text-nowrap">
            {link}
          </Link>
        ))}
        <Link href='/order'><Button variante="primary">order now</Button></Link>
        
       </nav>

      { /* mobile nav */}
      <MobileNav/>
      {/* mobile nav */}

       <div className={`${visible ? '' : 'hidden'} absolute top-20 `}>
        <Services onLinkClick={setVisible}/> 
       </div>
    </header>
  );

}
export default Navbar