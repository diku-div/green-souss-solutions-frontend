import React from "react";
import {
  FileText,
} from "lucide-react";

type NavItem = {
  title: string;
  description: string;
  onClick: () => void;
};

type Section = {
  heading: string;
  items: NavItem[];
};

const sections: Section[] = [
  {
    heading: "Customer Support",
    items: [
      { title: "Order Tracking", description: "Track your orders with ease.", onClick: () => alert("Order Tracking") },
      { title: "FAQs", description: "Find answers to common questions.", onClick: () => alert("FAQs") },
      { title: "Contact Us", description: "Get in touch for more information.", onClick: () => alert("Contact Us") },
    ],
  },
  {
    heading: "Company Info",
    items: [
      { title: "Our Mission", description: "Understand our goals and values.", onClick: () => alert("Our Mission") },
    ],
  },
];

const Servicesmobile: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 space-y-6 w-full max-w-md mx-auto">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">{section.heading}</h2>
          <ul className="space-y-4">
            {section.items.map((item) => (
              <li
                key={item.title}
                onClick={item.onClick}
                className="flex items-start space-x-3 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Servicesmobile;
