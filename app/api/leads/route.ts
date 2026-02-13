import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { sendWelcomeEmail } from "@/lib/email";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_REGEX = /^[0-9]{5}$/;
const VALID_PROPERTY_TYPES = ["1BR", "2BR", "3BR"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, property_type, zip_code } = body;

    // Validate required fields
    if (!name || !email || !property_type || !zip_code) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate email
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate property type
    if (!VALID_PROPERTY_TYPES.includes(property_type)) {
      return NextResponse.json(
        { error: "Please select a valid property type." },
        { status: 400 }
      );
    }

    // Validate zip code
    if (!ZIP_REGEX.test(zip_code)) {
      return NextResponse.json(
        { error: "Please enter a valid 5-digit zip code." },
        { status: 400 }
      );
    }

    // Insert lead into Supabase
    const supabase = getSupabase();
    const { error: dbError } = await supabase.from("leads").insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      property_type,
      zip_code,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save your information. Please try again." },
        { status: 500 }
      );
    }

    // Send welcome email with PDF attached
    try {
      await sendWelcomeEmail({ name: name.trim(), email: email.trim().toLowerCase() });
    } catch (emailErr) {
      // Log but don't fail the request — lead is already saved
      console.error("Email send error:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
