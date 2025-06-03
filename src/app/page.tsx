import Button from "./components/Button";
import Heading from "./components/Heading";
import Image from "next/image";
import { stats } from "./constants/statecardinfo";
import StatCard from "./components/StateCard";
import TireManagement from "./components/TireManagement";
import CardEfficient from "./components/CardEfficient";
import { Mail, MapPin, MessageCircle, Recycle, Sparkle, User } from "lucide-react";
import CartFutur from "./components/CartFutur";
import { testimonialData } from "./constants/TestimonialCard";
import TestimonialCard from "./components/TestimonialCard";
import Link from "next/link";
import QuestionAnswer from "./components/QuestionAnswer";
import { questioninfo } from "./constants/questioninfo";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main id="Home" className=" scroll-smooth overflow-x-hidden pt-24 lg:pt-28 antialiased space-y-20  ">
       <section className="   grid grid-cols-1 order- md:flex flex-row px-5 md:px-20 ">
        <div className=" order-2 md:order-1 md:w-[50%] flex flex-col  gap-4 justify-center items-start p-5">
                 <Heading title="Innovative tire recycling solutions " />
                 <p className="text-black/60 max-w-lg text-md md:text-lg text-center md:text-start font-extralight ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat tempora temporibus laborum quasi quas, maxime a iure, dolorum quaerat ea. Sunt deserunt accusantium, optio quas modi incidunt sapiente itaque.</p>
                <div className=" md:gap-5 gap-3 flex flex-row">
                  <Link href={'/Article#Solutions'}><Button variante="primary" >Learn more</Button></Link> 
                 <Link href={'#Contact'}>  <Button variante="secondary" >Contact us</Button></Link>
                </div>
        </div>
            <div className="relative order-1 md:order-2">
            <Image
              src="/image1.png"
              alt="hero"
              width={700}
              height={600}
              className="rounded-4xl"
            />
            <div className="absolute inset-0 
             bg-gradient-to-t md:bg-gradient-to-r from-white/100 to-transparent"></div>
            </div>
            
       </section>
       <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>





    {/* Innovative tire solutions */}
      <section  className="  md:relative md:bg-gray-100 gap-5 flex flex-col items-center  md:justify-end ">
        <div className="    md:order-2  md:w-[80%] md:h-[40%] flex justify-center md:justify-end">
          <Image
          src="/image2.png"
          alt="image2"
          width={700}
          height={600}
          className="  w-[90%] md:w-[80%] rounded-4xl md:rounded-none "
          />
        </div>
         <div className="md:absolute p-4 w-[80%] md:py-8 lg:py-14 md:px-10 md:w-[50%] lg:w-[40%] lg:h-[60%] xl:h-[50%] md:top-10  md:h-[75%] md:left-[5%] lg:top-[30%] md:bottom-[20%] order-1  bg-white rounded-2xl shadow-xl   hover:shadow-lg hover:shadow-black/20 transition-all duration-500 overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-start">
        Innovative tire solutions
      </h2>
      <p className="text-gray-600 mb-6 max-sm:text-sm text-center md:text-start ">
        Explore our efficient methods for collecting, recycling, and recovering used tires. 
        Our process is designed to be both environmentally friendly and customer-focused, 
        ensuring a sustainable future.
      </p>
      <Link href='/Article#Dammage' className="flex justify-center md:justify-start">
      <Button variante="primary"  >Learn more</Button>
      </Link> 
    
    </div>
      </section>
       {/* Innovative tire solutions */}




       {/* TireManagement */}
       <section id="About" className="scroll-smooth">
            <TireManagement/>
       </section>
      
       {/* TireManagement */}




       {/* Efficient tire recycling solutions */}
      <section id="News" className="scroll-smooth w-full bg-gray-100 md:px-28 px-10 md:py-32 py-10 ">
        <div className=" flex flex-col items-center justify-center  md:items-start py-10 text-2xl  md:text-3xl text-center md:text-start space-y-3">
             <h1 className="font-bold text-black  md:text-start   ">Efficient tire recycling solutions</h1>
             <p className="font-light text-black/70 text-sm  md:w-2xl ">Discover how we transform used tires into valuable resources, promoting sustainability and environmental responsibility.</p>
        </div>
        <article className=" grid grid-cols-1 md:grid-cols-3 gap-5 md:flex flex-row items-center ">
           <CardEfficient icon={<Recycle/>}  title="Innovative processes" description="Learn about our cutting-edge methods for tire collection and recycling, ensuring minimal environmental impact."/>
           <CardEfficient icon={<User/>}   title="Customer-focused service" description="We prioritize your needs with tailored solutions and seamless order processing for tire recycling."/>
           <CardEfficient icon={<Sparkle/>}   title="Commitment to quality" description="Our dedication to excellence ensures reliable and effective tire recovery services for all clients."/>
        </article>
      </section>
       {/* Efficient tire recycling solutions */}




       {/* Sustainable tire solutions */}
       <section  id="Mission" className="w-[80%] mx-auto py-10">
        <CartFutur title="Sustainable tire solutions for a cleaner future"
       description="Discover our efficient process for collecting, recycling, and recovering used tires. We ensure environmentally friendly practices while meeting your needs."
       buttonText="Learn more"
       imageUrl="/nature.jpg"/>
       </section>
       {/* Sustainable tire solutions */}






       {/* Our clients say */}
        <section id="FAQ" className= "scroll-smooth bg-gray-100 flex flex-col items-center gap-5 space-y-10 p-20">
          <span className="font-light  text-black/70 ">  OUR CLIENTS SAY </span>
          <div className="flex flex-col items-center space-y-3  ">
            <h1 className="font-bold  text-black text-2xl md:text-3xl text-nowrap">What people are saying</h1>
            <p className="font-medium  text-black/70">Feedback from our partners</p>
          </div>
          <article className=" grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {testimonialData.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard key={index} {...testimonial}/>
              </div>
            ))}
          </article>
          
        </section>
       {/* Our clients say */}





       {/* question and answers */}
       <section id="Help" className=" scroll-smooth w-[85%] md:w-[70%] mx-auto"  >
        <div className=" w-full  flex flex-col items-center md:py-20 space-y-5">
          <h1 className="  text-xl text-center md:text-start  md:text-4xl font-semibold "> Discover Our tire recycling process </h1>
          <p className="md:text-xl text-md   text-center md:text-start   text-black/70 pb-5">Learn how we collect, recycle, and recover used tires efficiently.</p>
        </div>
              {
                questioninfo.map((question, index) => (
                  <QuestionAnswer key={index} {...question} />
                ))
               
              }
       </section>
       {/* question and answers */}




       {/* contact us section and footer  */}
       <footer>
          <section id="Contact" className=" scroll-smooth bg-gray-100 p-10 md:px-36 py-16 md:py-30   ">
        <div className="flex flex-col items-center md:items-start space-y-2  pb-5">
         <p className="text-black/50 font-extralight" >Reach Out to Us</p>
         <h1 className="capitalize text-xl md:text-3xl text-black font-semibold ">Connect with Our Team</h1>
         <p className="text-black/70 font-light text-center md:text-start ">We&apos;re here to assist with your inquiries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
         <CardEfficient icon={<Mail/>}  title="Email Us" description="Our support team is ready to assist." contact="greensoussolutions.com"/>
         <CardEfficient icon={<MessageCircle/>}  title="Call Us" description="Available Monday to Friday, 8am - 5pm." contact="+212 667794635"/>
         <CardEfficient icon={<MapPin/>}  title="Visit Us" description="Drop by our office for a chat." contact="101 Web Lane, San Francisco, CA"/>
        </div>
        
       </section>
         <section className="bg-gray-100 p-10 md:px-36   flex flex-col   ">
          <p className="border-t-3 pb-10 border-gray-300 "></p>
         <Footer/>
       <p className="mx-auto pt-[5%] text-black/50 text-center md:text-start"> © {new Date().getFullYear()} Green souss solutions Inc.  All rights reserved .</p>
      </section>
       </footer>
     
       {/* contact us section footer  */}


      
    </main>
  );
}
