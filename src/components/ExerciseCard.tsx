
import React from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { Dumbbell } from "lucide-react";

export interface Exercise {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  difficulty: string;
  primary_muscle_group?: string;
  equipment?: string[];
}

interface ExerciseCardProps {
  exercise: Exercise;
  delay?: number;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ 
  exercise, 
  delay = 0 
}) => {
  // Determine the accent color based on difficulty
  const getAccentColor = (difficulty: string): string => {
    switch(difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 border-green-500';
      case 'intermediate':
        return 'bg-yellow-100 border-yellow-500';
      case 'advanced':
        return 'bg-red-100 border-red-500';
      default:
        return 'bg-blue-100 border-blue-500';
    }
  };

  // Get icon based on muscle group
  const getMuscleGroupIcon = () => {
    return <Dumbbell className="w-5 h-5 text-primary" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="glass-card hover-card overflow-hidden h-full flex flex-col">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold text-white">
              {exercise.name}
              {getMuscleGroupIcon()}
            </CardTitle>
            {exercise.difficulty && (
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getAccentColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </span>
            )}
          </div>
          <CardDescription className="text-sm text-gray-400">
            {exercise.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-4 flex-grow">
          <div className="mt-2">
            {exercise.image_url ? (
              <div className="relative h-40 w-full overflow-hidden rounded-md">
                <img 
                  src={exercise.image_url} 
                  alt={exercise.name} 
                  className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
            ) : (
              <div className="h-40 w-full rounded-md bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">{exercise.name.charAt(0)}</span>
              </div>
            )}
          </div>
          
          {exercise.equipment && exercise.equipment.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1">
              {exercise.equipment.map((item, index) => (
                <span 
                  key={index} 
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
