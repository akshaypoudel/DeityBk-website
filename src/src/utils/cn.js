// Tiny class-name joiner — filters out falsy values.
// Usage: cn('base', condition && 'active', props.className)
export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}
