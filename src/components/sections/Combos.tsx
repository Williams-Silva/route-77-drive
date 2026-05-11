import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";
import combo from "@/assets/combo.jpg";

export function Combos() {
  return (
    <section id="combos" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border-neon bg-gradient-card p-8 sm:p-14 shadow-card-elevated grain">
          <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-neon/30 blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-neon" />
          <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-neon/40 to-transparent animate-scan" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-ember/20 border border-ember/40 px-4 py-1.5">
                <Zap className="h-3.5 w-3.5 text-ember" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Promo da Estrada</span>
              </div>
              <h2 className="font-display mt-5 text-5xl sm:text-6xl">
                COMBO <span className="text-neon">ROTA 77</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Burger Rota 77 + fritas cheddar + refri gelado.
                A combinação perfeita pra fechar o dia com sabor.
              </p>

              <div className="mt-8 flex items-end gap-4">
                <span className="font-display text-6xl text-neon">R$ 49</span>
                <span className="mb-2 text-xl text-muted-foreground line-through">R$ 72</span>
                <span className="mb-2 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground">-32%</span>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-neon" />
                Promoção válida hoje · enquanto durar o estoque
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5500000000000"
                  className="inline-flex items-center rounded-full bg-gradient-neon px-7 py-3.5 font-bold text-primary-foreground shadow-neon hover:shadow-neon-strong transition-shadow"
                >
                  Pedir esse combo
                </a>
                <a href="#menu" className="inline-flex items-center rounded-full glass px-7 py-3.5 font-semibold text-foreground hover:bg-neon/10">
                  Ver todos
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-neon/30 blur-[80px]" />
              <img src={combo} alt="Combo Rota 77 completo" width={1000} height={700} loading="lazy" className="relative z-10 w-full rounded-3xl shadow-card-elevated" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
