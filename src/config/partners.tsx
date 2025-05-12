
import React from 'react';
import { Trophy, Star, Zap, Shield, Check, Users } from "lucide-react";
import { PartnerData } from "@/components/PartnerTemplate";

// Partner configurations
export const partners: Record<string, PartnerData> = {
  // LeBlanc partner configuration
  "leblanc": {
    id: "leblanc",
    name: "CRAIG LEBLANC",
    mainLogoUrl: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png",
    tagline: "Elite Training Program",
    heroDescription: "You've been invited to Elite Locker by Craig LeBlanc.",
    typingWords: ["ATHLETES FIRST", "BETTER TRAINING", "PROVEN RESULTS", "COMPETITIVE ADVANTAGE"],
    videoUrl: {
      desktop: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/athlete_training.mp4",
      mobile: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/athlete_training.mp4"
    },
    features: [{
      title: "Elevating Together",
      description: "2 Live Culture, Where Passion Meets Purpose in the Game of Life",
      icon: <Trophy className="h-6 w-6 text-primary" />,
      image: "https://img1.wsimg.com/isteam/ip/3dedd2a6-edda-4a31-ac66-ca9cbafb9f90/Untitled%20design%20-%202024-11-21T100251.823.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
    }, {
      title: "Unyielding Brotherhood",
      description: "The Extraordinary Bond Powering 2 Live Culture's Rise",
      icon: <Star className="h-6 w-6 text-primary" />,
      image: "https://img1.wsimg.com/isteam/ip/3dedd2a6-edda-4a31-ac66-ca9cbafb9f90/Untitled%20design%20-%202024-11-20T224148.837.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
    }, {
      title: "United in Success",
      description: "Cultivating Personal Brands, Collective Growth at 2 Live Culture",
      icon: <Zap className="h-6 w-6 text-primary" />,
      image: "https://img1.wsimg.com/isteam/ip/3dedd2a6-edda-4a31-ac66-ca9cbafb9f90/10882AF8-8EB2-44FD-A40E-306E794F7243.jpeg/:/cr=t:18.35%25,l:0%25,w:100%25,h:66.79%25/rs=w:600,h:600,cg:true"
    }],
    benefits: [{
      title: "Biomechanical Efficiency and Movement Mastery",
      description: "Our training is designed to create understanding and fluidity through movement, ensuring every action is intentional and effective.",
      icon: <Check className="h-6 w-6 text-primary" />
    }, {
      title: "Expert Guidance with Precision and Purpose",
      description: "Our team of experts is deeply committed to their craft, bringing a detail-oriented approach to every training session.",
      icon: <Users className="h-6 w-6 text-primary" />
    }, {
      title: "Your Path to Becoming the Best",
      description: "At 2 LIVE CULTURE, we don't just train athletes—we build champions. Our holistic approach ensures that every athlete is given the attention, guidance, and expertise they need to reach their highest potential.",
      icon: <Zap className="h-6 w-6 text-primary" />
    }, {
      title: "Sharpening Skills, Perfecting Performance",
      description: "At 2 LIVE CULTURE, our mission is clear: to refine and elevate the skills of quarterbacks, wide receivers, running backs, and defensive backs. We believe that details matter.",
      icon: <Shield className="h-6 w-6 text-primary" />
    }],
    testimonials: [{
      name: "Khyra B.",
      role: "Parent",
      content: "2 Live has been one of the greatest blessings for my family, specifically my two oldest boys. They have grown leaps and bounds since taking lessons with Craig and it has shown on the field in big ways.",
      rating: 5
    }, {
      name: "Brandon L.",
      role: "Athlete",
      content: "2 Live Culture is the epitome of brotherhood, selflessness, & surrounding yourself with people who all have the same vision & dreams.",
      rating: 5
    }, {
      name: "Ricky B.",
      role: "High School Coach",
      content: "Best to do it, ton of opportunities and a loving community and brotherhood",
      rating: 5
    }],
    faqs: [{
      question: "How soon can I expect results?",
      answer: "Most athletes see measurable improvements within 2-3 weeks of consistent training with our program."
    }, {
      question: "Is LeBlanc suitable for beginners?",
      answer: "Absolutely! Our program adapts to all skill levels, from beginners to advanced athletes."
    }, {
      question: "What equipment do I need?",
      answer: "The basic program requires minimal equipment. Specialized training modules may suggest additional equipment."
    }, {
      question: "How does the waitlist work?",
      answer: "Join our waitlist to be among the first to gain access when we launch. Early waitlist members receive exclusive bonuses."
    }],
    logos: [{
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/d65d6ce8381eb833ce07cebf7ae43af5.png",
      alt: "Elite Sports Logo",
      delay: 0.2
    }, {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/723bd63df8c99b52946eea1062428aef.png",
      alt: "NFL Logo",
      delay: 0.3
    }, {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/2a8f7cc7ecccd60942290a29fa7344a3.png",
      alt: "NCAA Football Logo",
      delay: 0.4
    }, {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/372a206f3bd3baf1cc2a1ae666c66eee.png",
      alt: "Under Armour Logo",
      delay: 0.5
    }, {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/2293a3f97b0ef8e032e3c0fbb25a82c5.png",
      alt: "Nike Logo",
      delay: 0.6
    }],
    ctaText: "Limited spots available for our exclusive program. Join the waitlist today.",
    waitlistProgress: 78
  },
  
  // Example of a second partner template - this can be filled in with actual data later
  "example": {
    id: "example",
    name: "PARTNER NAME",
    mainLogoUrl: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/default-logo.png",
    tagline: "Elite Training Program",
    heroDescription: "You've been invited to Example Elite Program.",
    typingWords: ["QUALITY TRAINING", "PROVEN SYSTEM", "ELITE RESULTS"],
    videoUrl: {
      desktop: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/default.mp4",
      mobile: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/default.mp4"
    },
    features: [{
      title: "Feature 1",
      description: "Description of feature 1",
      icon: <Trophy className="h-6 w-6 text-primary" />
    }],
    benefits: [{
      title: "Benefit 1",
      description: "Description of benefit 1",
      icon: <Check className="h-6 w-6 text-primary" />
    }],
    testimonials: [{
      name: "John D.",
      role: "Athlete",
      content: "This program changed my life!",
      rating: 5
    }],
    faqs: [{
      question: "Frequently Asked Question 1?",
      answer: "Answer to the frequently asked question."
    }],
    logos: [],
    ctaText: "Limited spots available for our exclusive program. Join the waitlist today.",
    waitlistProgress: 50
  }
};

// Helper function to get partner data by ID
export const getPartnerData = (partnerId: string): PartnerData => {
  // Check if the partner exists in our configuration
  if (partners[partnerId]) {
    return partners[partnerId];
  }
  
  // If no partner found, return a default template
  // This could be customized based on your needs
  console.error(`No partner configuration found for ID: ${partnerId}`);
  return {
    id: partnerId,
    name: "PARTNER NAME",
    mainLogoUrl: "/placeholder.svg",
    tagline: "Training Program",
    heroDescription: "Custom training program",
    typingWords: ["QUALITY TRAINING", "PROVEN SYSTEM", "ELITE RESULTS"],
    videoUrl: {
      desktop: "",
      mobile: ""
    },
    features: [],
    benefits: [],
    testimonials: [],
    faqs: [],
    logos: [],
    ctaText: "Join our waitlist today.",
    waitlistProgress: 10
  };
};
