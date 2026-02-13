import { Resend } from "resend";
import { generateChecklistPdf } from "@/lib/generate-pdf";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const pdfBuffer = await generateChecklistPdf();

  await resend.emails.send({
    from: "Dallas Airbnb Cleaning <info@dallashostchecklist.com>",
    to: email,
    subject: "Your Airbnb Cleaning Checklist + Pricing Guide",
    html: `
      <h1>Hey ${name}!</h1>
      <p>Thanks for grabbing your free Airbnb cleaning checklist and pricing guide.</p>
      <p>Your PDF is attached to this email.</p>
      <p>Want us to connect you with vetted Dallas Airbnb cleaners? Just reply to this email!</p>
    `,
    attachments: [
      {
        filename: "Dallas-Airbnb-Cleaning-Checklist.pdf",
        content: pdfBuffer,
      },
    ],
  });
}
