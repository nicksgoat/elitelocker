import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Star, Zap, Shield, Check, Users, HelpCircle } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { AthleteSection } from "@/components/AthleteSection";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { Toaster } from "@/components/ui/toaster";
import NFLLogo from "@/assets/logos/nfl-logo";
import { LogoDisplay } from "@/components/LogoDisplay";
import { SEO } from "@/components/SEO";
import { getSeoConfig } from "@/config/seo";

const LeBlanc = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("Join LeBlanc's Waitlist");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  // Custom SEO configurations (override any values from the default config)
  const customSeo = {
    ogImage: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png",
    ogUrl: window.location.href
  };
  
  const seoConfig = getSeoConfig("leblanc", customSeo);
  
  const typingWords = ["ATHLETES FIRST", "BETTER TRAINING", "PROVEN RESULTS", "COMPETITIVE ADVANTAGE"];
  
  const openDialog = () => {
    setDialogTitle("Join LeBlanc's Waitlist");
    setIsDialogOpen(true);
  };
  
  const openComingSoonDialog = () => {
    setDialogTitle("Coming soon...");
    setIsDialogOpen(true);
  };
  
  useEffect(() => {
    const videoId = isMobile ? "leblanc-mobile-video" : "leblanc-desktop-video";
    const video = document.getElementById(videoId) as HTMLVideoElement;
    if (video) {
      const handleVideoLoaded = () => setVideoLoaded(true);
      video.addEventListener('loadeddata', handleVideoLoaded);
      return () => video.removeEventListener('loadeddata', handleVideoLoaded);
    }
  }, [isMobile]);

  // Video URLs for desktop and mobile
  const desktopVideoUrl = "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/athlete_training.mp4";
  const mobileVideoUrl = "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/athlete_training.mp4";
  
  // Main LeBlanc logo
  const mainLogoUrl = "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png";
  
  const features = [{
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
  }];
  
  const whyChooseUs = [{
    title: "Biomechanical Efficiency and Movement Mastery",
    description: "Our training is designed to create understanding and fluidity through movement, ensuring every action is intentional and effective.",
    icon: <Check className="h-6 w-6 text-primary" />
  }, {
    title: "Expert Guidance with Precision and Purpose",
    description: "Our team of experts is deeply committed to their craft, bringing a detail-oriented approach to every training session.",
    icon: <Users className="h-6 w-6 text-primary" />
  }, {
    title: "Your Path to Becoming the Best",
    description: "At 2 LIVE CULTURE, we don’t just train athletes—we build champions. Our holistic approach ensures that every athlete is given the attention, guidance, and expertise they need to reach their highest potential.",
    icon: <Zap className="h-6 w-6 text-primary" />
  }, {
    title: "Sharpening Skills, Perfecting Performance",
    description: "At 2 LIVE CULTURE, our mission is clear: to refine and elevate the skills of quarterbacks, wide receivers, running backs, and defensive backs. We believe that details matter.",
    icon: <Shield className="h-6 w-6 text-primary" />
  }];
  
  const faqs = [{
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
  }];
  
  const testimonials = [{
    name: "Khyra B.",
    role: "Parent",
    content: "2 Live has been one of the greatest blessings for my family, specifically my two oldest boys. They have grown leaps and bounds since taking lessons with Craig and it has shown on the field in big ways. 2 Live is also such a great community of people who truly care and are always there for you. Happy to be part of the 2 Live family!",
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
  }];
  
  // Logos data from Supabase
  const logos = [
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/d65d6ce8381eb833ce07cebf7ae43af5.png",
      alt: "Elite Sports Logo",
      delay: 0.2
    },
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/723bd63df8c99b52946eea1062428aef.png",
      alt: "NFL Logo",
      delay: 0.3
    },
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/2a8f7cc7ecccd60942290a29fa7344a3.png",
      alt: "NCAA Football Logo",
      delay: 0.4
    },
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/372a206f3bd3baf1cc2a1ae666c66eee.png",
      alt: "Under Armour Logo",
      delay: 0.5
    },
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/2293a3f97b0ef8e032e3c0fbb25a82c5.png",
      alt: "Nike Logo",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <SEO {...seoConfig} />
      <WaitlistDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title={dialogTitle} sourcePage="leblanc" />
      
      <AppHeader openDialog={openDialog} openComingSoonDialog={openComingSoonDialog} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 px-4 min-h-[80vh] flex items-center">
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            {!videoLoaded && <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>}
            
            {/* Conditionally render desktop or mobile video */}
            {!isMobile ? <video id="leblanc-desktop-video" autoPlay muted loop playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} src={desktopVideoUrl}>
                Your browser does not support the video tag.
              </video> : <video id="leblanc-mobile-video" autoPlay muted loop playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} src={mobileVideoUrl}>
                Your browser does not support the video tag.
              </video>}
            
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
          
          <div className="container mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="text-left">
                <p className="text-lg md:text-xl text-gray-300 uppercase tracking-wider mb-1 font-medium">CRAIG LEBLANC</p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">now live</h1>
                
                <div className="h-[4.5em] overflow-hidden mb-6">
                  <h2 className="sm:text-3xl md:text-5xl font-bold text-4xl">
                    <TypewriterEffect words={typingWords} className="text-primary" />
                  </h2>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full md:w-auto">
                    <Button onClick={openDialog} variant="waitlist" size="waitlist" className="flex items-center justify-center group">
                      JOIN WAITLIST 
                      <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-gray-400">
                  <p className=""><span className="font-bold text-white">200+</span> athletes already on the waitlist</p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="relative rounded-xl overflow-hidden flex justify-center items-center p-4">
                <LogoDisplay 
                  logoUrl={mainLogoUrl}
                  alt="LeBlanc Main Logo"
                  className="w-full max-w-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Logos Section */}
        <section className="py-8 bg-black/80 border-y border-white/10">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-gray-400 mb-6">TRUSTED BY ELITE ATHLETES FROM</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {logos.map((logo, index) => (
                <LogoDisplay 
                  key={index}
                  logoUrl={logo.url}
                  alt={logo.alt}
                  delay={logo.delay}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="text-3xl md:text-4xl font-bold mb-4">
                Features That Set Us Apart
              </motion.h2>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the difference with our comprehensive training tools
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="bg-black/50 border border-white/10 rounded-xl p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold ml-2">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
                    {feature.image ? (
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error(`Error loading image for ${feature.title}:`, e);
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    ) : (
                      <p className="text-gray-400">Feature Preview</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-black/90">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="text-3xl md:text-4xl font-bold mb-4">
                Why Join
              </motion.h2>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="text-xl text-gray-300 max-w-2xl mx-auto">
                A Journey of Faith, Family & Football
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => <motion.div key={item.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.2
            }} className="text-center p-6">
                  <div className="bg-primary/10 rounded-full p-4 inline-flex justify-center items-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="text-3xl md:text-4xl font-bold mb-4">
                What Athletes Are Saying
              </motion.h2>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="text-xl text-gray-300 max-w-2xl mx-auto">
                Testimonials: The 2 Live Impact
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.2
            }} className="bg-black/50 border border-white/10 rounded-xl p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-primary' : 'text-gray-600'}`} fill={i < testimonial.rating ? 'currentColor' : 'none'} />)}
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-black/90">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </motion.h2>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions
              </motion.p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                    <AccordionTrigger className="text-left font-bold py-4 flex">
                      <div className="flex items-center">
                        <HelpCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4 px-7">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="md:py-20 metal-gradient py-[38px]">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
              Join the LeBlanc Elite
            </motion.h2>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
              Limited spots available for our exclusive program. Join the waitlist today.
            </motion.p>
            
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <Progress value={78} className="w-full max-w-md h-2" />
                <span className="text-sm text-gray-300">78% Full</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Waitlist is filling up quickly</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
              <Button onClick={openDialog} className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Join Waitlist Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <AppFooter openComingSoonDialog={openComingSoonDialog} />
    </div>
  );
};

export default LeBlanc;
