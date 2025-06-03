'use client';
import Image from "next/image";
import { useState } from "react";
import { CircleCheck, MessageCircle, MoveRight, Sparkles } from "lucide-react";
import Link from "next/link";

type Tab = "collection" | "recycling" | "recovery";

const TireManagement = () => {
  const [activeTab, setActiveTab] = useState<Tab>("collection");

  const tabs: { label: string; value: Tab }[] = [
    { label: "Collection", value: "collection" },
    { label: "Recycling", value: "recycling" },
    { label: "Recovery", value: "recovery" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 scroll-smooth">
      {/* Tabs */}
      <div className="flex justify-center space-x-10 pb-4 mb-6">
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
      {/* collection */}
      {activeTab === "collection" && (
        <>
          {/* Title */}
          <h2 className=" text-xl  md:text-3xl font-bold text-center mb-10">
            Efficient tire management solutions
          </h2>

          {/* Grid layout */}
          <div className="grid md:flex w-full md:justify-center items-center gap-6  px-5  ">
            {/* Left Card */}
            <div className="bg-white order-2 md:order-1 hover:drop-shadow-black/50 md:w-[40%] md:h-[350px] lg:h-[500px]  rounded-4xl drop-shadow-xl drop-shadow-black/30 p-8 flex flex-col justify-between transition-all duration-300  ">
              <div>
                {/* Icon placeholder */}
                <div className="mb-4">
                  <MessageCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl text-black font-semibold mb-3">
                  Innovative collection
                </h3>
                <p className="text-black/60">
                  Discover our streamlined process for collecting used tires,
                  ensuring environmental responsibility and efficiency.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/Article#Collection"
                  className="inline-flex items-center text-green-500 font-medium hover:underline"
                >
                  Learn more
                  <MoveRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="  md:w-[70%] md:h-[350px] order-1 md:order-2 lg:h-[500px] rounded-2xl drop-shadow-xl drop-shadow-black/30">
              <Image
                src="/tirecollection.jpeg"
                alt="Man handling tires"
                width={700}
                height={600}
                className="w-full h-full rounded-4xl drop-shadow-xl object-cover  hover:drop-shadow-black/50 transition-all duration-300 "
              />
            </div>
          </div>
        </>
      )}
      {/* collecting */}

      {/* recycling */}
       {activeTab === "recycling" && (
        <>
          {/* Title */}
          <h2 className="text-xl  md:text-3xl font-bold text-center mb-10 px-2">
       Sustainable recycling practices
          </h2>

          {/* Grid layout */}
          <div className="grid md:flex w-full md:justify-center items-center gap-6  px-5  ">
            {/* Left Card */}
            <div className="bg-white  order-2 md:order-1 hover:drop-shadow-black/50 md:w-[40%] md:h-[350px] lg:h-[500px]  rounded-4xl drop-shadow-xl drop-shadow-black/30 p-8 flex flex-col justify-between transition-all duration-300  ">
              <div>
                {/* Icon placeholder */}
                <div className="mb-4">
                  <CircleCheck className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl text-black font-semibold mb-3">
                Advanced recycling
                </h3>
                <p className="text-black/60">
                Explore our cutting-edge recycling techniques that transform used tires into valuable resources.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/Article#Recycling"
                  className="inline-flex items-center text-green-500 font-medium hover:underline"
                >
                 Discover
                  <MoveRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className=" md:w-[70%] md:h-[350px] order-1 md:order-2 lg:h-[500px] rounded-2xl drop-shadow-xl drop-shadow-black/30">
              <Image
                src="/recycling.png"
                alt="Man handling tires"
                width={700}
                height={600}
                className="w-full h-full rounded-4xl drop-shadow-xl object-contain  hover:drop-shadow-black/50 transition-all duration-300 "
              />
            </div>
          </div>
        </>
      )}
      {/* recycling */}
      {/* recovery */}
       {activeTab === "recovery" && (
        <>
          {/* Title */}
          <h2 className="text-xl  md:text-3xl font-bold text-center mb-10 px-2">
           Comprehensive recovery services
          </h2>

          {/* Grid layout */}
          <div className="grid md:flex w-full md:justify-center items-center gap-6  px-5  ">
            {/* Left Card */}
            <div className="bg-white order-2 md:order-1 hover:drop-shadow-black/50 md:w-[40%] md:h-[350px] lg:h-[500px]  rounded-4xl drop-shadow-xl drop-shadow-black/30 p-8 flex flex-col justify-between transition-all duration-300  ">
              <div>
                {/* Icon placeholder */}
                <div className="mb-4">
                  <Sparkles className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl text-black font-semibold mb-3">
                 Effective recovery
                </h3>
                <p className="text-black/60">
                  Learn about our recovery services that maximize the value of used tires through innovative methods.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/Article#Recovery"
                  className="inline-flex items-center text-green-500 font-medium hover:underline"
                >
            Find out

                  <MoveRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className=" md:w-[70%] md:h-[350px]  order-1 md:order-2 lg:h-[500px] rounded-2xl drop-shadow-xl drop-shadow-black/30">
              <Image
                src="/recovery.png"
                alt="Man handling tires"
                width={700}
                height={600}
                className="w-full h-full rounded-4xl drop-shadow-xl object-cover  hover:drop-shadow-black/50 transition-all duration-300 "
              />
            </div>
          </div>
        </>
      )}
      {/* recovery */}
      
      
    </section>
  );
};

export default TireManagement;

