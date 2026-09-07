import { ArrowUpLeft } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function SocialCard({ item }) {
  return (
    <article className="rounded-3xl border border-[var(--line)] bg-white p-7">
      <div className="flex items-center justify-between"><Badge>{item.platform}</Badge><span className="text-xs text-neutral-500">{item.date}</span></div>
      <h2 className="mt-5 text-2xl font-black">{item.title}</h2>
      <p className="mt-3 leading-8 text-[var(--muted)]">{item.text}</p>
      {item.url !== "#" && <a href={item.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold underline">عرض المنشور <ArrowUpLeft size={16} /></a>}
    </article>
  );
}
