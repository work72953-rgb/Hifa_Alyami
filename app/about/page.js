import { profile } from "@/data/profile";
export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="container-main">
        {/* <span className="text-sm text-[#b58a3a]">عن صاحبة الملف</span> */}
        <h1 className="display-font mt-3 text-5xl font-bold">{profile.name}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-neutral-600">
          {profile.bio}
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {profile.skills.map((s) => (
            <div className="paper rounded-2xl p-6" key={s}>
              <h3 className="font-bold">{s}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
