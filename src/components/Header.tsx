import { useState } from 'react';
import { MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Variedade', href: '#variedade' },
    { label: 'Destaques', href: '#destaques' },
    { label: 'Loja Física', href: '#loja-fisica' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#060D1A]/90 backdrop-blur-md border-b border-amber-400/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark / Logo */}
        <a 
          href="#inicio" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
          aria-label="Vanlux Embalagens - Página Inicial"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400/40 p-0.5 bg-slate-900 shrink-0 shadow-sm group-hover:border-amber-400 transition-colors">
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt="Logo Vanlux Embalagens" 
              className="w-full h-full object-cover rounded-full"
              loading="eager"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-300 transition-colors leading-tight">
              Vanlux
            </span>
            <span className="text-[11px] text-amber-400/90 font-medium tracking-wide leading-none">
              Embalagens
            </span>
          </div>
        </a>

        {/* Zone 2: Clean Text Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-300 transition-colors relative py-1 focus:outline-none focus-visible:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-950 gold-gradient-bg rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/10 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-400/20 bg-[#091427]/98 px-4 pt-2 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Fazenda Rio Grande - PR
            </span>
            <span className="text-amber-400/90 font-medium">Atacado & Varejo</span>
          </div>
        </div>
      )}
    </header>
  );
}
