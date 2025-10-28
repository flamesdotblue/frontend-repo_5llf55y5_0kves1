import { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ walletAddress, onConnect }) {
  const shortAddress = useMemo(() => {
    if (!walletAddress) return null;
    return walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4);
  }, [walletAddress]);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/lR2SoNOZNjXF5xUj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to warm the scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-emerald-50/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-serif tracking-tight text-slate-800 drop-shadow-sm"
        >
          Find your peace, on-chain ✧
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-slate-600 max-w-xl"
        >
          Breathe, journal, and meditate with gentle animations and mindful rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6"
        >
          {walletAddress ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-emerald-700 shadow-sm ring-1 ring-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Connected: {shortAddress}
            </span>
          ) : (
            <button
              onClick={onConnect}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 shadow-lg shadow-emerald-600/20 transition"
            >
              Connect Wallet
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
