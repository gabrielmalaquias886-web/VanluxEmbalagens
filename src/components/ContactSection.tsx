import { MessageCircle, Instagram, PhoneCall, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#060D1A] via-[#09152B] to-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Canais Oficiais</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Fale com a Vanlux Embalagens
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Estamos prontos para atender pedidos no atacado e varejo, esclarecer dúvidas e enviar orçamentos personalizados com rapidez.
          </p>
        </div>

        {/* Contact Cards Grid: WhatsApp & Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: WhatsApp Oficial */}
          <div className="rounded-3xl blue-card-bg border border-amber-400/30 p-8 flex flex-col justify-between space-y-6 blue-surface-glow hover:border-amber-400/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-7 h-7 fill-emerald-400/20" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Atendimento Rápido</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-white">
                  WhatsApp Oficial
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Envie sua lista de produtos ou tire dúvidas diretamente com nossa equipe de vendas. Resposta ágil e orçamento sem compromisso.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2 font-mono text-base font-bold text-white">
                  {COMPANY_INFO.whatsappFormatted}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Segunda a Sexta-feira em horário comercial</span>
                </div>
              </div>
            </div>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-heading font-bold text-base text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/10"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>

          {/* Card 2: Instagram Oficial */}
          <div className="rounded-3xl blue-card-bg border border-amber-400/20 p-8 flex flex-col justify-between space-y-6 blue-surface-glow hover:border-amber-400/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Instagram className="w-7 h-7" />
                </div>
                <div className="text-xs font-semibold text-amber-300 px-3 py-1 rounded-full bg-slate-900 border border-amber-400/30">
                  Rede Social
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-white">
                  Instagram Oficial
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Acompanhe fotos reais das mercadorias, dicas de embalagens, reposição de estoque e bastidores da nossa loja em Fazenda Rio Grande.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                <div className="font-mono text-base font-bold text-amber-300">
                  {COMPANY_INFO.instagramHandle}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Conteúdo diário, novidades e ofertas</span>
                </div>
              </div>
            </div>

            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-heading font-semibold text-base text-white bg-gradient-to-r from-[#182a4d] to-[#122242] border border-amber-400/30 hover:border-amber-400 hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <Instagram className="w-5 h-5 text-amber-400" />
              <span>SEGUIR NO INSTAGRAM</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
