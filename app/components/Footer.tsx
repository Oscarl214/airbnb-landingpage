export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white px-6 py-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-medium text-foreground">
          Dallas Airbnb Cleaning Resources
        </p>
        <p className="mt-2 text-sm text-muted">
          Helping Dallas short-term rental hosts streamline their turnover
          process.
        </p>
        <p className="mt-4 text-xs text-muted/70">
          &copy; {year} Dallas Airbnb Cleaning Resources. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
