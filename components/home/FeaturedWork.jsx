import Link from "next/link";
import { interviews } from "@/data/interviews";
import Badge from "@/components/ui/Badge";

export default function FeaturedWork() {
  return (
    <section className="section-space bg-white">
      <div className="container-page">
        <div className="flex items-end justify-between gap-5"><div><p className="text-sm font-bold tracking-widest text-[var(--accent-dark)]">02 — أبرز الأعمال</p><h2 className="mt-3 text-4xl font-black">المقابلات والحوار</h2></div><Link href="/interviews" className="hidden text-sm font-bold underline md:block">عرض الكل</Link></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {interviews.map((item) => <article key={item.id} className="group overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--background)]"><div className="aspect-video bg-neutral-900" /><div className="p-6"><Badge>{item.platform}</Badge><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-3 line-clamp-3 leading-7 text-[var(--muted)]">{item.description}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
