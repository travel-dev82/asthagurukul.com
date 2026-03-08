'use client';

import { motion } from 'framer-motion';

interface OmSymbolProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function OmSymbol({ className = '', size = 100, animated = true }: OmSymbolProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <linearGradient id="omGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="50%" stopColor="#F4C430" />
          <stop offset="100%" stopColor="#FF9933" />
        </linearGradient>
        <filter id="omGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Om Symbol Path */}
      <g filter={animated ? "url(#omGlow)" : undefined} className={animated ? "animate-sacred-pulse" : ""}>
        <path
          d="M15 75 Q20 65 25 60 Q30 55 35 60 Q40 65 45 55 Q50 45 55 50 Q60 55 65 45 Q70 35 75 40 Q80 45 82 35 Q84 25 80 20 Q75 15 70 20 Q65 25 68 32 Q71 38 65 42 Q60 45 55 40 Q50 35 45 40 Q40 45 42 52 Q44 58 38 60 Q32 62 28 58 Q24 54 20 60 Q16 66 18 72 Q20 78 25 75 Q30 72 28 68 Q26 64 30 62 Q34 60 38 64 Q42 68 45 65 Q48 62 52 66 Q56 70 60 68 Q64 66 68 70 Q72 74 75 72 Q78 70 82 74"
          fill="none"
          stroke="url(#omGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Chandrabindu (crescent and dot) */}
        <ellipse cx="75" cy="25" rx="8" ry="5" fill="none" stroke="url(#omGradient)" strokeWidth="2" />
        <circle cx="75" cy="15" r="3" fill="url(#omGradient)" />
      </g>
    </motion.svg>
  );
}

interface SriYantraProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function SriYantra({ className = '', size = 200, animated = true }: SriYantraProps) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      initial={animated ? { opacity: 0 } : {}}
      animate={animated ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="yantraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#F4C430" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF9933" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      
      <g
        transform="translate(100, 100)"
        className={animated ? "animate-celestial" : ""}
        style={{ transformOrigin: 'center' }}
      >
        {/* Central Bindu */}
        <circle cx="0" cy="0" r="4" fill="url(#yantraGradient)" />
        
        {/* Innermost triangle (Shakti) - pointing down */}
        <polygon
          points="0,-20 17.3,10 -17.3,10"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="1"
        />
        
        {/* Innermost triangle (Shiva) - pointing up */}
        <polygon
          points="0,20 -17.3,-10 17.3,-10"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="1"
        />
        
        {/* Second layer triangles */}
        <polygon
          points="0,-35 30.3,17.5 -30.3,17.5"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="0.8"
        />
        <polygon
          points="0,35 -30.3,-17.5 30.3,-17.5"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="0.8"
        />
        
        {/* Third layer triangles */}
        <polygon
          points="0,-50 43.3,25 -43.3,25"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="0.6"
        />
        <polygon
          points="0,50 -43.3,-25 43.3,-25"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="0.6"
        />
        
        {/* Outer triangles */}
        <polygon
          points="0,-65 56.3,32.5 -56.3,32.5"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="0.5"
        />
        <polygon
          points="0,65 -56.3,-32.5 56.3,-32.5"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="0.5"
        />
        
        {/* Outermost triangles */}
        <polygon
          points="0,-80 69.3,40 -69.3,40"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="0.4"
        />
        <polygon
          points="0,80 -69.3,-40 69.3,-40"
          fill="none"
          stroke="url(#yantraGradient)"
          strokeWidth="0.4"
        />
        
        {/* Circles */}
        <circle cx="0" cy="0" r="45" fill="none" stroke="url(#yantraGradient)" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="60" fill="none" stroke="url(#yantraGradient)" strokeWidth="0.4" />
        <circle cx="0" cy="0" r="75" fill="none" stroke="url(#yantraGradient)" strokeWidth="0.3" />
        
        {/* Outer square with gates */}
        <rect x="-85" y="-85" width="170" height="170" fill="none" stroke="url(#yantraGradient)" strokeWidth="0.5" />
        
        {/* Gates (dwara) */}
        <path d="M-95,-70 L-85,-70 L-85,-55 L-95,-55" fill="none" stroke="url(#yantraGradient)" strokeWidth="0.5" />
        <path d="M95,-70 L85,-70 L85,-55 L95,-55" fill="none" stroke="url(#yantraGradient)" strokeWidth="0.5" />
        <path d="M-95,70 L-85,70 L85,70 L95,70" fill="none" stroke="url(#yantraGradient)" strokeWidth="0.5" />
      </g>
    </motion.svg>
  );
}

interface ZodiacWheelProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function ZodiacWheel({ className = '', size = 150, animated = true }: ZodiacWheelProps) {
  const zodiacSigns = [
    '♈', '♉', '♊', '♋', '♌', '♍',
    '♎', '♏', '♐', '♑', '♒', '♓'
  ];
  
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      initial={animated ? { opacity: 0, rotate: 0 } : {}}
      animate={animated ? { opacity: 1, rotate: 360 } : {}}
      transition={animated ? { rotate: { duration: 120, repeat: Infinity, ease: "linear" } } : {}}
    >
      <defs>
        <linearGradient id="zodiacGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F4C430" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="url(#zodiacGradient)" strokeWidth="1" />
      
