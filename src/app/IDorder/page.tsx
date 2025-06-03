import React from 'react'
import Login from '../components/Login'
import SplineViewer from '../components/SplineViewer'
import OrderID from '../components/OrderID'

const page = () => {
  return (
    <section className='relative'>
      <div id='background' className="fixed inset-0 z-0 pointer-events-none w-screen h-full bottom-0">
        <SplineViewer />
      </div>
    <div className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-white/50 backdrop:blur-lg rounded-4xl w-[90%] md:w-[50%]  border-2 border-black/10 p-5">
        <OrderID/>
       
      </div>
    </section>
  )
}

export default page
