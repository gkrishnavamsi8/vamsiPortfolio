import { SKILLS } from "../../data/portfolio";

const Column = ({ data, accent }) => (
  <div
    data-testid={`skills-column-${data.title.toLowerCase().replace(/\s+/g, "-")}`}
    className="border border-ink-600 bg-ink-900"
  >
    <div className="flex items-center justify-between p-6 border-b border-ink-600">
      <div>
        <div className="label-mono" style={accent ? { color: "#FFB800" } : { color: "#8A8A8A" }}>
          {data.title}
        </div>
        <div className="mt-1 font-mono text-sm text-bone-muted">{data.subtitle}</div>
      </div>
      <div
        className={`w-10 h-10 border ${
          accent ? "border-amber text-amber" : "border-ink-500 text-bone-muted"
        } flex items-center justify-center font-mono text-xs`}
      >
        {accent ? "01" : "02"}
      </div>
    </div>

    <div className="divide-y divide-ink-600">
      {data.groups.map((g, idx) => (
        <div key={g.label} className="p-6 grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-4">
            <div className="label-mono text-bone-dim">{g.label}</div>
            <div className="mt-1 font-mono text-xs text-bone-dim">
              {String(idx + 1).padStart(2, "0")} / {String(data.groups.length).padStart(2, "0")}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-8 flex flex-wrap gap-2">
            {g.items.map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-2.5 py-1 border border-ink-600 text-bone hover:border-amber hover:text-amber transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 sm:py-32 border-t border-ink-600"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="label-mono">[ 04 / Stack ]</div>
            <h2 className="mt-3 font-sans font-bold text-3xl sm:text-5xl leading-tight tracking-tight text-bone">
              Two stacks.<br />One engineer.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-body text-lg text-bone-muted leading-relaxed">
              Backend, frontend, and GenAI — Java/Spring Boot &amp; Kafka for scale, React for polished UIs, and LangGraph + MCP for production Agentic AI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <Column data={SKILLS.sde} accent={true} />
          <Column data={SKILLS.genai} accent={false} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
