import Link from "next/link";

export default function Button({ href, children, variant = "dark" }) {
  const classes = variant === "outline"
    ? "inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-bold transition hover:bg-neutral-100"
    : "inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800";
  return href ? <Link href={href} className={classes}>{children}</Link> : <button className={classes}>{children}</button>;
}
