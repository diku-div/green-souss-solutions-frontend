

'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface props {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    date_of_birth: Date;
    country: string;
    city: string;
    postal_code: string;
    picture_url: string;
}

const Profile = () => {
  const [admin, setAdmin] = useState<props| null>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://green-sousssolutions-backend-production-f565.up.railway.app";


  
  useEffect(() => {
    async function fetchOrder() {
      try {
        
        const res = await fetch(`${API_URL}/api/admin/1`);
        if (!res.ok) throw new Error('Failed to fetch order');
        const data = await res.json();
        setAdmin(data);
      } catch (err) {
        console.error('Error loading admin data:', err);
        setAdmin(null);
      } finally {
        // Optionally handle loading state here
      }
    }
    fetchOrder(); 
  }, []);

  if (!admin) return <p>Loading...</p>;

  const birtday = new Date(admin.date_of_birth);

    // State for profile can be added here if needed in the future
  return (
    <div>
       <div className="max-w-4xl mx-auto p-6 space-y-6 h-[70vh] overflow-auto">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-700 ">My Profile</h2>

      {/* Profile Card */}
      <div className="bg-white/70 rounded-xl shadow p-6 flex items-center gap-4">
        <div className="relative">
          <Image
                 src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${admin.picture_url}`}
            alt="Profile"
            className="md:w-20 md:h-20  w-15 h-15 rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm md:text-lg font-ligt md:font-semibold">{admin.first_name} {admin.last_name}</h3>
          <p className="text-sm text-gray-500">Admin</p>
          <p className="text-sm text-gray-500 font-ligt md:font-semibold">{admin.city},{admin.country}</p>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-white/70 rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-md font-semibold text-gray-700 text-center md:text-start" >Personal Information</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-medium">First Name</p>
            <p className='text-black/80 capitalize'>{admin.first_name}</p>
          </div>
          <div>
            <p className="font-medium">Last Name</p>
            <p className='text-black/80 capitalize'>{admin.last_name}</p>
          </div>
          <div>
            <p className="font-medium">Email Address</p>
            <p className='text-black/80 text-sm md:text-md '>{admin.email}</p>
          </div>
          <div>
            <p className="font-medium">Phone Number</p>
            <p className='text-black/80 capitalize'>{admin.phone_number}</p>
          </div>
          <div>
            <p className="font-medium">Date of Birth</p>
            <p className='text-black/80 capitalize'>{birtday.getDay()}/{birtday.getMonth()}/{birtday.getFullYear()}</p>
          </div>
          <div>
            <p className="font-medium">User Role</p>
            <p className='text-black/80 capitalize'>Admin</p>
          </div>
        </div>
      </div>

      {/* Address */} 
      <div className="bg-white/70 rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-md font-semibold text-gray-700">Address</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-medium">Country</p>
            <p className='text-black/80 capitalize'>{admin.country}</p>
          </div>
          <div>
            <p className="font-medium">City</p>
            <p className='text-black/80 capitalize'>{admin.city}</p>
          </div>
          <div>
            <p className="font-medium">Postal Code</p>
            <p className='text-black/80 capitalize'>{admin.postal_code}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
