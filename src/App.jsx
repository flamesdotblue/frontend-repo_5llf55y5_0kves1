import { useMemo, useState } from 'react';
import Hero from './components/Hero';
import StatsCards from './components/StatsCards';
import MeditationPanel from './components/MeditationPanel';
import BottomNav from './components/BottomNav';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function App() {
  const [wallet, setWallet] = useState(null);

  // Mock stats
  const stats = {
    calmScore: 86,
    streak: 5,
    sessions: 42,
    minutes: 315,
  };

  const connectWallet = () => {
    // Mock a fake Base address
    const fake = '0x' + Array.from(crypto.getRandomValues(new Uint8Array(20)))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    setWallet(fake);
  };

  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,#e8fff6_0%,transparent_60%)] from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <Hero walletAddress={wallet} onConnect={connectWallet} />

        <main className="mt-8 md:mt-10 space-y-8 md:space-y-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-slate-800">{greeting}, seeker</h2>
              <p className="text-slate-600">A soft space for breath, presence, and gentle progress.</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden md:flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 ring-1 ring-slate-200"
            >
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-slate-700">People meditating right now 🌙  —  1,284</span>
            </motion.div>
          </div>

          <StatsCards calmScore={stats.calmScore} streak={stats.streak} sessions={stats.sessions} minutes={stats.minutes} />

          <MeditationPanel onStart={() => alert('Starting a calming session… (mock)')} />

          <section className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-6 bg-white/70 backdrop-blur ring-1 ring-slate-100">
              <h3 className="text-xl font-serif text-slate-800">Journal</h3>
              <p className="text-slate-600 mt-1">Capture a thought, a breath, a whisper of gratitude.</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {['Calm', 'Grateful', 'Reflective', 'Stressed'].map((m) => (
                  <button key={m} className="rounded-full px-3 py-1.5 text-sm bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800 transition">
                    {m}
                  </button>
                ))}
              </div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition">Write Entry</button>
              <div className="mt-6 space-y-2">
                {["A slow morning", "Breath before code", "Gratitude for quiet"].map((t, i) => (
                  <div key={t} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <div className="truncate text-slate-700 blur-[1px]">{t}</div>
                    <span className="text-xs text-slate-500">{i + 1}d ago</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-br from-amber-50 via-rose-50 to-white ring-1 ring-amber-100">
              <h3 className="text-xl font-serif text-slate-800">Achievements</h3>
              <p className="text-slate-600 mt-1">Daily rewards, weekly milestones, a gentle path of growth.</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-100 grid place-items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.25),transparent_60%)]" />
                    <span className="relative z-10 text-sm text-slate-700">Badge {i}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-white/60 ring-1 ring-slate-200 overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-emerald-400 to-sky-500" />
              </div>
              <p className="mt-2 text-sm text-slate-600">Calm Streak — Level 3</p>
            </div>
          </section>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

export default App;
