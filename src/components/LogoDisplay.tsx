
import React from 'react';
import { motion } from 'framer-motion';

interface LogoDisplayProps {
  logoUrl: string;
  alt: string;
  delay?: number;
  className?: string;
}

export const LogoDisplay: React.FC<LogoDisplayProps> = ({ 
  logoUrl, 
  alt, 
  delay = 0.3,
  className = "h-12"
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      <img src={logoUrl} alt={alt} className="h-full w-auto object-contain" />
    </motion.div>
  );
};
