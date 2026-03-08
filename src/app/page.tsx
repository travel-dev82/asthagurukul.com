'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats';
import { MissionSection } from '@/components/sections/mission';
import { CoursesSection } from '@/components/sections/courses';
import { WhyUsSection } from '@/components/sections/why-us';
import { FacultySection } from '@/components/sections/faculty';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <MissionSection />
        <CoursesSection />
        <WhyUsSection />
        <FacultySection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
