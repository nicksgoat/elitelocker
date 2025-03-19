
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Users, Zap } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { ExerciseShowcase } from "@/components/ExerciseShowcase";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const features = [{
    icon: Globe,
    title: "Elite Training",
    description: "Access premium training resources worldwide"
  }, {
    icon: Users,
    title: "Expert Coaches",
    description: "Train with professional instructors"
  }, {
    icon: Zap,
    title: "Performance Tracking",
    description: "Monitor and improve your progress"
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
  const openDialog = () => setIsDialogOpen(true);

  // This effect is used to update the videoLoaded state when the video is loaded
  useEffect(() => {
    const video = document.getElementById(isMobile ? "mobile-video" : "desktop-video") as HTMLVideoElement;
    if (video) {
      const handleVideoLoaded = () => setVideoLoaded(true);
      video.addEventListener('loadeddata', handleVideoLoaded);
      return () => video.removeEventListener('loadeddata', handleVideoLoaded);
    }
  }, [isMobile]);

  // Updated to use the video you've uploaded to Supabase
  const videoUrl = "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/videos/C6466_Proxy.mp4";

  return <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <WaitlistDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-white/10 bg-[#1f1f1f]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img alt="Elite Locker Logo" className="h-8 w-8 md:h-10 md:w-10 object-fill" src="/lovable-uploads/5d4b23a0-82f4-4bf3-be9f-aa34c7594d27.jpg" />
            <span className="text-xl md:text-2xl font-bold text-primary">Elite Locker</span>
          </a>
          
          <button onClick={openDialog} className="metal-gradient text-white px-4 py-2 text-sm md:px-6 md:text-base rounded-md hover:opacity-90 transition-opacity font-medium">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 min-h-[80vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          {/* Loading placeholder */}
          {!videoLoaded && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Video - now using the same video for both mobile and desktop */}
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
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        
        {/* Hero Content */}
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
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto px-4 font-medium">
              Elite training programs designed to help you reach your peak potential. Join the community of dedicated athletes and fitness enthusiasts.
            </p>
            <button onClick={openDialog} className="metal-gradient text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center group">
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Why Choose Elite Locker</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.2
          }} className="glass-card hover-card p-6 md:p-8 rounded-lg">
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 md:mb-6" />
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Exercise Showcase Section */}
      <ExerciseShowcase />

      {/* Courses Section */}
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 metal-gradient">
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
    </div>;
};

export default Index;
