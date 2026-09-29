import { useEffect } from 'react';
import { X, MessageCircle, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Product, getProductWhatsAppUrl } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl blue-card-bg border border-amber-400/30 overflow-hidden shadow-2xl shadow-black/80 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Fechar detalhes do produto"
        >
          <X className="w-5 h-5 text-amber-400" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* High-res Image preview */}
          <div className="relative aspect-video sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-2"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {product.highlightTag && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#060D1A]/90 backdrop-blur-md border border-amber-400/50 text-xs font-bold text-amber-300">
                {product.highlightTag}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-400">
                <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
                <span>{product.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Vanlux Embalagens</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {product.name}
              </h3>
            </div>

            {/* Size alert box */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-400/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Especificações & Tamanhos
                </p>
                <p className="text-sm font-semibold text-white">
                  {product.sizes}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quality checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pronta entrega em Fazenda Rio Grande</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Preços diferenciados no atacado</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Retirada no balcão ou entrega</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantia de procedência e qualidade</span>
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getProductWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-bold text-sm sm:text-base text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>Pedir Cotação no WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors"
            >
              Fechar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
