
import { 
  Activity, 
  PenTool, 
  Users, 
  TrendingUp, 
  Award 
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

export const CreatorFeatureCards = () => {
  const features = [
    {
      title: "See What's Possible",
      description: "Discover exactly how top creators monetize workouts.",
      icon: Activity,
      color: "blue",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      delay: 0.1
    },
    {
      title: "Instantly Create Sellable Programs",
      description: "Turn your logged workouts into profitable programs.",
      icon: PenTool,
      color: "green",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      delay: 0.2
    },
    {
      title: "Monetize Your Community",
      description: "Host sessions, build clubs, and engage directly with subscribers.",
      icon: Users,
      color: "orange",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      delay: 0.3
    },
    {
      title: "Scale Smarter, Not Harder",
      description: "Generate recurring income effortlessly.",
      icon: TrendingUp,
      color: "purple",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      delay: 0.4
    },
    {
      title: "Retain and Grow Your Audience",
      description: "Boost engagement with competition and community events.",
      icon: Award,
      color: "orange",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
      delay: 0.5
    }
  ];

  return (
    <section id="creator-features" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
          Elite Locker Creator Path
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              image={feature.image}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