      {/* Inner circles */}
      <circle cx="100" cy="100" r="70" fill="none" stroke="url(#zodiacGradient)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="url(#zodiacGradient)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="30" fill="none" stroke="url(#zodiacGradient)" strokeWidth="0.5" />
      
      {/* Center point */}
      <circle cx="100" cy="100" r="3" fill="url(#zodiacGradient)" />
      
      {/* Zodiac divisions and signs */}
      {zodiacSigns.map((sign, index) => {
        const angle = (index * 30 - 90) * (Math.PI / 180);
        const x = 100 + 80 * Math.cos(angle);
        const y = 100 + 80 * Math.sin(angle);
        const lineAngle = index * 30;
        
        return (
          <g key={index}>
            {/* Division lines */}
            <line
              x1={100 + 30 * Math.cos(lineAngle * Math.PI / 180)}
              y1={100 + 30 * Math.sin(lineAngle * Math.PI / 180)}
              x2={100 + 90 * Math.cos(lineAngle * Math.PI / 180)}
              y2={100 + 90 * Math.sin(lineAngle * Math.PI / 180)}
              stroke="url(#zodiacGradient)"
              strokeWidth="0.3"
            />
            {/* Zodiac sign */}
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="#FF9933"
              opacity="0.8"
            >
              {sign}
            </text>
          </g>
        );
      })}
    </motion.svg>
  );
}

interface LotusProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function Lotus({ className = '', size = 100, animated = true }: LotusProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <defs>
        <linearGradient id="lotusGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="50%" stopColor="#F4C430" />
          <stop offset="100%" stopColor="#FFCC00" />
        </linearGradient>
      </defs>
      
      {/* Center petal */}
      <ellipse cx="50" cy="35" rx="8" ry="25" fill="url(#lotusGradient)" opacity="0.9" />
      
      {/* Side petals - left */}
      <ellipse cx="35" cy="40" rx="8" ry="22" fill="url(#lotusGradient)" opacity="0.8" transform="rotate(-20, 35, 40)" />
      <ellipse cx="22" cy="48" rx="7" ry="18" fill="url(#lotusGradient)" opacity="0.7" transform="rotate(-35, 22, 48)" />
      
      {/* Side petals - right */}
      <ellipse cx="65" cy="40" rx="8" ry="22" fill="url(#lotusGradient)" opacity="0.8" transform="rotate(20, 65, 40)" />
      <ellipse cx="78" cy="48" rx="7" ry="18" fill="url(#lotusGradient)" opacity="0.7" transform="rotate(35, 78, 48)" />
      
      {/* Outer petals - left */}
      <ellipse cx="30" cy="50" rx="6" ry="15" fill="url(#lotusGradient)" opacity="0.6" transform="rotate(-45, 30, 50)" />
      
      {/* Outer petals - right */}
      <ellipse cx="70" cy="50" rx="6" ry="15" fill="url(#lotusGradient)" opacity="0.6" transform="rotate(45, 70, 50)" />
      
      {/* Base/water */}
      <ellipse cx="50" cy="85" rx="25" ry="5" fill="#008080" opacity="0.3" />
      
      {/* Stem */}
      <line x1="50" y1="60" x2="50" y2="85" stroke="#008080" strokeWidth="2" opacity="0.5" />
    </motion.svg>
  );
}

interface MandalaBgProps {
  className?: string;
}

export function MandalaBg({ className = '' }: MandalaBgProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full opacity-[0.03]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="mandalaPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Central dot */}
            <circle cx="50" cy="50" r="2" fill="#FF9933" />
            
            {/* Inner circle */}
            <circle cx="50" cy="50" r="15" fill="none" stroke="#FF9933" strokeWidth="0.5" />
            
            {/* Eight-petaled flower */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <ellipse
                key={i}
                cx={50 + 20 * Math.cos(angle * Math.PI / 180)}
                cy={50 + 20 * Math.sin(angle * Math.PI / 180)}
                rx="8"
                ry="4"
                fill="none"
                stroke="#FF9933"
                strokeWidth="0.3"
                transform={`rotate(${angle}, ${50 + 20 * Math.cos(angle * Math.PI / 180)}, ${50 + 20 * Math.sin(angle * Math.PI / 180)})`}
              />
            ))}
            
            {/* Outer circle */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#FF9933" strokeWidth="0.3" />
            
            {/* Corner decorations */}
            <circle cx="0" cy="0" r="10" fill="none" stroke="#FF9933" strokeWidth="0.2" />
            <circle cx="100" cy="0" r="10" fill="none" stroke="#FF9933" strokeWidth="0.2" />
            <circle cx="0" cy="100" r="10" fill="none" stroke="#FF9933" strokeWidth="0.2" />
            <circle cx="100" cy="100" r="10" fill="none" stroke="#FF9933" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mandalaPattern)" />
      </svg>
    </div>
  );
}
