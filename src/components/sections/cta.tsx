'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/context';
import { ArrowRight, Sparkles } from 'lucide-react';
import { OmSymbol, SriYantra } from '@/components/sacred/sacred-symbols';

export function CTASection() {
  const { t, isHindi } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-saffron opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-20 top-1/2 -translate-y-1/2"
        >
          <SriYantra size={400} animated={false} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-20 top-1/2 -translate-y-1/2"
        >
          <SriYantra size={300} animated={false} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Om Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
              <OmSymbol size={50} animated={false} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ${isHindi ? 'devanagari' : 'font-display'}`}
          >
            {t.home.cta.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg md:text-xl text-white/80 mb-8 ${isHindi ? 'devanagari' : ''}`}
          >
            {t.home.cta.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold min-w-[200px]"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t.home.cta.button}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
