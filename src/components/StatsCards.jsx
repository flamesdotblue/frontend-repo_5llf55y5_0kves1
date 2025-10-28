import { motion } from 'framer-motion';
import { Flame, Timer, Target } from 'lucide-react';

const statVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }),
};

export default function StatsCards({ calmScore, streak, sessions, minutes }) {
  const cards = [
    {
      title: 'Calm Score Today',
      value: calmScore,
      accent: 'from-emerald-400 to-emerald-600',
      icon: Target,
    },
    {
      title: 'Active Streak',
      value: streak + ' days',
      accent: 'from-amber-400 to-amber-600',
      icon: Flame,
    },
    {
      title: 'Sessions Completed',
      value: sessions,
      accent: 'from-sky-400 to-sky-600',
      icon: Timer,
    },
    {
      title: 'Time Meditated',
      value: minutes + ' min',
      accent: 'from-indigo-400 to-indigo-600',
      icon: Timer,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={statVariants}
          custom={i}
          className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-100 p-4 shadow-sm"
        >
          <div className={`absolute inset-x-0 -top-10 h-24 bg-gradient-to-b ${c.accent} opacity-10`} />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">{c.title}</p>
              <p className="mt-2 text-xl md:text-2xl font-semibold text-slate-800">{c.value}</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-white to-slate-50 grid place-items-center shadow-inner">
              <c.icon className="h-5 w-5 text-slate-600" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
