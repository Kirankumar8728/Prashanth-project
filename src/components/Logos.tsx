import React from "react";

interface LogoProps {
  className?: string;
}

export function MrecLogo({ className = "w-16 h-16" }: LogoProps) {
  // Generate 20 gear teeth rotated around the center (50, 50)
  const teeth = Array.from({ length: 20 }).map((_, i) => (
    <rect
      key={i}
      x="46"
      y="1"
      width="8"
      height="8"
      rx="1"
      className="fill-emerald-600"
      transform={`rotate(${i * (360 / 20)} 50 50)`}
    />
  ));

  return (
    <svg
      id="mrec-logo-svg"
      viewBox="0 0 100 100"
      className={`${className} select-none overflow-visible`}
    >
      <defs>
        {/* Counter-clockwise path for the top circular arc text */}
        <path
          id="mrec-text-path"
          d="M 18 50 A 32 32 0 1 1 82 50"
          fill="none"
        />
      </defs>

      {/* Outer Gear Teeth */}
      <g>{teeth}</g>

      {/* Main outer circle */}
      <circle
        cx="50"
        cy="50"
        r="42"
        className="fill-emerald-600 stroke-emerald-700 stroke-[1.5]"
      />

      {/* Inner circular field */}
      <circle
        cx="50"
        cy="50"
        r="36"
        className="fill-emerald-500 stroke-emerald-600 stroke-1"
      />

      {/* Arc text for MALLA REDDY ENGINEERING COLLEGE */}
      <text className="font-sans font-bold text-[5px] tracking-[0.02em] fill-white">
        <textPath href="#mrec-text-path" startOffset="50%" textAnchor="middle">
          MALLA REDDY ENGINEERING COLLEGE
        </textPath>
      </text>

      {/* Center Circle behind torch */}
      <circle
        cx="50"
        cy="51"
        r="23"
        className="fill-emerald-600/30 stroke-emerald-400/40 stroke-[0.5]"
      />

      {/* Torch and Book Vector Graphics */}
      <g id="torch-and-book" transform="translate(0, 3)">
        {/* Open Book Pages */}
        {/* Left Page */}
        <path
          d="M 50 58 Q 38 52 26 55 L 28 41 Q 39 38 50 44 Z"
          className="fill-white stroke-slate-800 stroke-[0.75] stroke-linejoin-round"
        />
        {/* Right Page */}
        <path
          d="M 50 58 Q 62 52 74 55 L 72 41 Q 61 38 50 44 Z"
          className="fill-white stroke-slate-800 stroke-[0.75] stroke-linejoin-round"
        />
        {/* Book Spine / Middle details */}
        <path
          d="M 50 44 L 50 58"
          className="stroke-slate-800 stroke-[0.75]"
        />
        {/* Under pages details */}
        <path
          d="M 28 42 L 28 44 Q 39 41 50 47 M 72 42 L 72 44 Q 61 41 50 47"
          className="fill-none stroke-slate-400 stroke-[0.5]"
        />

        {/* Hand holding the torch */}
        {/* Torch Flame (Orange & Red) */}
        <path
          d="M 50 10 C 44 14 43 23 48 28 C 51 28 53 25 54 23 C 56 26 55 29 52 31 C 56 31 58 24 55 19 C 54 17 52 14 50 10 Z"
          className="fill-red-500"
        />
        <path
          d="M 50 14 C 47 17 46 22 49 25 C 51 25 52 23 53 21 C 54 23 53 25 51 26 C 53 26 54 22 53 19 C 52 18 51 16 50 14 Z"
          className="fill-amber-400"
        />

        {/* Torch Cup */}
        <path
          d="M 42 28 L 58 28 L 54 36 L 46 36 Z"
          className="fill-red-600 stroke-slate-800 stroke-[0.75]"
        />
        <line
          x1="44"
          y1="31"
          x2="56"
          y2="31"
          className="stroke-red-700 stroke-[0.5]"
        />

        {/* Torch Handle */}
        <path
          d="M 47 36 L 53 36 L 51 50 L 49 50 Z"
          className="fill-red-700 stroke-slate-800 stroke-[0.75]"
        />
        {/* Handle grip diagonal stripes */}
        <path
          d="M 47.5 39 L 52.5 41 M 48 43 L 52 45 M 48.5 47 L 51.5 49"
          className="stroke-red-800 stroke-[0.5]"
        />

        {/* Hand / Fist holding handle */}
        <rect
          x="46"
          y="42"
          width="8"
          height="6"
          rx="1"
          className="fill-red-500 stroke-slate-800 stroke-[0.75]"
        />
        {/* Fingers lines */}
        <line
          x1="46"
          y1="44"
          x2="54"
          y2="44"
          className="stroke-red-800 stroke-[0.5]"
        />
        <line
          x1="46"
          y1="46"
          x2="54"
          y2="46"
          className="stroke-red-800 stroke-[0.5]"
        />
      </g>

      {/* Bottom curved banner shape */}
      <path
        d="M 12 83 Q 50 89 88 83 L 88 94 Q 50 100 12 94 Z"
        className="fill-emerald-700 stroke-emerald-800 stroke-[0.75]"
      />

      {/* Banner Text - MREC */}
      <text
        x="50"
        y="90"
        textAnchor="middle"
        className="font-sans font-black text-[6.5px] tracking-wider fill-white"
      >
        MREC
      </text>

      {/* Banner Text - ज्ञानमेव शक्तिः | */}
      <text
        x="50"
        y="94.5"
        textAnchor="middle"
        className="font-sans font-medium text-[3.2px] tracking-[0.05em] fill-emerald-100"
      >
        ज्ञानमेव शक्तिः |
      </text>
    </svg>
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
