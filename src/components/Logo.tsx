import React from 'react';

const Logo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#backgroundGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="2"
        />
        
        {/* Vertical bars representing data/skyline */}
        <rect x="20" y="60" width="4" height="25" fill="url(#barGradient1)" rx="2" />
        <rect x="28" y="45" width="4" height="40" fill="url(#barGradient2)" rx="2" />
        <rect x="36" y="35" width="4" height="50" fill="url(#barGradient3)" rx="2" />
        <rect x="44" y="25" width="4" height="60" fill="url(#barGradient4)" rx="2" />
        <rect x="52" y="20" width="4" height="65" fill="url(#barGradient5)" rx="2" />
        <rect x="60" y="25" width="4" height="60" fill="url(#barGradient4)" rx="2" />
        <rect x="68" y="35" width="4" height="50" fill="url(#barGradient3)" rx="2" />
        <rect x="76" y="45" width="4" height="40" fill="url(#barGradient2)" rx="2" />
        
        {/* Geometric accent shapes */}
        {/* Diamond at top center */}
        <polygon
          points="50,15 55,20 50,25 45,20"
          fill="url(#accentGradient)"
        />
        
        {/* Circles on sides */}
        <circle cx="25" cy="30" r="3" fill="url(#accentGradient)" />
        <circle cx="75" cy="30" r="3" fill="url(#accentGradient)" />
        
        {/* Small square on lower right */}
        <rect x="72" y="72" width="6" height="6" fill="url(#accentGradient)" rx="1" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="barGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          
          <linearGradient id="barGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          
          <linearGradient id="barGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          
          <linearGradient id="barGradient4" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          
          <linearGradient id="barGradient5" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;