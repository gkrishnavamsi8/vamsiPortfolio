import { useEffect, useState } from "react";

const CODE_LINES = [
  { num: 1, parts: [{ c: "comment", t: "// developer.ts" }] },
  {
    num: 2,
    parts: [
      { c: "keyword", t: "export const" },
      { c: "plain", t: " dev = {" },
    ],
  },
  {
    num: 3,
    parts: [
      { c: "plain", t: "  role: " },
      { c: "string", t: '"Software Developer @ Amdocs"' },
      { c: "plain", t: "," },
    ],
  },
  {
    num: 4,
    parts: [
      { c: "plain", t: "  stack: " },
      { c: "string", t: '"Java · Kafka · React · LangGraph"' },
      { c: "plain", t: "," },
    ],
  },
  {
    num: 5,
    parts: [
      { c: "plain", t: "  ships: " },
      { c: "string", t: '"production systems at scale"' },
      { c: "plain", t: "," },
    ],
  },
  { num: 6, parts: [{ c: "plain", t: "};" }] },
];

const TOKEN_CLASS = {
  comment: "text-bone-dim",
  keyword: "text-amber",
  string: "text-emerald-400/90",
  plain: "text-bone-muted",
};

const lineToText = (line) => line.parts.map((p) => p.t).join("");

const HeroCodeTerminal = () => {
  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [lineIndex, setLineIndex] = useState(() =>
    prefersReducedMotion() ? CODE_LINES.length - 1 : 0,
  );
  const [charIndex, setCharIndex] = useState(() =>
    prefersReducedMotion()
      ? lineToText(CODE_LINES[CODE_LINES.length - 1]).length
      : 0,
  );
  const [done, setDone] = useState(() => prefersReducedMotion());
  const [reducedMotion, setReducedMotion] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const prefersReduced = mq.matches;
      setReducedMotion(prefersReduced);
      if (prefersReduced) {
        setLineIndex(CODE_LINES.length - 1);
        setCharIndex(lineToText(CODE_LINES[CODE_LINES.length - 1]).length);
        setDone(true);
      }
    };
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reducedMotion || done) return;

    const currentText = lineToText(CODE_LINES[lineIndex]);
    if (charIndex < currentText.length) {
      const delay = CODE_LINES[lineIndex].parts[0]?.c === "comment" ? 14 : 22;
      const timer = setTimeout(() => setCharIndex((c) => c + 1), delay);
      return () => clearTimeout(timer);
    }

    if (lineIndex < CODE_LINES.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 220);
      return () => clearTimeout(timer);
    }

    setDone(true);
  }, [lineIndex, charIndex, done, reducedMotion]);

  const renderLine = (line, visibleChars) => {
    let remaining = visibleChars;
    return line.parts.map((part, i) => {
      if (remaining <= 0) return null;
      const slice = part.t.slice(0, remaining);
      remaining -= slice.length;
      return (
        <span key={i} className={TOKEN_CLASS[part.c]}>
          {slice}
        </span>
      );
    });
  };

  return (
    <div
      data-testid="hero-code-terminal"
      className="mt-5 max-w-xl border border-ink-600 bg-ink-900/90 backdrop-blur-sm overflow-hidden"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-ink-600 bg-ink-950/80">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-bone-dim">
          developer.ts
        </span>
      </div>

      <div className="px-3 py-3 font-mono text-[11px] sm:text-xs leading-snug overflow-x-auto">
        {CODE_LINES.map((line, idx) => {
          if (idx > lineIndex) return null;
          const visibleChars =
            idx < lineIndex ? lineToText(line).length : charIndex;
          const isLastLine = idx === CODE_LINES.length - 1;

          return (
            <div key={line.num} className="flex gap-2.5 min-h-[1.35em]">
              <span className="select-none text-bone-dim/50 w-3 text-right shrink-0">
                {line.num}
              </span>
              <code className="whitespace-pre-wrap break-all">
                {renderLine(line, visibleChars)}
                {idx === lineIndex && !done && (
                  <span className="text-amber animate-blink">▍</span>
                )}
                {isLastLine && done && (
                  <>
                    <span className="text-bone-dim ml-3">// </span>
                    <span className="text-amber">ready to build</span>
                    <span className="text-amber animate-blink ml-0.5">▍</span>
                  </>
                )}
              </code>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCodeTerminal;
