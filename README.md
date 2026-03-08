# 🕉️ Astha Gurukul - Vedic Sciences Education Platform

<div align="center">

![Astha Gurukul](public/images/hero-bg.png)

**Where Science Meets Spirituality**

*A comprehensive multilingual platform for Vedic Astrology, Vastu Shastra, Numerology & Palmistry education*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🌟 Overview

Astha Gurukul is a modern digital platform dedicated to preserving and teaching the ancient Vedic sciences. Built with the **Saksham philosophy** (empowerment through divine science), the platform offers professional certifications in:

- 🔮 **Jyotish (Vedic Astrology)** - 12-month professional certification
- 🏠 **Vastu Shastra** - 8-month architectural science certification
- 🔢 **Numerology (Ank Jyotish)** - 6-month certification
- ✋ **Palmistry (Samudrik Shastra)** - 6-month certification

## ✨ Features

### 🌐 Multilingual Support
- Complete English and Hindi translations
- Devanagari-optimized typography with Hind & Poppins fonts
- Language switcher with localStorage persistence

### 🎨 Vedic Design System
- **Saffron Color Palette**: Deep Saffron (#FF9933), Gold (#F4C430), Maroon
- Sacred geometry SVG components (Om, Sri Yantra, Zodiac Wheel, Lotus)
- Traditional iconography with modern UI principles

### 📚 Comprehensive Course Information
- Detailed curriculum with module breakdowns
- Learning outcomes for each certification
- Level indicators (Basic, Intermediate, Professional, Research)

### 👨‍🏫 Expert Faculty Profiles
- Traditional titles hierarchy (Jyotish Acharya, Visharada, Bhushan)
- Academic and professional credentials
- Specialization areas

### 💬 Student Testimonials
- Category filtering (Career, Personal, Professional)
- Success stories with highlights
- Pagination carousel

### 📱 Contact & Enrollment
- Contact form with course selection
- WhatsApp Business integration for Indian market
- Office hours and location information

### 🎭 Animations & Interactions
- Framer Motion animations throughout
- Celestial rotation effects
- Staggered content reveals
- Smooth scroll navigation

---

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 with App Router |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Hind, Poppins (Google Fonts) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Vedic color palette
│   ├── layout.tsx           # Root layout with fonts & providers
│   └── page.tsx             # Main page component
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Navigation with language switcher
│   │   └── footer.tsx       # Footer with newsletter
│   ├── sacred/
│   │   └── sacred-symbols.tsx  # Om, Sri Yantra, Zodiac, Lotus
│   ├── sections/
│   │   ├── hero.tsx         # Hero section
│   │   ├── stats.tsx        # Animated statistics
│   │   ├── mission.tsx      # Saksham philosophy
│   │   ├── courses.tsx      # Course offerings
│   │   ├── why-us.tsx       # Key differentiators
│   │   ├── faculty.tsx      # Faculty profiles
│   │   ├── testimonials.tsx # Student stories
│   │   ├── cta.tsx          # Call to action
│   │   └── contact.tsx      # Contact form & info
│   └── ui/                  # shadcn/ui components
├── i18n/
│   ├── context.tsx          # i18n provider & hook
│   └── translations.ts      # EN/HI translations
├── hooks/                   # Custom React hooks
└── lib/                     # Utility functions
```

---

## 🏃 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Run linting
bun run lint
```

---

## 🎨 Vedic Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Saffron | `#FF9933` | Primary buttons, brand headers |
| Saffron Gold | `#F4C430` | Icons, decorative borders |
| Maroon | `#8F0B0B` | Footer, strong dividers |
| Mustard Gold | `#FFCC00` | Secondary accents |
| Teal | `#008080` | Complementary color |

---

## 📜 Faculty Title Hierarchy

| Title | Description |
|-------|-------------|
| **Jyotish Praveena** | Basic proficiency |
| **Jyotish Visharada** | Advanced mastery |
| **Jyotish Acharya** | Scholar/Teacher level |
| **Jyotish Bhushan** | Research contribution |
| **Vastu Visharad** | Vastu expertise |

---

## 🌍 Internationalization

The platform supports:
- **English (EN)** - Default language
- **Hindi (HI)** - Complete Devanagari translations

Language preference is persisted in localStorage.

---

## 📸 Screenshots

### Hero Section
![Hero](public/images/hero-bg.png)

### Courses
![Astrology Course](public/images/astrology-course.png)

---

## 🔗 Live Demo

Visit the live website: [asthagurukul.com](https://asthagurukul.com)

---

## 📄 License

© 2024 Astha Gurukul. All rights reserved.

---

<div align="center">

**Made with devotion for Vedic wisdom** 🙏

</div>
