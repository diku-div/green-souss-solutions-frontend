import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerEmail, orderId, customerfullname, totalPrice } = body;

    // Validate required fields
    if (!customerEmail || !orderId || !customerfullname || totalPrice === undefined) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'green-souss-solutions <onboarding@resend.dev>',
      to: [customerEmail],
      subject: `Order Confirmation - #${orderId}`,
      html: `
       <section className="max-w-xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
       <h1>Green Souss Solutions </h1>
       <main className="mt-8 ">

        <h2 className="mt-6 text-gray-700 dark:text-gray-200 ">
          Thank you ${customerfullname} for your order, 
        </h2>

        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
          We appreciate your purchase and are excited to process your order.
          Here are your order details:
        </p>

        <ul className="mt-4 text-gray-600 dark:text-gray-300 list-disc list-inside">
          <li>
            <strong>Order ID:</strong> ${orderId}
          </li>
          <li>
            <strong>Email:</strong> ${customerEmail}
          </li>
        </ul>

        <p className="mt-6 text-gray-600 dark:text-gray-300">
          If you have any questions or need support, feel free to contact us.
        </p>

      
      </main>     
       <footer className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
          This email was sent to 
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
             ${customerEmail}
          </a>
          . from Green Souss Solution Company , you can contact us on
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            greensousssolutions.gmail.com
          </a>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          © ${new Date().getFullYear()} Green Souss Solutions . All Rights Reserved.
        </p>
      </footer>
    </section>`,
    });

    return NextResponse.json({ message: 'Email sent',
        id: data.data?.id,});
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}