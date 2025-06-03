import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

type OrderMailRequest = {
  customerEmail: string;
  orderId: string | number;
  customerfullname: string;
  totalPrice: string | number;
};

type ResendEmailResponse = {
  data?: { id: string };
  error?: { message: string };
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<OrderMailRequest>;
    const { customerEmail, orderId, customerfullname, totalPrice } = body;

    if (!customerEmail || !orderId || !customerfullname || !totalPrice) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const response = (await resend.emails.send({
      from: 'green-souss-solutions <onboarding@resend.dev>',
      to: [customerEmail],
      subject: `Order Confirmation - #${orderId}`,
      html: `
       <section style="max-width:600px;padding:32px 24px;margin:auto;background:#fff;">
       <h1>Green Souss Solutions</h1>
       <main style="margin-top:32px;">
         <h2 style="margin-top:24px;color:#374151;">
         Thank you ${customerfullname} for your order,
         </h2>
         <p style="margin-top:8px;line-height:1.6;color:#4B5563;">
         We appreciate your purchase and are excited to process your order.
         Here are your order details:
         </p>
         <ul style="margin-top:16px;color:#4B5563;list-style:disc inside;">
         <li>
           <strong>Order ID:</strong> ${orderId}
         </li>
         <li>
           <strong>Email:</strong> ${customerEmail}
         </li>
         <li>
           <strong>Total Price:</strong> ${totalPrice}
         </li>
         </ul>
         <p style="margin-top:24px;color:#4B5563;">
         If you have any questions or need support, feel free to contact us.
         </p>
       </main>
       <footer style="margin-top:32px;">
         <p style="color:#6B7280;">
         This email was sent to
         <a href="mailto:${customerEmail}" style="color:#2563EB;text-decoration:underline;">
           ${customerEmail}
         </a>
         from Green Souss Solutions Company. You can contact us at
         <a href="mailto:greensousssolutions@gmail.com" style="color:#2563EB;text-decoration:underline;">
           greensousssolutions@gmail.com
         </a>.
         </p>
         <p style="margin-top:12px;color:#6B7280;">
         © ${new Date().getFullYear()} Green Souss Solutions. All Rights Reserved.
         </p>
       </footer>
       </section>
      `,
    })) as ResendEmailResponse;

    return NextResponse.json({
      message: 'Email sent',
      id: response?.data?.id,
    });
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      { message: 'Failed to send email', error: errorMessage },
      { status: 500 }
    );
  }
}
