
import React from "react";
import { motion } from "framer-motion";
import { Medal, Activity, Repeat, Target, Users } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center p-6 glass-card rounded-xl"
    >
      <div className="bg-primary/10 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export const AthleteSection: React.FC = () => {
  const benefits = [
    {
      icon: <Medal className="w-8 h-8 text-primary" />,
      title: "Elite Training Programs",
      description: "Access professional training programs designed by expert coaches to reach your goals faster.",
      delay: 0.1,
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Performance Tracking",
      description: "Monitor your progress with advanced analytics and personalized insights.",
      delay: 0.2,
    },
    {
      icon: <Repeat className="w-8 h-8 text-primary" />,
      title: "Consistency Rewards",
      description: "Earn rewards and recognition for consistent training and meeting milestones.",
      delay: 0.3,
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Personalized Goals",
      description: "Set and track custom goals tailored to your specific fitness journey.",
      delay: 0.4,
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Support",
      description: "Connect with like-minded athletes and support each other's progress.",
      delay: 0.5,
    },
  ];

  return (
    <div className="py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Transform Your Athletic Performance
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Join thousands of athletes using Elite Locker to reach their full potential and achieve their fitness goals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <Benefit
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            delay={benefit.delay}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center bg-primary/10 rounded-xl p-8 md:p-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Ready to Elevate Your Training?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Elite Locker gives you the tools, community, and motivation to break through plateaus and achieve peak performance.
        </p>
        <button className="metal-gradient text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity inline-flex items-center">
          Start Your Journey
        </button>
      </motion.div>
    </div>
  );
};
