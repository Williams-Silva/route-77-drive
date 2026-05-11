import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { Combos } from "@/components/sections/Combos";
import { Delivery } from "@/components/sections/Delivery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Social } from "@/components/sections/Social";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rota 77 Hamburgueria — Seu destino é o sabor" },
      { name: "description", content: "Smash burgers artesanais, combos insanos e delivery rápido em até 35min. Peça já pelo WhatsApp na Rota 77 Hamburgueria." },
      { property: "og:title", content: "Rota 77 Hamburgueria — Seu destino é o sabor" },
      { property: "og:description", content: "Smash burgers artesanais, combos insanos e delivery rápido em 35 minutos." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <Menu />
      <Combos />
      <Delivery />
      <Testimonials />
      <Social />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
