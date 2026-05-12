import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-5 pt-5 md:px-12 transition-all duration-300">
        <nav
          className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-full py-3.5 pr-4 pl-8 transition-all duration-300 ${
            scrolled
              ? "glass-nav shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
              : "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.03)]"
          }`}
        >
          <a
            href="#"
            className="font-body text-lg font-semibold tracking-tight text-text-primary no-underline flex items-center gap-2"
          >
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="10" fill="#2563EB"/>
              <path d="M14 19h14v1.5H14zM14 23h11v1.5H14zM14 27h13v1.5H14z" fill="#fff" fill-opacity=".85"/>
              <path d="M10 14h20a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H18.5l-3.5 3.5V29H10a1.5 1.5 0 01-1.5-1.5v-12A1.5 1.5 0 0110 14z" fill="#fff" fill-opacity=".12"/>
              <circle cx="37" cy="15" r="5" fill="#F97316"/>
              <path d="M35.5 13.5l3 1.5-3 1.5v-3z" fill="#fff"/>
            </svg>
            DialogueMagic
          </a>

          <ul className="hidden items-center gap-8 list-none lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-normal text-text-primary no-underline transition-opacity duration-200 hover:opacity-60"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://zcal.co/dialoguemagic/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_6px_24px_rgba(249,115,22,0.35)]"
              >
                Book a Free Audit
              </a>
            </li>
          </ul>

          <button
            className="flex flex-col gap-[5px] border-none bg-transparent p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-[22px] rounded-sm bg-text-primary" />
            <span className="block h-0.5 w-[22px] rounded-sm bg-text-primary" />
            <span className="block h-0.5 w-[22px] rounded-sm bg-text-primary" />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-7 bg-white">
          <button
            className="absolute top-7 right-9 border-none bg-transparent text-3xl leading-none text-text-primary"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xl font-normal text-text-primary no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://zcal.co/dialoguemagic/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full bg-accent px-9 py-4 font-medium text-white no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Book a Free Audit
          </a>
        </div>
      )}
    </>
  );
}
