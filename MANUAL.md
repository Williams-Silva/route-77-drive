# MANUAL DE PADRÕES DE DESENVOLVIMENTO WEB

*WC Dev TEC | Sites, Landing Pages e Sistemas Web*

**Versão 1.0 — Checklist profissional de qualidade**

Objetivo: estabelecer um padrão de desenvolvimento que priorize segurança, rapidez, usabilidade, acessibilidade, SEO, conversão, manutenção e qualidade de entrega.

## Como utilizar este manual

Prioridades:

☐ CRÍTICA — requisito indispensável para segurança, funcionamento ou conformidade.

☐ ALTA — requisito esperado em uma entrega profissional.

☐ MÉDIA — recomendação conforme o escopo e o orçamento.

☐ CONDICIONAL — aplicar quando houver login, banco de dados, pagamentos, APIs ou dados pessoais.

## 1. Planejamento do projeto

- **☐ [ALTA]** Definir o objetivo principal do projeto.
- **☐ [ALTA]** Identificar público-alvo, necessidades e jornada do usuário.
- **☐ [ALTA]** Definir tipo de projeto, páginas, funcionalidades e entregáveis.
- **☐ [ALTA]** Definir identidade visual, cores, fontes, imagens e tom de comunicação.
- **☐ [ALTA]** Definir CTA principal: orçamento, WhatsApp, compra, cadastro ou agendamento.
- **☐ [ALTA]** Definir tecnologias, hospedagem, domínio, prazo e orçamento.
- **☐ [ALTA]** Registrar o que está incluído e o que não está incluído.
- **☐ [ALTA]** Definir critérios de aprovação, garantia e manutenção.

## 2. Arquitetura e organização do código

- **☐ [ALTA]** Organizar pastas, componentes, páginas, estilos, serviços e utilitários.
- **☐ [ALTA]** Usar nomes claros e consistentes para arquivos, funções e variáveis.
- **☐ [ALTA]** Evitar código duplicado, arquivos gigantes e dependências desnecessárias.
- **☐ [ALTA]** Separar apresentação, lógica, integrações e configurações.
- **☐ [CRÍTICA]** Nunca colocar senhas, tokens ou chaves privadas no código.
- **☐ [ALTA]** Revisar e testar todo código gerado por inteligência artificial.
- **☐ [ALTA]** Manter README e instruções de instalação atualizados.

## 3. Design e identidade visual

- **☐ [ALTA]** Respeitar a identidade visual e os materiais fornecidos pelo cliente.
- **☐ [ALTA]** Manter consistência de cores, fontes, espaçamentos, ícones e botões.
- **☐ [ALTA]** Usar hierarquia visual clara.
- **☐ [ALTA]** Evitar excesso de efeitos, animações e elementos decorativos.
- **☐ [ALTA]** Garantir contraste adequado entre texto e fundo.
- **☐ [ALTA]** Usar imagens autorizadas, relevantes e de boa qualidade.
- **☐ [MÉDIA]** Criar estados hover, focus, loading, erro e sucesso.

## 4. Segurança

- **☐ [CRÍTICA]** Utilizar HTTPS e verificar o certificado SSL.
- **☐ [CRÍTICA]** Manter segredos fora do frontend, GitHub e arquivos públicos.
- **☐ [CRÍTICA]** Usar variáveis de ambiente corretamente; lembrar que VITE_* é público.
- **☐ [CRÍTICA]** Validar dados no frontend e novamente no backend.
- **☐ [CRÍTICA]** Usar consultas parametrizadas e proteção contra SQL Injection.
- **☐ [CRÍTICA]** Proteger contra XSS, CSRF, abuso de API e acesso não autorizado.
- **☐ [CRÍTICA]** Aplicar autenticação e autorização no servidor quando necessário.
- **☐ [CRÍTICA]** Nunca armazenar senhas em texto puro.
- **☐ [CRÍTICA]** Proteger uploads, webhooks, endpoints e operações administrativas.
- **☐ [ALTA]** Configurar cabeçalhos de segurança quando aplicável.
- **☐ [ALTA]** Limitar tentativas de login, requisições e ações sensíveis.
- **☐ [ALTA]** Não exibir stack traces, senhas ou detalhes internos em produção.
- **☐ [ALTA]** Verificar vulnerabilidades das dependências.
- **☐ [CONDICIONAL]** Configurar RLS e políticas de acesso no Supabase ou banco equivalente.

## 5. Performance e velocidade

- **☐ [ALTA]** Comprimir e redimensionar imagens.
- **☐ [ALTA]** Preferir WebP ou AVIF quando adequado.
- **☐ [ALTA]** Definir width e height para evitar deslocamento de layout.
- **☐ [ALTA]** Usar lazy loading para imagens fora da área inicial.
- **☐ [ALTA]** Evitar JavaScript, CSS, fontes e bibliotecas desnecessárias.
- **☐ [ALTA]** Otimizar carregamento de scripts e componentes pesados.
- **☐ [ALTA]** Usar cache, compressão e CDN quando apropriado.
- **☐ [ALTA]** Evitar chamadas duplicadas à API.
- **☐ [ALTA]** Testar em celular e internet lenta.
- **☐ [ALTA]** Avaliar Core Web Vitals: LCP, INP e CLS.
- **☐ [ALTA]** Executar PageSpeed Insights ou Lighthouse antes da entrega.

