import { Flame, Instagram, MapPin, MessageCircle, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-neon shadow-neon">
                <Flame className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="font-display text-2xl">ROTA <span className="text-neon">77</span></p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Smash burgers artesanais, atitude urbana e delivery rápido. Seu destino é o sabor.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neon mb-4">Navegação</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#menu" className="hover:text-neon">Cardápio</a></li>
              <li><a href="#combos" className="hover:text-neon">Combos</a></li>
              <li><a href="#delivery" className="hover:text-neon">Delivery</a></li>
              <li><a href="#faq" className="hover:text-neon">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neon mb-4">Funcionamento</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Seg–Qui · 18h às 00h</li>
              <li>Sex–Sáb · 18h às 02h</li>
              <li>Domingo · 18h às 23h</li>
              <li className="flex items-center gap-2 pt-1"><MapPin className="h-3.5 w-3.5 text-neon" /> Rua das Estradas, 77</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neon mb-4">Conecta</p>
            <div className="flex gap-3">
              <a href="https://wa.me/5500000000000" className="grid h-10 w-10 place-items-center rounded-full glass border-neon hover:bg-neon hover:text-primary-foreground transition"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full glass border-neon hover:bg-neon hover:text-primary-foreground transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full glass border-neon hover:bg-neon hover:text-primary-foreground transition"><Music2 className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Rota 77 Hamburgueria. Todos os direitos reservados.</p>
          <p className="text-xs text-muted-foreground">Feito com <span className="text-neon">fogo</span> 🔥</p>
        </div>
      </div>
    </footer>
  );
}
