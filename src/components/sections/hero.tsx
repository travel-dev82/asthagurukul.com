'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/context';
import { ZodiacWheel, SriYantra, MandalaBg, OmSymbol } from '@/components/sacred/sacred-symbols';

export function HeroSection() {
  const { t, isHindi } = useI18n();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <MandalaBg />
      
      {/* Floating Zodiac Wheel - Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute -right-20 top-1/4 hidden lg:block"
      >
        <ZodiacWheel size={400} />
      </motion.div>

      {/* Floating Sri Yantra - Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute -left-20 bottom-1/4 hidden lg:block"
      >
        <SriYantra size={300} />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{t.home.hero.tagline}</span>
          </motion.div>

          {/* Om Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <OmSymbol size={60} />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isHindi ? 'devanagari' : 'font-display'
            }`}
          >
            {t.home.hero.title}{' '}
            <span className="text-gradient-saffron">{t.home.hero.titleHighlight}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed ${
              isHindi ? 'devanagari' : ''
            }`}
          >
            {t.home.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="gradient-saffron text-white hover:opacity-90 min-w-[180px]"
            >
              {t.home.hero.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              onClick={() => scrollToSection('#courses')}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 min-w-[180px]"
            >
              {t.home.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="divider-vedic max-w-md mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
