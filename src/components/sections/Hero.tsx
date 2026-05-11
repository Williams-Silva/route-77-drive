import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroBurger from "@/assets/hero-burger.png";
import { Particles } from "@/components/Particles";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-16 grain">
      {/* glow orbs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-neon/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-ember/15 blur-[160px]" />
      <Particles count={40} />

      {/* route 66 highway road graphic */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border-neon glass px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/90">
              Aberto agora · Delivery em 35min
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-6 text-6xl leading-[0.9] sm:text-7xl lg:text-[7.5rem]"
          >
            SEU DESTINO
            <br />
            <span className="text-neon">É O SABOR.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Smash burgers artesanais, combos insanos e delivery rápido para matar sua fome.
            Bem-vindo à <span className="text-foreground font-semibold">Rota 77</span> — onde cada mordida é uma estrada nova.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/5500000000000"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-neon px-8 py-4 font-bold text-primary-foreground shadow-neon-strong animate-pulse-glow"
            >
              Pedir Agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border-neon glass px-8 py-4 font-semibold text-foreground hover:bg-neon/10 transition"
            >
              Ver Cardápio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-neon to-ember" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-neon text-neon" />
                ))}
                <span className="ml-2 font-bold text-foreground">4.9</span>
              </div>
              <p className="text-xs text-muted-foreground">+2.300 clientes na estrada do sabor</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* spinning neon ring */}
          <div className="absolute inset-0 m-auto h-[400px] w-[400px] rounded-full border-2 border-dashed border-neon/40 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-0 m-auto h-[320px] w-[320px] rounded-full bg-neon/30 blur-[100px]" />
          {/* Route 77 badge */}
          <div className="absolute top-4 left-4 z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-background border-2 border-neon font-display shadow-neon rotate-[-12deg]">
            <span className="text-[10px] tracking-widest text-neon">ROTA</span>
            <span className="text-3xl text-foreground leading-none">77</span>
            <span className="text-[8px] tracking-widest text-muted-foreground mt-0.5">EST. SABOR</span>
          </div>
          <motion.img
            src={heroBurger}
            alt="Hambúrguer Rota 77 com bacon e cheddar derretido"
            width={1024}
            height={1024}
            className="relative z-10 w-full max-w-lg drop-shadow-[0_30px_60px_rgba(255,200,0,0.35)] animate-float"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* floating tags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute left-0 bottom-20 z-20 glass rounded-xl p-3"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Smash 100%</p>
            <p className="font-display text-lg text-neon">ANGUS</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute right-0 top-32 z-20 glass rounded-xl p-3"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Entrega</p>
            <p className="font-display text-lg text-neon">35 MIN</p>
          </motion.div>
        </motion.div>
      </div>

      {/* marquee */}
      <div className="relative mt-20 border-y border-neon/20 bg-background/40 py-5 overflow-hidden">
        <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap font-display text-3xl">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-12 items-center">
              {["SMASH BURGERS", "★", "FRITAS CROCANTES", "★", "DELIVERY EXPRESS", "★", "ROTA 77", "★", "100% ARTESANAL", "★"].map((t, i) => (
                <span key={i} className={i % 2 === 0 ? "text-foreground" : "text-neon"}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
