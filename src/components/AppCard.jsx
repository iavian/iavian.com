function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-none text-emerald-400"
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

function LinkPill({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
    >
      {label}
      <svg
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M11 3a1 1 0 100 2h2.586l-7.293 7.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      </svg>
    </a>
  )
}

export default function AppCard({ app }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.06]">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${app.accent}`}
      />

      <div className="flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-300">
          {app.badge}
        </span>
        <div
          className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${app.accent} opacity-90 shadow-lg`}
        />
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-white">
        {app.name}
      </h3>
      <p
        className={`mt-1 bg-gradient-to-r ${app.accent} bg-clip-text text-sm font-medium text-transparent`}
      >
        {app.tagline}
      </p>

      <p className="mt-5 text-sm leading-relaxed text-slate-300">
        {app.description}
      </p>

      <ul className="mt-6 space-y-2.5">
        {app.highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-slate-200"
          >
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        {app.meta && (
          <p className="text-xs font-medium text-slate-400">{app.meta}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-2 border-t border-white/5 pt-4">
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
