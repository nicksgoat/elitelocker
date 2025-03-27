import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Medal, Wrench, CircleDollarSign, TrendingUp, HandHelping } from "lucide-react";
interface FunnelStepProps {
  title: string;
  icon: React.ReactNode;
  description: string[];
  tagline: string;
  delay: number;
  index: number;
}
const FunnelStep: React.FC<FunnelStepProps> = ({
  title,
  icon,
  description,
  tagline,
  delay,
  index
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  return <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="flex flex-col items-center text-center max-w-md mx-auto relative z-10 bg-black/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/5">
      <div className="bg-secondary/80 rounded-full p-4 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      
      <ul className="mb-2">
        {description.map((item, itemIndex) => <motion.li key={itemIndex} initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: delay + itemIndex * 0.1,
        duration: 0.4
      }} className="text-gray-300 text-sm md:text-base mb-1">
            {item}
          </motion.li>)}
      </ul>
      
      <p className="text-sm italic text-gray-400 mt-1">"{tagline}"</p>
    </motion.div>;
};
const ArrowDown = ({
  delay
}: {
  delay: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: delay + 0.2,
        ease: "easeOut"
      }
    }
  };
  return <div className="my-4 flex justify-center">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="animate-bounce">
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0607 35.0607C12.4749 35.6464 11.5251 35.6464 10.9393 35.0607L1.3934 25.5147C0.807611 24.9289 0.807611 23.9792 1.3934 23.3934C1.97919 22.8076 2.92893 22.8076 3.51472 23.3934L12 31.8787L20.4853 23.3934C21.0711 22.8076 22.0208 22.8076 22.6066 23.3934C23.1924 23.9792 23.1924 24.9289 22.6066 25.5147L13.0607 35.0607ZM13.5 0V34H10.5V0H13.5Z" fill="#FF3366" />
        </svg>
      </motion.div>
    </div>;
};
export const FunnelDiagram: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };
  const steps = [{
    title: "Inspire",
    icon: <Medal className="w-12 h-12 text-primary" />,
    description: ["Social Feed & Leaderboards", "Showcase creator success", "Highlight monetization potential"],
    tagline: "See exactly how the top creators build income around what they love.",
    delay: 0.1
  }, {
    title: "Create",
    icon: <Wrench className="w-12 h-12 text-primary" />,
    description: ["Workout Tracker & Program Creator", "Drag & Drop simplicity", "Instantly monetize workout logs"],
    tagline: "Turn tracked sessions into sellable content in minutes.",
    delay: 0.2
  }, {
    title: "Monetize",
    icon: <CircleDollarSign className="w-12 h-12 text-primary" />,
    description: ["Clubs, Sessions & Messaging", "In-person and Online revenue", "Build engaged communities"],
    tagline: "Host sessions online or in-person—earning revenue wherever you train.",
    delay: 0.3
  }, {
    title: "Scale",
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    description: ["Memberships & Subscriptions", "Recurring revenue streams", "Data-driven growth"],
    tagline: "Memberships multiply your income—scale smarter, not harder.",
    delay: 0.4
  }, {
    title: "Sustain",
    icon: <HandHelping className="w-12 h-12 text-primary" />,
    description: ["Leaderboards, Community Engagement", "Gamification for retention", "Long-term customer loyalty"],
    tagline: "Retention is revenue—use leaderboards and community events to sustain income.",
    delay: 0.5
  }];
  return <section className="py-16 md:py-24 bg-gradient-to-b from-black to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <motion.h2 ref={ref} initial="hidden" animate={controls} variants={titleVariants} className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary bg-clip-text">Athlete Philosophy</motion.h2>

        <div className="space-y-2">
          {steps.map((step, index) => <React.Fragment key={step.title}>
              <FunnelStep title={step.title} icon={step.icon} description={step.description} tagline={step.tagline} delay={step.delay} index={index} />
              {index < steps.length - 1 && <ArrowDown delay={step.delay} />}
            </React.Fragment>)}
        </div>
      </div>
    </section>;
};