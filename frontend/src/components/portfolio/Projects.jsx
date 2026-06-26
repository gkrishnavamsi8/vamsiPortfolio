import { PROJECTS } from "../../data/portfolio";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const isFlagshipGen = project.type.includes("GENAI");
  return (
    <article
      data-testid={`project-card-${project.id}`}
      className={`group relative ${project.span || ""} border border-ink-600 bg-ink-900 p-6 sm:p-8 transition-all duration-300 hover:border-amber hover:-translate-y-1`}
    >
      {isFlagshipGen && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-screen"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1714548529197-537c1f0b6aa7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200')",
            backgroundSize: "cover",
          }}
        />
      )}

      <div className="relative flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="label-mono">{project.type}</div>
          <div className="text-bone-dim font-mono text-xs">0{project.id}</div>
        </div>

        <h3 className="font-sans font-bold text-2xl sm:text-3xl text-bone tracking-tight leading-tight">
          {project.title}
        </h3>

        <p className="mt-4 font-body text-bone-muted leading-relaxed">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-6 space-y-2">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-bone font-mono"
              >
                <span className="text-amber mt-0.5">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 pt-6 border-t border-ink-600 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 border border-ink-600 text-bone-muted group-hover:border-ink-500 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber/0 group-hover:border-amber transition-colors" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber/0 group-hover:border-amber transition-colors" />
    </article>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 sm:py-32 border-t border-ink-600"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="label-mono">[ 03 / Selected Work ]</div>
            <h2 className="mt-3 font-sans font-bold text-3xl sm:text-5xl leading-tight tracking-tight text-bone">
              Things I&apos;ve<br />actually shipped.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-body text-lg text-bone-muted leading-relaxed">
              A flagship distributed system, an enterprise Agentic AI platform, an ML pipeline, and a peer-reviewed publication. Real production code, real metrics — no sample apps.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div
          data-testid="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
