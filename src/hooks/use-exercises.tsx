
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Exercise } from "@/components/ExerciseCard";

export function useExercises(limit: number = 6) {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setIsLoading(true);
        
        const { data, error } = await supabase
          .from("exercises")
          .select("id, name, description, image_url, difficulty, primary_muscle_group, equipment")
          .limit(limit);
        
        if (error) {
          throw error;
        }
        
        setExercises(data || []);
      } catch (err) {
        console.error("Error fetching exercises:", err);
        setError("Failed to load exercises. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, [limit]);

  return { exercises, isLoading, error };
}
