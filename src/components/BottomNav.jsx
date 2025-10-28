import { Home, Book, Trophy, User, PlayCircle } from 'lucide-react';

export default function BottomNav() {
  const items = [
    { label: 'Home', icon: Home },
    { label: 'Journal', icon: Book },
    { label: 'Meditate', icon: PlayCircle },
    { label: 'Rewards', icon: Trophy },
    { label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-4 left-0 right-0 mx-auto max-w-3xl px-4">
      <div className="mx-4 rounded-2xl bg-white/80 backdrop-blur shadow-lg ring-1 ring-slate-200">
        <ul className="grid grid-cols-5">
          {items.map((it) => (
            <li key={it.label} className="flex items-center justify-center">
              <button className="flex flex-col items-center gap-1 py-3 w-full text-slate-600 hover:text-emerald-700">
                <it.icon className="h-5 w-5" />
                <span className="text-[11px]">{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
