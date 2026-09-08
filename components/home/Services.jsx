import Link from "next/link";
import { services } from "@/data/profile";

export default function Services() {
  return (
    <section className="bg-neutral-900 py-20 text-white">
      <div className="container-main">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm text-[#d6b46e]">الخبرة المهنية</span>
            <h2 className="display-font mt-3 text-4xl font-bold">
              مجالات تعكس الخبرة العملية
            </h2>
          </div>

          <Link
            href="/about"
            className="font-semibold text-white/80 underline underline-offset-4 hover:text-white"
          >
            تعرف على الخبرات ←
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border-t border-white/20 pt-5"
            >
              <div className="text-sm text-[#d6b46e]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-8 text-white/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
