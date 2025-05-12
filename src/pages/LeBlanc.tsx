
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Star, Zap, Shield, Check, Users, HelpCircle, Download } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { AthleteSection } from "@/components/AthleteSection";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

const LeBlanc = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("Join LeBlanc's Waitlist");
  const [videoLoaded, setVideoLoaded] = useState(false);
  
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
    const video = document.getElementById("leblanc-video") as HTMLVideoElement;
    if (video) {
      const handleVideoLoaded = () => setVideoLoaded(true);
      video.addEventListener('loadeddata', handleVideoLoaded);
      return () => video.removeEventListener('loadeddata', handleVideoLoaded);
    }
  }, []);
  
  const videoUrl = "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/C6466_Proxy.mp4";

  const features = [
    {
      title: "Advanced Analytics",
      description: "Track your progress with detailed analytics and visualizations",
      icon: <Trophy className="h-6 w-6 text-primary" />,
      image: "/placeholder.svg"
    },
    {
      title: "Personalized Training",
      description: "Get customized workout plans tailored to your specific needs",
      icon: <Star className="h-6 w-6 text-primary" />,
      image: "/placeholder.svg"
    },
    {
      title: "Expert Coaching",
      description: "Learn from the best with guidance from experienced coaches",
      icon: <Zap className="h-6 w-6 text-primary" />,
      image: "/placeholder.svg"
    }
  ];

  const whyChooseUs = [
    {
      title: "Proven Results",
      description: "Our athletes see measurable improvements within weeks",
      icon: <Check className="h-6 w-6 text-primary" />
    },
    {
      title: "Elite Community",
      description: "Join a network of dedicated athletes pushing each other to excel",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Cutting-Edge Technology",
      description: "Access the latest in sports performance technology",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Professional Support",
      description: "Get help whenever you need it from our team of experts",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  const faqs = [
    {
      question: "How soon can I expect results?",
      answer: "Most athletes see measurable improvements within 2-3 weeks of consistent training with our program."
    },
    {
      question: "Is LeBlanc suitable for beginners?",
      answer: "Absolutely! Our program adapts to all skill levels, from beginners to advanced athletes."
    },
    {
      question: "What equipment do I need?",
      answer: "The basic program requires minimal equipment. Specialized training modules may suggest additional equipment."
    },
    {
      question: "How does the waitlist work?",
      answer: "Join our waitlist to be among the first to gain access when we launch. Early waitlist members receive exclusive bonuses."
    }
  ];

  const testimonials = [
    {
      name: "Michael T.",
      role: "College Athlete",
      content: "LeBlanc's training program transformed my performance. I've never been in better shape.",
      rating: 5
    },
    {
      name: "Sarah L.",
      role: "Professional Runner",
      content: "The personalized approach makes all the difference. My recovery time has improved dramatically.",
      rating: 5
    },
    {
      name: "Jason K.",
      role: "High School Coach",
      content: "I've implemented LeBlanc's techniques with my team and seen incredible results across the board.",
      rating: 5
    },
    {
      name: "Emma W.",
      role: "Competitive Swimmer",
      content: "The analytics helped me identify weaknesses in my technique I never knew existed.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <WaitlistDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        title={dialogTitle}
        sourcePage="leblanc"
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
            
            <video 
              id="leblanc-video" 
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
          
          <div className="container mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="text-left"
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
                  LeBlanc Athletes
                </h1>
                
                <div className="h-[4.5em] overflow-hidden mb-6">
                  <h2 className="sm:text-3xl md:text-5xl font-bold text-4xl">
                    <TypewriterEffect words={typingWords} className="text-primary" />
                  </h2>
                </div>
                
                <p className="text-xl mb-8 text-gray-300">
                  Join the exclusive training program that's transforming athletes around the world. Limited spots available.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="ml-2 text-gray-200">Personalized Training</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="ml-2 text-gray-200">Expert Coaches</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="ml-2 text-gray-200">Advanced Analytics</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={openDialog}
                    className="metal-gradient text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center justify-center group"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={openComingSoonDialog}
                    className="text-white border-white hover:bg-white/10 transition-colors px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold inline-flex items-center justify-center"
                  >
                    Learn More
                    <Download className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>
                
                <div className="mt-6 text-sm text-gray-400">
                  <p>Join 500+ athletes already on our waitlist</p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-xl overflow-hidden border border-white/10"
              >
                <div className="aspect-[4/3] bg-black/40 backdrop-blur flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-4">Preview Coming Soon</h3>
                    <p className="text-gray-300">Be the first to see our revolutionary training platform</p>
                  </div>
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
              {['NBA', 'NFL', 'MLB', 'NHL', 'NCAA'].map((org, i) => (
                <motion.div 
                  key={org}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="text-gray-400 font-bold text-xl"
                >
                  {org}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
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
                Features That Set Us Apart
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
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
                    <p className="text-gray-400">Feature Preview</p>
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
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Why Choose LeBlanc
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                We're not just another training program. We're a revolution in athletic development.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
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
        
        {/* Testimonials Section */}
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
                Real results from real athletes using our program
              </motion.p>
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
                Get answers to common questions about the LeBlanc program
              </motion.p>
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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white"
            >
              Join the LeBlanc Elite
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-medium"
            >
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

export default LeBlanc;
