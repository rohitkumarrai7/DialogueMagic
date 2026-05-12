const COS30 = Math.cos(Math.PI / 6);
const SIN30 = 0.5;

function cubePolygons(cx, cy, w, h, d) {
  const wr = w * COS30;
  const wh = w * SIN30;
  const dr = d * COS30;
  const dh = d * SIN30;

  return {
    right: `${cx},${cy} ${cx + wr},${cy - wh} ${cx + wr},${cy - wh + h} ${cx},${cy + h}`,
    left: `${cx},${cy} ${cx - dr},${cy - dh} ${cx - dr},${cy - dh + h} ${cx},${cy + h}`,
    top: `${cx},${cy} ${cx + wr},${cy - wh} ${cx + wr - dr},${cy - wh - dh} ${cx - dr},${cy - dh}`,
  };
}

const palettes = {
  mint: { top: "#B8E6D6", left: "#88CCBA", right: "#6AB8A2" },
  mintLight: { top: "#CCF0E4", left: "#A4DECE", right: "#88CCB8" },
  cream: { top: "#F2ECDE", left: "#DDD4C2", right: "#C8BDA8" },
  beige: { top: "#D8CCAA", left: "#BFB08E", right: "#A89A78" },
  gray: { top: "#E2E0DA", left: "#C8C6BE", right: "#ADABA4" },
  grayDark: { top: "#C8C6C0", left: "#A8A6A0", right: "#909088" },
  paleYellow: { top: "#ECE4B0", left: "#D6CE94", right: "#BEB87C" },
  sage: { top: "#C4D4B8", left: "#A6BC96", right: "#8AA47A" },
  silver: { top: "#DADAD6", left: "#BCBCB6", right: "#A0A098" },
  warmGray: { top: "#D0CCC4", left: "#B8B4AA", right: "#A09C92" },
};

// [cx, cy, width, height, depth, paletteKey, opacity]
const cubes = [
  [248, 155, 40, 55, 40, "silver", 0.85],
  [330, 120, 35, 40, 35, "cream", 0.9],
  [400, 145, 30, 35, 30, "warmGray", 0.85],
  [190, 210, 42, 48, 42, "gray", 1],
  [275, 195, 50, 60, 50, "mintLight", 1],
  [368, 185, 48, 58, 48, "beige", 1],
  [440, 200, 36, 42, 36, "paleYellow", 1],
  [220, 275, 45, 55, 45, "sage", 1],
  [310, 260, 68, 80, 68, "mint", 1],
  [410, 265, 50, 60, 50, "cream", 1],
  [475, 245, 32, 38, 32, "grayDark", 1],
  [165, 175, 22, 26, 22, "mintLight", 0.8],
  [490, 185, 22, 24, 22, "silver", 0.75],
  [350, 310, 24, 28, 24, "warmGray", 0.85],
  [240, 320, 20, 22, 20, "cream", 0.75],
];

const sortedCubes = [...cubes].sort((a, b) => a[1] - a[3] - (b[1] - b[3]));

const arms = [
  [332, 195, 360, 185],
  [252, 210, 268, 200],
  [420, 205, 438, 200],
  [370, 285, 395, 270],
  [195, 250, 215, 270],
];

export default function IsometricCubes() {
  return (
    <svg viewBox="0 0 600 520" fill="none" className="h-auto w-full max-w-[580px]">
      {/* Ground shadow */}
      <ellipse cx="310" cy="460" rx="180" ry="30" fill="rgba(0,0,0,0.06)" />

      {/* Cubes */}
      {sortedCubes.map((c, i) => {
        const [cx, cy, w, h, d, paletteKey, opacity] = c;
        const colors = palettes[paletteKey];
        const poly = cubePolygons(cx, cy, w, h, d);
        return (
          <g key={i} opacity={opacity}>
            <polygon points={poly.right} fill={colors.right} />
            <polygon points={poly.left} fill={colors.left} />
            <polygon points={poly.top} fill={colors.top} />
          </g>
        );
      })}

      {/* Connector arms */}
      {arms.map(([x1, y1, x2, y2], i) => (
        <g key={`arm-${i}`}>
          <line
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#A0A098" strokeWidth="2" strokeLinecap="round"
          />
          <circle cx={x1} cy={y1} r="3" fill="#B8B8B0" stroke="#A0A098" strokeWidth="1" />
          <circle cx={x2} cy={y2} r="3" fill="#B8B8B0" stroke="#A0A098" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}
