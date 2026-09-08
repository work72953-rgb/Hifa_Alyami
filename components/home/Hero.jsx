import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-main grid items-end gap-12 md:grid-cols-[1.4fr_.6fr]">
        <div>
          <span className="inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm">
            محتوى • اتصال • تعليق صوتي
          </span>

          <h1 className="display-font mt-7 text-5xl font-bold leading-[1.08] md:text-7xl">
            أفكار تُكتب بوضوح،
            <br />
            وصوت <span className="text-[#b58a3a]">يوصل الرسالة.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-neutral-600">
            ملف هيفاء صالح اليامي المهني، يضم نماذج من كتابة المحتوى والأفكار
            والحملات والعلاقات الإعلامية، إلى جانب ملف مستقل لنماذج التعليق
            الصوتي بالفصحى والعامية.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/works"
              className="rounded-full bg-neutral-900 px-7 py-3 font-bold text-white"
            >
              استعرض ملف الأعمال
            </Link>
            <Link
              href="/voice-over"
              className="rounded-full border border-neutral-300 px-7 py-3 font-bold"
            >
              نماذج التعليق الصوتي
            </Link>
          </div>
        </div>

        <div className="paper rounded-[2rem] p-7">
          <div className="text-6xl font-bold text-[#b58a3a]">01</div>
          <p className="mt-8 leading-8 text-neutral-600">
            أقدّم خبرة مهنية في المحتوى والاتصال، مع مساحة مستقلة للتعليق
            الصوتي لمن يبحث عن أداء بالفصحى أو باللهجة العامية.
          </p>
        </div>
      </div>
    </section>
  );
}
