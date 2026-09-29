import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactStatement from './components/ImpactStatement';
import ProductCatalog from './components/ProductCatalog';
import VarietySection from './components/VarietySection';
import FeaturedShowcase from './components/FeaturedShowcase';
import ContactSection from './components/ContactSection';
import PhysicalStoreSection from './components/PhysicalStoreSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProductModal from './components/ProductModal';
import { PRODUCTS, Product } from './data/products';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#060D1A] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Header / Navigation bar */}
      <Header />

      <main className="flex-grow">
        {/* SEÇÃO 01: HERO */}
        <Hero />

        {/* SEÇÃO 02: FRASE DE IMPACTO 1 */}
        <ImpactStatement
          quote="Seu produto merece a melhor apresentação — uma embalagem confiável valoriza o seu negócio."
          author="Vanlux, Soluções em embalagens"
          subtext="Qualidade percebida desde o primeiro contato do seu cliente com o pacote."
        />

        {/* SEÇÃO 03: NOSSOS PRODUTOS */}
        <ProductCatalog onOpenModal={handleOpenModal} />

        {/* SEÇÃO 04: VARIEDADE */}
        <VarietySection />

        {/* SEÇÃO 05: PRODUTOS EM DESTAQUE */}
        <FeaturedShowcase
          products={PRODUCTS}
          onOpenModal={handleOpenModal}
        />

        {/* SEÇÃO 06: FRASE DE IMPACTO 2 */}
        <ImpactStatement
          quote="Uma boa embalagem não é apenas proteção: faz parte da experiência e da credibilidade da sua marca."
          author="Vanlux Embalagens"
          subtext="Embalagens resistentes, práticas e sob medida para impulsionar suas vendas."
        />

        {/* SEÇÃO 07: FALE COM A VANLUX (WhatsApp + Instagram) */}
        <ContactSection />

        {/* SEÇÃO 08: NOSSA LOJA FÍSICA & MAPA */}
        <PhysicalStoreSection />
      </main>

      {/* SEÇÃO 09: RODAPÉ */}
      <Footer />

      {/* FLOATING ACTION BUTTON */}
      <FloatingWhatsApp />

      {/* PRODUCT QUICK VIEW MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}
