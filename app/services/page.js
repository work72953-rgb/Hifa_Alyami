import { services } from "@/data/profile";

export default function ServicesPage() {
  return (
    <main className="py-20">
      <div className="container-main">
        <span className="text-sm text-[#b58a3a]">مجالات الخبرة</span>
        <h1 className="display-font mt-3 text-5xl font-bold">خبرات ومجالات عمل</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-neutral-600">
          مجموعة من المجالات التي تعكس الخبرة العملية والمهارات التي أستخدمها في بيئات العمل والمشاريع الاتصالية.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <div className="paper rounded-3xl p-8" key={service.title}>
              <div className="text-sm text-[#b58a3a]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-4 text-2xl font-bold">{service.title}</h2>
              <p className="mt-4 leading-8 text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
