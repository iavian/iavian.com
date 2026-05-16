export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
          iavian
        </p>
        <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-7xl">
          Small, useful apps
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-rose-300 to-amber-200 bg-clip-text text-transparent">
            built to respect your time.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          A handful of focused products across news and productivity —
          no accounts, no tracking, no clutter. Just tools that do one
          thing well.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:apps@iavian.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            apps@iavian.com
          </a>
        </div>
      </div>
    </section>
  )
}
