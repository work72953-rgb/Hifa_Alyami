import Link from "next/link";
import { works } from "@/data/works";
import WorkCard from "@/components/works/WorkCard";
export default function FeaturedWorks(){ return <section className="py-20"><div className="container-main"><div className="flex items-end justify-between gap-5"><div><span className="text-sm text-[#b58a3a]">مختارات</span><h2 className="display-font mt-3 text-4xl font-bold">من ملف الأعمال</h2></div><Link href="/works" className="hidden font-bold underline md:block">كل الأعمال</Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{works.slice(0,6).map(w=><WorkCard key={w.id} work={w}/>)}</div></div></section>}
