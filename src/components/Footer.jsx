export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-white">iavian</p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} iavian.com — All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a
            href="mailto:apps@iavian.com"
            className="text-slate-400 transition hover:text-white"
          >
            apps@iavian.com
          </a>
          <a
            href="https://github.com/vjyanand"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
