import { motion } from "framer-motion";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Cardápio", href: "#menu" },
  { label: "Combos", href: "#combos" },
  { label: "Delivery", href: "#delivery" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass-strong px-5 py-3 sm:px-7">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-neon shadow-neon">
            <Flame className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-none">
            <p className="font-display text-xl text-foreground">ROTA <span className="text-neon">77</span></p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Hamburgueria</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-neon transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-neon px-5 py-2 text-sm font-bold text-primary-foreground shadow-neon hover:shadow-neon-strong transition-shadow"
        >
          Pedir agora
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-auto mt-2 max-w-7xl glass-strong rounded-2xl p-5 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/5500000000000" className="rounded-full bg-gradient-neon px-5 py-2 text-center font-bold text-primary-foreground">
            Pedir agora
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
