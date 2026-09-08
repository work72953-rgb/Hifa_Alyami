import { FaWhatsapp, FaMapPin } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ArrowUpLeft, Mail, Phone } from "lucide-react";

import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container-main max-w-4xl">
        {/* -------------------------------------------------- */}
        {/* Header */}
        {/* -------------------------------------------------- */}
        <div className="max-w-2xl" dir="rtl">
          <p className="text-sm font-semibold tracking-wide text-[#b58a3a]">
            تواصل
          </p>

          <h1 className="display-font mt-3 text-5xl font-bold leading-tight text-neutral-950 md:text-6xl">
            لنتواصل
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-9 text-neutral-600">
            للتواصل المهني والاطلاع على فرص العمل، أو للتعاون في مشاريع التعليق
            الصوتي بالفصحى أو العامية.
          </p>
        </div>

        {/* -------------------------------------------------- */}
        {/* Main Contact Card */}
        {/* -------------------------------------------------- */}
        <section className="mt-12 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.25)]">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            {/* ------------------------------------------------ */}
            {/* Left / Main Contact */}
            {/* ------------------------------------------------ */}
            <div className="p-7 md:p-10" dir="rtl">
              <div className="mb-8">
                <p className="text-sm font-semibold text-[#b58a3a]">
                  طرق التواصل
                </p>

                <h2 className="display-font mt-2 text-2xl font-bold text-neutral-950">
                  اختر الطريقة الأنسب لك
                </h2>
              </div>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center justify-between rounded-2xl border border-neutral-200 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b58a3a]/40 hover:bg-[#b58a3a]/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-[#b58a3a] group-hover:text-white">
                      <MdEmail size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-neutral-500">
                        البريد الإلكتروني
                      </p>

                      <p
                        dir="ltr"
                        className="mt-1 text-base font-bold text-neutral-900"
                      >
                        {profile.email}
                      </p>
                    </div>
                  </div>

                  <ArrowUpLeft
                    size={19}
                    className="text-neutral-400 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#b58a3a]"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-neutral-200 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b58a3a]/40 hover:bg-[#b58a3a]/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-[#b58a3a] group-hover:text-white">
                      <FaWhatsapp size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-neutral-500">
                        واتساب
                      </p>

                      <p
                        dir="ltr"
                        className="mt-1 text-base font-bold text-neutral-900"
                      >
                        {profile.whatsapp}
                      </p>
                    </div>
                  </div>

                  <ArrowUpLeft
                    size={19}
                    className="text-neutral-400 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#b58a3a]"
                  />
                </a>
              </div>

              {/* Location */}
              <div className="mt-8 flex items-center gap-3 border-t border-neutral-200 pt-7">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600">
                  <FaMapPin size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium text-neutral-500">الموقع</p>

                  <p className="mt-0.5 text-sm font-bold text-neutral-900">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------ */}
            {/* Right / Social & Introduction */}
            {/* ------------------------------------------------ */}
            <div
              className="flex flex-col justify-between bg-neutral-950 p-7 text-white md:p-10"
              dir="rtl"
            >
              <div>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b58a3a] text-white">
                  <Phone size={21} />
                </div>

                <p className="text-sm font-semibold text-[#d0a95f]">
                  تواصل مهني
                </p>

                <h2 className="display-font mt-3 text-3xl font-bold leading-tight">
                  فكرة جيدة تبدأ
                  <br />
                  بمحادثة بسيطة.
                </h2>

                <p className="mt-5 text-sm leading-8 text-neutral-400">
                  إذا كان لديك مشروع، فكرة، حملة، أو فرصة تعاون، يسعدني التواصل
                  ومناقشة التفاصيل.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <p className="mb-3 text-xs font-medium text-neutral-500">
                  التواصل الاجتماعي
                </p>

                <div className="flex gap-2">
                  <a
                    href={profile.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-[#b58a3a] hover:bg-[#b58a3a] hover:text-white"
                  >
                    <FaXTwitter size={18} />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-[#b58a3a] hover:bg-[#b58a3a] hover:text-white"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* Voice Over CTA */}
        {/* -------------------------------------------------- */}
        <section
          className="mt-8 rounded-[2rem] border border-[#b58a3a]/20 bg-[#b58a3a]/5 p-7 md:p-9"
          dir="rtl"
        >
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#b58a3a]">
                للتعليق الصوتي
              </p>

              <h2 className="display-font mt-2 text-2xl font-bold text-neutral-950 md:text-3xl">
                لديك نص وتبحث عن صوت مناسب؟
              </h2>

              <p className="mt-3 text-base leading-8 text-neutral-600">
                للاطلاع على نماذج التعليق الصوتي بالفصحى والعامية، يمكن زيارة
                ملف التعليق الصوتي والتواصل مباشرة عبر واتساب.
              </p>
            </div>

            <a
              href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#b58a3a] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9d762f] hover:shadow-lg"
            >
              <FaWhatsapp size={18} />
              التواصل عبر واتساب
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
