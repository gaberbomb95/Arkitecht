'use client';

import { useState, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Nav from '@/components/Nav';
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

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isPricing, setIsPricing] = useState(false);

  // Dark mode toggle
  const toggleDark = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle('dark-mode', next);
      return next;
    });
  }, []);

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

  // Scroll-driven fade-up animations
  useScrollReveal();

  return (
    <>
      <Nav showPricing={showPricing} />
      <HeroSection isDark={isDark} toggleDark={toggleDark} isPricing={isPricing} hidePricing={hidePricing} />
      <Validated />
      <Logos />
      <WhyChange />
      <Solution />
      <Differentiation />
      <UseCases />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
