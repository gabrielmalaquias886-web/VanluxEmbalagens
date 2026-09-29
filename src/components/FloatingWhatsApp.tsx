import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 border border-emerald-400/40 hover:border-amber-300 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label="Falar com a Vanlux Embalagens no WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75" />

        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          {/* Active online dot */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-slate-900" />
        </div>

        <span className="hidden sm:inline font-heading font-bold text-xs tracking-wide">
          Atendimento WhatsApp
        </span>
      </a>
    </aside>
  );
}
