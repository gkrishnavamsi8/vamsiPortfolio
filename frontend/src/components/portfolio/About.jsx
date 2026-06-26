import { ABOUT } from "../../data/portfolio";

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 sm:py-32 border-t border-ink-600"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <div className="label-mono">[ 01 / About ]</div>
            <h2 className="mt-3 font-sans font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-bone">
              Engineer first.<br />Agent-builder second.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5 space-y-6">
            {ABOUT.map((para, i) => (
              <p
                key={i}
                data-testid={`about-paragraph-${i}`}
                className="font-body text-lg sm:text-xl leading-relaxed text-bone-muted"
              >
                {para}
              </p>
            ))}

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink-600 border border-ink-600">
              {[
                { k: "Role", v: "SDE → AI" },
                { k: "Domain", v: "Telecom · Fintech" },
                { k: "Code", v: "Java · Python" },
                { k: "Mode", v: "Builder" },
              ].map((item) => (
                <div key={item.k} className="bg-ink-950 p-4">
                  <div className="label-mono text-bone-dim">{item.k}</div>
                  <div className="mt-1 font-mono text-sm text-bone">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
