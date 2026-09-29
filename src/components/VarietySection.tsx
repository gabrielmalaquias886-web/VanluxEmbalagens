import { MessageCircle, Check, Layers, ShoppingBag, Coffee, Trash2, ShieldCheck, Box } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function VarietySection() {
  const varietyItems = [
    {
      icon: ShoppingBag,
      title: "Sacolas Plásticas",
      highlight: "Diversos tamanhos e modelos",
      detail: "Boca de palhaço, alça camiseta, estampadas 'Volte Sempre' e caixas no atacado.",
      sizeTag: "Sacolas em diversos tamanhos",
    },
    {
      icon: Trash2,
      title: "Sacos de Lixo Reforçados",
      highlight: "De 15L a 200L",
      detail: "Espessura pesada desenvolvida para resistir a resíduos pesados sem perfurar.",
      sizeTag: "Sacos de lixo de 15L a 200L",
    },
    {
      icon: Coffee,
      title: "Copos Descartáveis",
      highlight: "Diferentes capacidades",
      detail: "Linhas transparentes e brancas para bebidas frias, quentes, chopp e eventos.",
      sizeTag: "Copos em diferentes tamanhos",
    },
    {
      icon: ShieldCheck,
      title: "Fitas & Proteção Industrial",
      highlight: "Linha automotiva e reformas",
      detail: "Fitas crepe verdes e amarelas finas e grossas, lona 4x100m e rolos de papelão ondulado.",
      sizeTag: "Consulte os tamanhos disponíveis",
    },
    {
      icon: Box,
      title: "Caixas & Alimentação",
      highlight: "Confeitaria e Delivery",
      detail: "Caixas de salgado quadradas e oitavadas, bandejas para empadão e lacres adesivos.",
      sizeTag: "Consulte os tamanhos disponíveis",
    },
    {
      icon: Layers,
      title: "Bobinas Picotadas e Estrela",
      highlight: "Higiene e Fundo Soldado",
      detail: "Bobinas picotadas de fácil destaque e bobinas fundo estrela anti-vazamento.",
      sizeTag: "Consulte os tamanhos disponíveis",
    },
  ];

  return (
    <section id="variedade" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#060D1A] via-[#081326] to-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Layers className="w-3.5 h-3.5 fill-amber-400" />
            <span>Variedade & Dimensões</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Mais opções para encontrar a embalagem certa para o seu negócio
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Contamos com um catálogo diversificado para suprir desde pequenos comércios a indústrias e grandes redes em Fazenda Rio Grande.
          </p>
        </div>

        {/* Variety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {varietyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl blue-card-bg border border-amber-400/20 p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 blue-surface-glow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-300 px-2.5 py-1 rounded-md bg-slate-900/80 border border-amber-400/30">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.sizeTag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0C1B38] via-[#10244C] to-[#0C1B38] border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
              Precisa de medidas ou especificações personalizadas?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossa equipe está pronta para orientar qual o melhor material e dimensão para a sua necessidade.
            </p>
          </div>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-95 transition-all text-sm shadow-md whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Consultar Tamanhos</span>
          </a>
        </div>

      </div>
    </section>
  );
}
