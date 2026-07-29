const pipeline = [
  { label: "Interface", detail: "Next.js", x: "12%", y: "20%" },
  { label: "Logic", detail: "REST APIs", x: "61%", y: "13%" },
  { label: "Data", detail: "PostgreSQL", x: "67%", y: "66%" },
  { label: "Deploy", detail: "Vercel", x: "15%", y: "70%" },
];

export function EngineeringVisual() {
  return (
    <div className="engineering-visual hero-fade-4" aria-hidden="true">
      <div className="visual-toolbar">
        <div className="flex gap-1.5">
          <span />
          <span />
          <span />
        </div>
        <p>system.architecture</p>
        <span className="visual-status">live</span>
      </div>

      <div className="visual-canvas">
        <svg
          className="visual-connections"
          viewBox="0 0 600 420"
          preserveAspectRatio="none"
        >
          <path d="M145 105 C240 20 340 25 430 90" />
          <path d="M465 120 C555 190 545 270 455 320" />
          <path d="M420 340 C320 405 220 405 135 340" />
          <path d="M105 305 C30 235 40 160 115 120" />
          <path className="signal-path" d="M145 105 C240 20 340 25 430 90" />
          <path className="signal-path signal-delay" d="M465 120 C555 190 545 270 455 320" />
        </svg>

        <div className="visual-core">
          <span className="core-ring" />
          <span className="core-ring core-ring-two" />
          <div className="core-content">
            <span className="core-mark">&lt;/&gt;</span>
            <strong>Build</strong>
            <small>production systems</small>
          </div>
        </div>

        {pipeline.map((node, index) => (
          <div
            key={node.label}
            className="visual-node"
            style={{ left: node.x, top: node.y, animationDelay: `${index * 0.35}s` }}
          >
            <span className="node-index">0{index + 1}</span>
            <div>
              <strong>{node.label}</strong>
              <small>{node.detail}</small>
            </div>
          </div>
        ))}

        <div className="visual-code">
          <span className="code-keyword">const</span>{" "}
          <span className="code-variable">product</span> ={" "}
          <span className="code-string">&quot;shipped&quot;</span>;
        </div>
      </div>
    </div>
  );
}
