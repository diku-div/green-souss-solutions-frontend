import React from 'react'
import SplineViewer from '../components/SplineViewer'
import OrderConfirmation from '../components/OrderConfirmation'

const page = () => {
  return (
    <main className="h-screen pt-28  flex items-center justify-center">
           <div className="absolute inset-0 z-0 pointer-events-none w-screen h-full bottom-0 ">
               <SplineViewer />
               </div>
               <div className=" z-10   w-[90%] md:w-[60%] py-5 md:py-10  rounded-4xl  ">
                           <OrderConfirmation />
   
               </div>
        
       
       </main>
  )
}

export default page
