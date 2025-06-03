import React from "react";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

type LinkItem = {
  title: string;
  description: string;
  value:string;
};

type Section = {
  heading: string;
  items: LinkItem[];
};

type Props = {
  onLinkClick: (section: boolean) => void;
};

const sections: Section[] = [
  {
    heading: "RECYCLING SOLUTIONS",
    items: [
      { title: "Tire Collection", description: "Learn about our tire collection process.",value:'#About' },
      { title: "Recycling Process", description: "Discover how we recycle used tires.",value:'#About' },
      { title: "Recovery Services", description: "Explore our tire recovery services.",value:'#About' },
    ],
  },
  {
    heading: "CUSTOMER SUPPORT",
    items: [
      { title: "Order Tracking", description: "Track your orders with ease." , value:'/IDorder'},
      { title: "FAQs", description: "Find answers to common questions.",value:'#FAQ' },
      { title: "Contact Us", description: "Get in touch for more information.",value:'#Contact' },
    ],
  },
  {
    heading: "COMPANY INFO",
    items: [
      { title: "Our Mission", description: "Understand our goals and values." , value:'/#Mission' },
     
    ],
  },
];

const Services: React.FC<Props> = ({ onLinkClick }) => {
  return (
    <div className="bg-white p-10 shadow rounded-3xl flex flex-wrap gap-6 justify-between">
      <div className="flex flex-wrap gap-10">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">{section.heading}</h4>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FileText className="text-green-600 w-5 h-5 mt-1 cursor-pointer" />
                  <Link href={item.value}  onClick={() => onLinkClick(false)}>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hidden bg-green-900 text-white p-6 rounded-2xl max-w-sm shadow-md md:flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3 leading-snug">Innovative tire recycling solutions</h3>
          <p className="text-sm">We provide efficient and eco-friendly tire recycling services.</p>
        </div>
        <Link
          href="/Article"
          className="mt-6 inline-flex items-center gap-1 text-white font-semibold hover:underline"
           onClick={() => onLinkClick(false)}
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
