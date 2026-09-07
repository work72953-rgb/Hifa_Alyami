import SectionTitle from "@/components/ui/SectionTitle";
import ImageGallery from "@/components/media/ImageGallery";
import { media } from "@/data/media";

export const metadata = { title: "المعرض الإعلامي | الملف المهني" };

export default function MediaPage() {
  return (
    <section className="section-space">
      <div className="container-page">
        <SectionTitle
          eyebrow="المعرض الإعلامي"
          title="صور ومواد مرئية"
          description="معرض مرن للصور والمواد البصرية المرتبطة بالأعمال والمقابلات والتغطيات."
        />
        <div className="mt-12">
          <ImageGallery items={media} />
        </div>
      </div>
    </section>
  );
}
