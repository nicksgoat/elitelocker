import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  image?: string;
  delay?: number;
  subtitle?: string;
  bullets?: string[];
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  color = "primary",
  image,
  delay = 0,
  subtitle,
  bullets = []
}) => {
  const colorClasses = {
    primary: "text-primary",
    blue: "text-blue-500",
    green: "text-green-500",
    orange: "text-orange-500",
    red: "text-red-500",
    purple: "text-purple-600",
    indigo: "text-indigo-500",
    yellow: "text-yellow-500",
    aqua: "text-cyan-400",
    coral: "text-orange-500",
    gold: "text-amber-400"
  }[color] || "text-primary";

  const bgColorClasses = {
    primary: "bg-primary/10",
    blue: "bg-blue-500/10",
    green: "bg-green-500/10",
    orange: "bg-orange-500/10",
    red: "bg-red-500/10",
    purple: "bg-purple-600/10",
    indigo: "bg-indigo-500/10",
    yellow: "bg-yellow-500/10",
    aqua: "bg-cyan-400/10",
    coral: "bg-orange-500/10",
    gold: "bg-amber-400/10"
  }[color] || "bg-primary/10";

  const borderColorClasses = {
    primary: "border-primary/20",
    blue: "border-blue-500/20",
    green: "border-green-500/20",
    orange: "border-orange-500/20",
    red: "border-red-500/20",
    purple: "border-purple-600/20",
    indigo: "border-indigo-500/20",
    yellow: "border-yellow-500/20",
    aqua: "border-cyan-400/20",
    coral: "border-orange-500/20",
    gold: "border-amber-400/20"
  }[color] || "border-primary/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className={`glass-card hover-card overflow-hidden h-full flex flex-col border ${borderColorClasses}`}>
        <CardHeader className={`pb-2 ${bgColorClasses} backdrop-blur-sm`}>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
              {title}
              <Icon className={`w-5 h-5 ${colorClasses}`} />
            </CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-300 font-medium">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-4 flex-grow">
          {subtitle && (
            <p className={`text-sm mb-3 ${colorClasses} font-medium`}>{subtitle}</p>
          )}
          
          {bullets && bullets.length > 0 && (
            <ul className="space-y-1 mb-3">
              {bullets.map((bullet, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: delay + 0.1 * index, duration: 0.3 }}
                  className="text-xs text-gray-400 flex items-start"
                >
                  <span className={`mr-2 text-xs ${colorClasses}`}>•</span>
                  {bullet}
                </motion.li>
              ))}
            </ul>
          )}
          
          <div className="mt-2">
            <div className="relative h-40 w-full overflow-hidden rounded-md border border-white/5">
              {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-bold text-xl">
                  Coming Soon
                </div>
              )}
            </div>
          </div>
        </CardContent>
        
        {color && (
          <CardFooter className="pt-0">
            <Badge 
              className={`${bgColorClasses} ${colorClasses} hover:${colorClasses}`}
              variant="outline"
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};
