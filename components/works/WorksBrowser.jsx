"use client";
import { useMemo, useState } from "react";
import WorkCard from "./WorkCard";
export default function WorksBrowser({works}){ const [filter,setFilter]=useState("الكل"); const cats=["الكل",...new Set(works.map(w=>w.category))]; const items=useMemo(()=>filter==="الكل"?works:works.filter(w=>w.category===filter),[filter,works]); return <><div className="mb-8 flex flex-wrap gap-2">{cats.map(c=><button key={c} onClick={()=>setFilter(c)} className={`rounded-full px-4 py-2 text-sm font-bold ${filter===c?"bg-neutral-900 text-white":"bg-white border border-neutral-200"}`}>{c}</button>)}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(w=><WorkCard key={w.id} work={w}/>)}</div></>}
