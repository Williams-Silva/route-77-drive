import { motion } from "framer-motion";
import { Bike, MessageCircle, Timer } from "lucide-react";

export function Delivery() {
  return (
    <section id="delivery" className="relative py-32 overflow-hidden">
      <div className="absolute -top-40 right-1/4 h-[400px] w-[400px] rounded-full bg-ember/15 blur-[140px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neon">// Delivery</p>
          <h2 className="font-display mt-3 text-5xl sm:text-6xl">
            DA COZINHA<br />
            PRA SUA <span className="text-neon">PORTA</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Pedido direto no WhatsApp, sem app, sem cadastro.
            Confirmamos em segundos e despachamos em motos exclusivas
            pra chegar quente, suculento e no tempo certo.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: MessageCircle, t: "Atendimento humano", d: "Tira dúvida, monta combo, sugere acompanhamento." },
              { icon: Timer, t: "Em até 35 minutos", d: "Tempo médio confirmado pelos clientes da semana." },
              { icon: Bike, t: "Frota própria", d: "Motoboys identificados, embalagem térmica exclusiva." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-neon shadow-neon">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-neon/30 blur-[100px]" />
          {/* Phone mockup */}
          <div className="relative mx-auto w-[300px] rounded-[3rem] border-4 border-foreground/80 bg-background p-3 shadow-card-elevated">
            <div className="overflow-hidden rounded-[2.2rem] bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-neon">
                  <span className="text-xs font-bold text-primary-foreground">R7</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Rota 77 · Online</p>
                  <p className="text-[10px] text-neon">digitando…</p>
                </div>
              </div>
              <div className="p-4 space-y-3 min-h-[380px]">
                <Msg side="me">Oi! Quero o combo Rota 77 🍔</Msg>
                <Msg side="them">Boa! Bate certinho 🤘 Endereço de entrega?</Msg>
                <Msg side="me">Rua das Estradas, 77</Msg>
                <Msg side="them">Show! Em <b>32 min</b> tá aí 🔥</Msg>
                <div className="rounded-2xl bg-gradient-neon p-3 text-primary-foreground shadow-neon">
                  <p className="text-[10px] uppercase tracking-widest opacity-70">Pedido confirmado</p>
                  <p className="font-display text-xl">R$ 49,00</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Msg({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "me" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs ${side === "me" ? "bg-gradient-neon text-primary-foreground rounded-tr-sm" : "bg-secondary text-foreground rounded-tl-sm"}`}>
        {children}
      </div>
    </div>
  );
}
