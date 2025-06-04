import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

type OrderMailRequest = {
  customerEmail: string;
  orderId: string | number;
  customerfullname: string;
  totalPrice: string | number;
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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: 'green-souss-solutions <greensousssolution@gmail.com>',
      to: customerEmail,
      subject: `Order Confirmation - #${orderId}`,
      html: `
        <section class="max-w-xl p-8 mx-auto bg-white">
          <h1 class="text-3xl font-bold">Green Souss Solutions</h1>
          <main class="mt-8">
            <h2 class="mt-6 text-gray-700 text-2xl font-semibold">
              Thank you ${customerfullname} for your order,
            </h2>
            <p class="mt-2 text-gray-600 leading-relaxed">
              We appreciate your purchase and are excited to process your order. Here are your order details:
            </p>
            <ul class="mt-4 text-gray-600 list-disc list-inside">
              <li><strong>Order ID:</strong> ${orderId}</li>
              <li><strong>Email:</strong> ${customerEmail}</li>
              <li><strong>Total Price:</strong> ${totalPrice}</li>
            </ul>
            <p class="mt-6 text-gray-600">
              If you have any questions or need support, feel free to contact us.
            </p>
          </main>
          <footer class="mt-8">
            <p class="text-gray-500">
              This email was sent to
              <a href="mailto:${customerEmail}" class="text-blue-600 underline">${customerEmail}</a>
              from Green Souss Solutions Company. You can contact us at
              <a href="mailto:greensousssolutions@gmail.com" class="text-blue-600 underline">greensousssolutions@gmail.com</a>.
            </p>
            <p class="mt-3 text-gray-500">
              © ${new Date().getFullYear()} Green Souss Solutions. All Rights Reserved.
            </p>
          </footer>
        </section>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: 'Email sent',
      id: info.messageId,
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
