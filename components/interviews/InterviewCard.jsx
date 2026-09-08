export default function InterviewCard({ interview }) {
  return (
    <article className="paper overflow-hidden rounded-3xl">
      <div className="aspect-video bg-neutral-950">
        <video
          className="h-full w-full object-cover"
          controls
          preload="metadata"
          playsInline
        >
          <source src={interview.video} type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>

      <div className="p-6">
        <span className="text-xs font-bold text-[#b58a3a]">لقاء صحفي</span>
        <h2 className="mt-2 text-xl font-bold">{interview.title}</h2>
        <p className="mt-3 leading-7 text-neutral-600">{interview.description}</p>
      </div>
    </article>
  );
}
