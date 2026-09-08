import VoiceOverGrid from "@/components/voice-over/VoiceOverGrid";
import { voiceOverProjects } from "@/data/voiceOver";

export const metadata = {
  title: "التعليق الصوتي | هيفاء صالح اليامي",
  description:
    "ملف نماذج التعليق الصوتي لهيفاء صالح اليامي، بالفصحى واللهجة العامية.",
};

export default function VoiceOverPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-main">
        <span className="text-sm text-[#b58a3a]">ملف التعليق الصوتي</span>
        <h1 className="display-font mt-3 text-5xl font-bold">التعليق الصوتي</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-neutral-600">
          مجموعة من نماذج الأداء الصوتي التي تعكس المرونة في النبرة والإلقاء،
          مع إمكانية تقديم النصوص بالفصحى أو باللهجة العامية بحسب طبيعة المحتوى
          والجمهور.
        </p>

        <div className="mt-8 flex flex-wrap gap-2 text-sm text-neutral-600">
          <span className="rounded-full border border-neutral-300 px-4 py-2">
            فصحى
          </span>
          <span className="rounded-full border border-neutral-300 px-4 py-2">
            عامية
          </span>
          <span className="rounded-full border border-neutral-300 px-4 py-2">
            محتوى رقمي
          </span>
          <span className="rounded-full border border-neutral-300 px-4 py-2">
            سرد وتقديم
          </span>
        </div>

        <div className="mt-12">
          <VoiceOverGrid items={voiceOverProjects} />
        </div>
      </div>
    </main>
  );
}
