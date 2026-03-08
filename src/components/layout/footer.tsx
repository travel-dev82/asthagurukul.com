'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useI18n } from '@/i18n/context';
import { OmSymbol, SriYantra } from '@/components/sacred/sacred-symbols';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const quickLinks = ['home', 'courses', 'faculty', 'testimonials', 'contact'];

const courseLinks = [
  { key: 'astrology', href: '#courses' },
  { key: 'vastu', href: '#courses' },
  { key: 'numerology', href: '#courses' },
  { key: 'palmistry', href: '#courses' },
];

export function Footer() {
  const { t, isHindi } = useI18n();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-card to-secondary/10 border-t border-border">
      {/* Decorative Yantra */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
        <SriYantra size={400} animated={false} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <OmSymbol size={36} animated={false} />
              <span className="text-xl font-bold text-primary">
                {isHindi ? 'अस्था गुरुकुल' : 'Astha Gurukul'}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">
              {t.footer.quickLinks}
            </h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(`#${link}`)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {t.nav[link as keyof typeof t.nav]}
                </button>
              ))}
            </nav>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">
              {t.footer.courses}
            </h3>
            <nav className="flex flex-col gap-2">
              {courseLinks.map((course) => (
                <button
                  key={course.key}
                  onClick={() => handleNavClick(course.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {isHindi
                    ? t.courses.items[course.key as keyof typeof t.courses.items]?.hindiTitle
                    : t.courses.items[course.key as keyof typeof t.courses.items]?.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              {t.footer.newsletter.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.footer.newsletter.subtitle}
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="gradient-saffron text-white shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{t.contact.info.phone.value}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{t.contact.info.email.value}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t.contact.info.address.value}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-vedic my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <span>{t.footer.madeWith}</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-primary"
            >
              ❤
            </motion.span>
          </p>
        </div>
      </div>
    </footer>
  );
}
