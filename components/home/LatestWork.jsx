import Link from "next/link";
import { writtenContent } from "@/data/writtenContent";

export default function LatestWork() {
  return (
    <section className="section-space">
      <div className="container-page">
        <div className="flex items-end justify-between gap-5"><div><p className="text-sm font-bold tracking-widest text-[var(--accent-dark)]">03 — آخر الأعمال</p><h2 className="mt-3 text-4xl font-black">المحتوى المكتوب</h2></div><Link href="/written-content" className="hidden text-sm font-bold underline md:block">عرض الكل</Link></div>
        <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
          {writtenContent.slice(0, 4).map((item, index) => <Link href="/written-content" key={item.id} className="grid gap-3 py-6 transition hover:px-3 md:grid-cols-[80px_1fr_auto] md:items-center"><span className="text-sm text-neutral-400">0{index + 1}</span><div><h3 className="text-xl font-black">{item.title}</h3><p className="mt-1 text-sm text-[var(--muted)]">{item.excerpt}</p></div><span className="text-sm font-bold text-neutral-500">{item.category}</span></Link>)}
        </div>
      </div>
    </section>
  );
}
