"use client";

import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4" onMouseDown={onClose}>
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-white p-6" onMouseDown={(e) => e.stopPropagation()}>
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black">{title}</h2>
          <button onClick={onClose} className="rounded-full border p-2" aria-label="إغلاق"><X size={20} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}
