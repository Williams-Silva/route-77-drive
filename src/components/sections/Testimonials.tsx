import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const data = [
  { name: "Lucas M.", role: "Universitário", text: "Pedi às 23h durante a madruga estudando. Chegou em 28min, ainda quente. Salvou minha noite.", rating: 5 },
  { name: "Camila & João", role: "Casal", text: "Virou nosso programa de sexta. O Carga Pesada é um absurdo de bom — bacon na medida certa.", rating: 5 },
  { name: "GamerRyu", role: "Streamer", text: "Patrocinou minha live sem patrocinar. O combo aguenta uma maratona inteira de souls-like.", rating: 5 },
  { name: "Família Andrade", role: "Cliente fiel", text: "Pedimos toda semana. Atendimento no WhatsApp é rápido, comida sempre impecável.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon">// Quem já passou pela Rota</p>
          <h2 className="font-display mt-3 text-5xl sm:text-6xl">VIAJANTES <span className="text-neon">SATISFEITOS</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl bg-gradient-card border border-border p-6 shadow-card-elevated"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-neon/20" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-neon text-neon" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-neon font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
