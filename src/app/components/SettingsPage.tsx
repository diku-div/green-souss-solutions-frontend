'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from './Button';
import { CameraIcon } from 'lucide-react';
import Image from 'next/image';

interface AdminData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  country: string;
  city: string;
  postal_code: string;
 picture_url: string; 
}
interface passwordData {
  current_password: string;
  new_password: string;
  confirm_password: string;
}
// interface adminpicture {
//   picture_url: string;    
// }

export default function SettingsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<AdminData | null>(null);
  const [passwordData, setPasswordData] = useState<passwordData>({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // get  admin data
  useEffect(() => {
    async function fetchAdmin() {
      try {
        const res = await fetch(`http://localhost:8000/api/admin/1`);
        if (!res.ok) throw new Error('Failed to fetch admin data');
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        setError('Error loading admin data.'+err);
      } finally {
        setLoading(false);
      }
    }
    fetchAdmin();
  }, []);




const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => {
    if (!prev) return prev; // or throw, or handle as needed
    return {
      ...prev,
      [name]: value,
    };
  });
};

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token"); // optional, if needed
    const res = await fetch("http://localhost:8000/api/admin/profile/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // if token-based auth
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Update failed");
    const data = await res.json();
    console.log("Updated:", data);
    alert("Update successful!");
  } catch (err) {
    console.error(err);
    alert("Update failed");
  }
};



// password change handler
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };
  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();
    // ✅ Validate on the frontend
    if (passwordData?.new_password !== passwordData?.confirm_password) {
      alert('New password and confirmation do not match.');
      return;
    }
    const res = await fetch('http://localhost:8000/api/admin/password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        current_password: passwordData?.current_password,
        new_password: passwordData?.new_password,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      alert(data.message);
    } else {
      alert(data.message || 'Password change failed.');
    }
  };


  // handle profile picture change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit3 = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image.");
      return;
    }
    const formData = new FormData();
    formData.append("picture_url", file);
    try {
      const res = await fetch("http://localhost:8000/api/admin/profile/picture/1", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      console.log("Picture updated:", data);
      alert("Profile picture updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile picture");
    }
  };



  
  // Always render JSX after all hooks
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!formData) return <p>No admin data found.</p>;

  return (
    <div className="w-[90%] md:max-w-4xl  mx-auto  py-10  rounded-2xl space-y-5">
      {/* Profile Picture Section */}
      <form onSubmit={handleSubmit3} className='bg-white/70 rounded-4xl p-5 space-y-3'>
      
        <h1 className="text-lg md:text-2xl font-semibold mb-6 text-center md:text-start">Settings</h1>
          <h1 className="text-black/70 font-bold  text-center md:text-start ">Profile Picture </h1>
          <section className='flex flex-col  md:flex-row justify-between items-center w-full'>
          <div className="flex items-center space-x-4 mb-6">
             <div className="relative">
          <Image
                 src={`http://localhost:8000/storage/${formData.picture_url}`}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
            <label className=" absolute bottom-0  right-1 bg-white p-2 rounded-full hover:bg-gray-300  cursor-pointer transition-all duration-200">
              <CameraIcon className='w-5 h-5'/>
              <input
                type="file"
                name="picture_url"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </label>
          
        </div>
            
          </div>
          <div>
          <Button variante='secondary' >Save Picture</Button>
          </div>
            </section>
      </form>

      {/* profile informations changing */}
      <form onSubmit={handleSubmit} className='bg-white/70 rounded-4xl p-5'>
        <h1 className="text-black/80 font-semibold text-center md:text-start my-2">Profile Information</h1>
              <div className="mb-8 flex flex-col gap-5">

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full border rounded-2xl px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full border rounded-2xl px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-2xl px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full border rounded-2xl px-3 py-2 text-black" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="w-full border rounded-2xl px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Address Info */}
        <div className="flex flex-col gap-5 border-t-2 border-black/10 py-5">
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-2xl px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-2xl px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Postal Code</label>
              <input
                type="text"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                className="w-full border rounded-2xl px-3 py-2"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
         
          <Button variante='secondary' >Save Profile</Button>
        </div>
      </form>

      {/* password change */}
      <form onSubmit={handleSubmit2} className=' bg-white/70 rounded-4xl p-5'>
        <h1 className="text-black/80 font-semibold text-center md:text-start my-2">Address Information </h1>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>

     
         <div>
              <label className="block text-sm font-medium mb-1">Current password</label>
              <input
                type="text"
                placeholder='xxxxxxxxxx'
                name="current_password"
                value={passwordData?.current_password}
                onChange={handleChange2}
                className="w-full border  px-3 py-2 rounded-2xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1"> New password</label>
              <input
                type="text"
                placeholder='xxxxxxxxxx'
                name="new_password"
                value={passwordData?.new_password}
                onChange={handleChange2}
                className="w-full border rounded-2xl px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Confirm password</label>
              <input
              placeholder='xxxxxxxxxx'
                type="text"
                name="confirm_password"
                value={passwordData?.confirm_password}
                onChange={handleChange2}
                className="w-full border rounded-2xl px-3 py-2"
              />
            </div>
             </section>
         <div className="flex justify-end mt-5">
         
          <Button variante='secondary' >Save Password</Button>
        </div>
      </form>
    </div>
  );
}
