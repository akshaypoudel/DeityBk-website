// Renders a responsive video from a YouTube/Vimeo link OR a direct .mp4 URL.
// Returns null if no url is given (so the block simply disappears).
function toEmbed(url) {
  if (!url) return null
  // Direct video file
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return { type: 'file', src: url }

  // YouTube (watch?v=, youtu.be/, /embed/, /shorts/)
  const yt =
    url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/) || null
  if (yt) return { type: 'iframe', src: `https://www.youtube.com/embed/${yt[1]}` }

  // Vimeo
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vm) return { type: 'iframe', src: `https://player.vimeo.com/video/${vm[1]}` }

  // Fallback: assume it's already an embeddable URL
  return { type: 'iframe', src: url }
}

export default function VideoEmbed({ url, title = 'Project video' }) {
  const embed = toEmbed(url)
  if (!embed) return null

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-card">
      {embed.type === 'file' ? (
        <video src={embed.src} controls className="h-full w-full" />
      ) : (
        <iframe
          src={embed.src}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}
