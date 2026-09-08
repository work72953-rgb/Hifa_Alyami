import WorksBrowser from "@/components/works/WorksBrowser";
import { works } from "@/data/works";
export default function WorksPage(){ return <main className="py-16"><div className="container-main"><span className="text-sm text-[#b58a3a]">الأعمال</span><h1 className="display-font mt-2 text-5xl font-bold">مختارات من ملف الأعمال</h1><p className="mt-5 max-w-2xl leading-8 text-neutral-600">مجموعة من أعمال المحتوى، الخطط الاتصالية، العلاقات الإعلامية، المقترحات الإبداعية والشراكات.</p><div className="mt-12"><WorksBrowser works={works}/></div></div></main>}
