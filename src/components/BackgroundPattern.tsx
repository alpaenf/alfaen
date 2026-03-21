'use client';
export default function BackgroundPattern() {
  return (
    <>
      {/* Fixed SVG dot grid — shows as subtle texture across the whole page */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top-right blurred color blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-red-400/10 dark:bg-red-500/10 blur-[120px] z-0"
      />

      {/* Bottom-left blurred color blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-300/10 dark:bg-orange-400/10 blur-[120px] z-0"
      />

      {/* Subtle diagonal lines SVG — top area */}
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed top-0 right-0 w-[480px] h-[480px] opacity-[0.025] dark:opacity-[0.04] z-0"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={i * 26}
            y1="0"
            x2={i * 26 + 480}
            y2="480"
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </>
  );
}
