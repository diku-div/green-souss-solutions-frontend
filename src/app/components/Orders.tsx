'use client';

import React, { useEffect, useState } from 'react';
import { Pencil, Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DeleteButton } from './DeleteButton';


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
  created_at: string;
  status: string;
};

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('pending');
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchByStatus(status: string) {
      try {
        const res = await fetch(`http://localhost:8000/api/orders/status/${status}`);
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error('Failed to fetch orders by status:', err);
      }
    }

    fetchByStatus(statusFilter);
  }, [statusFilter]);

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'processing':
        return 'bg-orange-100 text-orange-500';
      case 'shipped':
        return 'bg-blue-100 text-blue-600';
      case 'delivered':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };
     const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/orders/${orderId}`);
      if (!res.ok) throw new Error('Order not found');
      // If found, redirect to edit page
      router.push(`/orders/${orderId}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        alert( error);
      }
    }
  };

  // filter orders by id 
  // useEffect(() => {
   
  //   if (!orderId) return;

  //   const fetchOrder = async () => {
  //     try {
  //       const res = await fetch(`http://your-laravel-domain/api/orders/${OrderID}`);
  //       if (!res.ok) throw new Error('Order not found');
  //       const data = await res.json();
  //       setOrders(data);
  //     } catch (err: any) {
  //       setError(err.message);
  //     } finally {
        
  //     }
  //   };

  //   fetchOrder();
  // }, [OrderID]);
  return (
    <div className="p-4  ">
  <div className="flex  relative flex-row items-center gap-5 p-2 border-2 border-black/20 hover:border-black/70 transition-all duration-500  rounded-4xl w-full md:w-[40%] mb-4 bg-white/40">
    <input
      type="text"
      value={orderId}
      onChange={(e) => setOrderId(e.target.value)}
      className="focus:outline-none focus:ring-0 w-[90%] px-3 md:px-5 text-sm md:text-lg"
      placeholder="Search on order using ID"
      required
    />
    <button
      onClick={handleSearch}
      className="absolute md:right-2 right-0  hover:bg-black/10 py-1 px-4 rounded-4xl backdrop:blur-md duration-300 transition-all "
    >
      <Search className=' '/>
    </button>
  </div>

      <h2 className="text-lg font-bold mb-4">Orders - Status: {statusFilter}</h2>

      <select
        className="mb-4 px-3 py-1 border rounded"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>

      <div className="w-full rounded text-sm md:text-lg overflow-x-auto">
        <div className="min-w-max max-h-[350px] ">
          <div className="relative w-full">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead className="sticky top-0 z-10 bg-white/80 backdrop-blur">
                  <tr className="text-left">
                    <th className="p-2">Date</th>
                    <th className="p-2">ID</th>
                    <th className="p-2">Customer</th>
                    <th className="p-2">Phone</th>
                    <th className="p-2">quantite</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="overflow-y-auto max-h-[300px]">
              <table className="w-full min-w-max">
                <tbody>
                  {orders.map((order) => {
                    const date = new Date(order.created_at).toLocaleDateString();
                    return (
                      <tr key={order.id} className="border-t">
                        <td className="p-2">{date}</td>
                        <td className="p-2">{order.id}</td>
                        <td className="p-2">{order.nom} {order.prenom}</td>
                        <td className="p-2">{order.numero_telephone}</td>
                        <td className="p-2">{order.quantite} KG</td>
                        <td className="p-2">{order.price} DH</td>
                        <td className="p-2">
                          <span className={`text-sm px-3 py-1 rounded-full ${getStatusClass(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="p-2 flex flex-row items-center gap-5 ">
                          <Link href={`/orders/${order.id}`} className="hover:bg-blue-500 p-2 rounded-4xl transition-all duration-400">
                            <button>
                              <Pencil className="inline text-blue-500 hover:text-white max-sm:size-4 transition-all duration-300 " />
                            </button>
                          </Link>
                          <div>
                            <DeleteButton orderId={order.id}/>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
