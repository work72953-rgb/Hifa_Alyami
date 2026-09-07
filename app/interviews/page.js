import InterviewGrid from "@/components/interviews/InterviewGrid";
import { interviews } from "@/data/interviews";

export const metadata = {
  title: "اللقاءات الصحفية | ملف الأعمال",
  description: "نماذج من اللقاءات الصحفية المصورة ضمن ملف الأعمال.",
};

export default function InterviewsPage() {
  return (
    <main className="py-20">
      <div className="container-main">
        <div className="max-w-3xl">
          {/* <span className="text-sm font-bold text-[#b58a3a]">العمل الإعلامي</span> */}
          <h1 className="display-font mt-3 text-5xl font-bold">اللقاءات الصحفية</h1>
          <p className="mt-6 leading-8 text-neutral-600">
            مجموعة من اللقاءات الصحفية المصورة التي تعكس مهارات الإعداد والحوار والتقديم وصناعة المحتوى الإعلامي.
          </p>
        </div>

        <div className="mt-12">
          <InterviewGrid interviews={interviews} />
        </div>
      </div>
    </main>
  );
}
