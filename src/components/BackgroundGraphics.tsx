export function BackgroundGraphics() {
  return (
    <div className="site-background-art" aria-hidden="true">
      <div className="background-orb background-orb-one" />
      <div className="background-orb background-orb-two" />
      <div className="background-orb background-orb-three" />

      <svg
        className="background-circuit"
        viewBox="0 0 1440 2200"
        preserveAspectRatio="none"
      >
        <path d="M-80 230 H250 Q290 230 290 270 V510 Q290 550 330 550 H620" />
        <path d="M1510 740 H1150 Q1110 740 1110 780 V1030 Q1110 1070 1070 1070 H830" />
        <path d="M-60 1450 H360 Q400 1450 400 1490 V1740 Q400 1780 440 1780 H740" />
        <circle cx="620" cy="550" r="4" />
        <circle cx="830" cy="1070" r="4" />
        <circle cx="740" cy="1780" r="4" />
      </svg>

      <div className="background-code background-code-one">
        <span>01</span>
        <code>interface → experience</code>
      </div>
      <div className="background-code background-code-two">
        <span>02</span>
        <code>logic → product</code>
      </div>
      <div className="background-code background-code-three">
        <span>03</span>
        <code>deploy → iterate</code>
      </div>

      <div className="background-cross background-cross-one">+</div>
      <div className="background-cross background-cross-two">+</div>
      <div className="background-ring" />
    </div>
  );
}
