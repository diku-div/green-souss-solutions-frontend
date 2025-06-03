import React from 'react';

const Receipt = () => {
    return (
    <section className="max-w-xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
      <header>
        <a href="#">
          <img
            className="w-auto h-10 sm:h-8"
            src="/logo.png"
            alt="logo"
          />
        </a>

      
      </header>
 <main className="mt-8 ">
   <img
          className="object-cover w-[80%]  mx-auto h-40 rounded-lg md:h-72"
          src="/image1.png"
          alt=""
        />
        <h2 className="mt-6 text-gray-700 dark:text-gray-200 ">
          Thank you for your order, 
        </h2>

        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
          We appreciate your purchase and are excited to process your order.
          Here are your order details:
        </p>

        <ul className="mt-4 text-gray-600 dark:text-gray-300 list-disc list-inside">
          <li>
            <strong>Order ID:</strong> 
          </li>
          <li>
            <strong>Email:</strong> 
          </li>
        </ul>

        <p className="mt-6 text-gray-600 dark:text-gray-300">
          If you have any questions or need support, feel free to contact us.
        </p>

      
      </main>     
       <footer className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
          This email was sent to{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            contact@merakiui.com
          </a>
          . If you'd rather not receive this kind of email, you can{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            unsubscribe
          </a>{" "}
          or{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            manage your email preferences
          </a>
          .
        </p>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Meraki UI. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default Receipt;