## 6. Responsividade

- **☐ [ALTA]** Testar celular pequeno, celular grande, tablet, notebook e desktop.
- **☐ [ALTA]** Evitar rolagem horizontal e larguras fixas desnecessárias.
- **☐ [ALTA]** Adaptar menus, grids, imagens, textos, botões e formulários.
- **☐ [ALTA]** Testar orientação horizontal e zoom.
- **☐ [ALTA]** Verificar elementos sobrepostos ou cortados.
- **☐ [ALTA]** Garantir área de toque adequada para botões.

## 7. UX/UI e usabilidade

- **☐ [ALTA]** Garantir navegação simples e previsível.
- **☐ [ALTA]** Usar títulos claros e textos objetivos.
- **☐ [ALTA]** Destacar benefícios em vez de apenas listar características.
- **☐ [ALTA]** Manter CTA visível e compreensível.
- **☐ [ALTA]** Mostrar estados de carregamento, erro, sucesso e vazio.
- **☐ [ALTA]** Usar labels claros em formulários.
- **☐ [ALTA]** Evitar exigir dados desnecessários.
- **☐ [ALTA]** Não criar links ou botões sem função.
- **☐ [ALTA]** Revisar ortografia e linguagem do público-alvo.

## 8. Acessibilidade

- **☐ [ALTA]** Usar HTML semântico.
- **☐ [ALTA]** Organizar títulos em ordem lógica.
- **☐ [ALTA]** Adicionar alt descritivo em imagens relevantes.
- **☐ [ALTA]** Garantir navegação por teclado e foco visível.
- **☐ [ALTA]** Usar contraste adequado.
- **☐ [ALTA]** Não depender apenas de cores para transmitir informação.
- **☐ [ALTA]** Associar labels aos campos de formulário.
- **☐ [ALTA]** Respeitar redução de movimento quando aplicável.
- **☐ [ALTA]** Usar ARIA somente quando necessário.
- **☐ [ALTA]** Preferir button e a em vez de div clicável.

## 9. SEO

- **☐ [ALTA]** Definir title único e relevante para cada página.
- **☐ [ALTA]** Criar meta description adequada.
- **☐ [ALTA]** Usar H1 apropriado e hierarquia H2/H3.
- **☐ [ALTA]** Criar URLs amigáveis e descritivas.
- **☐ [ALTA]** Configurar sitemap.xml e robots.txt quando aplicável.
- **☐ [ALTA]** Usar canonical quando necessário.
- **☐ [ALTA]** Corrigir links quebrados, 404 e redirecionamentos.
- **☐ [ALTA]** Otimizar imagens e textos para intenção de busca.
- **☐ [ALTA]** Usar links internos relevantes.
- **☐ [MÉDIA]** Adicionar dados estruturados Schema.org quando apropriado.
- **☐ [CONDICIONAL]** Configurar Google Search Console e SEO local.
- **☐ [ALTA]** Não inventar avaliações, endereços, resultados ou depoimentos.

## 10. Conversão e landing pages

- **☐ [ALTA]** Definir um objetivo principal para a landing page.
- **☐ [ALTA]** Apresentar proposta de valor clara na primeira tela.
- **☐ [ALTA]** Usar CTA principal visível e repetido estrategicamente.
- **☐ [ALTA]** Apresentar benefícios, diferenciais e prova social real.
- **☐ [ALTA]** Reduzir distrações e campos desnecessários.
- **☐ [ALTA]** Adicionar FAQ para reduzir dúvidas.
- **☐ [ALTA]** Testar WhatsApp, formulário e CTA em celular.
- **☐ [CRÍTICA]** Não usar depoimentos falsos, urgência falsa ou promessas enganosas.

## 11. Formulários, WhatsApp e APIs

- **☐ [ALTA]** Validar campos e apresentar mensagens de erro compreensíveis.
- **☐ [ALTA]** Apresentar confirmação de envio e informar próximos passos.
- **☐ [CRÍTICA]** Proteger tokens, chaves e credenciais de integrações.
- **☐ [ALTA]** Tratar timeout, falhas, respostas inválidas e indisponibilidade.
- **☐ [ALTA]** Evitar chamadas duplicadas e loops de automação.
- **☐ [ALTA]** Validar webhooks e requisições recebidas.
- **☐ [ALTA]** Aplicar rate limiting quando necessário.
- **☐ [ALTA]** Usar link correto do WhatsApp e mensagem pré-preenchida adequada.

## 12. LGPD e privacidade

