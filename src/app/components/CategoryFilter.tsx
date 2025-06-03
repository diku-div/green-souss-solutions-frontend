'use client';

import { ListFilter } from 'lucide-react';
import { useState } from 'react';

type CategoryFilterProps = {
  categories: string[];
  defaultSelected?: string;
};

export default function CategoryFilter({ categories, defaultSelected }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(defaultSelected || null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (name: string) => {
    setSelected((prev) => (prev === name ? null : name));
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-white text-black font-medium px-4 py-2 rounded-md shadow-sm shadow-black/10 hover:shadow-md  transition flex flex-row gap-3"
      >
      <span>  Filter </span>
              <span> <ListFilter/></span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2  bg-white border border-gray-200 rounded-md shadow-lg">
         
          <div className="max-h-64 overflow-y-auto p-2 space-y-1">
            {categories.map((name) => (
              <label key={name} className="flex items-center space-x-2 text-sm  text-nowrap ">
                <input
                  type="checkbox"
                  checked={selected === name}
                  onChange={() => handleCheckboxChange(name)}
                  className="h-4 w-4 text-blue-600 rounded=xl"
                />
                <span>{name}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
