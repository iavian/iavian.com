function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-none text-emerald-400/90"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.085l6.79-6.795a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ArrowIcon({ className = 'h-3 w-3' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11 3a1 1 0 100 2h2.586l-7.293 7.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    </svg>
  )
}

function LinkPill({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
    >
      {label}
      <ArrowIcon />
    </a>
  )
}

export default function AppCard({ app }) {
  // The whole card is a link to the primary destination — the web app when
  // there is one, otherwise the first store listing available.
  const primaryHref = app.links.web || app.links.ios || app.links.android

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/6 hover:shadow-2xl hover:shadow-black/40 focus-within:border-white/20">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${app.accent}`}
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className={`h-14 w-14 flex-none rounded-2xl bg-linear-to-br ${app.accent} p-px shadow-lg shadow-black/30`}
        >
          <img
            src={app.icon}
            alt=""
            className="h-full w-full rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
          {app.badge}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {/* Stretched link: the ::after overlay makes the entire card clickable
            while keeping the pills below focusable (they sit above it). */}
        <a
          href={primaryHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          {app.name}
          <span className="sr-only"> — open app</span>
        </a>
      </h3>
      <p
        className={`mt-1.5 bg-linear-to-r ${app.accent} bg-clip-text text-sm font-medium text-transparent`}
      >
        {app.tagline}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        {app.description}
      </p>

      <ul className="mt-6 space-y-2.5">
        {app.highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-slate-300"
          >
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        {app.meta && (
          <p className="text-xs font-medium text-slate-500">{app.meta}</p>
        )}
        <div className="relative z-10 mt-3 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {app.links.web && <LinkPill href={app.links.web} label="Web" />}
          {app.links.ios && <LinkPill href={app.links.ios} label="iOS" />}
          {app.links.android && (
            <LinkPill href={app.links.android} label="Android" />
          )}
        </div>
      </div>
    </article>
  )
}
