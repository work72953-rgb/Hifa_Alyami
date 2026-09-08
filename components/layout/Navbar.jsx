"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpLeft } from "lucide-react";
import { navigation } from "@/data/navigation";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#f7f4ee]/90 backdrop-blur-xl transition-shadow duration-300 hover:shadow-sm">
      {" "}
      <div className="container-main flex h-20 items-center justify-between">
        {" "}
        {/* Logo */}{" "}
        <Link
          href="/"
          className="group relative flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          {" "}
          <span className="display-font text-2xl font-bold tracking-tight text-neutral-950 transition-transform duration-300 group-hover:-translate-y-0.5">
            {" "}
            هيفاء اليامي{" "}
          </span>{" "}
          <span className="absolute -bottom-1 right-0 h-[2px] w-0 bg-neutral-950 transition-all duration-300 group-hover:w-full" />{" "}
        </Link>{" "}
        {/* Desktop Navigation */}{" "}
        <nav className="hidden items-center gap-2 md:flex">
          {" "}
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group relative flex items-center px-3 py-2 text-sm font-semibold text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-950"
            >
              {" "}
              {n.label} {/* Animated underline */}{" "}
              <span className="absolute bottom-0 left-3 right-3 h-[1.5px] origin-right scale-x-0 bg-neutral-950 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />{" "}
            </Link>
          ))}{" "}
          {/* Contact CTA */}{" "}
          <Link
            href="/contact"
            className="group mr-2 flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/10 active:translate-y-0"
          >
            {" "}
            <span>تواصل معي</span>{" "}
            <ArrowUpLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
            />{" "}
          </Link>{" "}
        </nav>{" "}
        {/* Mobile Menu Button */}{" "}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300/80 bg-white/40 text-neutral-800 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white active:scale-95 md:hidden"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {" "}
          {open ? (
            <X
              size={21}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          ) : (
            <Menu
              size={21}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          )}{" "}
        </button>{" "}
      </div>{" "}
      {/* Mobile Navigation */}{" "}
      <div
        className={`overflow-hidden border-t border-neutral-200/60 bg-[#f7f4ee]/95 transition-all duration-300 md:hidden ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        {" "}
        <nav className="container-main py-5">
          {" "}
          <div className="grid gap-1">
            {" "}
            {navigation.map((n, index) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-neutral-700 transition-all duration-300 hover:bg-white hover:px-5 hover:text-neutral-950"
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
              >
                {" "}
                <span>{n.label}</span>{" "}
                <ArrowUpLeft
                  size={17}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />{" "}
              </Link>
            ))}{" "}
            {/* Mobile CTA */}{" "}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
            >
              {" "}
              <span>تواصل معي</span> <ArrowUpLeft size={16} />{" "}
            </Link>{" "}
          </div>{" "}
        </nav>{" "}
      </div>{" "}
    </header>
  );
}
