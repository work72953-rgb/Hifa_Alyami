"use client";

import { useMemo, useState } from "react";
import ContentCard from "./ContentCard";

export default function ContentGrid({ items }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");
  const categories = ["الكل", ...new Set(items.map((item) => item.category))];
  const filtered = useMemo(() => items.filter((item) => (category === "الكل" || item.category === category) && `${item.title} ${item.excerpt}`.includes(query)), [items, category, query]);
  return (
    <>
      <div className="mb-8 flex flex-col gap-3 md:flex-row"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث في المحتوى..." className="w-full rounded-2xl border border-neutral-300 bg-white px-5 py-3 outline-none focus:border-neutral-900" /><div className="no-scrollbar flex gap-2 overflow-x-auto">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold ${category === item ? "bg-neutral-950 text-white" : "bg-white border border-neutral-200"}`}>{item}</button>)}</div></div>
      <div className="grid gap-6 md:grid-cols-2">{filtered.map((item) => <ContentCard key={item.id} item={item} />)}</div>
      {!filtered.length && <div className="rounded-3xl border border-dashed border-neutral-300 p-12 text-center text-neutral-500">لا توجد نتائج مطابقة.</div>}
    </>
  );
}
