import ContentGrid from "@/components/content/ContentGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import { writtenContent } from "@/data/writtenContent";

export const metadata = { title: "المحتوى المكتوب | الملف المهني" };

export default function WrittenContentPage() {
  return (
    <section className="section-space">
      <div className="container-page">
        <SectionTitle
          eyebrow="المحتوى المكتوب"
          title="كتابات وأعمال تحريرية"
          description="مساحة منظمة لعرض المقالات والموضوعات والتحقيقات والمواد التحريرية."
        />
        <div className="mt-12">
          <ContentGrid items={writtenContent} />
        </div>
      </div>
    </section>
  );
}
