import { profile } from "@/data/profile";
export default function Footer(){ return <footer className="border-t border-neutral-200 py-10"><div className="container-main flex flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} {profile.name}</span><span>ملف أعمال في صناعة المحتوى والعلاقات العامة</span></div></footer>}
