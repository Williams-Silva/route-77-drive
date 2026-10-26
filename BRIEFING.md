# BRIEFING — Rota 77

Landing page de hamburgueria temática, só delivery, em Manaus.
Montado por entrevista em 2026-10-25. Itens marcados **[PENDENTE]** ainda não têm resposta ou dado real.

## 1. Marca

- **Nome oficial:** Rota 77 (o código usa "Rota 77 Hamburgueria" em título, rodapé e meta tags; "Route 77" aparece só em um comentário do Hero e no nome da pasta/repositório, e não é grafia da marca).
- **Conceito/tema:** "Sabor da Estrada" — estrada, viagem, destino. A linguagem do site (Viajantes satisfeitos, Perguntas da estrada, Est. Sabor) segue esse tema.
- **Slogan atual no código:** "Seu destino é o sabor". **[PENDENTE]** confirmar se fica ou se vira "Sabor da Estrada".
- **Logo:** existe, fornecida pelo cliente. **[PENDENTE]** receber o arquivo (hoje o Hero usa um selo "ROTA 77 · EST. SABOR" feito em CSS).

## 2. Negócio e diferencial

- Hamburgueria temática, **somente delivery por enquanto**, com **frota própria** de motoboys.
- Não há salão nem retirada no balcão. Portanto o endereço fictício "Rua das Estradas, 77" (Footer e exemplo de chat no Delivery) não se aplica e deve sair ou ser trocado.
- Diferencial declarado: o tema "Sabor da Estrada". **[PENDENTE]** confirmar se há outros diferenciais reais (tipo de carne, receita, tempo de entrega).

## 3. Público e região

- Jovens e famílias da região de **Manaus**.
- **[PENDENTE]** bairros atendidos e regra de taxa de entrega.

## 4. Objetivo da página

- **Ação principal:** pedido direto pelo WhatsApp. Sucesso = conversas iniciadas.
- **Ação secundária:** seguir a marca nas redes (Instagram e Facebook).
- Os botões de pedido já enviam mensagem pré-preenchida por seção, para saber de onde veio o pedido.

## 5. Seções

Ordem atual em `src/routes/index.tsx`: Navbar, Hero, Menu, Combos, Delivery, Testimonials, Social, FAQ, CTAFinal, Footer.

| Seção | Decisão |
|---|---|
| Hero, Menu, Combos, Delivery, Social, FAQ, CTAFinal, Footer | Manter |
| Testimonials | **Remover ou ocultar.** Os depoimentos atuais são fictícios e o cliente não tem depoimentos reais. Voltar só com feedback real. |
| Bloco/combo para família | **Não criar.** |

## 6. Conteúdo disponível

| Item | Situação |
|---|---|
| Logo | Existe. **[PENDENTE]** envio do arquivo. |
| Fotos | Reais, existem. **[PENDENTE]** envio. Hoje há 5 imagens em `src/assets/` (provisórias). |
| Cardápio e preços | **Inventados**, mantidos por enquanto: Burger Rota 77 R$ 32, Carga Pesada R$ 42, Fritas Cheddar R$ 24, mais os combos. Validar antes de publicar. |
| FAQ (horário 18h–00h, até 02h sex/sáb; entrega em 35 min; pagamentos; taxa grátis acima de R$ 60) | **Não confirmado.** Tratar como provisório. |
| Depoimentos | Não existem. |

## 7. Integrações

| Integração | Situação |
|---|---|
| WhatsApp | WhatsApp comum (não Business). **[PENDENTE]** número real. Hoje é o placeholder `5500000000000` em `src/lib/site.ts`. |
| Instagram | Existe. **[PENDENTE]** confirmar o handle (código usa `@rota77burguer`). |
| Facebook | Existe. **[PENDENTE]** handle/URL. O código não tem Facebook. |
| TikTok | **Não é rede da marca.** O código tem TikTok (`site.ts`, Social, Footer) e deve ser removido ou trocado por Facebook. |
| N8N | Pretende automatizar. **[PENDENTE]** definir o que automatizar (atendimento, registro de pedido, aviso) e se a página chama webhook. |
| Cardápio digital | Quer integrar. **[PENDENTE]** definir ferramenta e formato. |

## 8. Estado do código

**Pronto**
- Landing completa de 10 blocos, responsiva, com animações (TanStack Start, React, Tailwind, framer-motion), preparada para Cloudflare.
- `src/lib/site.ts` centraliza o número do WhatsApp, os handles e `whatsappLink(mensagem)`.
- Botões de pedido da Navbar, Hero, Combos e CTAFinal usam `whatsappLink` (commit `aa08c0f`).
- Metadados básicos (título, descrição, Open Graph) em `src/routes/index.tsx`.
- `bun install --frozen-lockfile && bun run build` passa sem erros.

**Falta**
- Número real do WhatsApp (um único ponto de troca: `WHATSAPP_NUMBER`).
- O Footer ainda tem `wa.me/5500000000000` fixo, fora do `site.ts`.
- Links `#` das redes na seção Social e no Footer, e troca de TikTok por Facebook.
- Substituir o selo CSS e as imagens pelo logo e pelas fotos reais.
- Remover ou ocultar Testimonials.
- Remover o endereço "Rua das Estradas, 77" (Footer e chat de exemplo no Delivery).
- Validar cardápio, preços, combos e FAQ.
- Meta tags: sem imagem Open Graph, sem favicon próprio. Revisar título/slogan.
- Integração N8N e cardápio digital (nada implementado).
- Revisão do `MANUAL.md` (segurança, SEO, acessibilidade, conversão) antes da entrega.

## 9. Próximos passos sugeridos

1. Cliente envia: número do WhatsApp, logo, fotos reais, handles do Instagram e Facebook.
2. Confirmar slogan, horário, pagamentos, taxa e bairros.
3. Ajustar o código: número, redes, Footer, Testimonials, endereço, imagens.
4. Definir fluxo do N8N e do cardápio digital.
5. Revisão final pelo `MANUAL.md` e publicação.
