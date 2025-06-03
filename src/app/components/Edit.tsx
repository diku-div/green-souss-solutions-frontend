'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Order {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  ville: string;
  adresse: string;
  numero_telephone: number;
  numero_whatsapp: number;
  quantite: number;
  price: number;
  status?: string;
}

export default function Edit() {
  const  {id}  = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('pending');
   const router = useRouter();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
       
         
         console.log('Fetching order for id:', id);
        const res = await fetch(`http://localhost:8000/api/orders/${id}`, {
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error('Order not found');
        }

        const data = await res.json();
        setOrder(data);

        // Initialize statusFilter from fetched order
        if (data.status) {
          setStatusFilter(data.status);
        }
      } catch (err) {
        console.error('Fetch order error:', err);
        setError('Could not fetch order.');
      }
    };

    if (id) fetchOrder();
  }, [id]);

  const updateStatus = async (newStatus: string) => {
    try {
      
      const res = await fetch(`http://localhost:8000/api/orders/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Backend update error:', errorData);
        throw new Error(errorData.message || 'Failed to update status');
      }

      const updated = await res.json();
      setOrder(updated.order);
      setStatusFilter(updated.order.status);
      alert('Status updated successfully!');
       router.push('/admin');
    } catch (err) {
      console.error('Update status error:', err);
      
      alert('Error updating status.');
    }
   
   
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!order) return <p>Loading...</p>;

  return (
    <form className=" w-[80%] md:max-w-xl mx-auto py-3 px-6 bg-white/70 backdrop:blur-3xl shadow-md rounded-3xl hover:shadow-xl
    shadow-black/40  transition-all duration-500 space-y-6 h-[80vh] overflow-y-auto border-2 border-black/10 " onSubmit={e => e.preventDefault()}>
      <div className="w-full flex justify-center pt-5 pb-10">
        <h1 className="text-black/70 font-bold text-2xl capitalize">
          Order <span className="text-blue-500">#{order.id}</span>
        </h1>
      </div>
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">
        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">
            Adresse E-mail <span className="text-red-500">*</span>
          </label>
          <p className="text-black/40">{order.email}</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">
            First name <span className="text-red-500">*</span>
          </label>
          <p className="text-black/40">{order.nom}</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">
            Last name <span className="text-red-500">*</span>
          </label>
          <p className="text-black/40">{order.prenom}</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <p className="text-black/40">{order.ville}</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">
            Adresse <span className="text-red-500">*</span>
          </label>
          <p className="text-black/40">{order.adresse}</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">
            Phone number <span className="text-red-500">*</span>
          </label>
          <p className="text-black/40">{`${order.numero_telephone}`}</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">WhatsApp number</label>
          <p className="text-black/40">{`${order.numero_whatsapp}`}</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">Quantite in KG</label>
          <p className="text-black/40">{order.quantite}</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">Price</label>
          <p className="text-black/40">{order.price} DH</p>
        </div>

        <div className='flex flex-row md:flex-col gap-2 md:gap-1'>
          <label className="block font-medium mb-1">Status</label>
          <select
            className="mb-4 px-3 py-1 border rounded-4xl text-black/70"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center ">
        <button
  type="button"
  onClick={() => updateStatus(statusFilter)}
  className="p-3 rounded-3xl bg-gradient-to-r from-green-200 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
>
  Confirm Change
</button>
      </div>
    </form>
  );
}
