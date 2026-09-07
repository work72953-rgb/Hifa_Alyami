import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/data/profile";

export default function Introduction() {
  return (
    <section className="section-space">
      <div className="container-page grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="text-sm font-bold tracking-widest text-[var(--accent-dark)]">01 — عنّي</p><h2 className="mt-4 text-4xl font-black">نبذة مختصرة</h2></div>
        <div><p className="text-xl leading-10 text-neutral-700">{profile.bio}</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 font-bold underline underline-offset-8">اقرأ المزيد <ArrowLeft size={17} /></Link></div>
      </div>
    </section>
  );
}
