'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge, BookOpen, Users, Heart, Sparkles } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import { Lotus } from '@/components/sacred/sacred-symbols';

const valueIcons = [Sparkles, Users, Heart, BookOpen];

export function MissionSection() {
  const { t, isHindi } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-0 right-0 opacity-[0.03]">
        <Lotus size={300} animated={false} />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Badge className="w-4 h-4" />
              <span className="text-sm font-medium">{t.home.mission.badge}</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isHindi ? 'devanagari' : 'font-display'}`}>
              {t.home.mission.title}
            </h2>
            <p className="text-lg text-primary font-medium">{t.home.mission.subtitle}</p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className={`text-lg text-muted-foreground leading-relaxed ${isHindi ? 'devanagari' : ''}`}>
                {t.home.mission.description}
              </p>
              
              {/* Decorative divider */}
              <div className="divider-vedic my-8 max-w-xs" />
              
              {/* Stats highlight */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold text-primary ${isHindi ? 'devanagari' : ''}`}>22+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className={`text-3xl font-bold text-primary ${isHindi ? 'devanagari' : ''}`}>26K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className={`text-3xl font-bold text-primary ${isHindi ? 'devanagari' : ''}`}>18+</div>
                  <div className="text-sm text-muted-foreground">Faculties</div>
                </div>
              </div>
            </motion.div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {t.home.mission.values.map((value, index) => {
                const Icon = valueIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-vedic"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-xl gradient-saffron flex items-center justify-center mb-4"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className={`text-lg font-semibold mb-2 ${isHindi ? 'devanagari' : ''}`}>
                      {value.title}
                    </h3>
                    <p className={`text-sm text-muted-foreground leading-relaxed ${isHindi ? 'devanagari' : ''}`}>
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
