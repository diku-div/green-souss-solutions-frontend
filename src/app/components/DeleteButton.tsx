import {  Trash2 } from "lucide-react";

// components/DeleteButton.tsx
type DeleteButtonProps = {
  orderId: number;
};


export const DeleteButton = ({ orderId }: DeleteButtonProps) => {
   



  const handleDelete = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://green-sousssolutions-backend-production-f565.up.railway.app";
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (!confirmDelete) return;

    try {
        console.log('Deleting order with ID:', orderId);
      const res = await fetch(`${API_URL}/api/orders/${orderId}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      alert(data.message || 'Order deleted successfully.');
     
    } catch (error) {
      alert('An error occurred while deleting the order.');
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className=" hover:bg-red-500   p-2  rounded-full transition-all duration-400"
    >
      <Trash2 className="inline text-red-500 hover:text-white transition-all duration-300 " />
    </button>

    
  );
};
