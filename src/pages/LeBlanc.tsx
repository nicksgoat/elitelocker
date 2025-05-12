
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const LeBlanc = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
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

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background pb-16">
      <WaitlistDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        title={dialogTitle}
        sourcePage="leblanc"
      />
      
      <AppHeader openDialog={openDialog} openComingSoonDialog={openComingSoonDialog} />
      
      <main className="pt-16">
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
          
          <div className="container mx-auto text-center relative z-20 flex flex-col justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
                LeBlanc Athletes
              </h1>
              
              <div className="h-[4.5em] overflow-hidden mb-8 md:mb-12 px-0">
                <h2 className="sm:text-4xl md:text-6xl font-bold py-0 my-0 text-4xl">
                  <TypewriterEffect words={typingWords} className="text-primary" />
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-12 md:mt-16 max-w-md mx-auto">
                <button 
                  onClick={() => {
                    setIsDialogOpen(true);
                  }}
                  className="w-full sm:w-auto metal-gradient text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center justify-center group"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="md:py-20 metal-gradient py-[38px]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Exclusive training with LeBlanc</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-medium">Get early access to personalized training programs.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
              <button 
                onClick={() => {
                  setIsDialogOpen(true);
                }}
                className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <AppFooter openComingSoonDialog={openComingSoonDialog} />
    </div>
  );
};

export default LeBlanc;
