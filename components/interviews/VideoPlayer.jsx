export default function VideoPlayer({ src, poster }) { return <video controls poster={poster} className="aspect-video w-full rounded-2xl bg-black" src={src} />; }
