export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      courses: 'Courses',
      faculty: 'Faculty',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    
    // Home Page
    home: {
      hero: {
        tagline: 'Where Science Meets Spirituality',
        title: 'Master the Ancient Wisdom of',
        titleHighlight: 'Vedic Sciences',
        subtitle: 'Study Jyotish (Astrology), Vastu Shastra, Numerology & Palmistry from expert Acharyas with 22+ years of researched curriculum.',
        cta: 'Begin Your Journey',
        ctaSecondary: 'Explore Courses',
      },
      stats: {
        years: 'Years of Researched Notes',
        students: 'Successful Students',
        faculties: 'Expert Faculties',
        satisfaction: 'Student Satisfaction',
      },
      mission: {
        badge: 'Our Mission',
        title: 'The Saksham Philosophy',
        subtitle: 'Empowering Through Divine Science',
        description: 'Astha Gurukul is dedicated to taking Jyotisha away from superstition and placing it on a scientific pedestal. We believe in "Value Creation" - positioning the study of astrology as a systematic pursuit of knowledge aimed at enhancing human welfare.',
        values: [
          {
            title: 'Scientific Approach',
            description: 'Research-based curriculum with case studies over superstition',
          },
          {
            title: 'Lifetime Support',
            description: 'Continuous guidance including career placement and doubt-solving',
          },
          {
            title: 'Ethical Practice',
            description: 'Practical application for health, wealth, and harmony',
          },
          {
            title: 'Traditional Roots',
            description: 'Preserving the ancient Gurukul system in modern times',
          },
        ],
      },
      courses: {
        badge: 'Our Programs',
        title: 'Sacred Certifications',
        subtitle: 'Comprehensive courses designed to transform you into a professional practitioner',
        viewAll: 'View All Courses',
      },
      whyUs: {
        badge: 'Why Choose Us',
        title: 'The Astha Gurukul Difference',
        features: [
          {
            title: 'Research-Based Curriculum',
            description: '22+ years of meticulously researched notes and case studies from experienced practitioners.',
          },
          {
            title: 'Expert Acharyas',
            description: 'Learn from qualified Jyotish Acharyas, Vastu Visharads, and scholars with decades of experience.',
          },
          {
            title: 'Career Support',
            description: 'Get placed on leading astrology apps like Astrotalk, Vedic Meet, and build your practice.',
          },
          {
            title: 'Doubt Resolution',
            description: 'Lifetime doubt-solving support ensuring you never feel stuck in your learning journey.',
          },
        ],
      },
      cta: {
        title: 'Ready to Transform Your Life?',
        subtitle: 'Join thousands of students who have discovered their true potential through Vedic wisdom',
        button: 'Start Learning Today',
      },
    },
    
    // Courses Page
    courses: {
      badge: 'Our Curriculum',
      title: 'Professional Certifications',
      subtitle: 'Step-by-step structured curriculum from foundational principles to advanced predictive techniques',
      levels: {
        basic: 'Basic',
        intermediate: 'Intermediate',
        professional: 'Professional',
        research: 'Research',
      },
      items: {
        astrology: {
          title: 'Vedic Astrology',
          hindiTitle: 'Jyotish Shastra',
          description: 'Master the ancient science of planetary influences and their effects on human life. Learn Kundali analysis, Dashas, Muhurat, and remedial measures.',
          duration: '12 Months',
          level: 'Professional',
          modules: [
            {
              title: 'Foundations',
              topics: ['Rashi (Zodiac Signs)', 'Graha (Planets)', 'Nakshatra (Lunar Mansions)', 'Birth Chart Construction'],
            },
            {
              title: 'Chart Analysis',
              topics: ['12 Houses (Bhavas)', 'Planetary Combinations (Yogas)', 'Aspects (Drishti)', 'Divisional Charts (Vargas)'],
            },
            {
              title: 'Predictive Techniques',
              topics: ['Dasha Systems', 'Transits (Gochar)', 'Muhurat Calculation', 'Timing of Events'],
            },
            {
              title: 'Remedial Measures',
              topics: ['Gem Therapy', 'Mantra Shastra', 'Dosh Nivaran', 'Practical Case Studies'],
            },
          ],
          outcomes: ['Professional Kundali Analysis', 'Muhurat Selection Expert', 'Remedial Consultation', 'Research Capability'],
        },
        vastu: {
          title: 'Vastu Shastra',
          hindiTitle: 'Science of Architecture',
          description: 'Learn the ancient science of architecture and design to create spaces filled with positive energy. Master residential, commercial, and industrial Vastu.',
          duration: '8 Months',
          level: 'Professional',
          modules: [
            {
              title: 'Fundamentals',
              topics: ['Pancha Mahabhutas', 'Eight Directions', 'Vastu Purusha Mandala', 'Site Selection'],
            },
            {
              title: 'Residential Vastu',
              topics: ['House Planning', 'Room Placement', 'Entrance Design', 'Interior Arrangement'],
            },
            {
              title: 'Commercial Vastu',
              topics: ['Office Spaces', 'Retail Stores', 'Factories', 'Hotels & Restaurants'],
            },
            {
              title: 'Remedies',
              topics: ['Mirror Corrections', 'Crystal Therapy', 'Pyramid Vastu', 'Color Therapy'],
            },
          ],
          outcomes: ['Vastu Consultant', 'Architectural Advisor', 'Remedial Expert', 'Commercial Specialist'],
        },
        numerology: {
          title: 'Numerology',
          hindiTitle: 'Ank Jyotish',
          description: 'Decode destiny through numbers. Learn various grid systems including Lo Shu Grid, Astro Grid, and predictive numerology techniques.',
          duration: '6 Months',
          level: 'Intermediate',
          modules: [
            {
              title: 'Number Fundamentals',
              topics: ['Number Meanings', 'Life Path Numbers', 'Destiny Numbers', 'Name Numbers'],
            },
            {
              title: 'Grid Systems',
              topics: ['Lo Shu Grid', 'Astro Grid', 'Pythagorean System', 'Chaldean System'],
            },
            {
              title: 'Predictive Methods',
              topics: ['Personal Years', 'Compatibility Analysis', 'Business Numbers', 'Lucky Numbers'],
            },
            {
              title: 'Name Correction',
              topics: ['Spelling Adjustments', 'Business Naming', 'Signature Analysis', 'Case Studies'],
            },
          ],
          outcomes: ['Numerology Readings', 'Name Correction Expert', 'Business Consultant', 'Compatibility Analyst'],
        },
        palmistry: {
          title: 'Palmistry',
          hindiTitle: 'Samudrik Shastra',
          description: 'Master the art of hand reading to understand personality traits, life events, and future possibilities. Complete knowledge of palm lines, mounts, and face reading.',
          duration: '6 Months',
          level: 'Intermediate',
          modules: [
            {
              title: 'Hand Fundamentals',
              topics: ['Hand Types', 'Finger Analysis', 'Thumb Significance', 'Nail Study'],
            },
            {
              title: 'Major Lines',
              topics: ['Life Line', 'Head Line', 'Heart Line', 'Fate Line'],
            },
            {
              title: 'Mounts & Signs',
              topics: ['Mount of Venus', 'Jupiter Mount', 'Saturn Mount', 'Special Signs'],
            },
            {
              title: 'Timing & Events',
              topics: ['Event Timing', 'Marriage Lines', 'Travel Lines', 'Face Reading Basics'],
            },
          ],
          outcomes: ['Hand Analysis Expert', 'Personality Reader', 'Event Predictor', 'Face Reader'],
        },
      },
      enroll: 'Enroll Now',
      downloadBrochure: 'Download Brochure',
    },
    
    // Faculty Page
    faculty: {
      badge: 'Our Acharyas',
      title: 'Meet Our Expert Faculty',
      subtitle: 'Learn from highly qualified scholars with decades of experience in Vedic sciences',
      titles: {
        praveena: 'Jyotish Praveena',
        visharada: 'Jyotish Visharada',
        acharya: 'Jyotish Acharya',
        bhushan: 'Jyotish Bhushan',
        vastuVisharad: 'Vastu Visharad',
      },
      titleDescriptions: {
        praveena: 'Basic proficiency in astrological principles',
        visharada: 'Advanced mastery and analytical capability',
        acharya: 'Scholar/Teacher level with research experience',
        bhushan: 'Recognition for original research and contribution',
      },
      members: [
        {
          name: 'Dr. Rajesh Kumar Sharma',
          titles: ['Jyotish Acharya', 'Vastu Visharad'],
          credentials: ['Ph.D. (Sanskrit)', 'M.A. (Jyotish)', 'B.Sc.'],
          specialization: 'Medical Astrology & Longevity Calculation',
          experience: '28 Years',
          bio: 'Former professor at Sanskrit University with extensive research in medical astrology. Author of "Mystery of Rahu" and numerous research papers.',
        },
        {
          name: 'Acharya Sunita Devi',
          titles: ['Jyotish Acharya', 'Jyotish Bhushan'],
          credentials: ['M.A. (Sanskrit)', 'Jyotish Visharada'],
          specialization: 'Marriage Matching & Relationship Astrology',
          experience: '22 Years',
          bio: 'Specialized in compatibility analysis and relationship counseling. Has guided over 10,000 successful Kundali matchings.',
        },
        {
          name: 'Pt. Ramesh Chandra Joshi',
          titles: ['Jyotish Visharada', 'Vastu Visharad'],
          credentials: ['M.Sc. (Mathematics)', 'Shastri'],
          specialization: 'Vastu Shastra & Remedial Measures',
          experience: '25 Years',
          bio: 'Expert in Vastu corrections without demolition. Consultant for over 500 commercial and residential projects.',
        },
        {
          name: 'Dr. Meena Iyer',
          titles: ['Jyotish Acharya', 'Numerologist'],
          credentials: ['Ph.D. (Astrology)', 'M.Com'],
          specialization: 'Numerology & Business Astrology',
          experience: '18 Years',
          bio: 'Corporate astrologer for Fortune 500 companies. Expert in business timing and financial astrology.',
        },
        {
          name: 'Acharya Vikram Singh',
          titles: ['Jyotish Visharada', 'Samudrik Shastracharya'],
          credentials: ['M.A. (Sanskrit)', 'LLB'],
          specialization: 'Palmistry & Face Reading',
          experience: '20 Years',
          bio: 'Master palmist trained in traditional Gurukul system. Known for accurate timing of events through palm reading.',
        },
        {
          name: 'Dr. Priya Anand',
          titles: ['Jyotish Acharya', 'Research Guide'],
          credentials: ['Ph.D. (Jyotish)', 'M.Sc. (Physics)'],
          specialization: 'Scientific Astrology & Research',
          experience: '15 Years',
          bio: 'Bridging ancient wisdom with modern science. Published researcher in international journals on astrological correlations.',
        },
      ],
    },
    
    // Testimonials Page
    testimonials: {
      badge: 'Student Stories',
      title: 'Voices of Transformation',
      subtitle: 'Hear from our students who have transformed their lives through Vedic wisdom',
      categories: {
        all: 'All Stories',
        career: 'Career Transformation',
        personal: 'Personal Growth',
        professional: 'Professional Practice',
      },
      stories: [
        {
          name: 'Priya Mehta',
          role: 'Professional Astrologer',
          location: 'Mumbai',
          image: '/testimonials/priya.jpg',
          rating: 5,
          category: 'career',
          text: 'After completing the Jyotish Acharya course, I started my practice on Astrotalk. Within 6 months, I was earning more than my previous corporate job. The practical training here is unmatched!',
          highlight: 'Earning more than corporate job within 6 months',
        },
        {
          name: 'Rajesh Agarwal',
          role: 'Business Owner',
          location: 'Delhi',
          image: '/testimonials/rajesh.jpg',
          rating: 5,
          category: 'personal',
          text: 'The Vastu course changed my life. I applied the principles to my factory and saw a 40% increase in productivity. The remedies suggested without demolition were incredibly practical.',
          highlight: '40% productivity increase after Vastu application',
        },
        {
          name: 'Dr. Anjali Sharma',
          role: 'Medical Professional',
          location: 'Bangalore',
          image: '/testimonials/anjali.jpg',
          rating: 5,
          category: 'personal',
          text: 'As a doctor, I was skeptical about astrology. But the scientific approach at Astha Gurukul opened my eyes. Now I integrate medical astrology in my practice for holistic healing.',
          highlight: 'Integrating medical astrology in healthcare',
        },
        {
          name: 'Vikram Patel',
          role: 'IT Professional & Consultant',
          location: 'Pune',
          image: '/testimonials/vikram.jpg',
          rating: 5,
          category: 'professional',
          text: 'The step-by-step teaching method makes complex calculations feel easy. I now practice part-time on Vedic Meet app while maintaining my IT career. The doubt-solving support is exceptional.',
          highlight: 'Successful parallel career in astrology',
        },
        {
          name: 'Sunita Reddy',
          role: 'Homemaker to Consultant',
          location: 'Hyderabad',
          image: '/testimonials/sunita.jpg',
          rating: 5,
          category: 'career',
          text: 'I never thought I could have a career at 45. The Numerology course gave me a new identity. Now I run my own consultation business and feel financially independent for the first time.',
          highlight: 'New career at 45 with financial independence',
        },
        {
          name: 'Amit Verma',
          role: 'Research Scholar',
          location: 'Jaipur',
          image: '/testimonials/amit.jpg',
          rating: 5,
          category: 'professional',
          text: 'The research methodology taught here is rigorous. I published my first paper on planetary correlations within a year of completing the course. The Acharyas are true scholars.',
          highlight: 'Published research paper within one year',
        },
      ],
      stats: {
        satisfied: 'Satisfied Students',
        placed: 'Professionals Placed',
        countries: 'Countries Reached',
      },
    },
    
    // Contact Page
    contact: {
      badge: 'Get in Touch',
      title: 'Begin Your Journey',
      subtitle: 'Have questions? We are here to guide you on your path to Vedic wisdom',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your full name',
        email: 'Email Address',
        emailPlaceholder: 'Enter your email',
        phone: 'Phone Number',
        phonePlaceholder: '+91 XXXXX XXXXX',
        course: 'Interested Course',
        coursePlaceholder: 'Select a course',
        message: 'Message',
        messagePlaceholder: 'Tell us about your interest in Vedic sciences...',
        submit: 'Send Inquiry',
        submitting: 'Sending...',
        success: 'Thank you! We will contact you soon.',
        error: 'Something went wrong. Please try again.',
      },
      courses: [
        'Vedic Astrology (Jyotish)',
        'Vastu Shastra',
        'Numerology',
        'Palmistry',
        'Not sure yet',
      ],
      info: {
        title: 'Contact Information',
        address: {
          label: 'Gurukul Address',
          value: 'Astha Gurukul, Divine Knowledge Center, Haridwar, Uttarakhand 249401, India',
        },
        phone: {
          label: 'Phone',
          value: '+91 98765 43210',
        },
        email: {
          label: 'Email',
          value: 'info@asthagurukul.com',
        },
        hours: {
          label: 'Office Hours',
          value: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
        },
      },
      whatsapp: {
        title: 'Quick Connect',
        subtitle: 'Chat with us instantly',
        message: 'Hello! I am interested in learning about your courses.',
      },
      social: {
        title: 'Follow Us',
        subtitle: 'Stay connected for daily wisdom',
      },
    },
    
    // Footer
    footer: {
      description: 'Astha Gurukul is dedicated to preserving and promoting the ancient Vedic sciences through scientific methodology and practical application.',
      quickLinks: 'Quick Links',
      courses: 'Our Courses',
      support: 'Support',
      newsletter: {
        title: 'Vedic Wisdom Newsletter',
        subtitle: 'Receive weekly insights on astrology, vastu, and spiritual sciences',
        placeholder: 'Enter your email',
        button: 'Subscribe',
      },
      copyright: '© 2024 Astha Gurukul. All rights reserved.',
      madeWith: 'Made with devotion for Vedic wisdom',
    },
    
    // Common
    common: {
      learnMore: 'Learn More',
      enroll: 'Enroll Now',
      readMore: 'Read More',
      viewAll: 'View All',
      back: 'Back',
      loading: 'Loading...',
      error: 'Error loading content',
    },
  },
  
  // Hindi translations
  hi: {
    // Navigation
    nav: {
      home: 'मुख्य पृष्ठ',
      courses: 'पाठ्यक्रम',
      faculty: 'संकाय',
      testimonials: 'प्रशंसापत्र',
      contact: 'संपर्क',
    },
    
    // Home Page
    home: {
      hero: {
        tagline: 'जहाँ विज्ञान मिलता है अध्यात्म से',
        title: 'आत्मसात करें प्राचीन ज्ञान',
        titleHighlight: 'वैदिक विज्ञान',
        subtitle: '२२+ वर्षों के शोधित पाठ्यक्रम के साथ विशेषज्ञ आचार्यों से सीखें ज्योतिष, वास्तु शास्त्र, अंक ज्योतिष और हस्तरेखा विद्या।',
        cta: 'अपनी यात्रा शुरू करें',
        ctaSecondary: 'पाठ्यक्रम देखें',
      },
      stats: {
        years: 'वर्षों के शोधित नोट्स',
        students: 'सफल छात्र',
        faculties: 'विशेषज्ञ संकाय',
        satisfaction: 'छात्र संतुष्टि',
      },
      mission: {
        badge: 'हमारा मिशन',
        title: 'सक्षम दर्शन',
        subtitle: 'दिव्य विज्ञान के माध्यम से सशक्तिकरण',
        description: 'अस्था गुरुकुल ज्योतिष को अंधविश्वास से दूर ले जाकर वैज्ञानिक पीठ पर स्थापित करने के लिए समर्पित है। हम "मूल्य निर्माण" में विश्वास करते हैं - मानव कल्याण को बढ़ाने के लिए ज्योतिष का अध्ययन एक व्यवस्थित ज्ञान खोज के रूप में।',
        values: [
          {
            title: 'वैज्ञानिक दृष्टिकोण',
            description: 'अंधविश्वास पर विराम, केस स्टडी के साथ शोध-आधारित पाठ्यक्रम',
          },
          {
            title: 'जीवनभर सहायता',
            description: 'करियर प्लेसमेंट और समस्या समाधान सहित निरंतर मार्गदर्शन',
          },
          {
            title: 'नैतिक अभ्यास',
            description: 'स्वास्थ्य, समृद्धि और सद्भाव के लिए व्यावहारिक अनुप्रयोग',
          },
          {
            title: 'पारंपरिक मूल',
            description: 'आधुनिक समय में प्राचीन गुरुकुल प्रणाली का संरक्षण',
          },
        ],
      },
      courses: {
        badge: 'हमारे कार्यक्रम',
        title: 'पवित्र प्रमाणन',
        subtitle: 'आपको एक पेशेवर अभ्यासक में बदलने के लिए डिज़ाइन किए गए व्यापक पाठ्यक्रम',
        viewAll: 'सभी पाठ्यक्रम देखें',
      },
      whyUs: {
        badge: 'हमें क्यों चुनें',
        title: 'अस्था गुरुकुल की विशेषता',
        features: [
          {
            title: 'शोध-आधारित पाठ्यक्रम',
            description: 'अनुभवी अभ्यासकों से २२+ वर्षों के सूक्ष्मता से शोधित नोट्स और केस स्टडी।',
          },
          {
            title: 'विशेषज्ञ आचार्य',
            description: 'दशकों के अनुभव वाले योग्य ज्योतिष आचार्य, वास्तु विशारद और विद्वानों से सीखें।',
          },
          {
            title: 'करियर सहायता',
            description: 'एस्ट्रोटॉक, वैदिक मीट जैसे प्रमुख ज्योतिष ऐप्स पर प्लेसमेंट पाएं।',
          },
          {
            title: 'समस्या समाधान',
            description: 'जीवनभर की समस्या समाधान सहायता यह सुनिश्चित करती है कि आप कभी अटके नहीं।',
          },
        ],
      },
      cta: {
        title: 'अपना जीवन बदलने के लिए तैयार हैं?',
        subtitle: 'हजारों छात्रों से जुड़ें जिन्होंने वैदिक ज्ञान के माध्यम से अपनी सच्ची क्षमता खोजी',
        button: 'आज ही सीखना शुरू करें',
      },
    },
    
    // Courses Page
    courses: {
      badge: 'हमारा पाठ्यक्रम',
      title: 'व्यावसायिक प्रमाणन',
      subtitle: 'मौलिक सिद्धांतों से उन्नत भविष्यवाणी तकनीकों तक चरणबद्ध संरचित पाठ्यक्रम',
      levels: {
        basic: 'आधारभूत',
        intermediate: 'मध्यम',
        professional: 'व्यावसायिक',
        research: 'शोध',
      },
      items: {
        astrology: {
          title: 'वैदिक ज्योतिष',
          hindiTitle: 'ज्योतिष शास्त्र',
          description: 'ग्रहों के प्रभाव और मानव जीवन पर उनके प्रभाव की प्राचीन विज्ञान में महारत हासिल करें। कुंडली विश्लेषण, दशा, मुहूर्त और उपाय सीखें।',
          duration: '१२ माह',
          level: 'व्यावसायिक',
          modules: [
            {
              title: 'आधारभूत',
              topics: ['राशि (चक्र)', 'ग्रह', 'नक्षत्र', 'जन्म पत्री निर्माण'],
            },
            {
              title: 'कुंडली विश्लेषण',
              topics: ['१२ भाव', 'ग्रह योग', 'दृष्टि', 'वर्ग कुंडली'],
            },
            {
              title: 'भविष्यवाणी तकनीक',
              topics: ['दशा प्रणाली', 'गोचर', 'मुहूर्त गणना', 'घटनाओं का समय'],
            },
            {
              title: 'उपाय',
              topics: ['रत्न चिकित्सा', 'मंत्र शास्त्र', 'दोष निवारण', 'व्यावहारिक केस स्टडी'],
            },
          ],
          outcomes: ['व्यावसायिक कुंडली विश्लेषण', 'मुहूर्त विशेषज्ञ', 'उपाय परामर्श', 'शोध क्षमता'],
        },
        vastu: {
          title: 'वास्तु शास्त्र',
          hindiTitle: 'वास्तु शास्त्र',
          description: 'सकारात्मक ऊर्जा से भरी जगह बनाने के लिए वास्तु शास्त्र की प्राचीन विज्ञान सीखें। आवासीय, वाणिज्यिक और औद्योगिक वास्तु में महारत हासिल करें।',
          duration: '८ माह',
          level: 'व्यावसायिक',
          modules: [
            {
              title: 'मौलिक',
              topics: ['पंच महाभूत', 'आठ दिशाएं', 'वास्तु पुरुष मंडल', 'स्थान चयन'],
            },
            {
              title: 'आवासीय वास्तु',
              topics: ['घर की योजना', 'कमरे की स्थिति', 'प्रवेश द्वार', 'आंतरिक व्यवस्था'],
            },
            {
              title: 'वाणिज्यिक वास्तु',
              topics: ['कार्यालय', 'खुदरा दुकानें', 'कारखाने', 'होटल और रेस्तरां'],
            },
            {
              title: 'उपाय',
              topics: ['दर्पण सुधार', 'क्रिस्टल चिकित्सा', 'पिरामिड वास्तु', 'रंग चिकित्सा'],
            },
          ],
          outcomes: ['वास्तु सलाहकार', 'वास्तुशिल्पी सलाहकार', 'उपाय विशेषज्ञ', 'वाणिज्यिक विशेषज्ञ'],
        },
        numerology: {
          title: 'अंक ज्योतिष',
          hindiTitle: 'अंक ज्योतिष',
          description: 'संख्याओं के माध्यम से भाग्य को समझें। लो शु ग्रिड, एस्ट्रो ग्रिड और भविष्यसूचक अंक ज्योतिष तकनीकों सहित विभिन्न ग्रिड प्रणालियाँ सीखें।',
          duration: '६ माह',
          level: 'मध्यम',
          modules: [
            {
              title: 'अंक मौलिक',
              topics: ['अंकों का अर्थ', 'जीवन पथ अंक', 'भाग्यांक', 'नामांक'],
            },
            {
              title: 'ग्रिड प्रणाली',
              topics: ['लो शु ग्रिड', 'एस्ट्रो ग्रिड', 'पाइथागोरस प्रणाली', 'कैलडियन प्रणाली'],
            },
            {
              title: 'भविष्यवाणी विधियाँ',
              topics: ['व्यक्तिगत वर्ष', 'सुसंगति विश्लेषण', 'व्यापारिक अंक', 'भाग्यशाली अंक'],
            },
            {
              title: 'नाम सुधार',
              topics: ['वर्तनी समायोजन', 'व्यापार नामकरण', 'हस्ताक्षर विश्लेषण', 'केस स्टडी'],
            },
          ],
          outcomes: ['अंक ज्योतिष पाठ', 'नाम सुधार विशेषज्ञ', 'व्यापार सलाहकार', 'सुसंगति विश्लेषक'],
        },
        palmistry: {
          title: 'हस्तरेखा विद्या',
          hindiTitle: 'सामुद्रिक शास्त्र',
          description: 'व्यक्तित्व लक्षणों, जीवन की घटनाओं और भविष्य की संभावनाओं को समझने के लिए हाथ पढ़ने की कला में महारत हासिल करें।',
          duration: '६ माह',
          level: 'मध्यम',
          modules: [
            {
              title: 'हाथ के मौलिक',
              topics: ['हाथ के प्रकार', 'उंगली विश्लेषण', 'अंगूठे का महत्व', 'नाखून अध्ययन'],
            },
            {
              title: 'प्रमुख रेखाएं',
              topics: ['जीवन रेखा', 'मस्तिष्क रेखा', 'हृदय रेखा', 'भाग्य रेखा'],
            },
            {
              title: 'पहाड़ और चिह्न',
              topics: ['शुक्र पहाड़', 'बृहस्पति पहाड़', 'शनि पहाड़', 'विशेष चिह्न'],
            },
            {
              title: 'समय और घटनाएं',
              topics: ['घटना का समय', 'विवाह रेखाएं', 'यात्रा रेखाएं', 'मुख पढ़ना'],
            },
          ],
          outcomes: ['हाथ विश्लेषण विशेषज्ञ', 'व्यक्तित्व पाठक', 'घटना भविष्यवक्ता', 'मुख पाठक'],
        },
      },
      enroll: 'अभी नामांकन करें',
      downloadBrochure: 'ब्रोशर डाउनलोड करें',
    },
    
    // Faculty Page
    faculty: {
      badge: 'हमारे आचार्य',
      title: 'हमारे विशेषज्ञ संकाय से मिलें',
      subtitle: 'वैदिक विज्ञानों में दशकों के अनुभव वाले अत्यंत योग्य विद्वानों से सीखें',
      titles: {
        praveena: 'ज्योतिष प्रवीण',
        visharada: 'ज्योतिष विशारद',
        acharya: 'ज्योतिष आचार्य',
        bhushan: 'ज्योतिष भूषण',
        vastuVisharad: 'वास्तु विशारद',
      },
      titleDescriptions: {
        praveena: 'ज्योतिषीय सिद्धांतों में आधारभूत प्रवीणता',
        visharada: 'उन्नत महारत और विश्लेषणात्मक क्षमता',
        acharya: 'शोध अनुभव के साथ विद्वान/शिक्षक स्तर',
        bhushan: 'मौलिक शोध और योगदान के लिए मान्यता',
      },
      members: [
        {
          name: 'डॉ. राजेश कुमार शर्मा',
          titles: ['ज्योतिष आचार्य', 'वास्तु विशारद'],
          credentials: ['पीएच.डी. (संस्कृत)', 'एम.ए. (ज्योतिष)', 'बी.एससी.'],
          specialization: 'चिकित्सा ज्योतिष और आयु गणना',
          experience: '२८ वर्ष',
          bio: 'संस्कृत विश्वविद्यालय के पूर्व प्रोफेसर, चिकित्सा ज्योतिष में व्यापक शोध। "राहु का रहस्य" और कई शोध पत्रों के लेखक।',
        },
        {
          name: 'आचार्य सुनीता देवी',
          titles: ['ज्योतिष आचार्य', 'ज्योतिष भूषण'],
          credentials: ['एम.ए. (संस्कृत)', 'ज्योतिष विशारद'],
          specialization: 'विवाह मिलान और संबंध ज्योतिष',
          experience: '२२ वर्ष',
          bio: 'सुसंगति विश्लेषण और संबंध परामर्श में विशेषज्ञ। १०,००० से अधिक सफल कुंडली मिलान में मार्गदर्शन किया।',
        },
        {
          name: 'पं. रमेश चंद्र जोशी',
          titles: ['ज्योतिष विशारद', 'वास्तु विशारद'],
          credentials: ['एम.एससी. (गणित)', 'शास्त्री'],
          specialization: 'वास्तु शास्त्र और उपाय',
          experience: '२५ वर्ष',
          bio: 'बिना ध्वंस के वास्तु सुधार में विशेषज्ञ। ५०० से अधिक वाणिज्यिक और आवासीय परियोजनाओं के सलाहकार।',
        },
        {
          name: 'डॉ. मीना अय्यर',
          titles: ['ज्योतिष आचार्य', 'अंक ज्योतिषी'],
          credentials: ['पीएच.डी. (ज्योतिष)', 'एम.कॉम'],
          specialization: 'अंक ज्योतिष और व्यापारिक ज्योतिष',
          experience: '१८ वर्ष',
          bio: 'फॉर्च्यून ५०० कंपनियों के कॉर्पोरेट ज्योतिषी। व्यापार समय और वित्तीय ज्योतिष में विशेषज्ञ।',
        },
        {
          name: 'आचार्य विक्रम सिंह',
          titles: ['ज्योतिष विशारद', 'सामुद्रिक शास्त्राचार्य'],
          credentials: ['एम.ए. (संस्कृत)', 'एलएलबी'],
          specialization: 'हस्तरेखा विद्या और मुख पठन',
          experience: '२० वर्ष',
          bio: 'पारंपरिक गुरुकुल प्रणाली में प्रशिक्षित मास्टर पामिस्ट। हाथ के माध्यम से घटनाओं के सटीक समय के लिए जाने जाते हैं।',
        },
        {
          name: 'डॉ. प्रिया आनंद',
          titles: ['ज्योतिष आचार्य', 'शोध मार्गदर्शक'],
          credentials: ['पीएच.डी. (ज्योतिष)', 'एम.एससी. (भौतिकी)'],
          specialization: 'वैज्ञानिक ज्योतिष और शोध',
          experience: '१५ वर्ष',
          bio: 'प्राचीन ज्ञान को आधुनिक विज्ञान से जोड़ना। ज्योतिषीय सहसंबंधों पर अंतरराष्ट्रीय जर्नलों में प्रकाशित शोधकर्ता।',
        },
      ],
    },
    
    // Testimonials Page
    testimonials: {
      badge: 'छात्र कथाएं',
      title: 'परिवर्तन की आवाज़ें',
      subtitle: 'हमारे छात्रों से सुनें जिन्होंने वैदिक ज्ञान के माध्यम से अपना जीवन बदला',
      categories: {
        all: 'सभी कथाएं',
        career: 'करियर परिवर्तन',
        personal: 'व्यक्तिगत विकास',
        professional: 'व्यावसायिक अभ्यास',
      },
      stories: [
        {
          name: 'प्रिया मेहता',
          role: 'व्यावसायिक ज्योतिषी',
          location: 'मुंबई',
          rating: 5,
          category: 'career',
          text: 'ज्योतिष आचार्य पाठ्यक्रम पूरा करने के बाद, मैंने एस्ट्रोटॉक पर अपना अभ्यास शुरू किया। ६ महीने में, मैं अपनी पिछली कॉर्पोरेट नौकरी से अधिक कमा रही थी। यहाँ का व्यावहारिक प्रशिक्षण अद्वितीय है!',
          highlight: '६ महीने में कॉर्पोरेट नौकरी से अधिक कमाई',
        },
        {
          name: 'राजेश अग्रवाल',
          role: 'व्यापारी',
          location: 'दिल्ली',
          rating: 5,
          category: 'personal',
          text: 'वास्तु पाठ्यक्रम ने मेरा जीवन बदल दिया। मैंने अपनी फैक्ट्री में सिद्धांतों को लागू किया और उत्पादन में ४०% की वृद्धि देखी। बिना ध्वंस के सुझाए गए उपाय अविश्वसनीय रूप से व्यावहारिक थे।',
          highlight: 'वास्तु लागू करने के बाद ४०% उत्पादन वृद्धि',
        },
        {
          name: 'डॉ. अंजलि शर्मा',
          role: 'चिकित्सा पेशेवर',
          location: 'बैंगलोर',
          rating: 5,
          category: 'personal',
          text: 'एक डॉक्टर के रूप में, मैं ज्योतिष के बारे में संशय में थी। लेकिन अस्था गुरुकुल के वैज्ञानिक दृष्टिकोण ने मेरी आँखें खोलीं। अब मैं समग्र चिकित्सा के लिए अपने अभ्यास में चिकित्सा ज्योतिष को एकीकृत करती हूँ।',
          highlight: 'स्वास्थ्य सेवा में चिकित्सा ज्योतिष का एकीकरण',
        },
        {
          name: 'विक्रम पटेल',
          role: 'आईटी पेशेवर और सलाहकार',
          location: 'पुणे',
          rating: 5,
          category: 'professional',
          text: 'चरणबद्ध शिक्षण विधि जटिल गणनाओं को आसान बनाती है। अब मैं अपना आईटी करियर बनाए रखते हुए वैदिक मीट ऐप पर अंशकालिक अभ्यास करता हूँ। समस्या समाधान सहायता असाधारण है।',
          highlight: 'ज्योतिष में सफल समानांतर करियर',
        },
        {
          name: 'सुनीता रेड्डी',
          role: 'गृहिणी से सलाहकार',
          location: 'हैदराबाद',
          rating: 5,
          category: 'career',
          text: 'मैंने कभी नहीं सोचा था कि ४५ साल की उम्र में मेरा करियर हो सकता है। अंक ज्योतिष पाठ्यक्रम ने मुझे एक नई पहचान दी। अब मैं अपना सलाहकार व्यवसाय चलाती हूँ और पहली बार वित्तीय रूप से स्वतंत्र महसूस करती हूँ।',
          highlight: '४५ में वित्तीय स्वतंत्रता के साथ नया करियर',
        },
        {
          name: 'अमित वर्मा',
          role: 'शोध विद्वान',
          location: 'जयपुर',
          rating: 5,
          category: 'professional',
          text: 'यहाँ सिखाई गई शोध पद्धति कठोर है। पाठ्यक्रम पूरा करने के एक वर्ष के भीतर मैंने ग्रहीय सहसंबंधों पर अपना पहला पेपर प्रकाशित किया। आचार्य सच्चे विद्वान हैं।',
          highlight: 'एक वर्ष के भीतर शोध पत्र प्रकाशित',
        },
      ],
      stats: {
        satisfied: 'संतुष्ट छात्र',
        placed: 'पेशेवर प्लेसमेंट',
        countries: 'देशों तक पहुंच',
      },
    },
    
    // Contact Page
    contact: {
      badge: 'संपर्क करें',
      title: 'अपनी यात्रा शुरू करें',
      subtitle: 'कोई प्रश्न है? वैदिक ज्ञान के मार्ग पर हम आपका मार्गदर्शन करने के लिए यहाँ हैं',
      form: {
        name: 'पूरा नाम',
        namePlaceholder: 'अपना पूरा नाम दर्ज करें',
        email: 'ईमेल पता',
        emailPlaceholder: 'अपना ईमेल दर्ज करें',
        phone: 'फ़ोन नंबर',
        phonePlaceholder: '+९१ XXXXX XXXXX',
        course: 'रुचि का पाठ्यक्रम',
        coursePlaceholder: 'एक पाठ्यक्रम चुनें',
        message: 'संदेश',
        messagePlaceholder: 'वैदिक विज्ञानों में अपनी रुचि के बारे में बताएं...',
        submit: 'पूछताछ भेजें',
        submitting: 'भेज रहा है...',
        success: 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
        error: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
      },
      courses: [
        'वैदिक ज्योतिष',
        'वास्तु शास्त्र',
        'अंक ज्योतिष',
        'हस्तरेखा विद्या',
        'अभी निश्चित नहीं',
      ],
      info: {
        title: 'संपर्क जानकारी',
        address: {
          label: 'गुरुकुल पता',
          value: 'अस्था गुरुकुल, दिव्य ज्ञान केंद्र, हरिद्वार, उत्तराखंड २४९४०१, भारत',
        },
        phone: {
          label: 'फ़ोन',
          value: '+९१ ९८७६५ ४३२१०',
        },
        email: {
          label: 'ईमेल',
          value: 'info@asthagurukul.com',
        },
        hours: {
          label: 'कार्यालय समय',
          value: 'सोम - शनि: सुबह ९:०० - शाम ७:०० बजे',
        },
      },
      whatsapp: {
        title: 'तुरंत जुड़ें',
        subtitle: 'हमसे तुरंत चैट करें',
        message: 'नमस्ते! मुझे आपके पाठ्यक्रमों के बारे में जानने में रुचि है।',
      },
      social: {
        title: 'हमें फॉलो करें',
        subtitle: 'दैनिक ज्ञान के लिए जुड़े रहें',
      },
    },
    
    // Footer
    footer: {
      description: 'अस्था गुरुकुल वैज्ञानिक पद्धति और व्यावहारिक अनुप्रयोग के माध्यम से प्राचीन वैदिक विज्ञानों को संरक्षित और प्रोत्साहित करने के लिए समर्पित है।',
      quickLinks: 'त्वरित लिंक',
      courses: 'हमारे पाठ्यक्रम',
      support: 'सहायता',
      newsletter: {
        title: 'वैदिक ज्ञान समाचार',
        subtitle: 'ज्योतिष, वास्तु और आध्यात्मिक विज्ञानों पर साप्ताहिक अंतर्दृष्टि प्राप्त करें',
        placeholder: 'अपना ईमेल दर्ज करें',
        button: 'सदस्यता लें',
      },
      copyright: '© २०२४ अस्था गुरुकुल। सर्वाधिकार सुरक्षित।',
      madeWith: 'वैदिक ज्ञान के लिए भक्ति से निर्मित',
    },
    
    // Common
    common: {
      learnMore: 'और जानें',
      enroll: 'अभी नामांकन करें',
      readMore: 'और पढ़ें',
      viewAll: 'सभी देखें',
      back: 'वापस',
      loading: 'लोड हो रहा है...',
      error: 'सामग्री लोड करने में त्रुटि',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
