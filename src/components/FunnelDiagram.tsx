
import React from "react";
import { motion } from "framer-motion";
import { Medal, Wrench, CircleDollarSign, TrendingUp, HandHelping } from "lucide-react";

interface FunnelStepProps {
  title: string;
  icon: React.ReactNode;
  description: string[];
  tagline: string;
  delay: number;
}

const FunnelStep: React.FC<FunnelStepProps> = ({ 
  title, 
  icon, 
  description, 
  tagline,
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center max-w-md mx-auto"
    >
      <div className="bg-secondary/80 rounded-full p-4 mb-4 shadow-lg">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      
      <ul className="mb-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300 text-sm md:text-base mb-1">
            {item}
          </li>
        ))}
      </ul>
      
      <p className="text-sm italic text-gray-400 mt-1">"{tagline}"</p>
    </motion.div>
  );
};

const ArrowDown = () => (
  <div className="my-4 flex justify-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0607 35.0607C12.4749 35.6464 11.5251 35.6464 10.9393 35.0607L1.3934 25.5147C0.807611 24.9289 0.807611 23.9792 1.3934 23.3934C1.97919 22.8076 2.92893 22.8076 3.51472 23.3934L12 31.8787L20.4853 23.3934C21.0711 22.8076 22.0208 22.8076 22.6066 23.3934C23.1924 23.9792 23.1924 24.9289 22.6066 25.5147L13.0607 35.0607ZM13.5 0V34H10.5V0H13.5Z" fill="#FF3366"/>
      </svg>
    </motion.div>
  </div>
);

export const FunnelDiagram: React.FC = () => {
  const steps = [
    {
      title: "Inspire",
      icon: <Medal className="w-12 h-12 text-primary" />,
      description: [
        "Social Feed & Leaderboards",
        "Showcase creator success",
        "Highlight monetization potential"
      ],
      tagline: "See exactly how the top creators build income around what they love.",
      delay: 0.1
    },
    {
      title: "Create",
      icon: <Wrench className="w-12 h-12 text-primary" />,
      description: [
        "Workout Tracker & Program Creator",
        "Drag & Drop simplicity",
        "Instantly monetize workout logs"
      ],
      tagline: "Turn tracked sessions into sellable content in minutes.",
      delay: 0.2
    },
    {
      title: "Monetize",
      icon: <CircleDollarSign className="w-12 h-12 text-primary" />,
      description: [
        "Clubs, Sessions & Messaging",
        "In-person and Online revenue",
        "Build engaged communities"
      ],
      tagline: "Host sessions online or in-person—earning revenue wherever you train.",
      delay: 0.3
    },
    {
      title: "Scale",
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      description: [
        "Memberships & Subscriptions",
        "Recurring revenue streams",
        "Data-driven growth"
      ],
      tagline: "Memberships multiply your income—scale smarter, not harder.",
      delay: 0.4
    },
    {
      title: "Sustain",
      icon: <HandHelping className="w-12 h-12 text-primary" />,
      description: [
        "Leaderboards, Community Engagement",
        "Gamification for retention",
        "Long-term customer loyalty"
      ],
      tagline: "Retention is revenue—use leaderboards and community events to sustain income.",
      delay: 0.5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary"
        >
          Elite Locker Creator Funnel Mindset
        </motion.h2>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <FunnelStep 
                title={step.title}
                icon={step.icon}
                description={step.description}
                tagline={step.tagline}
                delay={step.delay}
              />
              {index < steps.length - 1 && <ArrowDown />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
