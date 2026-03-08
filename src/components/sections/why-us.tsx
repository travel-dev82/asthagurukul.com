'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, GraduationCap, Briefcase, HelpCircle, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/i18n/context';

const featureIcons = [BookOpen, GraduationCap, Briefcase, HelpCircle];

export function WhyUsSection() {
  const { t, isHindi } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10">
          <Star className="w-8 h-8 text-primary rotate-12" />
        </div>
        <div className="absolute top-40 right-20">
          <Star className="w-6 h-6 text-primary -rotate-12" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Star className="w-10 h-10 text-primary rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              {t.home.whyUs.badge}
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold ${isHindi ? 'devanagari' : 'font-display'}`}>
              {t.home.whyUs.title}
            </h2>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {t.home.whyUs.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-vedic">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="shrink-0 w-14 h-14 rounded-xl gradient-saffron flex items-center justify-center"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${isHindi ? 'devanagari' : ''}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-muted-foreground leading-relaxed ${isHindi ? 'devanagari' : ''}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
