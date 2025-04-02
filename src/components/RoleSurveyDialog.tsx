
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

type SurveySection = {
  title: string;
  questions: SurveyQuestion[];
};

type SurveyQuestion = {
  id: string;
  question: string;
  type: 'text' | 'checkbox' | 'radio' | 'textarea';
  options?: string[];
  subQuestions?: SurveyQuestion[];
};

const ROLE_SURVEYS: Record<string, SurveySection[]> = {
  coach: [
    {
      title: "Who are you today?",
      questions: [
        {
          id: 'currentStatus',
          question: "Select all that apply.",
          type: 'checkbox',
          options: [
            'I coach a team or group of athletes',
            'I run private sessions or programs',
            'I\'m building a coaching brand',
            'I\'m full-time in coaching',
            'I\'m part-time or just starting out',
            'I already create programs/content online'
          ]
        }
      ]
    },
    {
      title: "Where do you want to be?",
      questions: [
        {
          id: 'goals',
          question: "What's your ideal outcome with a platform like Elite Locker?",
          type: 'checkbox',
          options: [
            'I want to monetize my programs or coaching content',
            'I want to grow my online coaching brand',
            'I want to manage athlete development more efficiently',
            'I want to reduce time spent on manual program creation',
            'I want one place to run, track, and scale everything I do'
          ]
        }
      ]
    },
    {
      title: "What's in your way?",
      questions: [
        {
          id: 'obstacles',
          question: "What's currently preventing you from getting there?",
          type: 'checkbox',
          options: [
            'I waste too much time using multiple tools',
            'I don\'t have a streamlined way to build and share programs',
            'I\'m not sure how to start monetizing effectively',
            'I\'ve used apps before but they lacked flexibility',
            'I need a better way to keep athletes engaged'
          ]
        }
      ]
    },
    {
      title: "What are you currently doing or considering?",
      questions: [
        {
          id: 'currentTools',
          question: "Select anything you're actively doing or testing right now.",
          type: 'checkbox',
          options: [
            'Using TrainHeroic, TrueCoach, Google Sheets, etc.',
            'Selling PDFs or running programs manually',
            'Posting workouts on social media',
            'Building a subscription or email list',
            'Testing platforms, but not committed'
          ]
        }
      ]
    },
    {
      title: "Pricing Perception",
      questions: [
        {
          id: 'fairPrice',
          question: "If this platform helped you run your business, deliver programs, and monetize content more effectively... What monthly price feels fair?",
          type: 'radio',
          options: ['$10', '$15', '$20', '$25', '$30+']
        },
        {
          id: 'tooLowPrice',
          question: "What price would feel too cheap to take seriously?",
          type: 'radio',
          options: ['Free', 'Under $5', '$5–10', 'I wouldn\'t question it if it looks premium']
        },
        {
          id: 'tooHighPrice',
          question: "What's too expensive right now?",
          type: 'radio',
          options: ['$25+', '$30+', '$40+', 'I\'d pay more if it helps me scale revenue']
        }
      ]
    }
  ],
  athlete: [
    {
      title: "Who are you today?",
      questions: [
        {
          id: 'currentStatus',
          question: "",
          type: 'checkbox',
          options: [
            'I play a sport competitively',
            'I train on my own',
            'I follow workout programs online',
            'I\'m trying to get recruited or go pro',
            'I post content to grow my brand',
            'I\'m still learning how to train smart'
          ]
        }
      ]
    },
    {
      title: "Where do you want to be?",
      questions: [
        {
          id: 'goals',
          question: "",
          type: 'checkbox',
          options: [
            'I want to follow better programs built for my sport',
            'I want to improve performance and results',
            'I want to build a personal brand as an athlete',
            'I want a place to track and share my progress',
            'I want to train with guidance and structure'
          ]
        }
      ]
    },
    {
      title: "What's in your way?",
      questions: [
        {
          id: 'obstacles',
          question: "",
          type: 'checkbox',
          options: [
            'I don\'t know what to follow',
            'I can\'t afford a personal coach',
            'I lose motivation without feedback',
            'I bounce between random workouts',
            'I don\'t know where to post or share my journey'
          ]
        }
      ]
    },
    {
      title: "What are you currently doing or considering?",
      questions: [
        {
          id: 'currentTools',
          question: "",
          type: 'checkbox',
          options: [
            'YouTube / Instagram / TikTok workouts',
            'Asking a coach for help',
            'Following random fitness apps',
            'Logging workouts in Notes or a spreadsheet',
            'Just doing my own thing right now'
          ]
        }
      ]
    },
    {
      title: "Pricing Perception",
      questions: [
        {
          id: 'fairPrice',
          question: "If this platform gave you elite-level training access, helped build your brand, and made it easier to grow as an athlete... What monthly price feels fair?",
          type: 'radio',
          options: ['$10', '$15', '$20', '$25', '$30+']
        },
        {
          id: 'tooLowPrice',
          question: "What price would make you question the quality?",
          type: 'radio',
          options: ['Free', 'Under $5', '$5–10', 'I wouldn\'t question it if the content looks legit']
        },
        {
          id: 'tooHighPrice',
          question: "What's too expensive right now?",
          type: 'radio',
          options: ['$25+', '$30+', '$40+', 'I\'d pay more if it helped me reach the next level']
        }
      ]
    }
  ],
  trainer: [
    {
      title: "Who are you today?",
      questions: [
        {
          id: 'currentStatus',
          question: "",
          type: 'checkbox',
          options: [
            'I train clients 1-on-1',
            'I run group classes or small group training',
            'I write programs or guides for clients',
            'I want to scale beyond in-person training',
            'I\'m trying to grow my fitness business'
          ]
        }
      ]
    },
    {
      title: "Where do you want to be?",
      questions: [
        {
          id: 'goals',
          question: "",
          type: 'checkbox',
          options: [
            'I want to grow my client base beyond local reach',
            'I want to offer online programs that actually sell',
            'I want a tool to help streamline client programming',
            'I want to automate or scale my training services'
          ]
        }
      ]
    },
    {
      title: "What's in your way?",
      questions: [
        {
          id: 'obstacles',
          question: "",
          type: 'checkbox',
          options: [
            'Managing clients manually is draining',
            'No good platform for hybrid (in-person + online) training',
            'I\'m not tech-savvy enough for existing tools',
            'I\'m overwhelmed trying to market and train at the same time'
          ]
        }
      ]
    },
    {
      title: "What are you currently doing or considering?",
      questions: [
        {
          id: 'currentTools',
          question: "",
          type: 'checkbox',
          options: [
            'Using Trainerize, Google Sheets, or PDFs',
            'Selling through social or Gumroad',
            'Building a private app or subscription',
            'Offering Zoom/online training but it\'s not scalable',
            'Not doing online yet but want to'
          ]
        }
      ]
    },
    {
      title: "Pricing Perception",
      questions: [
        {
          id: 'fairPrice',
          question: "If this platform helped you grow your business, automate programming, and monetize your expertise... What monthly price feels fair?",
          type: 'radio',
          options: ['$10', '$15', '$20', '$25', '$30+']
        },
        {
          id: 'tooLowPrice',
          question: "What price would feel too low to be trustworthy?",
          type: 'radio',
          options: ['Free', 'Under $5', '$5–10', 'Depends on the brand experience']
        },
        {
          id: 'tooHighPrice',
          question: "What price would feel too expensive for your current stage?",
          type: 'radio',
          options: ['$25+', '$30+', '$40+', 'I\'d pay more if it helped free up my time or scale revenue']
        }
      ]
    }
  ],
  parent: [
    {
      title: "Who are you today?",
      questions: [
        {
          id: 'currentStatus',
          question: "",
          type: 'checkbox',
          options: [
            'I have a child in sports or training',
            'I manage my child\'s training schedule',
            'I\'m looking for guidance to support their athletic journey',
            'I help pay for their training/coaching',
            'I want them to stay motivated and focused'
          ]
        }
      ]
    },
    {
      title: "Where do you want to be?",
      questions: [
        {
          id: 'goals',
          question: "",
          type: 'checkbox',
          options: [
            'I want my child to have access to great training resources',
            'I want a system to track their progress',
            'I want to keep them safe, strong, and accountable',
            'I want to support them without overstepping',
            'I want to reduce screen time with something meaningful'
          ]
        }
      ]
    },
    {
      title: "What's in your way?",
      questions: [
        {
          id: 'obstacles',
          question: "",
          type: 'checkbox',
          options: [
            'I don\'t know what training is best',
            'I\'m unsure which programs are trustworthy',
            'Good training is expensive or hard to find',
            'My child loses motivation easily',
            'There\'s no central hub for everything'
          ]
        }
      ]
    },
    {
      title: "What are you currently doing or considering?",
      questions: [
        {
          id: 'currentTools',
          question: "",
          type: 'checkbox',
          options: [
            'Local trainers/coaches',
            'Searching for YouTube/online programs',
            'Asking other parents or teammates',
            'Nothing structured yet',
            'Using a mix of apps and handwritten workouts'
          ]
        }
      ]
    },
    {
      title: "Pricing Perception",
      questions: [
        {
          id: 'fairPrice',
          question: "If this platform gave your child structure, expert coaching, and motivation in one place... What monthly price feels fair to support their training?",
          type: 'radio',
          options: ['$10', '$15', '$20', '$25', '$30+']
        },
        {
          id: 'tooLowPrice',
          question: "What price would feel too low to trust the quality?",
          type: 'radio',
          options: ['Free', 'Under $5', '$5–10', 'If it looks great, I\'ll trust it']
        },
        {
          id: 'tooHighPrice',
          question: "What's too expensive for your family right now?",
          type: 'radio',
          options: ['$25+', '$30+', '$40+', 'I\'d pay more if it truly supported my child\'s growth']
        }
      ]
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
  
  const sections = ROLE_SURVEYS[role] || [];

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
        <form onSubmit={handleSubmit} className="space-y-8 max-h-[60vh] overflow-y-auto pr-2">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">{section.title}</h3>
              {section.questions.map((question) => (
                <div key={question.id} className="space-y-2">
                  {question.question && (
                    <Label htmlFor={question.id} className="block font-medium text-sm text-gray-600">
                      {question.question}
                    </Label>
                  )}
                  {renderQuestion(question)}
                </div>
              ))}
            </div>
          ))}
          
          <div className="pt-4 border-t flex flex-col gap-3">
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
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
