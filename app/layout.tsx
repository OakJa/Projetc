import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ระบบจัดการนักศึกษา",
  description: "ระบบจัดการข้อมูลนักศึกษาและข่าวสาร",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="min-h-screen">
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex min-w-0 items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-emerald-800 text-sm font-bold text-white">
                  S
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-slate-950 sm:text-base">
                    Student Office
                  </span>
                  <span className="hidden text-xs text-slate-500 sm:block">
                    ระบบจัดการนักศึกษา
                  </span>
                </span>
              </Link>
              <nav aria-label="เมนูหลัก" className="flex items-center gap-1 sm:gap-2">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  ภาพรวม
                </Link>
                <Link
                  href="/students"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  นักศึกษา
                </Link>
                <Link
                  href="/blogs"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  ข่าวสาร
                </Link>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
