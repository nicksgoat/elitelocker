
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Star, Zap, Shield, Check, Users, HelpCircle } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { LogoDisplay } from "@/components/LogoDisplay";
import { SEO } from "@/components/SEO";

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

export interface BenefitPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Logo {
  url: string;
  alt: string;
  delay: number;
}

export interface PartnerData {
  id: string;                // Unique identifier for the partner (e.g., "leblanc")
  name: string;              // Partner's name (e.g., "Craig LeBlanc")
  mainLogoUrl: string;       // URL to the partner's main logo
  tagline: string;           // Short tagline below name ("Elite Training Program")
  heroDescription: string;   // Brief description for SEO and hero section
  typingWords: string[];     // Words for animated typewriter effect
  videoUrl: {                // Video URLs for desktop and mobile
    desktop: string;
    mobile: string;
  };
  features: Feature[];       // What sets partner apart
  benefits: BenefitPoint[];  // Why choose this partner
  testimonials: Testimonial[]; // Customer testimonials
  faqs: FAQ[];               // Frequently asked questions
  logos: Logo[];             // Partner/affiliated logos
  ctaText: string;           // Call to action text
  waitlistProgress: number;  // Progress bar percentage
}

interface PartnerTemplateProps {
  partnerData: PartnerData;
}

export const PartnerTemplate: React.FC<PartnerTemplateProps> = ({ partnerData }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(`Join ${partnerData.name}'s Waitlist`);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isMobile = useIsMobile();

  // Get the current path for automated screenshots
  const currentPath = window.location.pathname;

  const openDialog = () => {
    setDialogTitle(`Join ${partnerData.name}'s Waitlist`);
    setIsDialogOpen(true);
  };
  
  const openComingSoonDialog = () => {
    setDialogTitle("Coming soon...");
    setIsDialogOpen(true);
  };
  
  useEffect(() => {
    const videoId = isMobile ? `${partnerData.id}-mobile-video` : `${partnerData.id}-desktop-video`;
    const video = document.getElementById(videoId) as HTMLVideoElement;
    if (video) {
      const handleVideoLoaded = () => setVideoLoaded(true);
      video.addEventListener('loadeddata', handleVideoLoaded);
      return () => video.removeEventListener('loadeddata', handleVideoLoaded);
    }
  }, [isMobile, partnerData.id]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <WaitlistDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        title={dialogTitle} 
        sourcePage={partnerData.id} 
      />
      
      <AppHeader openDialog={openDialog} openComingSoonDialog={openComingSoonDialog} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 px-4 min-h-[80vh] flex items-center">
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            {!videoLoaded && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Conditionally render desktop or mobile video */}
            {!isMobile ? (
              <video 
                id={`${partnerData.id}-desktop-video`} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} 
                src={partnerData.videoUrl.desktop}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <video 
                id={`${partnerData.id}-mobile-video`} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} 
                src={partnerData.videoUrl.mobile}
              >
                Your browser does not support the video tag.
              </video>
            )}
            
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
          
          <div className="container mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="text-left"
              >
                <p className="text-lg md:text-xl text-gray-300 uppercase tracking-wider mb-1 font-medium">
                  {partnerData.name}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">now live</h1>
                
                <div className="h-[4.5em] overflow-hidden mb-6">
                  <h2 className="sm:text-3xl md:text-5xl font-bold text-4xl">
                    <TypewriterEffect words={partnerData.typingWords} className="text-primary" />
                  </h2>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full md:w-auto">
                    <Button 
                      onClick={openDialog} 
                      variant="waitlist" 
                      size="waitlist" 
                      className="flex items-center justify-center group"
                    >
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
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                className="relative rounded-xl overflow-hidden flex justify-center items-center p-4"
              >
                <LogoDisplay 
                  logoUrl={partnerData.mainLogoUrl} 
                  alt={`${partnerData.name} Main Logo`} 
                  className="w-full max-w-[400px]" 
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Logos Section */}
        {partnerData.logos.length > 0 && (
          <section className="py-8 bg-black/80 border-y border-white/10">
            <div className="container mx-auto px-4">
              <p className="text-center text-sm text-gray-400 mb-6">TRUSTED BY ELITE ATHLETES FROM</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {partnerData.logos.map((logo, index) => (
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
        )}
        
        {/* Features Section */}
        {partnerData.features.length > 0 && (
          <section className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }} 
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  What Sets Us Apart
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.1 }} 
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  Experience the difference with our comprehensive offering
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partnerData.features.map((feature, index) => (
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
                          onError={e => {
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
        )}
        
        {/* Benefits Section */}
        {partnerData.benefits.length > 0 && (
          <section className="py-16 md:py-24 bg-black/90">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }} 
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Why Join
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.1 }} 
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  A Journey of Faith, Family & Growth
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnerData.benefits.map((item, index) => (
                  <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }} 
                    className="text-center p-6"
                  >
                    <div className="bg-primary/10 rounded-full p-4 inline-flex justify-center items-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Testimonials Section */}
        {partnerData.testimonials.length > 0 && (
          <section className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }} 
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  What Athletes Are Saying
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.1 }} 
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  Testimonials: The Impact
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerData.testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={testimonial.name} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }} 
                    className="bg-black/50 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-primary' : 'text-gray-600'}`} 
                          fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* FAQ Section */}
        {partnerData.faqs.length > 0 && (
          <section className="py-16 md:py-24 bg-black/90">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }} 
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.1 }} 
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  Get answers to common questions
                </motion.p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {partnerData.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                      <AccordionTrigger className="text-left font-bold py-4 flex">
                        <div className="flex items-center">
                          <HelpCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-4 px-7">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="md:py-20 metal-gradient py-[38px]">
          <div className="container mx-auto px-4 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-medium"
            >
              {partnerData.ctaText}
            </motion.p>
            
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <Progress value={partnerData.waitlistProgress} className="w-full max-w-md h-2" />
                <span className="text-sm text-gray-300">{partnerData.waitlistProgress}% Full</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Waitlist is filling up quickly</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
              <Button 
                onClick={openDialog} 
                className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
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
