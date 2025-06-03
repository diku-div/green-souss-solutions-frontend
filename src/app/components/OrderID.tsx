'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
 

export default function OrderID() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [Orderid, setOrderid] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('http://localhost:8000/api/validate-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        id: Number(Orderid),
      }),
    });

    if (!res.ok) {
    
       throw new Error('Invalid email or order ID');
    }

    const data = await res.json();

    if (data.valid) {
      router.push(`/tracking/${Orderid}`);
    } else {
      setError('No matching order found.');
    }
  } catch (err) {
    setError('Invalid email or order ID.');
    console.error(err);
  }
};




  return (
    <div className=" flex w-full  h-full rounded-4xl mx-auto md:rounded-br-2xl-4xl">
      {/* Left Side (Form) */ }
      <div className="w-full  p-10 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-2xl font-bold mb-8 text-center">Search on your order</h1>
        

        

<form onSubmit={handleLogin} className="space-y-5">
  <div>
    <input
      type="email"
      className="w-full border px-4 py-2 rounded-4xl mt-1"
      placeholder="Enter your email here"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div>
    <input
      type="number"
      className="w-full border px-4 py-2 rounded-4xl mt-1"
      placeholder="Order ID here"
      value={Orderid}
      onChange={(e) => setOrderid(e.target.value)}
      required
    />
  </div>

  {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

  <Button variante='primary' children='search on your order' isfullwidth/>
</form>


       
        </div>

        <footer className="text-xs text-gray-400 text-center mt-10"></footer>
      </div>

     
    </div>
  );
}
