
import React from "react";
import { ExerciseCard, Exercise } from "./ExerciseCard";
import { motion } from "framer-motion";
import { useExercises } from "@/hooks/use-exercises";

export const ExerciseShowcase: React.FC = () => {
  const { exercises, isLoading, error } = useExercises(6);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bebas font-bold mb-4 md:mb-6 text-primary tracking-wider">
            EXPLORE OUR EXERCISE LIBRARY
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Browse through our extensive collection of professionally designed exercises for all fitness levels
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {exercises.map((exercise, index) => (
              <ExerciseCard 
                key={exercise.id} 
                exercise={exercise} 
                delay={index * 0.1}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-10 md:mt-12">
          <button className="metal-gradient text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-bebas tracking-wider text-lg">
            VIEW MORE EXERCISES
          </button>
        </div>
      </div>
    </section>
  );
};
