// Icon registry — keeps the bundle small by importing ONLY the icons we use
// (importing all of lucide-react would bloat the build to ~1MB).
//
// 👉 Using a new icon in site.js? Add one import line + one entry below.
//    Browse names at https://lucide.dev
import {
  Circle,
  Smartphone,
  Code2,
  Globe,
  PenTool,
  LineChart,
  Cpu,
  Search,
  Rocket,
  Sparkles,
  ShieldCheck,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Layers,
  Palette,
  Zap,
  Star,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const registry = {
  Circle,
  Smartphone,
  Code2,
  Globe,
  PenTool,
  LineChart,
  Cpu,
  Search,
  Rocket,
  Sparkles,
  ShieldCheck,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Layers,
  Palette,
  Zap,
  Star,
  Mail,
  Phone,
  MapPin,
}

// Renders an icon by its string name (from site.js).
// Falls back to a neutral dot if the name isn't in the registry.
export default function Icon({ name, ...props }) {
  const Cmp = registry[name] || Circle
  return <Cmp {...props} />
}
