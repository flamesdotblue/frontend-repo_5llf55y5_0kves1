import { motion, useCycle } from 'framer-motion';
import { PlayCircle, Volume2 } from 'lucide-react';

export default function MeditationPanel({ onStart }) {
  const [phase, cyclePhase] = useCycle('inhale', 'exhale');

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 p-6 ring-1 ring-slate-100 overflow-hidden">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-300/20 blur-2xl" />
      <div className="absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-indigo-300/20 blur-2xl" />

      <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-serif text-slate-800">Guided Breathing</h3>
          <p className="text-slate-600">Follow the expanding orb. Inhale — hold — exhale. Find your rhythm.</p>
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 shadow-lg shadow-emerald-600/20 transition"
            >
              <PlayCircle className="h-5 w-5" /> Start Meditation
            </button>
            <button
              onClick={() => cyclePhase()}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur text-slate-700 px-4 py-2 ring-1 ring-slate-200"
            >
              <Volume2 className="h-4 w-4" /> Sound: Calm Waves
            </button>
          </div>
        </div>

        <div className="grid place-items-center py-2">
          <motion.div
            animate={{
              scale: phase === 'inhale' ? 1.1 : 0.9,
              boxShadow: [
                '0 0 0 0 rgba(16,185,129,0.25)',
                '0 0 0 20px rgba(16,185,129,0)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            className="relative h-40 w-40 md:h-56 md:w-56 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400"
          >
            <div className="absolute inset-0 rounded-full bg-white/20" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)]" />
          </motion.div>
          <p className="mt-3 text-sm text-slate-500">{phase === 'inhale' ? 'Inhale…' : 'Exhale…'}</p>
        </div>
      </div>
    </div>
  );
}
