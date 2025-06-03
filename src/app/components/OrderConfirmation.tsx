'use client';
import { Frown, Smile } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';

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
  created_at: string;
};

export default function OrderConfirmation() {
  const searchParams = useSearchParams();
  const nom = searchParams.get('nom');
  const prenom = searchParams.get('prenom');
  const email = searchParams.get('email');

  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState<boolean | null>(null);
  const [orderdata, setOrderdata] = useState<Order | null>(null);

  const emailSentRef = useRef(false); // ✅ Correct location for useRef

  // Fetch order data
  useEffect(() => {
    const fetchOrderId = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://127.0.0.1:8000/api/get-order-id', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, nom, prenom }),
        });

        if (!res.ok) throw new Error('Network response was not ok');

        const data = await res.json();
        setOrderdata(data);
        setSubmitted(true);
      } catch (err) {
        console.error('❌ Error fetching order ID:', err);
        setSubmitted(false);
      } finally {
        setLoading(false);
      }
    };

    if (email && nom && prenom) {
      fetchOrderId();
    }
  }, [email, nom, prenom]); // ✅ Fix: include dependencies

  // Send email after order data is fetched
  useEffect(() => {
    if (orderdata && !emailSentRef.current) {
      const sendEmail = async () => {
        try {
          const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              customerEmail: orderdata.email,
              orderId: orderdata.id,
              customerfullname: `${orderdata.nom} ${orderdata.prenom}`,
              totalPrice: orderdata.price,
            }),
          });

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Failed to send email');
          }

          const result = await res.json();
          console.log('✅ Email sent:', result);

          emailSentRef.current = true; // ✅ Prevent resending
        } catch (err) {
          console.error('❌ Error sending email:', err);
        }
      };

      sendEmail();
    }
  }, [orderdata]);

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">Loading your order...</p>
      </div>
    );
  }

  // Error view
  if (submitted === false) {
    return (
      <section className="md:px-10 mx-5 items-center justify-center">
        <div className="bg-white/70 md:p-16 p-5 rounded-4xl shadow-xl text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <Frown className="w-20 h-20 text-green-600" />
            </div>
          </div>
          <h1 className="text-lg md:text-2xl font-bold text-gray-500 mt-2 mb-2">
            Oops! Something’s not quite right with your order.
          </h1>
          <p className="text-gray-500 mb-6">
            Please place your order again so we can get it right for you!
          </p>
          <Link href="/order">
            <Button variante="secondary">ORDER NOW</Button>
          </Link>
        </div>
      </section>
    );
  }

  // Success view
  return (
    <div className="md:px-10 mx-5 items-center justify-center">
      <div className="bg-white/70 md:p-16 p-10 rounded-4xl shadow-xl text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <Smile className="w-20 h-20 text-green-600" />
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-600">
          Hey {orderdata?.nom} {orderdata?.prenom}
        </h2>
        <h1 className="text-2xl font-bold mt-2 mb-2 text-gray-500">
          Your Order <span className="text-green-600 text-3xl">#{orderdata?.id}</span> is Confirmed!
        </h1>
        <p className="text-gray-500 mb-6">
          You will receive an email containing your order information as soon as possible.
        </p>
        <Link href="/IDorder">
          <Button variante="secondary">CHECK STATUS</Button>
        </Link>
      </div>
    </div>
  );
}
