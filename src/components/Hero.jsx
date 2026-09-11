export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
          iavian
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
          Small, useful apps
          <br />
          <span className="bg-linear-to-r from-indigo-300 via-rose-300 to-amber-200 bg-clip-text text-transparent">
            built to respect your time.
          </span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-pretty text-slate-400 sm:text-lg">
          A handful of focused products across news and productivity — no
          accounts, no tracking, no clutter. Just tools that do one thing well.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="mailto:apps@iavian.com"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            apps@iavian.com
          </a>
        </div>
      </div>
    </section>
  )
}
