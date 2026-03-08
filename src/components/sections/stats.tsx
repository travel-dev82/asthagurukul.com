'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { BookOpen, Users, GraduationCap, Heart } from 'lucide-react';
import { useI18n } from '@/i18n/context';

const stats = [
  { key: 'years', icon: BookOpen, value: 22, suffix: '+' },
  { key: 'students', icon: Users, value: 26000, suffix: '+' },
  { key: 'faculties', icon: GraduationCap, value: 18, suffix: '+' },
  { key: 'satisfaction', icon: Heart, value: 98, suffix: '%' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { t, isHindi } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-vedic">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-xl gradient-saffron flex items-center justify-center"
                >
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>

                {/* Value */}
                <div className={`text-3xl md:text-4xl font-bold text-primary mb-2 ${isHindi ? 'devanagari' : ''}`}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className={`text-sm md:text-base text-muted-foreground ${isHindi ? 'devanagari' : ''}`}>
                  {t.home.stats[stat.key as keyof typeof t.home.stats]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
