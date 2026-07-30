const glyphSets = [
  ["01", "const", "{ }", "API", "10", "async", "</>", "data", "01", "return"],
  ["fn()", "11", "UI", "[ ]", "deploy", "00", "=>", "build", "10", "await"],
  ["type", "01", "POST", "{ }", "010", "route", "</>", "SQL", "11", "export"],
  ["101", "React", "()", "01", "node", "true", "[ ]", "AI", "00", "ship"],
];

export function LiveCodeBackdrop() {
  return (
    <div className="matrix-code-backdrop" aria-hidden="true">
      <div className="matrix-code-rain">
        {Array.from({ length: 22 }, (_, columnIndex) => {
          const glyphs = glyphSets[columnIndex % glyphSets.length];
          const left = (columnIndex * 4.7 + 1.5) % 100;
          const duration = 8 + (columnIndex % 6) * 1.4;
          const delay = -(columnIndex % 9) * 1.35;

          return (
            <div
              className="matrix-column"
              key={columnIndex}
              style={{
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              {[...glyphs, ...glyphs].map((glyph, glyphIndex) => (
                <span
                  className={glyphIndex % 7 === 0 ? "matrix-glyph-bright" : ""}
                  key={`${glyph}-${glyphIndex}`}
                >
                  {glyph}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <div className="matrix-code-vignette" />
    </div>
  );
}
