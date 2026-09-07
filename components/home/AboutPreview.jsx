import Link from "next/link";
import { profile } from "@/data/profile";
export default function AboutPreview(){ return <section className="border-y border-neutral-200 bg-white py-20"><div className="container-main grid gap-10 md:grid-cols-2"><div><span className="text-sm text-[#b58a3a]">نبذة</span><h2 className="display-font mt-3 text-4xl font-bold">كتابة تُفهم، وأفكار تُتذكر.</h2></div><div><p className="leading-9 text-neutral-600">{profile.bio}</p><Link href="/about" className="mt-6 inline-block font-bold underline">المزيد عني ←</Link></div></div></section>}
