import OrderDetails from '@/app/components/OrderDetails';
import SplineViewer from '@/app/components/SplineViewer';
import React from 'react'

const page = () => {
return (
    <main className="h-screen pt-32  flex items-center justify-center py-10">
        <div className="absolute inset-0 z-0 pointer-events-none w-screen h-[900px] sm:h-[1000px] md:h-full bottom-0 ">
            <SplineViewer />
            </div>
            <div className=" z-10 md:bg-white/70 w-full md:w-[80%] md:p-10 rounded-4xl md:backdrop-blur-md ">
                        <OrderDetails />

            </div>
     
    
    </main>
  );
}

export default page
