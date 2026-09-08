export default function VoiceOverCard({ item }) {
  return (
    <article className="paper overflow-hidden rounded-3xl">
      <div className="aspect-video bg-neutral-950">
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src={item.media} type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        ) : (
          <audio className="w-full px-6 pt-6" controls preload="metadata">
            <source src={item.media} />
            متصفحك لا يدعم تشغيل الصوت.
          </audio>
        )}
      </div>

      <div className="p-7">
        <span className="text-xs font-bold text-[#b58a3a]">تعليق صوتي</span>
        <h2 className="mt-3 text-xl font-bold leading-8">{item.title}</h2>
        <p className="mt-3 leading-8 text-neutral-600">{item.description}</p>
      </div>
    </article>
  );
}
