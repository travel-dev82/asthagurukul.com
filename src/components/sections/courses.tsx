'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, Award, ChevronRight, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useI18n } from '@/i18n/context';

const courseIcons = ['🌟', '🏠', '🔢', '✋'];
const courseColors = [
  'from-orange-500/10 to-yellow-500/10',
  'from-teal-500/10 to-emerald-500/10',
  'from-purple-500/10 to-pink-500/10',
  'from-blue-500/10 to-cyan-500/10',
];

export function CoursesSection() {
  const { t, isHindi } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const courses = Object.entries(t.courses.items);
  const courseKeys = Object.keys(t.courses.items);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="courses" className="py-20 md:py-28 bg-gradient-to-b from-card to-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <BookOpen className="w-3 h-3 mr-1" />
            {t.home.courses.badge}
          </Badge>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isHindi ? 'devanagari' : 'font-display'}`}>
            {t.home.courses.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isHindi ? 'devanagari' : ''}`}>
            {t.home.courses.subtitle}
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {courses.map(([key, course], index) => {
            const isExpanded = expandedCourse === key;
            const courseKey = key as keyof typeof t.courses.items;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full card-vedic overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-primary' : ''
                }`}>
                  {/* Course Header */}
                  <div className={`p-6 bg-gradient-to-r ${courseColors[index]}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{courseIcons[index]}</div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {course.duration}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-primary text-primary">
                          <Award className="w-3 h-3 mr-1" />
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className={`text-xl md:text-2xl mb-1 ${isHindi ? 'devanagari' : ''}`}>
                      {course.title}
                    </CardTitle>
                    <CardDescription className={`text-sm text-primary font-medium ${isHindi ? 'devanagari' : ''}`}>
                      {course.hindiTitle}
                    </CardDescription>
                  </div>

                  <CardContent className="p-6">
                    <p className={`text-muted-foreground mb-4 leading-relaxed ${isHindi ? 'devanagari' : ''}`}>
                      {course.description}
                    </p>

                    {/* Modules - Collapsible */}
                    <div className="space-y-3">
                      {course.modules.slice(0, isExpanded ? undefined : 2).map((module, moduleIndex) => (
                        <div key={moduleIndex} className="p-4 rounded-lg bg-muted/30">
                          <h4 className={`font-semibold text-sm mb-2 ${isHindi ? 'devanagari' : ''}`}>
                            {module.title}
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {module.topics.slice(0, isExpanded ? undefined : 3).map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                            {!isExpanded && module.topics.length > 3 && (
                              <Badge variant="outline" className="text-xs text-primary">
                                +{module.topics.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedCourse(isExpanded ? null : key)}
                      className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-4 transition-colors"
                    >
                      {isExpanded ? 'Show less' : `View all modules`}
                      <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>

                    {/* Outcomes */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-4 border-t border-border"
                      >
                        <h4 className={`font-semibold mb-3 ${isHindi ? 'devanagari' : ''}`}>
                          Learning Outcomes:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {course.outcomes.map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                              <span className={isHindi ? 'devanagari' : ''}>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button
                      onClick={scrollToContact}
                      className="w-full gradient-saffron text-white hover:opacity-90"
                    >
                      {t.courses.enroll}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
