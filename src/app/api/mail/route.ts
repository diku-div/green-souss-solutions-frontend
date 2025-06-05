import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ✅ Server-side memory (non-persistent)
const sentEmails = new Set<number>();

// ✅ Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // ✅ Prevent duplicate email per orderId
    const numericOrderId = Number(orderId);
    if (sentEmails.has(numericOrderId)) {
      return NextResponse.json(
        { message: 'Email already sent (server)' },
        { status: 200 }
      );
    }

    // ✅ Prepare email content
    const htmlContent = `
      <section style="max-width: 600px; font-family: sans-serif; padding: 16px; margin: auto;">
        <h1 style="font-size: 24px;">Green Souss Solutions</h1>
        <main style="margin-top: 24px;">
          <h2 style="font-size: 20px; margin-bottom: 16px;">Thank you ${customerfullname} for your order,</h2>
          <p>We appreciate your purchase and are excited to process your order. Here are your order details:</p>
          <ul style="margin-top: 16px;">
            <li><strong>Order ID:</strong> ${orderId}</li>
            <li><strong>Email:</strong> ${customerEmail}</li>
            <li><strong>Total Price:</strong> ${totalPrice}</li>
          </ul>
          <p style="margin-top: 24px;">If you have any questions or need support, feel free to contact us.</p>
        </main>
        <footer style="margin-top: 32px; font-size: 12px; color: #666;">
          <p>This email was sent to <a href="mailto:${customerEmail}">${customerEmail}</a> from Green Souss Solutions Company.</p>
          <p>Contact us at <a href="mailto:greensousssolutions@gmail.com">greensousssolutions@gmail.com</a>.</p>
          <p style="margin-top: 12px;">© ${new Date().getFullYear()} Green Souss Solutions. All Rights Reserved.</p>
        </footer>
      </section>
    `;

    // ✅ Send email using Resend
     await resend.emails.send({
      from: 'green-souss-solutions <greensousssolution@gmail.com>',
      to: customerEmail,
      subject: `Order Confirmation - #${orderId}`,
      html: htmlContent,
    });

    // ✅ Mark as sent
    sentEmails.add(numericOrderId);

    return NextResponse.json({
      message: 'Email sent successfully'
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
