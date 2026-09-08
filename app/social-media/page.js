import Link from "next/link";

export default function SocialPage() {
  return (
    <main className="py-20">
      <div className="container-main">
        <span className="text-sm text-[#b58a3a]">الحضور الرقمي</span>
        <h1 className="display-font mt-3 text-5xl font-bold">الحضور الرقمي</h1>
        <p className="mt-6 max-w-2xl leading-8 text-neutral-600">
          نماذج من المحتوى المنشور والحضور الاتصالي الرقمي، مع مساحة لعرض المنشورات والحملات والمساهمات الرقمية بصورة منظمة واحترافية.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="paper rounded-3xl p-8">
            <span className="text-xs font-bold text-[#b58a3a]">01</span>
            <h2 className="mt-3 text-xl font-bold">محتوى ومنشورات رقمية</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              مساحة لعرض نماذج الكتابة والمحتوى المنشور ضمن الحملات والمبادرات المختلفة.
            </p>
          </div>

          <div className="paper rounded-3xl p-8">
            <span className="text-xs font-bold text-[#b58a3a]">02</span>
            <h2 className="mt-3 text-xl font-bold">حملات ومساهمات اتصالية</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              مساحة لعرض المشاركات والمساهمات الرقمية التي تعكس أسلوب العمل في صناعة المحتوى والاتصال.
            </p>
          </div>
        </div>

        <Link
          href="/interviews"
          className="mt-10 inline-block rounded-full bg-neutral-900 px-6 py-3 font-bold text-white"
        >
          استعراض اللقاءات الصحفية ←
        </Link>
      </div>
    </main>
  );
}
