// Default values for the 4 editable colour tokens, per mode.
// These MUST match the defaults in src/styles/tokens.css. Stored as hex
// (what the colour picker uses); the context converts to CSS channels.
export const DEFAULT_TOKENS = {
  light: {
    primary: '#f8f9fc',
    secondary: '#ffffff',
    accent: '#6c4eff',
    text: '#111422',
  },
  dark: {
    primary: '#070912',
    secondary: '#101424',
    accent: '#8a6eff',
    text: '#ecf0f8',
  },
}

// The 4 editable tokens, in the order shown in the customizer.
export const TOKEN_FIELDS = [
  { key: 'accent', label: 'Accent', hint: 'Buttons, highlights, gradients' },
  { key: 'primary', label: 'Primary', hint: 'Page background' },
  { key: 'secondary', label: 'Secondary', hint: 'Cards & surfaces' },
  { key: 'text', label: 'Text', hint: 'Body & heading text' },
]

export const STORAGE_KEY = 'nova-custom-colors' // { light:{...}, dark:{...} }
