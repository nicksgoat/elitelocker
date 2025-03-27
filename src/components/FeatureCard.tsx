
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  image?: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  color = "primary",
  image,
  delay = 0 
}) => {
  const colorClasses = {
    primary: "text-primary",
    blue: "text-blue-500",
    green: "text-green-500",
    orange: "text-orange-500",
    red: "text-red-500",
    purple: "text-purple-500",
  }[color] || "text-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="glass-card hover-card overflow-hidden h-full flex flex-col">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
              {title}
              <Icon className={`w-5 h-5 ${colorClasses}`} />
            </CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-400">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-4 flex-grow">
          {image && (
            <div className="mt-2">
              <div className="relative h-40 w-full overflow-hidden rounded-md">
                <img 
                  src={image} 
                  alt={title} 
                  className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
