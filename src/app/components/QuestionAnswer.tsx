'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { FC, useState } from 'react'


  interface questionprops {
    question : string ; 
    answer : string ; 
  }
const QuestionAnswer :FC<questionprops> = ({question , answer}) => {

    const [isopen , setIsopen] = useState<boolean>(false)
    const toglearrow = () => {
        setIsopen(!isopen)
       
    }
  return (
    <article className='cursor-pointer  flex flex-col  space-y-2 md:space-y-5 border-b-1 border-black/30 mb-4 ' 
      onClick={toglearrow}>

        <div className={`  flex flex-row items-center justify-between `}>
          <h3 className="text-sm md:text-xl font-medium text-gray-800 mb-3">
          {question}
          </h3>
          {isopen ? <ChevronUp/> : <ChevronDown/> }
        </div>
         <div  className={`${isopen ? '' : 'hidden'} `} >
           <p className={ ` text-black/70 text-sm md:text-lg pb-3 font-sans leading-relaxed`}>
            {answer}
           </p>
         </div>
    </article>
  )
}

export default QuestionAnswer
