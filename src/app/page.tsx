'use client';

import { useState, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import HeroSection from '@/components/HeroSection';
import Validated from '@/components/Validated';
import Logos from '@/components/Logos';
import WhyChange from '@/components/WhyChange';
import Solution from '@/components/Solution';
import Differentiation from '@/components/Differentiation';
import UseCases from '@/components/UseCases';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [isPricing, setIsPricing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTheme, setModalTheme] = useState<'dark' | 'light'>('dark');

  // Pricing show/hide
  const showPricing = useCallback(
    (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPricing) return;
    setIsPricing(true);
      document.getElementById('heroSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [isPricing]
  );

  const hidePricing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsPricing(false);
  }, []);

  // Contact modal
  const openModal = useCallback((theme: 'dark' | 'light') => {
    setModalTheme(theme);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  // Scroll-driven fade-up animations
  useScrollReveal();

  return (
    <>
      <HeroSection isPricing={isPricing} showPricing={showPricing} hidePricing={hidePricing} openModal={openModal} />
      <Validated />
      <Logos />
      <WhyChange />
      <Solution />
      <Differentiation />
      <UseCases />
      <Testimonial />
      <CTA openModal={openModal} />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={closeModal} theme={modalTheme} />
    </>
  );
}
