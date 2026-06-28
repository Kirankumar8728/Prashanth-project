import React from "react";

interface LogoProps {
  className?: string;
}

export function MrecLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <img
      id="mrec-logo-img"
      src="https://images.jdmagicbox.com/comp/secunderabad/q4/040pxx40.xx40.111116124508.j6q4/catalogue/malla-reddy-engineering-college-maisammaguda-secunderabad-engineering-colleges-u2b0y1.jpg"
      alt="Malla Reddy Engineering College Logo"
      className={`${className} object-contain rounded-full bg-white`}
      referrerPolicy="no-referrer"
    />
  );
}

export function NaacLogo({ className = "w-16 h-16" }: LogoProps) {
  // Generate 32 scallop points around the center (50, 45) for a circular badge look
  const scallops = Array.from({ length: 36 }).map((_, i) => (
    <circle
      key={i}
      cx="50"
      cy="13"
      r="4"
      className="fill-amber-400 stroke-amber-500 stroke-[0.25]"
      transform={`rotate(${i * (360 / 36)} 50 45)`}
    />
  ));

  return (
    <svg
      id="naac-logo-svg"
      viewBox="0 0 100 100"
      className={`${className} select-none overflow-visible`}
    >
      <defs>
        {/* Counter-clockwise path for ACCREDITED WITH GRADE text */}
        <path
          id="naac-text-path"
          d="M 21 45 A 29 29 0 1 1 79 45"
          fill="none"
        />
      </defs>

      {/* Gold Scallop Border */}
      <g>{scallops}</g>

      {/* Main gold circle */}
      <circle
        cx="50"
        cy="45"
        r="32"
        className="fill-amber-400 stroke-amber-500 stroke-[1.5]"
      />

      {/* Inner concentric gold rings */}
      <circle
        cx="50"
        cy="45"
        r="28"
        className="fill-transparent stroke-amber-600 stroke-[0.75] stroke-dasharray-[1,1]"
      />
      <circle
        cx="50"
        cy="45"
        r="26"
        className="fill-transparent stroke-amber-500 stroke-[0.5]"
      />

      {/* Curved Text: ACCREDITED WITH GRADE */}
      <text className="font-sans font-extrabold text-[3.4px] tracking-[0.05em] fill-red-950">
        <textPath href="#naac-text-path" startOffset="50%" textAnchor="middle">
          ACCREDITED WITH GRADE
        </textPath>
      </text>

      {/* Center red seal shield */}
      <circle
        cx="50"
        cy="45"
        r="20"
        className="fill-red-800 stroke-amber-300 stroke-[1.5] shadow-inner"
      />
      <circle
        cx="50"
        cy="45"
        r="18"
        className="fill-transparent stroke-red-900/60 stroke-[0.5]"
      />

      {/* Main A++ text */}
      <text
        x="50"
        y="50.5"
        textAnchor="middle"
        className="font-sans font-black text-[15px] fill-white tracking-tight"
      >
        A++
      </text>

      {/* Red Ribbon Banner in background (Left tail) */}
      <path
        d="M 12 62 L 5 69 L 14 74 L 14 62 Z"
        className="fill-red-900 stroke-red-950 stroke-[0.5]"
      />
      {/* Ribbon Fold shadow left */}
      <path d="M 14 62 L 23 62 L 14 68 Z" className="fill-red-950" />

      {/* Red Ribbon Banner in background (Right tail) */}
      <path
        d="M 88 62 L 95 69 L 86 74 L 86 62 Z"
        className="fill-red-900 stroke-red-950 stroke-[0.5]"
      />
      {/* Ribbon Fold shadow right */}
      <path d="M 86 62 L 77 62 L 86 68 Z" className="fill-red-950" />

      {/* Main Ribbon Banner foreground */}
      <path
        d="M 14 62 L 86 62 L 86 71 L 14 71 Z"
        className="fill-red-700 stroke-red-800 stroke-[0.5]"
      />

      {/* Ribbon Accent Stripes */}
      <line
        x1="15"
        y1="64"
        x2="85"
        y2="64"
        className="stroke-red-600 stroke-[0.35]"
      />
      <line
        x1="15"
        y1="69"
        x2="85"
        y2="69"
        className="stroke-red-800 stroke-[0.35]"
      />

      {/* NAAC Banner Text */}
      <text
        x="50"
        y="68.5"
        textAnchor="middle"
        className="font-sans font-black text-[7.5px] tracking-[0.15em] fill-yellow-400"
      >
        NAAC
      </text>
    </svg>
  );
}
