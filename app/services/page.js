import { services } from "@/data/profile";
export default function ServicesPage() {
  return (
    <main className="py-20">
      <div className="container-main">
        {/* <span className="text-sm text-[#b58a3a]">مجالات العمل</span> */}
        <h1 className="display-font mt-3 text-5xl font-bold">ماذا أقدّم؟</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <div className="paper rounded-3xl p-8" key={s.title}>
              <div className="text-sm text-[#b58a3a]">0{i + 1}</div>
              <h2 className="mt-4 text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 leading-8 text-neutral-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
