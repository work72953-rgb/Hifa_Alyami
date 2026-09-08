import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container-main rounded-[2rem] bg-[#e9dfcc] p-10 md:p-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <span className="text-sm font-semibold text-[#8f6a2d]">
              التعليق الصوتي
            </span>
            <h2 className="display-font mt-3 text-4xl font-bold">
              صوت مناسب لرسالتك.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-neutral-600">
              نماذج تعليق صوتي بالفصحى والعامية، مع إمكانية التواصل مباشرة لطلب
              تسجيل صوتي مناسب للمشروع.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/voice-over"
              className="rounded-full bg-neutral-900 px-7 py-3 font-bold text-white"
            >
              استمع إلى النماذج
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-neutral-400 px-7 py-3 font-bold"
            >
              تواصل للتعليق الصوتي
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
