"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const propertyTypes = ["1BR", "2BR", "3BR"] as const;

export default function LeadForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");


  ///adding a comment
  const [form, setForm] = useState({
    name: "",
    email: "",
    property_type: "",
    zip_code: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      router.push("/thank-you");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <section id="get-checklist" className="bg-card px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-lg shadow-black/5 sm:p-10">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Get Your Free Checklist + Estimate
          </h2>
          <p className="mt-2 text-center text-sm text-muted">
            Fill out the form below and instantly download your guide.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/50 transition-all duration-150"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/50 transition-all duration-150"
              />
            </div>

            {/* Property Type */}
            <div>
              <label
                htmlFor="property_type"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Property Type
              </label>
              <select
                id="property_type"
                name="property_type"
                required
                value={form.property_type}
                onChange={handleChange}
                className="w-full appearance-none rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-all duration-150"
              >
                <option value="" disabled>
                  Select your property size
                </option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type} — {type === "1BR" ? "1 Bedroom" : type === "2BR" ? "2 Bedrooms" : "3+ Bedrooms"}
                  </option>
                ))}
              </select>
            </div>

            {/* Zip Code */}
            <div>
              <label
                htmlFor="zip_code"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Zip Code
              </label>
              <input
                id="zip_code"
                name="zip_code"
                type="text"
                required
                placeholder="75201"
                pattern="[0-9]{5}"
                title="Please enter a 5-digit zip code"
                maxLength={5}
                value={form.zip_code}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/50 transition-all duration-150"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Get My Checklist + Estimate"
              )}
            </button>

            <p className="text-center text-xs text-muted">
              No spam, ever. Your info stays between us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
