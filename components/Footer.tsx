export function Footer() {
  return (
    <footer className="border-t border-gold-subtle bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left">
        <p className="font-serif text-sm tracking-widest text-muted">
          Fundación Hillel Argentina
        </p>
        <a
          href="https://www.hillelargentina.org.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-gold"
        >
          hillelargentina.org.ar
        </a>
      </div>
    </footer>
  );
}
