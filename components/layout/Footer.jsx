import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <div className="container-main flex flex-col gap-5 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <div>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <p className="mt-2">ملف مهني في المحتوى والاتصال والتعليق الصوتي</p>
        </div>

        <Link
          href="/contact"
          className="font-semibold text-neutral-800 underline underline-offset-4"
        >
          للتواصل ←
        </Link>
      </div>
    </footer>
  );
}
