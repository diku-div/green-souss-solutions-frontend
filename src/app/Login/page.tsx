import React from 'react'
import Login from '../components/Login'
import SplineViewer from '../components/SplineViewer'

const page = () => {
 return (
  <section className="relative">
    <div
      id="background"
      className="fixed inset-0 z-0 pointer-events-none w-screen h-full"
    >
      <SplineViewer />
    </div>

    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-white/50 backdrop:blur-lg rounded-4xl w-[90%] md:w-[50%]  border-2 border-black/10 p-5">
      <Login />
    </div>
  </section>
);

}

export default page
