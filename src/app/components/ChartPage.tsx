'use client'; // Required for Next.js 13+ with App Router if using Recharts in a client component

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


export default function ChartPage() {
  const [orderCounts, setOrderCounts] = useState<number[]>([]);


    useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders-per-month`) // adjust for production
      .then((res) => res.json())
      .then((data) => setOrderCounts(data))
      .catch((err) => console.error('Error fetching orders:', err));
  }, []);
  
  
const data = [
  { name: 'January', sell: orderCounts[0] ?? 0 },
  { name: 'February', sell: orderCounts[1] ?? 0 },
  { name: 'March', sell: orderCounts[2] ?? 0 },
  { name: 'April', sell: orderCounts[3] ?? 0 },
  { name: 'May', sell: orderCounts[4] ?? 0 },
  { name: 'June', sell: orderCounts[5] ?? 0 },
  { name: 'July', sell: orderCounts[6] ?? 0 },
  { name: 'August', sell: orderCounts[7] ?? 0 },
  { name: 'September', sell: orderCounts[8] ?? 0 },
  { name: 'October', sell: orderCounts[9] ?? 0 },
  { name: 'November', sell: orderCounts[10] ?? 0 },
  { name: 'December', sell: orderCounts[11] ?? 0 }
];

  return (
    <div className="p-20 overflow-x-auto">
      <h1></h1>
      <div style={{ minWidth: 1100 }}>
        <LineChart
          width={1100}
          height={350}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-sm font-light" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#5CB338" className="" />
        </LineChart>
      </div>
    </div>
  );
}