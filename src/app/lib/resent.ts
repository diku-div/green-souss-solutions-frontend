'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailResnd( subject: string) {
  try {
    const response = await resend.emails.send({
      to: 'younesmarjan1234@gmail.com',
      from: 'Younes <onboarding@resend.dev>', // ✅ Must be a verified sender domain
      subject: subject,
      html: '<h1>Thank you for your order!</h1> <p>Your order has been successfully placed.</p>'
    });

    console.log('✅ Email sent:', response);
    return response;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
