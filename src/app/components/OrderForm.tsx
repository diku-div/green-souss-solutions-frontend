'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function OrderForm() {
   const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    nom: '',
    prenom: '',
    ville: '',
    adresse: '',
    numero_telephone: '',
    numero_whatsapp: '',
    quantite: 1,
    price: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numberFields = ['quantite', 'price'];

    setForm((prev) => ({
      ...prev,
      [name]: numberFields.includes(name) ? Number(value) : value,
    }));
  };



  // Update price automatically when quantity changes
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      price: prev.quantite * 10,
    }));
  }, [form.quantite]);
  
               const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://green-sousssolutions-backend-production-f565.up.railway.app";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

 

    try {
      
      const res = await fetch(`${API_URL}/api/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const errorData = await res.json();
        console.error('Backend error:', errorData);
        alert('Order failed!');
        return;
      }
       await res.json();
      alert('Order submitted successfully!');
      router.push(`/order_confirmation?nom=${form.nom}&prenom=${form.prenom}&email=${form.email}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Order failed!');
    }
  // Reset form (optional)
       setForm({
        email: '',
        nom: '',
        prenom: '',
        ville: '',
        adresse: '',
        numero_telephone: '',
        numero_whatsapp: '',
        quantite: 1,
        price: 10,
      });
  };

  return (
    <section className="">
    <form 
      className=" md:min-w-[80%] w-[80%]  md:max-w-xl mx-auto p-6 bg-white/70 backdrop:blur-3xl shadow  space-y-6 h-[80vh]  border-2 border-black/10 rounded-4xl overflow-auto "
      onSubmit={handleSubmit}
    >
      <div className="w-full flex justify-center py-5">
        <h1 className="text-black/70 font-bold text-2xl capitalize">
          Create order
        </h1>
      </div>
       <section className='grid md:grid-cols-2 gap-5'>

          {/* Nom & Prénom */}
            <div className=''>
          <label className="block font-medium mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
          placeholder='xxxxxxx'
            type="text"
            name="nom"
            className="w-full border rounded-2xl px-4 py-2"
            value={form.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
           placeholder='xxxxxxx'
            type="text"
            name="prenom"
            className="w-full border rounded-2xl px-4 py-2"
            value={form.prenom}
            onChange={handleChange}
            required
          />
        </div>


      {/* Email */}
      <div >
        <label className="block font-medium mb-1">
          E-mail Adress <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="w-full border rounded-2xl px-4 py-2"
          placeholder="xxxxxxxxxx@gmail.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

    
      

      {/* Ville */}
      <div>
        <label className="block font-medium mb-1">
          City <span className="text-red-500">*</span>
        </label>
        <input
        placeholder='xxxxxxx'
          type="text"
          name="ville"
          className="w-full border rounded-2xl px-4 py-2"
          value={form.ville}
          onChange={handleChange}
          required
        />
      </div>

      {/* Adresse */}
      <div>
        <label className="block font-medium mb-1">
          Adresse <span className="text-red-500">*</span>
        </label>
        <input
        placeholder='xxxxxxx'
          type="text"
          name="adresse"
          className="w-full border rounded-2xl px-4 py-2"
          value={form.adresse}
          onChange={handleChange}
          required
        />
      </div>

      {/* Téléphone */}
      <div>
        <label className="block font-medium mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
    
          type="tel"
          name="numero_telephone"
          className="w-full border rounded-2xl px-4 py-2"
          placeholder="00 00 00 00 00"
          value={form.numero_telephone}
          onChange={handleChange}
          required
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block font-medium mb-1"> WhatsApp Number</label>
        <input
          type="tel"
          name="numero_whatsapp"
          className="w-full border rounded-2xl px-4 py-2"
          placeholder="00 00 00 00 00"
          value={form.numero_whatsapp}
          onChange={handleChange}
        />
      </div>

      {/* Quantité */}
      <div>
        <label className="block font-medium mb-1">
Quantity in KG</label>
        <input
        placeholder='1'
          type="number"
          name="quantite"
          className="w-full border rounded-2xl px-4 py-2"
          value={form.quantite}
          onChange={handleChange}
          min={1}
          max={200}
          required
        />
      </div>
      </section>

      <div className="flex flex-row justify-between items-center">
        <div className='text-black/70 font-bold  text-md md:text-lg'>
          The Price is :
          {form.quantite > 0 && (
          <span className="text-black/70 font-light text-md">
             {form.price} DH
          </span>
          )}
        </div>
          <input type="hidden" name="_cc" value={form.email}></input>
        <div className='w-[50%] '>
         <Button variante="primary" isfullwidth>Order</Button>
        </div>
        
        
      </div>
    </form>
    </section>
  );
}
