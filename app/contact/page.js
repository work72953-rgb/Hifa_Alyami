import { profile } from "@/data/profile";
export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container-main max-w-3xl">
        {/* <span className="text-sm text-[#b58a3a]">تواصل</span> */}
        <h1 className="display-font mt-3 text-5xl font-bold">
          لنتحدث عن الفكرة القادمة
        </h1>
        <p className="mt-6 text-lg leading-9 text-neutral-600">
          للتعاون في صناعة المحتوى، العلاقات الإعلامية، الاتصال المؤسسي أو تطوير
          فكرة إبداعية.
        </p>
        <div className="mt-10 paper rounded-3xl p-8">
          <p className="text-sm text-neutral-500">البريد الإلكتروني</p>
          <a
            className="mt-2 block text-xl font-bold underline"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <p className="mt-6 text-sm text-neutral-500">الموقع</p>
          <p className="mt-2 text-xl font-bold">{profile.location}</p>
        </div>
      </div>
    </main>
  );
}
