import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { PERSON } from "../../data/portfolio";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSON.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // noop
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 sm:py-32 border-t border-ink-600 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="label-mono">[ 06 / Contact ]</div>
            <h2 className="mt-3 font-sans font-bold text-4xl sm:text-6xl leading-[0.95] tracking-tighter text-bone">
              Let&apos;s build<br />something.
            </h2>
            <p className="mt-6 font-body text-lg text-bone-muted leading-relaxed max-w-md">
              Hiring for an SDE, AI/ML or GenAI Engineer role? Or just want to swap notes on Kafka, LangGraph, or production systems — drop a line.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            {/* Primary email block */}
            <button
              data-testid="contact-email-copy"
              onClick={copyEmail}
              className="w-full text-left border border-ink-600 bg-ink-900 p-6 sm:p-8 hover:border-amber transition-all group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="label-mono">Email</div>
                  <div className="mt-2 font-mono text-base sm:text-xl text-bone truncate">
                    {PERSON.email}
                  </div>
                </div>
                <div className="shrink-0 inline-flex items-center gap-2 label-mono text-bone-muted group-hover:text-amber">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" strokeWidth={1.5} /> Copy
                    </>
                  )}
                </div>
              </div>
            </button>

            <a
              data-testid="contact-email-link"
              href={`mailto:${PERSON.email}?subject=Hello%20Krishna`}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3.5 bg-amber text-ink-950 font-mono text-xs tracking-widest uppercase hover:bg-amber-hover transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={2} /> Send an email
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-600 border border-ink-600">
              <a
                data-testid="contact-github"
                href={PERSON.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink-900 p-5 hover:bg-ink-800 transition-colors group"
              >
                <Github className="w-5 h-5 text-bone-muted group-hover:text-amber mb-3" strokeWidth={1.5} />
                <div className="label-mono">GitHub</div>
                <div className="mt-1 font-mono text-sm text-bone">@gkrishnavamsi8</div>
              </a>
              <a
                data-testid="contact-linkedin"
                href={PERSON.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink-900 p-5 hover:bg-ink-800 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-bone-muted group-hover:text-amber mb-3" strokeWidth={1.5} />
                <div className="label-mono">LinkedIn</div>
                <div className="mt-1 font-mono text-sm text-bone">gkrishnavamsi8</div>
              </a>
              <div className="bg-ink-900 p-5">
                <MapPin className="w-5 h-5 text-bone-muted mb-3" strokeWidth={1.5} />
                <div className="label-mono">Located</div>
                <div className="mt-1 font-mono text-sm text-bone">{PERSON.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
