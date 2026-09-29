import { MessageCircle, ArrowDown, CheckCircle2, Sparkles, Package, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting in deep navy and subtle gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand Info, Headline & Primary Conversion Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Instant-Loading Official Logo Presentation */}
            <div className="flex items-center gap-4 p-2 pl-2 pr-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-[#0e1b36]/80 border border-amber-400/30 shadow-xl shadow-amber-950/20 backdrop-blur-md">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-amber-400/50 p-0.5 bg-slate-950 shrink-0">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Logo Vanlux Embalagens"
                  className="w-full h-full object-cover rounded-lg"
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">
                    Vanlux Embalagens
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-amber-300/90 tracking-wide">
                  "{COMPANY_INFO.signature}"
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Embalagens para o seu negócio,{' '}
                <span className="gold-gradient-text block sm:inline">
                  do jeito que você precisa.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Apresente seus produtos com máxima qualidade, resistência e profissionalismo. 
                Variedade completa a pronta entrega com atendimento no atacado e varejo em Fazenda Rio Grande – PR.
              </p>
            </div>

            {/* Two Strategic CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-heading font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/20 text-base"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>FALAR NO WHATSAPP</span>
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-slate-200 bg-[#0E1A33] border border-amber-400/30 hover:border-amber-400 hover:text-white hover:bg-[#132244] active:scale-[0.98] transition-all text-base shadow-sm"
              >
                <Package className="w-4 h-4 text-amber-400" />
                <span>VER PRODUTOS</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust Highlights (Unboxed metadata style) */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                Pronta entrega local
              </span>
              <span className="text-amber-400/40 hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                Atacado e Varejo
              </span>
              <span className="text-amber-400/40 hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                Fazenda Rio Grande – PR
              </span>
            </div>

          </div>

          {/* Right Column: 3D Visual Packaging Composition using real product assets */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Showcase Card */}
              <div className="relative rounded-3xl p-4 sm:p-5 blue-card-bg border border-amber-400/25 blue-surface-glow transition-all duration-300 hover:border-amber-400/40">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-400/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                      Showcase Vanlux
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    Linha Comercial & Industrial
                  </span>
                </div>

                {/* 2x2 Curated Real Product Grid Preview */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Card 1: Sacola Boca de Palhaço */}
                  <div className="group relative rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-all">
                    <div className="aspect-square w-full overflow-hidden bg-white/5">
                      <img
                        src="https://i.postimg.cc/zXfLhqkQ/IMG-20260826-WA0076.jpg"
                        alt="Sacola Boca de Palhaço Van Lux"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                      <p className="text-xs font-semibold text-white truncate">Boca de Palhaço</p>
                      <p className="text-[10px] text-amber-300">Vários tamanhos</p>
                    </div>
                  </div>

                  {/* Card 2: Caixa Fechada 1000un */}
                  <div className="group relative rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-all">
                    <div className="aspect-square w-full overflow-hidden bg-white/5">
                      <img
                        src="https://i.postimg.cc/zDQLT9PV/D-NQ-NP-692981-MLA112817352213-062026-O.webp"
                        alt="Caixa Fechada de Sacolas 1000 unidades"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                      <p className="text-xs font-semibold text-white truncate">Caixa 1.000 un</p>
                      <p className="text-[10px] text-amber-300">Sacolas Brancas</p>
                    </div>
                  </div>

                  {/* Card 3: Sacos de Lixo 15L a 200L */}
                  <div className="group relative rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-all">
                    <div className="aspect-square w-full overflow-hidden bg-white/5">
                      <img
                        src="https://i.postimg.cc/ncQJg5V9/IMG-fdfd89c8-4570-49cc-b9d7-fde85f73b230.webp"
                        alt="Sacos de Lixo Reforçados 15L a 200L"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                      <p className="text-xs font-semibold text-white truncate">Sacos Reforçados</p>
                      <p className="text-[10px] text-amber-300">15L até 200L</p>
                    </div>
                  </div>

                  {/* Card 4: Fita Crepe Automotiva */}
                  <div className="group relative rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-all">
                    <div className="aspect-square w-full overflow-hidden bg-white/5">
                      <img
                        src="https://i.postimg.cc/MpSpDx06/IMG-6c082baa-4373-46b0-8a5b-a92809724ac8.jpg"
                        alt="Fita Crepe Automotiva Van Lux"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                      <p className="text-xs font-semibold text-white truncate">Fita Automotiva</p>
                      <p className="text-[10px] text-amber-300">Linha Profissional</p>
                    </div>
                  </div>

                </div>

                {/* Micro banner inside showcase */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-950/80 border border-amber-400/20 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">
                    Mais de 19 categorias essenciais
                  </span>
                  <a 
                    href="#produtos" 
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 group"
                  >
                    <span>Conferir</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
