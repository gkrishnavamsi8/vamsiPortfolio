import { PERSON } from "../../data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-ink-600 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border border-ink-500 flex items-center justify-center font-mono text-bone-muted text-[10px] tracking-widest">
            {PERSON.monogram}
          </div>
          <div className="font-mono text-xs text-bone-dim">
            © {year} {PERSON.name}. Designed &amp; built by hand.
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-github"
            className="label-mono text-bone-muted hover:text-amber transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-linkedin"
            className="label-mono text-bone-muted hover:text-amber transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSON.email}`}
            data-testid="footer-email"
            className="label-mono text-bone-muted hover:text-amber transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
