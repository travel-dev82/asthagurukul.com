'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/context';
import { MessageSquareQuote, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { t, isHindi } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);

  const stories = t.testimonials.stories;
  const categories = t.testimonials.categories;
  
  const filteredStories = activeCategory === 'all' 
    ? stories 
    : stories.filter(s => s.category === activeCategory);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredStories.length / itemsPerPage);
  const currentStories = filteredStories.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <MessageSquareQuote className="w-3 h-3 mr-1" />
            {t.testimonials.badge}
          </Badge>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isHindi ? 'devanagari' : 'font-display'}`}>
            {t.testimonials.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isHindi ? 'devanagari' : ''}`}>
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {Object.entries(categories).map(([key, label]) => (
            <Button
              key={key}
              variant={activeCategory === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => {
                setActiveCategory(key);
                setCurrentPage(0);
              }}
              className={activeCategory === key ? 'gradient-saffron text-white' : 'border-primary text-primary hover:bg-primary/5'}
            >
              <span className={isHindi ? 'devanagari' : ''}>{label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStories.map((story, index) => (
              <motion.div
                key={`${activeCategory}-${currentPage}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full card-vedic relative">
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                  
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < story.rating ? 'text-primary fill-primary' : 'text-muted'}`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className={`text-muted-foreground mb-6 leading-relaxed relative z-10 ${isHindi ? 'devanagari' : ''}`}>
                      "{story.text}"
                    </p>

                    {/* Highlight Badge */}
                    {story.highlight && (
                      <Badge variant="secondary" className="mb-4 text-xs">
                        ✨ {story.highlight}
                      </Badge>
                    )}

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-white font-semibold">
                          {getInitials(story.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className={`font-semibold ${isHindi ? 'devanagari' : ''}`}>{story.name}</div>
                        <div className={`text-sm text-muted-foreground ${isHindi ? 'devanagari' : ''}`}>
                          {story.role} • {story.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                className="border-primary text-primary hover:bg-primary/5"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentPage ? 'w-4 bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                className="border-primary text-primary hover:bg-primary/5"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className={`text-3xl font-bold text-primary mb-1 ${isHindi ? 'devanagari' : ''}`}>26K+</div>
            <div className={`text-sm text-muted-foreground ${isHindi ? 'devanagari' : ''}`}>
              {t.testimonials.stats.satisfied}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold text-primary mb-1 ${isHindi ? 'devanagari' : ''}`}>5K+</div>
            <div className={`text-sm text-muted-foreground ${isHindi ? 'devanagari' : ''}`}>
              {t.testimonials.stats.placed}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold text-primary mb-1 ${isHindi ? 'devanagari' : ''}`}>15+</div>
            <div className={`text-sm text-muted-foreground ${isHindi ? 'devanagari' : ''}`}>
              {t.testimonials.stats.countries}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
