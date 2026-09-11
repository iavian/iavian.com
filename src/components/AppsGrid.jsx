import { apps } from '../data/apps'
import AppCard from './AppCard'

export default function AppsGrid() {
  return (
    <section
      id="apps"
      className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-28"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three apps. One philosophy.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-pretty text-slate-400">
          Each product solves a single problem cleanly — no bloat, no
          surveillance, no friction.
        </p>
      </div>

      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  )
}
