"use client";

import { useState } from "react";
import MediaCard from "./MediaCard";
import Modal from "@/components/ui/Modal";

export default function ImageGallery({ items }) {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map((item) => <MediaCard key={item.id} item={item} onOpen={setSelected} />)}</div>
      <Modal open={Boolean(selected)} onClose={() => setSelected(null)} title={selected?.title || ""}><div className="aspect-video rounded-2xl bg-neutral-200" /><p className="mt-4 text-sm text-neutral-500">{selected?.category}</p></Modal>
    </>
  );
}
