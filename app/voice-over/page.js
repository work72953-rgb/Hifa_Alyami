import VoiceOverGrid from "@/components/voice-over/VoiceOverGrid";
import { voiceOverProjects } from "@/data/voiceOver";

export const metadata = {
  title: "التعليق الصوتي | ملف الأعمال",
  description:
    "نماذج من أعمال التعليق الصوتي وإنتاج المحتوى الإعلامي.",
};

export default function VoiceOverPage() {
  return (
    <main className="py-20">
      <div className="container-main">
        <div className="max-w-3xl">
          {/* <span className="text-sm font-medium text-black/50">
            ملف الأعمال
          </span> */}

          <h1 className="display-font mt-3 text-5xl font-bold leading-tight md:text-6xl">
            التعليق الصوتي
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
            نماذج من أعمال التعليق الصوتي التي تعكس القدرة على تقديم
            المحتوى بأسلوب واضح ومؤثر، مع توظيف الصوت بما يتناسب مع
            طبيعة الرسالة والمحتوى.
          </p>
        </div>

        <div className="mt-14">
          <VoiceOverGrid projects={voiceOverProjects} />
        </div>
      </div>
    </main>
  );
}