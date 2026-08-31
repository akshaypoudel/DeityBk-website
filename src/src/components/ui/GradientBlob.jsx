// Soft animated glow blob used as a background accent.
// Driven by the accent token so it retints with the theme.
export default function GradientBlob({ className = '', from = 'var(--accent)', to = 'var(--accent)' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 30%, rgb(${from} / 0.5), rgb(${to} / 0.2), transparent 70%)`,
      }}
    />
  )
}
