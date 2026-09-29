import { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Store, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function PhysicalStoreSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="loja-fisica" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Store className="w-3.5 h-3.5" />
            <span>Presença Física & Segurança</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Nossa Loja Física
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Venha nos visitar em Fazenda Rio Grande – PR. Conheça nosso estoque, confira os materiais de perto e retire seus pedidos com agilidade.
          </p>
        </div>

        {/* Content Grid: Info Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Physical Store Details & CTAs */}
          <div className="lg:col-span-5 rounded-3xl blue-card-bg border border-amber-400/25 p-6 sm:p-8 flex flex-col justify-between space-y-6 blue-surface-glow">
            
            <div className="space-y-6">
              
              {/* Brand & Badge */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Aberta para Atendimento
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300/90 font-medium">
                  "{COMPANY_INFO.signature}"
                </p>
              </div>

              {/* Address Highlight */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-400/20 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-white text-sm sm:text-base">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {COMPANY_INFO.cityStateZip}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-amber-300 border border-slate-700/80 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copiar Endereço Completo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Differential Highlights */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Atendimento ágil no balcão e no atacado</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Store className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Estoque local para retirada imediata de fardos e caixas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fácil acesso no Bairro Nações em Fazenda Rio Grande</span>
                </div>
              </div>

            </div>

            {/* Primary Action: Como Chegar (Google Maps navigation) */}
            <div className="pt-4 space-y-3">
              <a
                href={COMPANY_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-heading font-bold text-base text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/10"
              >
                <Navigation className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>COMO CHEGAR (ROTA)</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-400 hover:text-amber-300 transition-colors"
              >
                <span>ABRIR NO GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Responsive Interactive Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-amber-400/25 blue-card-bg blue-surface-glow flex flex-col min-h-[380px] sm:min-h-[460px]">
            <div className="px-5 py-3.5 bg-slate-950/80 border-b border-amber-400/15 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Localização no Mapa</span>
              </div>
              <span className="text-amber-300/80">Fazenda Rio Grande - PR</span>
            </div>

            <div className="relative flex-grow w-full bg-slate-900">
              <iframe
                title="Localização da Vanlux Embalagens no Google Maps"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-90 contrast-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
