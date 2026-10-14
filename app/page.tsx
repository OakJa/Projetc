import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold text-emerald-800">ระบบทะเบียน</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">
            ภาพรวม
          </h1>
          <p className="mt-2 text-slate-600">จัดการข้อมูลนักศึกษาและข่าวสาร</p>
        </div>
        <Link
          href="/students/create"
          className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md bg-emerald-800 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 sm:self-auto"
        >
          <span aria-hidden="true" className="text-lg leading-none">+</span>
          เพิ่มนักศึกษา
        </Link>
      </div>

      <section className="mt-8" aria-labelledby="quick-links-heading">
        <h2 id="quick-links-heading" className="mb-4 text-lg font-semibold text-slate-900">
          เมนูหลัก
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/students"
            className="group flex min-h-36 items-center justify-between rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-emerald-700"
          >
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-md bg-emerald-100 text-sm font-bold text-emerald-900">
                01
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">นักศึกษา</h3>
                <p className="mt-1 text-sm text-slate-600">รายการและข้อมูลนักศึกษา</p>
              </div>
            </div>
            <span aria-hidden="true" className="text-xl text-slate-400 transition-transform group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href="/blogs"
            className="group flex min-h-36 items-center justify-between rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-amber-600"
          >
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-md bg-amber-100 text-sm font-bold text-amber-900">
                02
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">ข่าวสาร</h3>
                <p className="mt-1 text-sm text-slate-600">บทความและประกาศล่าสุด</p>
              </div>
            </div>
            <span aria-hidden="true" className="text-xl text-slate-400 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
