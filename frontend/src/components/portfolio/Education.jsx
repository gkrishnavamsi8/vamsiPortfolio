import { EDUCATION } from "../../data/portfolio";
import { GraduationCap, FileText, ArrowUpRight } from "lucide-react";
import { SECTION_INNER } from "./sectionStyles";

const Education = () => {
  return (
    <section data-testid="education-section" className="border-t border-ink-600">
      <div id="education" className={SECTION_INNER}>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="label-mono">[ 05 / Education ]</div>
            <h2 className="mt-3 font-sans font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-bone">
              Foundations.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div
              data-testid="education-card"
              className="border border-ink-600 bg-ink-900 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-amber flex items-center justify-center text-amber shrink-0">
                  <GraduationCap className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-bone tracking-tight">
                      {EDUCATION.school}
                    </h3>
                    <div className="font-mono text-sm text-bone-muted">
                      {EDUCATION.period}
                    </div>
                  </div>
                  <p className="mt-2 font-body text-bone-muted">{EDUCATION.degree}</p>
                  <p className="mt-1 font-mono text-sm text-bone-muted">{EDUCATION.location}</p>

                  <div className="mt-6 grid grid-cols-2 gap-px bg-ink-600 border border-ink-600">
                    <div className="bg-ink-900 p-4">
                      <div className="label-mono text-bone-dim">CGPA</div>
                      <div className="mt-1 font-sans font-bold text-xl text-amber">
                        {EDUCATION.cgpa}
                      </div>
                    </div>
                    <div className="bg-ink-900 p-4">
                      <div className="label-mono text-bone-dim">Specialization</div>
                      <div className="mt-1 font-mono text-sm text-bone">AI &amp; ML</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              data-testid="publication-card"
              href={EDUCATION.publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-ink-600 bg-ink-900 p-6 sm:p-8 flex items-start gap-4 hover:border-amber transition-colors group block"
            >
              <div className="w-12 h-12 border border-ink-500 flex items-center justify-center text-bone-muted group-hover:text-amber group-hover:border-amber shrink-0 transition-colors">
                <FileText className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="label-mono">IEEE OCIT 2022 · Publication</div>
                <p className="mt-2 font-body text-bone leading-relaxed">
                  {EDUCATION.highlight}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 label-mono text-amber group-hover:gap-2 transition-all">
                  Read on IEEE Xplore <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
