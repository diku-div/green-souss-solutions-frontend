'use client';
import React, { useState } from "react";
import ChartPage from "./ChartPage";
import SettingsPage from "./SettingsPage";
import Profile from "./profile";
import Orders from "./Orders";














const AdminDashboard: React.FC = () => {
  type Tab = "Profile"  | "Orders" | "dashboard" | "Setting" ;

  
  const [activeTab, setActiveTab] = useState<Tab>("Profile");

  
  const tabs: { label: string; value: Tab }[] = [
    { label: "Profile", value: "Profile" },
    { label: "Orders", value: "Orders" },
    { label: "Dashboard", value: "dashboard" },
      { label: "Setting", value: "Setting" },
  ];
  

   

  return (
    <article className="relative bg-white/60 backdrop:blur-2xl w-[90%] rounded-4xl mx-auto py-12 mt-10 border-2 border-black/5 ">
    <div className="p-6   min-h-screen">

      <h1 className="text-2xl font-bold mb-6 md:text-start text-center">{activeTab}</h1>
      {/* Navigation Tabs */}
      <div className="flex md:space-x-8 border-b pb-2 text-sm font-medium">
             <div className="flex justify-center space-x-5 md:space-x-10 pb-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pb-2 font-medium transition-all ${
                activeTab === tab.value
                  ? "text-black border-b-2 border-black"
                  : "text-black/30 border-b-2 border-black/30"
              }`}
            >
              {tab.label}
            </button>
           
          ))}
        </div>
      </div>
      </div>


 {/* -------------------------------------------------------    order    ------------------------------------------------------------------------------*/}
      <div className="absolute top-56 w-full gap-5 px-5">
      {activeTab === 'Orders' && ( 
       <Orders/>
    )}
      </div>







     {/*----------------------------------------------------------------------- profile--------------------------------------------------------------------------------------------------- */}
      <section className="absolute top-56 w-full gap-5 px-5">
    {activeTab === 'Profile' &&(
     <Profile/>
    )}
      </section>







      {/*-------------------------------------------------- ------------------------   dashebord    ------------------------------------------------------------------*/}
       <section className="absolute top-56 w-full  ">
        {activeTab === 'dashboard' &&(
      <div className=" absolute  w-full  ">
        
         <div className="my-5  p-6  space-y-6 max-sm:h-[70vh] max-sm:overflow-auto  md:w-[90%]  md:border-2 md:border-black/5 md:rounded-4xl md:py-5 mx-auto  md:shadow-md md:shadow-black/10 ">
            <ChartPage/>
         </div>
      </div>
        )}
       </section>

       {/* -----------------------------------------------------------------------------setting---------------------------------------------------------------------- */}
       <section className="absolute top-56 w-full ">
        {activeTab === 'Setting' &&(
          <div className="space-y-6 h-[70vh] overflow-auto">
            <SettingsPage/>
          </div>
        )}
       </section>
    </article>
  );
};

export default AdminDashboard;
