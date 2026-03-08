'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/context';
import { OmSymbol } from '@/components/sacred/sacred-symbols';

const navigation = [
  { key: 'home', href: '#home' },
  { key: 'courses', href: '#courses' },
  { key: 'faculty', href: '#faculty' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'contact', href: '#contact' },
];

export function Header() {
  const { t, language, setLanguage, isHindi } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <OmSymbol size={40} animated={false} />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary">
                {isHindi ? 'अस्था गुरुकुल' : 'Astha Gurukul'}
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground -mt-1">
                {isHindi ? 'दिव्य विज्ञान का केंद्र' : 'Center of Divine Sciences'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'en' ? 'EN' : 'हिं'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/5 transition-colors ${
                        language === 'en' ? 'text-primary bg-primary/5' : 'text-foreground'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('hi');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/5 transition-colors ${
                        language === 'hi' ? 'text-primary bg-primary/5' : 'text-foreground'
                      }`}
                    >
                      हिन्दी
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Desktop */}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex gradient-saffron text-white hover:opacity-90"
            >
              {t.common.enroll}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-3 text-left text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
                className="pt-2"
              >
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full gradient-saffron text-white hover:opacity-90"
                >
                  {t.common.enroll}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
