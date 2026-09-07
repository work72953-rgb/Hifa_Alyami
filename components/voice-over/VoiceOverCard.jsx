export default function VoiceOverCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-neutral-100 p-5">
        {project.type === "video" ? (
          <video
            className="aspect-video w-full rounded-2xl bg-black object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src={project.media} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        ) : (
          <div className="flex min-h-48 items-center justify-center rounded-2xl bg-neutral-900 p-6">
            <audio
              className="w-full"
              controls
              preload="metadata"
            >
              <source src={project.media} />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* <span className="inline-flex rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-black/60">
          تعليق صوتي
        </span> */}

        <h2 className="mt-4 text-xl font-bold text-black">
          {project.title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-black/60">
          {project.description}
        </p>
      </div>
    </article>
  );
}