import { useState } from 'react';
import { MessageCircle, Eye, Package } from 'lucide-react';
import { Product, getProductWhatsAppUrl } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group relative rounded-2xl blue-card-bg border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col h-full overflow-hidden blue-surface-glow hover:-translate-y-1">
      {/* Top Media Container */}
      <div 
        className="relative w-full aspect-[4/3] bg-slate-950/80 overflow-hidden cursor-pointer"
        onClick={() => onOpenModal(product)}
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-slate-900 text-slate-400">
            <Package className="w-10 h-10 text-amber-400/60 mb-2" />
            <span className="text-xs font-medium text-slate-300">{product.name}</span>
          </div>
        )}

        {/* Highlight Tag on Image */}
        {product.highlightTag && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#060D1A]/90 backdrop-blur-md border border-amber-400/40 text-[11px] font-semibold text-amber-300 shadow-sm">
            {product.highlightTag}
          </div>
        )}

        {/* Hover preview overlay hint */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-[2px]">
          <span className="p-2 rounded-full bg-slate-900/90 text-amber-300 border border-amber-400/40 shadow-lg">
            <Eye className="w-4 h-4" />
          </span>
          <span className="hidden sm:inline">Ver detalhes</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
        <div className="space-y-2">
          {/* Unboxed Metadata with · separator */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-amber-400/90 font-medium">{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Vanlux</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onOpenModal(product)}
            className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors line-clamp-2 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Size / Capacity Specification - Very clear */}
          <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-amber-200/90 font-medium">
            {product.sizes}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Action Button: WhatsApp inquiry */}
        <div className="pt-2">
          <a
            href={getProductWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Consultar no WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
