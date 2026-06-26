import { EXPERIENCE } from "../../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-24 sm:py-32 border-t border-ink-600"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="label-mono">[ 02 / Experience ]</div>
            <h2 className="mt-3 font-sans font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-bone">
              Three years of<br />production weight.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="font-body text-lg text-bone-muted leading-relaxed">
              {EXPERIENCE.blurb}
            </p>
          </div>
        </div>

        <div
          data-testid="experience-card"
          className="border border-ink-600 bg-ink-900"
        >
          {/* Card header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 p-6 sm:p-8 border-b border-ink-600">
            <div>
              <div className="label-mono">Current Role</div>
              <h3 className="mt-2 font-sans font-bold text-2xl sm:text-3xl text-bone tracking-tight">
                {EXPERIENCE.role}{" "}
                <span className="text-amber">@ {EXPERIENCE.company}</span>
              </h3>
              <div className="mt-1 font-mono text-sm text-bone-muted">
                {EXPERIENCE.location}
              </div>
            </div>
            <div className="font-mono text-sm text-bone-muted whitespace-nowrap">
              {EXPERIENCE.period}
            </div>
          </div>

          {/* Bullets list */}
          <ul className="divide-y divide-ink-600">
            {EXPERIENCE.bullets.map((b, i) => (
              <li
                key={i}
                data-testid={`experience-bullet-${i}`}
                className="grid grid-cols-12 gap-4 p-6 sm:p-8 hover:bg-ink-800/50 transition-colors"
              >
                <div className="col-span-12 sm:col-span-2">
                  <span className="inline-block label-mono border border-amber/40 px-2 py-1">
                    {b.tag}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-10">
                  <p className="font-body text-base sm:text-lg text-bone leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
