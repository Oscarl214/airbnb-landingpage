import { NextResponse } from "next/server";
import { generateChecklistPdf } from "@/lib/generate-pdf";

export async function GET() {
  try {
    const buffer = await generateChecklistPdf();

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Dallas-Airbnb-Cleaning-Checklist.pdf"',
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json(
      { error: "Failed to generate PDF." },
      { status: 500 }
    );
  }
}
