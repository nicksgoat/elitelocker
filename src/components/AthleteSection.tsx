
import React from "react";
import { motion } from "framer-motion";
import { Medal, Activity, Repeat, Target, Users, TrendingUp, Trophy, CalendarDays, Rocket } from "lucide-react";
import { FunnelDiagram } from "@/components/FunnelDiagram";
import { FeatureCard } from "@/components/FeatureCard";

export const AthleteSection: React.FC = () => {
  const athleteFeatures = [{
    icon: Activity,
    title: "Elite Training Programs",
    description: "Access professional training programs designed by expert coaches to reach your goals faster.",
    color: "purple",
    bullets: ["Professional Programs", "Expert Coaching", "Goal-Based Training", "Progressive Overload"]
  }, {
    icon: Rocket,
    title: "Performance Tracking",
    description: "Monitor your progress with advanced analytics and personalized insights.",
    color: "aqua",
    bullets: ["Progress Analytics", "Performance Metrics", "Personalized Reports", "Goal Tracking"]
  }, {
    icon: CalendarDays,
    title: "Consistency Rewards",
    description: "Earn rewards and recognition for consistent training and meeting milestones.",
    color: "coral",
    bullets: ["Achievement System", "Milestone Rewards", "Consistency Streaks", "Training Points"]
  }, {
    icon: TrendingUp,
    title: "Personalized Goals",
    description: "Set and track custom goals tailored to your specific fitness journey.",
    color: "indigo",
    bullets: ["Custom Goal Setting", "Progress Visualization", "Adaptive Challenges", "Success Metrics"]
  }, {
    icon: Trophy,
    title: "Community Support",
    description: "Connect with like-minded athletes and support each other's progress.",
    color: "gold",
    bullets: ["Athlete Community", "Workout Partners", "Group Challenges", "Social Motivation"]
  }];

  return (
    <>
      <FunnelDiagram />

      <section id="features" className="md:py-20 bg-secondary py-[39px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Athlete Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {athleteFeatures.map((feature, index) => <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} color={feature.color} delay={index * 0.2} bullets={feature.bullets} />)}
          </div>
        </div>
      </section>
    </>
  );
};
