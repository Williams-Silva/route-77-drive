import { motion } from "framer-motion";
import { Flame, Plus } from "lucide-react";
import burgerRota from "@/assets/burger-rota77.jpg";
import burgerCarga from "@/assets/burger-carga.jpg";
import fries from "@/assets/fries.jpg";

const items = [
  { name: "Burger Rota 77", desc: "Pão brioche, smash duplo angus, cheddar derretido, cebola caramelizada e molho da casa.", price: "R$ 32", img: burgerRota, tag: "Mais pedido" },
  { name: "Burger Carga Pesada", desc: "Triplo smash, bacon crocante, onion rings, cheddar e barbecue defumado.", price: "R$ 42", img: burgerCarga, tag: "Insano" },
  { name: "Fritas Cheddar", desc: "Batata rústica crocante coberta com cheddar artesanal e bacon em flocos.", price: "R$ 24", img: fries, tag: "Crispy" },
];

export function Menu() {
  return (
    <section id="menu" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neon">// O Cardápio</p>
            <h2 className="font-display mt-3 text-5xl sm:text-7xl">
              ASSINATURAS DA <span className="text-neon">CASA</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Receitas autorais, ingredientes selecionados e o ponto perfeito do smash.
            Cada item foi feito pra virar destino certo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-card border border-border shadow-card-elevated"
            >
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 rounded-full bg-neon px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                <Flame className="h-3 w-3" /> {item.tag}
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-transparent to-card/80" />
              </div>
              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-foreground">{item.name}</h3>
                  <span className="font-display text-2xl text-neon">{item.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{item.desc}</p>
                <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border-neon glass py-3 text-sm font-semibold text-foreground transition hover:bg-neon hover:text-primary-foreground">
                  <Plus className="h-4 w-4" /> Adicionar ao pedido
                </button>
              </div>
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: "inset 0 0 60px oklch(0.88 0.19 95 / 0.15)" }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