- **☐ [ALTA]** Identificar dados pessoais coletados e finalidade.
- **☐ [ALTA]** Coletar somente o necessário.
- **☐ [ALTA]** Informar política de privacidade quando aplicável.
- **☐ [ALTA]** Avaliar cookies, analytics e necessidade de consentimento.
- **☐ [ALTA]** Proteger dados e limitar acesso.
- **☐ [ALTA]** Definir retenção e descarte quando necessário.
- **☐ [CRÍTICA]** Não compartilhar dados pessoais sem base adequada.
- **☐ [CONDICIONAL]** Avaliar apoio jurídico para projetos com tratamento relevante de dados.

## 13. Testes

- **☐ [CRÍTICA]** Testar todos os links, botões, menus e formulários.
- **☐ [CRÍTICA]** Testar fluxos principais e cenários de erro.
- **☐ [ALTA]** Testar Chrome, Firefox, Edge e, quando possível, Safari.
- **☐ [ALTA]** Testar celular, tablet e desktop.
- **☐ [ALTA]** Verificar console sem erros críticos.
- **☐ [ALTA]** Verificar imagens, fontes, vídeos e favicon.
- **☐ [ALTA]** Testar página 404.
- **☐ [ALTA]** Executar testes de segurança, performance, acessibilidade e SEO.

## 14. Git e GitHub

- **☐ [ALTA]** Criar repositório com nome profissional.
- **☐ [ALTA]** Usar .gitignore corretamente.
- **☐ [CRÍTICA]** Nunca publicar .env, senhas, tokens ou chaves privadas.
- **☐ [ALTA]** Criar commits claros e organizados.
- **☐ [ALTA]** Manter README com instalação, execução e tecnologias.
- **☐ [ALTA]** Revisar alterações antes do push.
- **☐ [ALTA]** Manter versão estável e possibilidade de rollback.

## 15. Deploy e hospedagem

- **☐ [CRÍTICA]** Executar build sem erros antes da publicação.
- **☐ [CRÍTICA]** Configurar variáveis de ambiente no ambiente correto.
- **☐ [ALTA]** Configurar domínio, DNS e HTTPS.
- **☐ [ALTA]** Verificar redirects, headers, sitemap e robots.
- **☐ [ALTA]** Testar o site publicado, não apenas o ambiente local.
- **☐ [ALTA]** Verificar logs, limites, custos e funções serverless.
- **☐ [ALTA]** Manter versão anterior ou mecanismo de rollback.

## 16. Monitoramento e manutenção

- **☐ [ALTA]** Monitorar disponibilidade e erros.
- **☐ [ALTA]** Monitorar formulários e integrações.
- **☐ [ALTA]** Monitorar domínio e certificado SSL.
- **☐ [ALTA]** Fazer backups quando houver dados ou sistema.
- **☐ [ALTA]** Atualizar dependências com critério.
- **☐ [ALTA]** Corrigir bugs e links quebrados.
- **☐ [ALTA]** Revisar performance, SEO e segurança periodicamente.
- **☐ [ALTA]** Definir escopo, prazo e valor de manutenção no contrato.

## 17. Documentação e entrega

- **☐ [ALTA]** Entregar URL de produção.
- **☐ [ALTA]** Entregar acessos de forma segura, quando contratado.
- **☐ [ALTA]** Documentar tecnologias, integrações e procedimentos.
- **☐ [ALTA]** Explicar funcionamento e limites do projeto.
- **☐ [ALTA]** Registrar aprovação do cliente.
- **☐ [ALTA]** Definir garantia de correções e suporte.
- **☐ [ALTA]** Confirmar que não existem textos, imagens ou dados de teste.

## 18. Critérios mínimos de aprovação

☐ O site funciona em produção sem erros críticos.

☐ O layout é responsivo e foi testado em dispositivos diferentes.

☐ Não há credenciais, tokens ou dados sensíveis expostos.

☐ Links, botões, formulários e integrações principais funcionam.

☐ Title, description, H1, sitemap e robots foram revisados quando aplicáveis.

☐ Imagens e scripts foram otimizados.

☐ A página apresenta CTA claro e conteúdo revisado.

☐ O cliente aprovou o escopo entregue.

☐ Manutenção, garantia e responsabilidades foram registradas.

## 19. Checklist final de entrega

☐ Planejamento conferido

☐ Design conferido

☐ Segurança conferida

☐ Performance conferida

☐ Responsividade conferida

☐ Usabilidade conferida

☐ Acessibilidade conferida

☐ SEO conferido

☐ Conversão conferida

☐ Formulários e integrações conferidos

☐ LGPD e privacidade avaliadas

☐ Testes concluídos

☐ GitHub organizado

☐ Deploy concluído

☐ Monitoramento definido

☐ Documentação entregue

☐ Aprovação do cliente registrada

## Observação profissional

Este manual é um padrão de qualidade e não substitui análise especializada para projetos de alto risco, pagamentos, dados sensíveis, autenticação complexa ou integrações críticas. Os requisitos devem ser adaptados ao escopo, orçamento e nível de risco de cada projeto.
