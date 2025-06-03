import React from 'react'
import OrderPage from '../order/page'
import AdminDashboard from '../components/AdminDashboard'
import SplineViewer from '../components/SplineViewer'

const page = () => {
  return (
    <main className='relative overflow-hidden'>
       <div className="absolute inset-0 z-0 pointer-events-none w-screen h-[100%] bottom-0 ">
      <SplineViewer />
      </div>
 <div className='pt-16 py-10 '>
      <AdminDashboard/>
    </div>
    </main>
   
  )
}

export default page
