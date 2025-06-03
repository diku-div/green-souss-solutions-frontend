'use client';
import Image from "next/image";
import { usePathname} from "next/navigation";
import { useEffect } from "react";


export default function TireRecyclingArticle() {


const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash;

    if (hash) {
      // Delay to allow hydration and layout
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Increase if needed
    }
  }, [pathname]);



  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 text-gray-800  ">
      <header className="text-center scroll-mt-24 " id="Solutions">
        <h1 className=" text-2xl md:text-4xl font-bold mb-4">
          Transforming Waste into Wealth: How Morocco and Africa Are Leading the Way in Tire Recycling
        </h1>
        <p className="text-lg text-black/70 font-bold mb-5 ">
        Discover how we transform used tires into valuable resources, promoting sustainability and environmental responsibility. 
        </p>

         <p className="text-lg text-black/50 font-extralight">
          In the heart of Morocco and across Africa, a new revolution is quietly gaining momentum—one that addresses environmental challenges while unlocking new economic opportunities. As the number of vehicles on our roads continues to grow, so does the volume of used tires, many of which end up in landfills, illegal dumps, or abandoned in open areas. These discarded tires can remain intact for hundreds of years, leaching toxic chemicals into the soil, becoming fire hazards, and serving as breeding grounds for mosquitoes.

          But what if these used tires could be given a second life? What if they could be transformed into valuable raw materials that support green industries, create jobs, and protect our environment? At <span className=" text-black/70 font-bold " >Green Souss Solution </span>, we are committed to turning this vision into reality by collecting, recycling, and recovering used tires in a way that promotes sustainability and environmental responsibility across Morocco and the African continent.  
          </p>
        {/* Header Image */}
        <div className="mt-6">
          <Image src="/article_1.png" alt="Tire recycling in Africa" width={1000} height={400} className="rounded-lg" />
        </div>
      </header>
         

         {/* The Environmental Impact of Used Tires */}
        <section className=" flex flex-col gap-5 scroll-mt-24" id="Dammage">
        <h2 className="text-2xl font-semibold mb-2">The Environmental Impact of Used Tires</h2>
        <p className="text-lg text-black/50 font-extralight">
      At <span className=" text-black/70 font-bold " >Green Souss Solution </span>, we understand that used tires aren't just waste—they're a growing environmental hazard when left unmanaged. Across Morocco and Africa, abandoned tires pollute landscapes, contaminate soil and water, and endanger communities. These tires, made of synthetic rubber and toxic chemicals, can take centuries to break down—causing long-term damage to ecosystems.
        </p>
        <p className="text-lg text-black/50 font-extralight">The dangers of improperly disposed tires include:</p>
        <ul className="list-disc pl-5 text-lg text-black/50">
        <li>Soil and groundwater contamination from leaching chemicals</li>
        <li> Uncontrolled fires, releasing toxic smoke and greenhouse gases</li>
        <li> Mosquito breeding grounds, increasing the risk of disease</li>
        <li> Visual pollution, impacting both urban and rural environments </li>
        </ul>
        <p className="text-lg text-black/50 font-extralight">
          That’s why we’re committed to removing tires from nature and giving them a second life through responsible collection, recycling, and recovery. Every tire we reclaim helps protect our environment and move us one step closer to a cleaner, healthier Africa.
        </p>
        {/* Circular Economy Image */}
        <div className="mt-4">
          <Image src="/article2.png" alt="Circular economy in action" width={1000} height={400} className="rounded-lg" />
        </div>
      </section>
        {/* The Environmental Impact of Used Tires */}






      <section className="flex flex-col gap-5 scroll-mt-24" id="Collection">
        <h2 className="text-2xl font-semibold mb-2">♻️ Responsible Tire Collection: Keeping Our Environment Clean</h2>
        <p className="text-lg text-black/50 font-extralight">
          Our process starts with the efficient and environmentally responsible collection of used tires. We’ve developed a network that connects with:
        </p>
        <ul className="list-disc pl-5 text-black/50 text-lg">
          <li>Local car mechanics and garages</li>
          <li>Public and private transport companies</li>
          <li>Waste management authorities</li>
          <li>Municipalities and rural communities</li>
        </ul>
        <p className="text-lg text-black/50 font-extralight">
          Our teams are trained to handle tire collection safely and professionally, using modern logistics systems to minimize carbon emissions during transport. This structured collection process ensures that no tire is left to pollute our lands or waterways.
        </p>
        <p className="text-lg text-black/50 font-extralight">
          By offering incentives and building partnerships, we've made it easier for businesses and local governments to participate in responsible tire disposal. Every tire we collect is one step closer to a cleaner and healthier environment.
        </p>
        {/* Collection Image */}
        <div className="mt-4">
          <Image src="/article3.png" alt="Tire collection process" width={1000} height={400} className="rounded-lg" />
        </div>
      </section>
     


     {/*  Advanced Recycling Techniques */}
      <section className="flex flex-col gap-5 scroll-mt-24" id="Recycling">
        <h2 className="text-2xl font-semibold mb-2">⚙️ Advanced Recycling Techniques: Turning Tires into Rubber Powder</h2>
        <p className="text-lg text-black/50 font-extralight">
          Once collected, the tires are transported to our high-tech recycling facility—equipped with modern machinery that breaks down tires into reusable components.
        </p>
        <p className="text-lg text-black/50 font-extralight">
          The core product of this process is <span className="text-black/70 font-bold">rubber powder</span>, a versatile and eco-friendly material created through mechanical shredding, granulation, and separation processes. We use zero-chemical methods that preserve the environment and protect worker health.
        </p>
        <h1 className="text-lg text-black/70 font-bold">Our rubber powder can be reused in:</h1>
        <ul className="list-disc pl-5 text-black/50 font-extralight text-lg ">
          <li>Asphalt and road construction</li>
          <li>Playground and sports field surfaces</li>
          <li>Industrial insulation and flooring</li>
          <li>Tiles, mats, and construction materials</li>
          <li>Eco-friendly shoes and accessories</li>
        </ul>
        <p className="text-lg text-black/50 font-extralight">
          The possibilities are vast—and the environmental benefits are even greater. By recycling tires, we reduce the demand for new rubber production, lower CO₂ emissions, and prevent land degradation.
        </p>
        {/* Recycling Process Image */}
        <div className="mt-4">
          <Image src="/article1.png" alt="Rubber powder production" width={1000} height={400} className="rounded-lg" />
        </div>
      </section>
       {/*  Advanced Recycling Techniques */}


           {/* Innovative Tire Recovery Services */}
        <section className="flex flex-col gap-5 scroll-mt-24" id="Recovery">
        <h2 className="text-2xl font-semibold mb-2">🔄 Innovative Tire Recovery Services: Extending Tire Life and Value</h2>
        <p className="text-lg text-black/50 font-extralight">
          Recycling isn’t the only option—we also offer innovative tire recovery services that extend the lifecycle of used tires and reduce overall waste.
        </p>
        <p className="text-lg text-black/50 font-extralight">Our recovery solutions include:</p>
        <ul className="list-disc pl-5 text-lg text-black/50 font-extralight space-y-2">
         <li><span className=" text-black/70 font-bold ">Retreading:</span> Applying new treads to old tire casings, allowing them to be reused safely</li>
         <li><span className=" text-black/70 font-bold ">Reconditioning:</span> Repairing slightly damaged tires for continued use in low-speed applications</li>
         <li><span className=" text-black/70 font-bold ">Repurposing:</span> Converting whole tires into new products such as planters, barriers, furniture, or building blocks</li>
        </ul>
        <p className="text-lg text-black/50 font-extralight">These services help extract the maximum value from every tire, while lowering costs for customers and reducing pressure on the environment.</p>
        {/* Recovery Services Image */}
        <div className="mt-4">
          <Image src="/article5.png" alt="Tire recovery solutions" width={1000} height={400} className="rounded-lg" />
        </div>
      </section>
      {/* Innovative Tire Recovery Services */}



         {/* Sustainability at the Core */}
      <section className="flex flex-col gap-5 scroll-mt-24 " id="Friendly">
        <h2 className="text-2xl font-semibold mb-2">🌿 Sustainability at the Core: Supporting the Circular Economy</h2>
        <p className="text-lg text-black/50 font-extralight">
         At <span className=" text-black/70 font-bold " >green souss solution</span>, sustainability isn’t just a goal—it’s the foundation of everything we do. Our operations support the development of a <span className=" text-black/70 font-bold " >circular economy</span> in Morocco and Africa, where products are reused, recycled, and reimagined rather than discarded
        </p>
        <p className="text-lg text-black/50 font-extralight">Our nature-friendly rubber powder is:</p>
        <ul className="list-disc pl-5 text-lg text-black/50 font-extralight space-y-2">
        <li><span className=" text-black/70 font-bold " >Non-toxic</span> and safe for use in public spaces</li>
        <li><span className=" text-black/70 font-bold ">100% recyclable</span>, offering continued life cycles</li>
        <li><span className=" text-black/70 font-bold ">Durable and resilient</span>, meeting international quality standards </li>
        <li><span className=" text-black/70 font-bold ">Affordable</span>, providing cost-effective alternatives to imported materials </li>
        </ul>
        <p className="text-lg text-black/50 font-extralight">
          By offering local businesses access to high-quality, eco-friendly raw materials, we support the growth of green industries and help reduce Africa’s reliance on imported goods.
        </p>
        {/* Circular Economy Image */}
        <div className="mt-4">
          <Image src="/nature.jpg" alt="Circular economy in action" width={1000} height={400} className="rounded-lg" />
        </div>
      </section>
      {/* Sustainability at the Core */}



    

      <section className="bg-green-100/30 p-6 rounded-4xl flex flex-col justify-center items-center gap-5 ">
        <h2 className="text-2xl font-semibold mb-2">🌍 A Green Vision for Morocco and Africa</h2>
        <p className="text-center text-lg text-black/50 font-extralight">
         As climate change and pollution pose growing threats to our continent, innovative solutions like tire recycling are no longer optional—they are essential. At <span className=" text-black/70 font-bold " >Green Souss Solution</span>, we see every used tire as an opportunity to build a more sustainable, resilient Africa.
        </p>
        <p className="text-center text-lg text-black/50 font-extralight">
          We are proud to be part of a new generation of African businesses that combine <span className=" text-black/70 font-bold " >technology, environmental awareness, and community engagement</span> to drive real change.
        </p>
        {/* Green Vision Image */}
        <div className="mt-4">
          <Image src="/article6.png" alt="Green future in Africa" width={1000} height={400} className="rounded-lg" />
        </div>
      </section>

      <footer className="text-center pt-8">
       
        <p className="mt-4 font-semibold text-green-700">Green Souss Solutions – Innovating for a Cleaner Morocco and a Sustainable Africa.</p>
      </footer>
    </div>
  );
}
