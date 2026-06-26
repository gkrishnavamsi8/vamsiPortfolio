import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PERSON } from "../../data/portfolio";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_LINKS.map((n) => document.getElementById(n.id));
      const top = window.scrollY + 140;
      const current = sections.findLast?.((s) => s && s.offsetTop <= top);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-ink-600"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
        <button
          data-testid="nav-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 border border-amber flex items-center justify-center font-mono text-amber text-sm tracking-widest group-hover:bg-amber group-hover:text-ink-950 transition-colors">
            {PERSON.monogram}
          </div>
          <span className="hidden sm:inline font-sans text-sm text-bone tracking-tight">
            {PERSON.shortName}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              data-testid={`nav-link-${link.id}`}
              onClick={() => handleClick(link.id)}
              className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors ${
                active === link.id ? "text-amber" : "text-bone-muted hover:text-bone"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          data-testid="nav-resume-button"
          href={PERSON.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-amber text-ink-950 font-mono text-xs tracking-widest uppercase hover:bg-amber-hover transition-colors"
        >
          Resume <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </a>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-bone"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-600 bg-ink-950/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                data-testid={`nav-mobile-link-${link.id}`}
                onClick={() => handleClick(link.id)}
                className="text-left py-3 font-mono text-xs tracking-widest uppercase text-bone-muted hover:text-amber transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              data-testid="nav-mobile-resume"
              href={PERSON.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 py-3 bg-amber text-ink-950 font-mono text-xs tracking-widest uppercase"
            >
              Download Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
