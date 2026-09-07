import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container-main max-w-3xl">
        <div className="max-w-2xl">
          <h1 className="display-font mt-3 text-5xl font-bold leading-tight">
            لنتحدث عن الفكرة القادمة
          </h1>

          <p className="mt-6 text-lg leading-9 text-neutral-600">
            للتعاون في صناعة المحتوى، العلاقات الإعلامية، الاتصال المؤسسي أو
            تطوير فكرة إبداعية.
          </p>
        </div>

        <div className="paper mt-12 overflow-hidden rounded-3xl">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between gap-6 border-b border-neutral-200 px-7 py-6 transition-colors hover:bg-neutral-50"
            dir="rtl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700 transition-all group-hover:bg-[#b58a3a] group-hover:text-white">
                {profile.mail_icon}
              </div>

              <div>
                <p className="text-lg font-medium text-neutral-500">
                  البريد الإلكتروني
                </p>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  {profile.email}
                </p>
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 border-b border-neutral-200 px-7 py-6 transition-colors hover:bg-neutral-50"
            dir="rtl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700 transition-all group-hover:bg-[#b58a3a] group-hover:text-white">
                {profile.whatsapp_icon}
              </div>

              <div>
                <p className="text-lg font-medium text-neutral-500">
                  واتساب
                </p>
                <p dir="ltr" className="mt-1 text-lg font-bold text-neutral-900">
                  {profile.whatsapp}
                </p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div
            className="flex items-center gap-6 px-7 py-6"
            dir="rtl"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700">
              {profile.location_icon}
            </div>

            <div>
              <p className="text-lg font-medium text-neutral-500">
                الموقع
              </p>
              <p className="mt-1 text-lg font-bold text-neutral-900">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}