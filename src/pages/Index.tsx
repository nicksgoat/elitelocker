import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Rocket, CalendarDays, TrendingUp, Trophy, Activity } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { ExerciseShowcase } from "@/components/ExerciseShowcase";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { StickyMobileHeader } from "@/components/StickyMobileHeader";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { FunnelDiagram } from "@/components/FunnelDiagram";
import { TabInterface } from "@/components/TabInterface";
import { AthleteSection } from "@/components/AthleteSection";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("Join the Waitlist");
  const isMobile = useIsMobile();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("featured");

  const creatorFeatures = [{
    icon: Activity,
    title: "See What's Possible",
    description: "Discover exactly how top creators monetize workouts.",
    color: "purple",
    bullets: ["Social Feed", "Success Stories", "Featured Creators", "Leaderboard Rankings"]
  }, {
    icon: Rocket,
    title: "Instantly Create Sellable Programs",
    description: "Turn your logged workouts into profitable programs.",
    color: "aqua",
    bullets: ["Workout Tracker", "Program Creator", "Drag & Drop Interface", "Spreadsheet-Style Builder"]
  }, {
    icon: CalendarDays,
    title: "Monetize Your Community",
    description: "Host sessions, build clubs, and engage directly with subscribers.",
    color: "coral",
    bullets: ["Clubs & Sessions", "Integrated Calendar", "Direct Messaging", "Subscription Tools"]
  }, {
    icon: TrendingUp,
    title: "Scale Smarter, Not Harder",
    description: "Generate recurring income effortlessly.",
    color: "indigo",
    bullets: ["Memberships & Subscriptions", "Revenue Dashboard", "Member Analytics", "Recurring Revenue Trends"]
  }, {
    icon: Trophy,
    title: "Retain and Grow Your Audience",
    description: "Boost engagement with competition and community events.",
    color: "gold",
    bullets: ["Leaderboards", "Community Challenges", "Achievement Badges", "Engagement Analytics"]
  }];

  const courses = [{
    title: "Strength Training",
    description: "Master fundamental lifting techniques",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    category: "Fitness"
  }, {
    title: "HIIT Programs",
    description: "High-intensity interval training",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    category: "Cardio"
  }, {
    title: "Nutrition Planning",
    description: "Optimize your diet for results",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    category: "Nutrition"
  }];

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

  const videoUrl = "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/C6466_Proxy.mp4";

  const mobileTabs = [{
    value: "featured",
    label: "Featured"
  }, {
    value: "exercises",
    label: "Exercises"
  }, {
    value: "programs",
    label: "Programs"
  }];

  const creatorContent = <>
      <FunnelDiagram />

      <section id="features" className="md:py-20 bg-secondary py-[39px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Creator Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {creatorFeatures.map((feature, index) => (
              <FeatureCard 
                key={feature.title} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
                color={feature.color}
                delay={index * 0.2} 
                bullets={feature.bullets} 
              />
            ))}
          </div>
        </div>
      </section>
    </>;

  return <div className="min-h-screen w-full overflow-x-hidden bg-background pb-16">
      <WaitlistDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title={dialogTitle} />
      
      <AppHeader openDialog={openDialog} openComingSoonDialog={openComingSoonDialog} />
      
      <main className="pt-16">
        {isMobile && <div className="sticky top-14 z-10 w-full">
            <StickyMobileHeader tabs={mobileTabs} defaultTab={activeTab} onTabChange={setActiveTab} />
          </div>}
        
        {isMobile ? <div className="my-0 mx-0 px-0">
            <Tabs value={activeTab}>
              <TabsContent value="featured" className="mt-0">
                <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 px-4 min-h-[80vh] flex items-center">
                  <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    {!videoLoaded && <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      </div>}
                    
                    <video id={isMobile ? "mobile-video" : "desktop-video"} autoPlay muted loop playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} src={videoUrl}>
                      Your browser does not support the video tag.
                    </video>
                    
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                  </div>
                  
                  <div className="container mx-auto text-center relative z-20">
                    <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6
                }}>
                      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
                        Transform Your
                        <span className="text-primary"> Performance</span>
                      </h1>
                      
                      <button onClick={openDialog} className="metal-gradient text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center group">
                        Join Waitlist
                        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </div>
                </section>

                <TabInterface creatorContent={creatorContent} athleteContent={<AthleteSection />} />

                <section className="md:py-20 metal-gradient py-[38px]">
                  <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Ready to Start Your Journey?</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
                      Join thousands of athletes already training with Elite Locker. Start your transformation today.
                    </p>
                    <button onClick={openDialog} className="bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:bg-gray-100 transition-colors">
                      Join Waitlist
                    </button>
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="exercises" className="mt-0">
                <ExerciseShowcase />
              </TabsContent>

              <TabsContent value="programs" className="mt-0">
                <section id="courses" className="py-16 md:py-20">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Featured Programs</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                      {courses.map((course, index) => <motion.div key={course.title} initial={{
                    opacity: 0,
                    scale: 0.95
                  }} animate={{
                    opacity: 1,
                    scale: 1
                  }} transition={{
                    delay: index * 0.2
                  }} className="glass-card hover-card rounded-lg overflow-hidden">
                          <img src={course.image} alt={course.title} className="w-full h-40 md:h-48 object-cover" />
                          <div className="p-4 md:p-6">
                            <span className="text-xs md:text-sm font-bold text-primary">{course.category}</span>
                            <h3 className="text-lg md:text-xl font-bold mt-2 mb-2 md:mb-3 text-white">{course.title}</h3>
                            <p className="text-sm md:text-base text-gray-400 mb-4">{course.description}</p>
                          </div>
                        </motion.div>)}
                    </div>
                  </div>
                </section>
              </TabsContent>
            </Tabs>
          </div> : null}
        
        {!isMobile && <>
            <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 px-4 min-h-[80vh] flex items-center">
              <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                {!videoLoaded && <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>}
                
                <video id={isMobile ? "mobile-video" : "desktop-video"} autoPlay muted loop playsInline className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} src={videoUrl}>
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute inset-0 bg-black/50 z-10"></div>
              </div>
              
              <div className="container mx-auto text-center relative z-20">
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
                    Transform Your
                    <span className="text-primary"> Performance</span>
                  </h1>
                  
                  <button onClick={openDialog} className="metal-gradient text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center group">
                    Join Waitlist
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </section>

            <TabInterface creatorContent={creatorContent} athleteContent={<AthleteSection />} />

            <ExerciseShowcase />

            <section id="courses" className="py-16 md:py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Featured Programs</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {courses.map((course, index) => <motion.div key={course.title} initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: index * 0.2
              }} className="glass-card hover-card rounded-lg overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-40 md:h-48 object-cover" />
                      <div className="p-4 md:p-6">
                        <span className="text-xs md:text-sm font-bold text-primary">{course.category}</span>
                        <h3 className="text-lg md:text-xl font-bold mt-2 mb-2 md:mb-3 text-white">{course.title}</h3>
                        <p className="text-sm md:text-base text-gray-400 mb-4">{course.description}</p>
                      </div>
                    </motion.div>)}
                </div>
              </div>
            </section>

            <section className="md:py-20 metal-gradient py-[38px]">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Ready to Start Your Journey?</h2>
                <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
                  Join thousands of athletes already training with Elite Locker. Start your transformation today.
                </p>
                <button onClick={openDialog} className="bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:bg-gray-100 transition-colors">
                  Join Waitlist
                </button>
              </div>
            </section>
          </>}
      </main>
      
      <AppFooter openComingSoonDialog={openComingSoonDialog} />
    </div>;
};

export default Index;
