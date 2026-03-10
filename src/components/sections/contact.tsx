'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useI18n } from '@/i18n/context';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Loader2,
  CheckCircle,
} from 'lucide-react';

export function ContactSection() {
  const { t, isHindi } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '917000782082';
    const message = encodeURIComponent(t.contact.whatsapp.message);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <Mail className="w-3 h-3 mr-1" />
            {t.contact.badge}
          </Badge>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isHindi ? 'devanagari' : 'font-display'}`}>
            {t.contact.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isHindi ? 'devanagari' : ''}`}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className={isHindi ? 'devanagari' : ''}>
                      {t.contact.form.name}
                    </Label>
                    <Input
                      id="name"
                      placeholder={t.contact.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="focus-visible:ring-primary"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className={isHindi ? 'devanagari' : ''}>
                        {t.contact.form.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={isHindi ? 'devanagari' : ''}>
                        {t.contact.form.phone}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t.contact.form.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="course" className={isHindi ? 'devanagari' : ''}>
                      {t.contact.form.course}
                    </Label>
                    <Select
                      value={formData.course}
                      onValueChange={(value) => setFormData({ ...formData, course: value })}
                    >
                      <SelectTrigger className="focus:ring-primary">
                        <SelectValue placeholder={t.contact.form.coursePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.contact.courses.map((course, index) => (
                          <SelectItem key={index} value={course}>
                            <span className={isHindi ? 'devanagari' : ''}>{course}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className={isHindi ? 'devanagari' : ''}>
                      {t.contact.form.message}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t.contact.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="focus-visible:ring-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full gradient-saffron text-white hover:opacity-90 h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t.contact.form.submitting}
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {t.contact.form.success}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* WhatsApp Card */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${isHindi ? 'devanagari' : ''}`}>
                      {t.contact.whatsapp.title}
                    </h3>
                    <p className={`text-sm text-muted-foreground ${isHindi ? 'devanagari' : ''}`}>
                      {t.contact.whatsapp.subtitle}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Contact Details */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className={`font-semibold mb-6 ${isHindi ? 'devanagari' : ''}`}>
                  {t.contact.info.title}
                </h3>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className={`text-sm text-muted-foreground mb-1 ${isHindi ? 'devanagari' : ''}`}>
                        {t.contact.info.address.label}
                      </div>
                      <div className={`text-sm ${isHindi ? 'devanagari' : ''}`}>
                        {t.contact.info.address.value}
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className={`text-sm text-muted-foreground mb-1 ${isHindi ? 'devanagari' : ''}`}>
                        {t.contact.info.phone.label}
                      </div>
                      <a href={`tel:${t.contact.info.phone.value}`} className={`text-sm hover:text-primary transition-colors ${isHindi ? 'devanagari' : ''}`}>
                        {t.contact.info.phone.value}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className={`text-sm text-muted-foreground mb-1 ${isHindi ? 'devanagari' : ''}`}>
                        {t.contact.info.email.label}
                      </div>
                      <a href={`mailto:${t.contact.info.email.value}`} className={`text-sm hover:text-primary transition-colors ${isHindi ? 'devanagari' : ''}`}>
                        {t.contact.info.email.value}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className={`text-sm text-muted-foreground mb-1 ${isHindi ? 'devanagari' : ''}`}>
                        {t.contact.info.hours.label}
                      </div>
                      <div className={`text-sm ${isHindi ? 'devanagari' : ''}`}>
                        {t.contact.info.hours.value}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
