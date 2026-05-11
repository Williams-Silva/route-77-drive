import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Particles } from "@/components/Particles";

export function CTAFinal() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-neon/20 blur-[160px]" />
      <Particles count={30} />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs uppercase tracking-[0.3em] text-neon">
          // Última parada
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display mt-4 text-5xl sm:text-7xl lg:text-8xl leading-[0.95]"
        >
          SUA FOME<br />
          ENCONTROU O<br />
          <span className="text-neon">DESTINO CERTO.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Peça agora e descubra por que a Rota 77 está conquistando a cidade — uma mordida de cada vez.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://wa.me/5500000000000"
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-neon px-10 py-5 text-lg font-bold text-primary-foreground shadow-neon-strong animate-pulse-glow"
          >
            <MessageCircle className="h-5 w-5" />
            Fazer Pedido no WhatsApp
          </a>
        </motion.div>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Resposta em segundos · Entrega em 35min
        </p>
      </div>
    </section>
  );
}
