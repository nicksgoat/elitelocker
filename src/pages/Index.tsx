import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Users, Zap } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
  return <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <WaitlistDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Transform Your
              <span className="text-primary"> Performance</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Elite training programs designed to help you reach your peak potential. Join the community of dedicated athletes and fitness enthusiasts.
            </p>
            <button onClick={openDialog} className="metal-gradient text-white px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center group">
              Join Waitlist
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-primary">Why Choose Elite Locker</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.2
          }} className="glass-card hover-card p-8 rounded-lg">
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-heading font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-primary">Featured Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => <motion.div key={course.title} initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.2
          }} className="glass-card hover-card rounded-lg overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary">{course.category}</span>
                  <h3 className="text-xl font-heading font-bold mt-2 mb-3 text-white">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 metal-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes already training with Elite Locker. Start your transformation today.
          </p>
          <button onClick={openDialog} className="bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
            Join Waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      
    </div>;
};
export default Index;