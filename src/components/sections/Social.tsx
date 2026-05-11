import { motion } from "framer-motion";
import { Instagram, Music2 } from "lucide-react";
import burgerRota from "@/assets/burger-rota77.jpg";
import burgerCarga from "@/assets/burger-carga.jpg";
import fries from "@/assets/fries.jpg";
import combo from "@/assets/combo.jpg";

const grid = [burgerRota, burgerCarga, fries, combo, burgerCarga, burgerRota];

export function Social() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-neon">// Comunidade</p>
            <h2 className="font-display mt-3 text-5xl sm:text-6xl">A ROTA TÁ <span className="text-neon">BOMBANDO</span></h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Marca a Rota 77 nos teus stories, posta no TikTok com a hashtag <span className="text-neon">#FomeNaRota</span>
              e concorre a combos toda semana.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 font-semibold text-foreground hover:bg-neon/10 border-neon">
                <Instagram className="h-4 w-4 text-neon" /> @rota77burguer
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 font-semibold text-foreground hover:bg-neon/10 border-neon">
                <Music2 className="h-4 w-4 text-neon" /> @rota77
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-3 gap-3">
            {grid.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border"
              >
                <img src={src} alt="Post Rota 77" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-full glass-strong px-2 py-0.5 text-[10px] font-semibold text-foreground">REELS</span>
                  <Instagram className="h-4 w-4 text-neon" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
