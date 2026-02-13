// ----------------------------------------------------------------
// Email Integration Placeholder
// ----------------------------------------------------------------
// To enable email delivery (checklist PDF + welcome message):
//
// 1. Sign up for Resend (https://resend.com) or SendGrid
// 2. Add your API key to .env.local:
//    RESEND_API_KEY=re_xxxxx
// 3. Install the SDK:
//    npm install resend
// 4. Implement the function below:
//
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail({ name, email }: { name: string; email: string }) {
  // Generate the PDF buffer
  const pdfResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/checklist-pdf`);
  const pdfBuffer = await pdfResponse.arrayBuffer();

  await resend.emails.send({
    from: 'Dallas Airbnb Cleaning <info@dallashostchecklist.com/>',
    to: email,
    subject: 'Your Airbnb Cleaning Checklist + Pricing Guide',
    html: `
      <h1>Hey ${name}!</h1>
      <p>Thanks for grabbing your free Airbnb cleaning checklist and pricing guide.</p>
      <p>Your PDF is attached to this email.</p>
      <p>Want us to connect you with vetted Dallas Airbnb cleaners? Just reply to this email!</p>
    `,
    attachments: [
      {
        filename: 'Dallas-Airbnb-Cleaning-Checklist.pdf',
        content: Buffer.from(pdfBuffer),
      },
    ],
  });
}


export {};
