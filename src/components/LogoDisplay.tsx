
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LogoDisplayProps {
  logoUrl?: string;
  alt: string;
  delay?: number;
  className?: string;
  children?: ReactNode;
}

export const LogoDisplay: React.FC<LogoDisplayProps> = ({
  logoUrl,
  alt,
  delay = 0.3,
  className = "h-12",
  children
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay }} 
      className={className}
    >
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt={alt} 
          className="h-full w-auto object-contain max-w-full" 
        />
      ) : (
        children ? children : null
      )}
    </motion.div>
  );
};
