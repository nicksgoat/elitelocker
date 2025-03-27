import React from "react";
import { motion } from "framer-motion";
import { BarChart3, LineChart, BookOpen, Rocket, Users } from "lucide-react";
import { FunnelDiagram } from "@/components/FunnelDiagram";
import { FeatureCard } from "@/components/FeatureCard";
export const AthleteSection: React.FC = () => {
  const athleteFeatures = [{
    icon: BarChart3,
    title: "Track Your Journey",
    description: "Effortlessly log workouts and nutrition with our intuitive tracking tools.",
    color: "purple",
    bullets: ["Workout Tracker", "Meal Planner", "Sleep Monitor", "Recovery Metrics"]
  }, {
    icon: LineChart,
    title: "Measure Your Progress",
    description: "See your improvement with detailed stats and community leaderboards.",
    color: "aqua",
    bullets: ["Performance Analytics", "Community Leaderboards", "Progress Visualization", "Benchmark Comparisons"]
  }, {
    icon: BookOpen,
    title: "Learn From The Best",
    description: "Access an extensive database of exercises and programs from top coaches.",
    color: "coral",
    bullets: ["Exercise Library", "Expert Programs", "Technique Guides", "Coach Connection"]
  }, {
    icon: Rocket,
    title: "Unlock Your Potential",
    description: "Receive personalized insights to continuously improve your performance.",
    color: "indigo",
    bullets: ["AI-Powered Insights", "Personalized Feedback", "Goal Setting", "Performance Optimization"]
  }, {
    icon: Users,
    title: "Join The Community",
    description: "Connect with like-minded athletes and support each other's progress.",
    color: "gold",
    bullets: ["Athlete Network", "Community Challenges", "Group Workouts", "Team Support"]
  }];
  return <>
      <div data-section="athlete" className="athlete-section">
        <FunnelDiagram />
      </div>

      <section id="features" className="md:py-20 py-[39px] bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Athlete Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {athleteFeatures.map((feature, index) => <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} color={feature.color} delay={index * 0.2} bullets={feature.bullets} />)}
          </div>
        </div>
      </section>
    </>;
};