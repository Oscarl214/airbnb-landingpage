import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-primary-light via-white to-white px-6 py-20">
      <div className="mx-auto max-w-lg text-center">
        {/* Success icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
          <svg
            className="h-10 w-10 text-success"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Your Checklist is Ready!
        </h1>
        <p className="mt-4 text-lg text-muted">
          Thanks for signing up. Download your free Airbnb cleaning checklist
          and pricing guide below.
        </p>

        {/* Download Button */}
        <div className="mt-8">
          <a
            href="/api/checklist-pdf"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Checklist + Pricing Guide
          </a>
        </div>

        {/* Soft pitch */}
        <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">
            Want vetted Dallas Airbnb cleaners?
          </h2>
          <p className="mt-2 text-sm text-muted">
            We work with trusted local cleaning professionals who specialize in
            Airbnb turnovers. We&apos;ll be in touch to see if you&apos;d like a
            connection — no pressure, no obligation.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
