"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#f7f4ee]/90 backdrop-blur">
      <div className="container-main flex h-20 items-center justify-between">
        <Link href="/" className="display-font text-2xl font-bold">
          هيفاء اليامي
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-md font-semibold text-neutral-700 hover:text-black"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="القائمة"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-main grid gap-4 pb-6 md:hidden">
          {navigation.map((n) => (
            <Link
              onClick={() => setOpen(false)}
              key={n.href}
              href={n.href}
              className="font-semibold"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
