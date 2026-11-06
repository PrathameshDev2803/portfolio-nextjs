export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background py-12 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-secondary">
          &copy; {new Date().getFullYear()} Prathamesh Jadhav. Full Stack Developer — Mumbai, India.
        </div>
        <div className="text-xs text-secondary">
          Monochrome Editorial Portfolio · Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
