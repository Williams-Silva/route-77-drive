/**
 * Configuração central de contato da Rota 77.
 *
 * Todos os botões de pedido e as redes sociais do site leem daqui.
 * Para trocar o número do WhatsApp, altere apenas WHATSAPP_NUMBER.
 */

/** Valor que vem do template. Enquanto for este, os botões não levam a lugar nenhum. */
const WHATSAPP_PLACEHOLDER = "5500000000000";

/**
 * WhatsApp em formato internacional, apenas dígitos: 55 + DDD + número.
 * Exemplo: "5592981234567" para um celular de Manaus.
 */
export const WHATSAPP_NUMBER = WHATSAPP_PLACEHOLDER;

/** false enquanto o número real não for preenchido. */
export const WHATSAPP_CONFIGURED = WHATSAPP_NUMBER !== WHATSAPP_PLACEHOLDER;

export const INSTAGRAM_HANDLE = "rota77burguer";
export const TIKTOK_HANDLE = "rota77";

export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
export const TIKTOK_URL = `https://tiktok.com/@${TIKTOK_HANDLE}`;

/**
 * Monta o link do WhatsApp já com a mensagem digitada para o cliente.
 * Cada botão passa a sua própria mensagem, então dá para saber de onde veio o pedido.
 */
export function whatsappLink(message = "Olá! Vim pelo site e quero fazer um pedido."): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
