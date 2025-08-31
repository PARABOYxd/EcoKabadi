"use client";

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { CallToAction } from '@/components/CallToAction';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <CallToAction />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}