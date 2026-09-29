import { Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product, getProductWhatsAppUrl } from '../data/products';

interface FeaturedShowcaseProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
}

export default function FeaturedShowcase({ products, onOpenModal }: FeaturedShowcaseProps) {
  const featuredList = products.filter(p => p.featured).slice(0, 6);

  return (
    <section id="destaques" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-amber-400/20">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
              <span>Destaques da Linha</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Produtos em Evidência
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Os itens mais solicitados para atender demandas de alta rotatividade com garantia de qualidade Vanlux.
            </p>
          </div>

          <a
            href="#produtos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors group"
          >
            <span>Explorar catálogo completo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Featured Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl blue-card-bg border border-amber-400/25 overflow-hidden flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 group blue-surface-glow hover:-translate-y-1.5"
            >
              {/* Media with click zoom */}
              <div 
                className="relative aspect-[4/3] bg-slate-950/80 overflow-hidden cursor-pointer"
                onClick={() => onOpenModal(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gold Highlight Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#060D1A]/90 backdrop-blur-md border border-amber-400/50 text-xs font-bold text-amber-300 shadow-md">
                  {product.highlightTag || 'Destaque'}
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-[11px] text-slate-300 backdrop-blur-sm border border-slate-700">
                  Toque para ampliar
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>{product.categoryLabel}</span>
                  </div>

                  <h3 
                    onClick={() => onOpenModal(product)}
                    className="font-heading font-bold text-xl text-white group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-amber-200 font-medium">
                    {product.sizes}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Direct quote button */}
                <div className="pt-2">
                  <a
                    href={getProductWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-sm text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                    <span>Solicitar Cotação</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
