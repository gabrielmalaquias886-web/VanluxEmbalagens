import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductCatalogProps {
  onOpenModal: (product: Product) => void;
}

export default function ProductCatalog({ onOpenModal }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'todas' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sizes.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="produtos" className="relative py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Title & Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
            <span>Catálogo Completo</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Nossas Soluções em Embalagens
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Linha completa para comércio, indústria, gastronomia e reformas. 
            Clique no produto para conferir mais detalhes ou solicite cotação direta pelo WhatsApp.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="space-y-4">
          
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por sacola, fita, caixa, lona..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#09152C] border border-amber-400/25 focus:border-amber-400 focus:outline-none text-sm text-slate-100 placeholder:text-slate-500 shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Interactive Category Tabs (Buttons) */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'gold-gradient-bg text-slate-950 shadow-md shadow-amber-500/10'
                      : 'bg-[#0E1A33] text-slate-300 border border-slate-800 hover:border-amber-400/30 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Products Count Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span>
                Exibindo <strong className="text-amber-300 font-semibold">{filteredProducts.length}</strong> produtos
              </span>
            </span>
            {searchQuery && (
              <span className="text-slate-400">
                Filtro: "<span className="text-white">{searchQuery}</span>"
              </span>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-3">
            <p className="text-base text-slate-300 font-medium">
              Nenhum produto encontrado para sua busca.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('todas');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-amber-300 border border-amber-400/30 rounded-lg hover:bg-amber-400/10 transition-colors"
            >
              Ver todos os produtos
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
