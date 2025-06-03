import Link from 'next/link';
import React, { ReactNode } from 'react'


type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  contact?: string;
};

export default function CardEfficient({ icon, title, description , contact }: FeatureCardProps) {
  return (
    <article>
      <div className="rounded-2xl shadow-md hover:shadow-lg hover:shadow-black/50 border-2 border-black/5 shadow-black/20 py-10 px-5 md:px-10 bg-white w-full space-y-3 h-full transition-all duration-300 ">
      <div className="text-green-600 mb-4 text-md">{icon}</div>
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-black/50 ">{description}</p>
      <Link href={`/${contact}`} className='text-black/70 hover:text-black transition-all duration-300 text-'>{contact}</Link>
    </div>
    </article>
   
  );
}


