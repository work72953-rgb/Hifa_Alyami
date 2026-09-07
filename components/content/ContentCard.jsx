"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";

export default function ContentCard({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
        <div className="aspect-[16/9] bg-neutral-200" />
        <div className="p-6">
          <div className="flex items-center justify-between gap-3"><Badge>{item.category}</Badge><span className="text-xs text-neutral-500">{item.date}</span></div>
          <h2 className="mt-4 text-xl font-black">{item.title}</h2><p className="mt-3 leading-7 text-[var(--muted)]">{item.excerpt}</p>
          <button onClick={() => setOpen(true)} className="mt-5 font-bold underline underline-offset-4">قراءة التفاصيل</button>
        </div>
      </article>
      <Modal open={open} onClose={() => setOpen(false)} title={item.title}><p className="leading-9 text-neutral-700">{item.excerpt} هنا يمكن وضع النص الكامل للمادة أو رابطها الأصلي عند إدخال البيانات الحقيقية.</p></Modal>
    </>
  );
}
