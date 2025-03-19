
import React from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card hover-card overflow-hidden rounded-lg"
    >
      <div className="relative h-40 w-full overflow-hidden">
        {exercise.image_url ? (
          <img 
            src={exercise.image_url} 
            alt={exercise.name} 
            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
            <span className="text-xl font-bold text-primary">{exercise.name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 bg-black/60 px-2 py-1">
          <span className="text-xs font-semibold text-primary">{exercise.difficulty}</span>
        </div>
        {exercise.primary_muscle_group && (
          <div className="absolute right-0 top-0 bg-black/60 px-2 py-1">
            <span className="text-xs font-semibold text-primary">{exercise.primary_muscle_group}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold text-white">{exercise.name}</h3>
        <p className="text-sm text-gray-400 line-clamp-2">{exercise.description}</p>
        {exercise.equipment && exercise.equipment.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
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
      </div>
    </motion.div>
  );
};
