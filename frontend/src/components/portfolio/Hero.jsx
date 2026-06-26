import { ArrowUpRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { PERSON, METRICS } from "../../data/portfolio";

const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <div className="grid grid-cols-12 gap-6">
          {/* Left column - main content */}
          <div className="col-span-12 lg:col-span-9">
            <div className="flex items-center gap-3 mb-8" data-testid="hero-status">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
              </span>
              <span className="label-mono">Open to senior SDE + GenAI roles</span>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-sans font-medium text-5xl sm:text-6xl lg:text-[5.25rem] leading-[1.02] tracking-tighter text-bone"
            >
              Krishna Vamsi.
              <span className="text-amber animate-blink ml-1">_</span>
            </h1>

            <p
              data-testid="hero-tagline"
              className="mt-8 max-w-2xl text-lg sm:text-xl text-bone-muted leading-relaxed font-body"
            >
              {PERSON.tagline}
              <br />
              <span className="text-bone">SDE @ Amdocs.</span>{" "}
              <span className="text-bone-muted">3+ years shipping Java/Spring Boot, Kafka, K8s. Now building Agentic AI on LangGraph + MCP.</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-3" data-testid="hero-ctas">
              <a
                data-testid="hero-resume-btn"
                href={PERSON.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-amber text-ink-950 font-mono text-xs tracking-widest uppercase hover:bg-amber-hover transition-all"
              >
                <Download className="w-4 h-4" strokeWidth={2} />
                Download Resume
              </a>
              <a
                data-testid="hero-contact-btn"
                href={`mailto:${PERSON.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink-600 text-bone font-mono text-xs tracking-widest uppercase hover:border-amber hover:text-amber transition-all"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                Get in touch
              </a>
              <a
                data-testid="hero-github-btn"
                href={PERSON.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-12 h-12 border border-ink-600 text-bone hover:border-amber hover:text-amber transition-all"
              >
                <Github className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                data-testid="hero-linkedin-btn"
                href={PERSON.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-12 h-12 border border-ink-600 text-bone hover:border-amber hover:text-amber transition-all"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Right column - photo + meta info */}
          <div className="col-span-12 lg:col-span-3 lg:pt-8">
            <div className="border-t border-ink-600 lg:border-t-0 lg:border-l lg:pl-6 pt-6 lg:pt-0">
              <div className="mb-6 relative inline-block group">
                <img
                  data-testid="hero-profile-photo"
                  src="/profile.png"
                  alt="Krishna Vamsi Gangisetty"
                  loading="eager"
                  className="w-40 h-40 sm:w-44 sm:h-44 object-cover border border-ink-600 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-amber pointer-events-none" />
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-amber pointer-events-none" />
              </div>
              <div className="space-y-6">
                <div>
                  <div className="label-mono text-bone-dim">Currently</div>
                  <div className="mt-1 text-bone font-mono text-sm">SDE @ Amdocs</div>
                </div>
                <div>
                  <div className="label-mono text-bone-dim">Based in</div>
                  <div className="mt-1 text-bone font-mono text-sm">{PERSON.location}</div>
                </div>
                <div>
                  <div className="label-mono text-bone-dim">Stack</div>
                  <div className="mt-1 text-bone font-mono text-sm leading-relaxed">
                    Java · Spring Boot<br />Kafka · K8s<br />LangGraph · RAG
                  </div>
                </div>
                <a
                  href={PERSON.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-side-github"
                  className="inline-flex items-center gap-1 label-mono text-amber hover:gap-2 transition-all"
                >
                  gkrishnavamsi8 <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <div
          data-testid="hero-metrics"
          className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 border-t border-ink-600"
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className={`py-8 px-2 lg:px-6 ${
                i < METRICS.length - 1 ? "lg:border-r border-ink-600" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-ink-600" : ""} ${
                i === 0 || i === 2 ? "border-r lg:border-r border-ink-600" : ""
              }`}
            >
              <div className="font-sans font-bold text-3xl sm:text-4xl text-bone tracking-tighter">
                {m.value}
              </div>
              <div className="mt-1 label-mono text-bone-dim">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
