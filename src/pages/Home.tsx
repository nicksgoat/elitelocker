import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, HelpCircle } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { LogoDisplay } from "@/components/LogoDisplay";
import { TopNavTabs } from "@/components/TopNavTabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useIsMobile } from "@/hooks/use-mobile";

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("Join the Waitlist");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("featured");
  const isMobile = useIsMobile();
  
  const openDialog = () => {
    setDialogTitle("Join the Waitlist");
    setIsDialogOpen(true);
  };
  
  const openComingSoonDialog = () => {
    setDialogTitle("Coming soon...");
    setIsDialogOpen(true);
  };

  useEffect(() => {
    const video = document.getElementById(isMobile ? "mobile-video" : "desktop-video") as HTMLVideoElement;
    if (video) {
      const handleVideoLoaded = () => setVideoLoaded(true);
      video.addEventListener('loadeddata', handleVideoLoaded);
      return () => video.removeEventListener('loadeddata', handleVideoLoaded);
    }
  }, [isMobile]);
  
  // Mock testimonials
  const testimonials = [
    {
      name: "Michael R.",
      role: "Fitness Coach",
      content: "Elite Locker helped me turn my training knowledge into a profitable online business. The platform made it easy to create and sell my programs.",
      rating: 5
    },
    {
      name: "Sarah T.",
      role: "Pro Athlete",
      content: "I've been able to connect with my fans and monetize my expertise in ways I never thought possible.",
      rating: 5
    },
    {
      name: "Kevin J.",
      role: "Strength Trainer",
      content: "The analytics and community features have helped me retain clients and grow my audience consistently.",
      rating: 5
    },
    {
      name: "Amanda P.",
      role: "Nutrition Coach",
      content: "Creating and selling my nutrition programs has never been easier. The platform handles everything.",
      rating: 5
    }
  ];
  
  // Features data
  const features = [
    {
      title: "Program Builder",
      description: "Create professional workout programs with our intuitive drag-and-drop builder. Designed specifically for fitness professionals and athletes.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Monetization Tools",
      description: "Turn your expertise into income with built-in subscription management, payment processing, and marketing tools.",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Engagement",
      description: "Build and grow your audience with integrated social features, challenges, and direct messaging.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  // Why choose us data
  const reasons = [
    {
      title: "Built for Athletes",
      description: "Designed specifically for fitness professionals, not generic content creators."
    },
    {
      title: "Easy to Use",
      description: "No technical skills required. If you can use a spreadsheet, you can build programs."
    },
    {
      title: "Analytics Dashboard",
      description: "Track engagement, sales, and retention with powerful yet simple analytics."
    },
    {
      title: "Mobile Optimized",
      description: "Perfect experience on any device for both you and your clients."
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How soon will Elite Locker be available?",
      answer: "We're currently in private beta with select partners. Join our waitlist to be notified when we open up to more creators."
    },
    {
      question: "How much does it cost to use Elite Locker?",
      answer: "Elite Locker works on a revenue share model - we only make money when you do. No upfront costs or monthly fees."
    },
    {
      question: "Can I migrate my existing programs and clients?",
      answer: "Yes! We offer migration services to help you bring your existing content and client base to the platform seamlessly."
    },
    {
      question: "What makes Elite Locker different from other platforms?",
      answer: "Elite Locker is built specifically for fitness professionals by people who understand the industry. Our features are tailored to your unique needs."
    }
  ];
  
  // Partner/client logos
  const logos = [
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/nfl.png",
      alt: "NFL Logo",
      delay: 0.1
    },
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/nba.png",
      alt: "NBA Logo",
      delay: 0.2
    },
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/mlb.png",
      alt: "MLB Logo",
      delay: 0.3
    },
    {
      url: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/nhl.png",
      alt: "NHL Logo",
      delay: 0.4
    }
  ];
  
  const videoUrl = "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/C6466_Proxy.mp4";
  
  return (
    <>
      <SEO
        title="Elite Locker | Professional Training Platform"
        description="Turn your training expertise into a profitable business with Elite Locker. The platform built for fitness professionals to create, sell, and grow."
        canonicalUrl="https://elitelocker.io"
      />
    
      <div className="min-h-screen w-full overflow-x-hidden bg-background">
        <WaitlistDialog 
          isOpen={isDialogOpen} 
          onClose={() => setIsDialogOpen(false)} 
          title={dialogTitle} 
          sourcePage="home" 
        />
        
        <AppHeader openDialog={openDialog} openComingSoonDialog={openComingSoonDialog} />
        <TopNavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main>
          {/* Hero Section with Background Video */}
          <section className="relative py-16 md:py-24 px-4 min-h-[80vh] flex items-center">
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
              {!videoLoaded && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              <video 
                id={isMobile ? "mobile-video" : "desktop-video"} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} 
                src={videoUrl}
              >
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>
            
            <div className="container mx-auto relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }} 
                  className="text-left"
                >
                  <span className="inline-block text-primary font-medium mb-2">Ranked No.1 App of 2025</span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                    Turn Your Expertise Into Income
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 max-w-lg">
                    The all-in-one platform for fitness professionals to create, sell, and scale their training programs online.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={openDialog} 
                      variant="waitlist" 
                      size="waitlist" 
                      className="flex items-center justify-center group"
                    >
                      JOIN WAITLIST 
                      <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                      onClick={openComingSoonDialog} 
                      variant="outline" 
                      size="waitlist" 
                      className="flex items-center justify-center"
                    >
                      WATCH DEMO
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    <span className="font-bold text-white">2000+</span> athletes already on the waitlist
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-black/50 rounded-xl overflow-hidden border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800"
                      alt="Elite Locker App Preview" 
                      className="w-full h-full object-cover rounded-xl" 
                    />
                  </div>
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
                    className="h-12 md:h-16" 
                  />
                ))}
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Set You Apart</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Everything you need to create, monetize, and grow your fitness business
                </p>
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
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <div className="aspect-[16/9] rounded-lg overflow-hidden bg-black/40">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Why Choose Us Section */}
          <section className="py-16 md:py-24 bg-black/80">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Elite Locker</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Built for athletes, by athletes who understand your needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={reason.title} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }} 
                    className="text-center p-6"
                  >
                    <div className="bg-primary/10 rounded-full p-4 inline-flex justify-center items-center mb-4">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Our Users Say
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Join thousands of fitness professionals already growing their business
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((testimonial, index) => (
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
          
          {/* FAQ Section */}
          <section className="py-16 md:py-24 bg-black/90">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Get answers to common questions
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
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
          
          {/* CTA Section */}
          <section className="md:py-20 metal-gradient py-[38px]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Ready To Transform Your Business?</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
                Join the community of top fitness professionals already growing with Elite Locker.
              </p>
              
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
    </>
  );
};

export default Home;
