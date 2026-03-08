'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useI18n } from '@/i18n/context';
import { GraduationCap, Award, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export function FacultySection() {
  const { t, isHindi } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);

  const faculty = t.faculty.members;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section ref={sectionRef} id="faculty" className="py-20 md:py-28 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <GraduationCap className="w-3 h-3 mr-1" />
            {t.faculty.badge}
          </Badge>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isHindi ? 'devanagari' : 'font-display'}`}>
            {t.faculty.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isHindi ? 'devanagari' : ''}`}>
            {t.faculty.subtitle}
          </p>
        </motion.div>

        {/* Title Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(t.faculty.titles).map(([key, title]) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full gradient-saffron" />
              <span className={isHindi ? 'devanagari' : ''}>{title}</span>
            </div>
          ))}
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {faculty.map((member, index) => {
            const isExpanded = expandedFaculty === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className={`h-full card-vedic transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-primary' : ''
                }`}>
                  <CardContent className="p-6">
                    {/* Profile Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-16 h-16 border-2 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-white text-lg font-semibold">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className={`font-semibold text-lg mb-1 ${isHindi ? 'devanagari' : ''}`}>
                          {member.name}
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {member.titles.map((title, titleIndex) => (
                            <Badge key={titleIndex} variant="secondary" className="text-xs">
                              {title}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className={isHindi ? 'devanagari' : ''}>{member.experience}</span>
                      </div>
                    </div>

                    {/* Specialization */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-primary" />
                        <span className={`font-medium ${isHindi ? 'devanagari' : ''}`}>
                          {member.specialization}
                        </span>
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.credentials.map((cred, credIndex) => (
                        <Badge key={credIndex} variant="outline" className="text-xs">
                          {cred}
                        </Badge>
                      ))}
                    </div>

                    {/* Bio - Expandable */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-4 border-t border-border"
                      >
                        <p className={`text-sm text-muted-foreground leading-relaxed ${isHindi ? 'devanagari' : ''}`}>
                          {member.bio}
                        </p>
                      </motion.div>
                    )}

                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedFaculty(isExpanded ? null : index)}
                      className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-4 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <span>{isHindi ? 'कम दिखाएं' : 'Show less'}</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>{isHindi ? 'और पढ़ें' : 'Read more'}</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
