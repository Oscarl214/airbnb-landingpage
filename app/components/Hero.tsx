export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary-light via-white to-white px-6 py-20 sm:py-28">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/5" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          Dallas, TX
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Make Every Airbnb Turnover{" "}
          <span className="text-primary">Stress-Free</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Get our step-by-step Airbnb cleaning checklist and see what your
          property should cost to clean&nbsp;&mdash;&nbsp;instantly.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#get-checklist"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
          >
            Get My Free Checklist + Estimate
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 13.5-7.5 7.5-7.5-7.5m15-6-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>

        {/* Social proof snippet */}
        <p className="mt-8 text-sm text-muted">
          Trusted by Dallas Airbnb hosts &mdash; 100% free, no spam.
        </p>
      </div>
    </section>
  );
}
