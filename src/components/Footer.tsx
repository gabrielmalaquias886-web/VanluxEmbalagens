import { MessageCircle, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040811] border-t border-amber-400/20 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Subtle top gold reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Signature */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-400/40 p-0.5 bg-slate-900 shrink-0">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Logo Vanlux Embalagens"
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white tracking-tight">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-amber-300/90 font-medium">
                  "{COMPANY_INFO.signature}"
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Distribuição e fornecimento de embalagens comerciais, sacolas, bobinas, fitas automotivas, descartáveis e caixas para delivery em Fazenda Rio Grande – PR.
            </p>

            <p className="text-xs font-semibold text-amber-400/90">
              Vanlux Embalagens — soluções em embalagens.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-amber-400">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-amber-300 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-300 transition-colors">
                  Catálogo de Produtos
                </a>
              </li>
              <li>
                <a href="#variedade" className="hover:text-amber-300 transition-colors">
                  Variedade de Tamanhos
                </a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-amber-300 transition-colors">
                  Produtos em Destaque
                </a>
              </li>
              <li>
                <a href="#loja-fisica" className="hover:text-amber-300 transition-colors">
                  Nossa Loja Física
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-amber-400">
              Atendimento & Endereço
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address}, Nações<br />
                  {COMPANY_INFO.cityStateZip}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={COMPANY_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-mono transition-colors"
                >
                  {COMPANY_INFO.whatsappFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-amber-400 shrink-0" />
                <a 
                  href={COMPANY_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  {COMPANY_INFO.instagramHandle}
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-amber-300 transition-colors py-1 focus:outline-none"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span>Fazenda Rio Grande – PR</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400/80 font-medium">"{COMPANY_INFO.signature}"</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
