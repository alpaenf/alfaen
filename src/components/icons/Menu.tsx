export default function Menu({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}
