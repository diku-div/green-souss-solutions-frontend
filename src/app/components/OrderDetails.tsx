'use client';
import {
  User,
  PhoneIcon,
  MapPinIcon,
}  from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {  useEffect, useState } from 'react';

type Order = {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  ville: string;
  adresse: string;
  numero_telephone: number;
  numero_whatsapp: number;
  quantite: number;
  price: number;
  status: string;
  created_at:string;

};



export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchOrder() {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:8000/api/tracking/${id}`);
        if (!res.ok) throw new Error('Failed to fetch order');
        const data = await res.json();
        setOrder(data);
      } catch (err) {
        setError('Error loading order data.'+err);
      } finally {
        setLoading(false);
      }
    }
    fetchOrder(); 
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!order) return <p>No order found.</p>;
  


    // TODO: Replace this with actual orderId source (e.g., from props, router params, etc.)
   
  
   const date = new Date(order.created_at);

  return (
    <div className="w-full max-md:mt-[40%] md:max-w-5xl mx-auto p-6 space-y-8 z-30">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Order <span className="text-green-600">#{id}</span>
        </h1>
        <span className={`text-sm bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full ${order.status === 'Pending' ? ' bg-yellow-100 text-yellow-600'
          :order.status ==='Processing'? ' bg-orenge-100 text-orange-500' : order.status === 'Shipped'? ' bg-blue-100 text-blue-600':' bg-green-100 text-green-600' }`}>
            {order.status  }
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product & Customer Info */}
        <div className="lg:col-span-2 bg-white/80 shadow rounded-lg p-6 space-y-6 flex flex-col  ">
         
         
          {/* Product */}
          <div className="flex gap-4">
            <Image
              src="/product.png"
              alt="Smartwatch"
              className="w-28 h-28 object-contain rounded"
            />
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg font-semibold">
                  Rubber Powder
                </h2>
                <p className="text-sm text-gray-500">Order Date: {date.getDay()}/{date.getMonth()}/{date.getFullYear()}</p>
              </div>
              <div className="text-right font-bold text-lg">{order.price} DH</div>
            </div>
          </div>
          <hr />


          {/* Customer Info */}
          <div className="space-y-3">
            <h3 className="text-md font-semibold">Customer Details</h3>
            <div className="flex items-center gap-2 text-sm text-gray-800">
              <User className="w-5 h-5 text-gray-500" />
              {order.prenom} {order.nom}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-800">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
           {order.numero_telephone}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-800">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
             {order.adresse}, {order.ville}
            </div>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="bg-white/80 shadow rounded-lg p-6">
          <h3 className="text-md font-semibold mb-4">Order Tracking</h3>
          <ol className="relative border-s border-gray-200 space-y-4">
            
{/*               
              // { label: 'Delivered'},
              // { label: 'Shipped' },
              // { label: 'Processing' },
              // { label: 'Pending ' }, */}

      {(() => {
        const steps = [
          { label: 'Pending' },
          { label: 'Processing' },
          { label: 'Shipped' },
          { label: 'Delivered' },
        ];
        const statusIndex = steps.findIndex(
          (step) => step.label.toLowerCase() === order.status.toLowerCase()
        ) +1 ; 
        return (
          <ul>
            {steps.map((step, idx) => {
              const isCompleted =  statusIndex >= idx;
              return (
                <li key={step.label} className="ms-2 flex items-center relative  py-5">
                  <div
                    className={`absolute w-3 h-3 rounded-full -start-1.5 border  ${
                      isCompleted
                        ? 'bg-green-500 border-white'
                        : 'bg-gray-200 border-gray-300'
                    }`}
                  ></div>
                  <p
                    className={`font-medium text-sm pl-3 ${
                      isCompleted ? 'text-green-600' : 'text-gray-500'
                    }`}
                  >
                    {step.label}
                  </p>
                </li>
              );
            })}
          </ul>
        );
      })()}
        
          </ol>
        </div>
      </div>
    </div>
  );
}
