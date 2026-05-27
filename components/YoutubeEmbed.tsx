// mode="cover"  — full-bleed background, fills any container, muted autoplay, no controls
// mode="card"   — standard player for product cards
// mode="embed"  — default iframe player
export default function YoutubeEmbed({
  id,
  className = "",
  mode = "embed",
}: {
  id: string;
  className?: string;
  mode?: "cover" | "card" | "embed";
}) {
  const src =
    mode === "cover"
      ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&playsinline=1&showinfo=0&modestbranding=1`
      : `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&color=white`;

  if (mode === "cover") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <iframe
          src={src}
          allow="autoplay; encrypted-media"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // always covers viewport regardless of aspect ratio
            minWidth: "100%",
            minHeight: "100%",
            width: "calc(100vh * 16 / 9)",
            height: "calc(100vw * 9 / 16)",
            border: "none",
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#080808] ${className}`}>
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
