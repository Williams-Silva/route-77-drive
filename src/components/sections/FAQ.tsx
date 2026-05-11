import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const items = [
  { q: "Qual o horário de funcionamento?", a: "Todos os dias das 18h às 00h. Sextas e sábados estendemos até 02h." },
  { q: "Quanto tempo leva o delivery?", a: "Tempo médio de 35 minutos. Em horários de pico pode chegar a 50 min — sempre avisamos no WhatsApp." },
  { q: "Quais formas de pagamento aceitam?", a: "Pix, dinheiro, débito, crédito e vale-refeição (Sodexo, Alelo, VR e Ticket)." },
  { q: "Tem taxa de entrega?", a: "Bairros próximos: grátis acima de R$ 60. Demais bairros, calculamos no momento do pedido." },
  { q: "Posso montar meu próprio combo?", a: "Pode sim! Fala com nosso atendimento no WhatsApp que a gente monta junto contigo." },
  { q: "Como entro em contato?", a: "Pelo WhatsApp (link no botão) ou pelas redes sociais @rota77burguer." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neon">// Dúvidas frequentes</p>
          <h2 className="font-display mt-3 text-5xl sm:text-6xl">PERGUNTAS DA <span className="text-neon">ESTRADA</span></h2>
        </motion.div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-2xl border bg-gradient-card transition-all ${isOpen ? "border-neon/60 shadow-neon" : "border-border"}`}
              >
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between p-5 text-left">
                  <span className="font-semibold text-foreground">{it.q}</span>
                  <Plus className={`h-5 w-5 text-neon transition-transform ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{it.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
