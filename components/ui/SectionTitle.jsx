export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="mb-3 text-sm font-bold tracking-widest text-[var(--accent-dark)]">{eyebrow}</p>}
      <h1 className="text-balance text-4xl font-black leading-tight md:text-6xl">{title}</h1>
      {description && <p className="mt-5 text-lg leading-9 text-[var(--muted)]">{description}</p>}
    </div>
  );
}
