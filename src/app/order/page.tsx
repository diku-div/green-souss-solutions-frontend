// pages/order.tsx

import OrderForm from "../components/OrderForm";
import SplineViewer from "../components/SplineViewer";



export default function OrderPage() {
  return (
    <main className="h-screen pt-32  flex items-center justify-center py-10">
        <div className="absolute inset-0 z-0 pointer-events-none w-screen h-full bottom-0 ">
            <SplineViewer />
            </div>
            <div className="w-full z-10">
                        <OrderForm />

            </div>
     
    
    </main>
  );
}
