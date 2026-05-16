import Hero from './components/Hero'
import AppsGrid from './components/AppsGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/40">
      <AppsGrid />
      <Hero />
      <Footer />
    </div>
  )
}
