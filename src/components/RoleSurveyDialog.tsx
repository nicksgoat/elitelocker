
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

type SurveyQuestion = {
  id: string;
  question: string;
  type: 'text' | 'checkbox' | 'radio' | 'textarea';
  options?: string[];
};

const ROLE_QUESTIONS: Record<string, SurveyQuestion[]> = {
  parent: [
    {
      id: 'childAge',
      question: 'What is the age of your child/children?',
      type: 'text',
    },
    {
      id: 'sportInterest',
      question: 'Which sports is your child interested in?',
      type: 'checkbox',
      options: ['Football', 'Basketball', 'Baseball', 'Soccer', 'Tennis', 'Swimming', 'Gymnastics', 'Other']
    },
    {
      id: 'skillLevel',
      question: 'What is your child\'s current skill level?',
      type: 'radio',
      options: ['Beginner', 'Intermediate', 'Advanced', 'Elite']
    },
    {
      id: 'goals',
      question: 'What are your goals for your child in sports?',
      type: 'textarea',
    }
  ],
  athlete: [
    {
      id: 'age',
      question: 'What is your age?',
      type: 'text',
    },
    {
      id: 'sport',
      question: 'Which sport do you primarily participate in?',
      type: 'checkbox',
      options: ['Football', 'Basketball', 'Baseball', 'Soccer', 'Tennis', 'Swimming', 'Gymnastics', 'Track and Field', 'Other']
    },
    {
      id: 'experience',
      question: 'How many years have you been training?',
      type: 'radio',
      options: ['Less than 1 year', '1-3 years', '3-5 years', '5+ years']
    },
    {
      id: 'goals',
      question: 'What are your primary fitness or athletic goals?',
      type: 'textarea',
    }
  ],
  trainer: [
    {
      id: 'specialty',
      question: 'What is your training specialty?',
      type: 'checkbox',
      options: ['Strength & Conditioning', 'Sport-Specific Training', 'Personal Training', 'Performance Enhancement', 'Rehabilitation', 'Other']
    },
    {
      id: 'experience',
      question: 'How many years of experience do you have as a trainer?',
      type: 'radio',
      options: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', '10+ years']
    },
    {
      id: 'certifications',
      question: 'What certifications do you hold?',
      type: 'text',
    },
    {
      id: 'businessGoals',
      question: 'What are your primary business goals with our platform?',
      type: 'textarea',
    }
  ],
  coach: [
    {
      id: 'sport',
      question: 'Which sport(s) do you coach?',
      type: 'checkbox',
      options: ['Football', 'Basketball', 'Baseball', 'Soccer', 'Tennis', 'Swimming', 'Gymnastics', 'Track and Field', 'Other']
    },
    {
      id: 'level',
      question: 'What level do you coach?',
      type: 'radio',
      options: ['Youth/Recreational', 'Middle School', 'High School', 'College', 'Professional', 'National Team']
    },
    {
      id: 'experience',
      question: 'How many years of coaching experience do you have?',
      type: 'radio',
      options: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', '10+ years']
    },
    {
      id: 'teamSize',
      question: 'How many athletes do you typically work with?',
      type: 'text',
    }
  ]
};

export function RoleSurveyDialog({
  isOpen,
  onClose,
  role,
  waitlistId
}: {
  isOpen: boolean;
  onClose: () => void;
  role: string;
  waitlistId: string;
}) {
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const questions = ROLE_QUESTIONS[role] || [];

  const handleInputChange = (questionId: string, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleCheckboxChange = (questionId: string, option: string, checked: boolean) => {
    setResponses(prev => {
      const currentValues = prev[questionId] || [];
      if (checked) {
        return {
          ...prev,
          [questionId]: [...currentValues, option]
        };
      } else {
        return {
          ...prev,
          [questionId]: currentValues.filter((item: string) => item !== option)
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use a more generic approach that works with our TypeScript definitions
      const { error } = await supabase
        .from('survey_responses' as any)
        .insert({
          waitlist_id: waitlistId,
          role,
          responses
        } as any);

      if (error) {
        console.error("Error saving survey responses:", error);
        throw error;
      }
      
      toast({
        title: "Thank you!",
        description: "Your survey responses have been recorded."
      });
      
      onClose();
    } catch (error) {
      console.error("Error in survey submission:", error);
      toast({
        title: "Submission failed",
        description: "There was a problem saving your responses. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = (question: SurveyQuestion) => {
    switch (question.type) {
      case 'text':
        return (
          <Input 
            id={question.id} 
            type="text"
            value={responses[question.id] || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            className="text-black bg-zinc-50"
          />
        );
      case 'textarea':
        return (
          <Textarea 
            id={question.id}
            value={responses[question.id] || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            className="text-black bg-zinc-50"
            rows={3}
          />
        );
      case 'checkbox':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox 
                  id={`${question.id}-${option}`} 
                  checked={(responses[question.id] || []).includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange(question.id, option, !!checked)}
                />
                <label 
                  htmlFor={`${question.id}-${option}`}
                  className="text-sm font-medium"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      case 'radio':
        return (
          <RadioGroup 
            value={responses[question.id] || ''}
            onValueChange={(value) => handleInputChange(question.id, value)}
            className="space-y-2"
          >
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                <label 
                  htmlFor={`${question.id}-${option}`}
                  className="text-sm font-medium"
                >
                  {option}
                </label>
              </div>
            ))}
          </RadioGroup>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[500px]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold flex items-center gap-2">
            {role.charAt(0).toUpperCase() + role.slice(1)} Survey <span className="animate-float">📋</span>
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-500 mb-4">
          Help us understand your needs better by answering these quick questions.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <Label htmlFor={question.id} className="block font-medium">
                {question.question}
              </Label>
              {renderQuestion(question)}
            </div>
          ))}
          
          <Button 
            type="submit" 
            className="w-full text-white py-3 rounded-md font-semibold transition-colors bg-zinc-950 hover:bg-zinc-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Survey"
            )}
          </Button>
          <Button 
            type="button" 
            onClick={onClose}
            variant="outline" 
            className="w-full"
          >
            Skip for now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
