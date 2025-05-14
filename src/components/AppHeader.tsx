
import React from "react";
import { Menu, Settings, MessageSquare, Bell, Activity, Dumbbell, ListOrdered } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AppHeaderProps {
  openDialog: () => void;
  openComingSoonDialog: () => void;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  openDialog,
  openComingSoonDialog,
  activeTab = "featured",
  setActiveTab = () => {}
}) => {
  // Function to handle clicks on navigation items
  const handleNavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openComingSoonDialog();
  };

  return (
    <header className="app-header">
      <div className="container mx-auto px-4 flex justify-between items-center py-[2px]">
        <div className="flex items-center gap-4">
          <button onClick={handleNavClick} className="header-icon lg:hidden">
            <Menu size={22} />
          </button>
          
          <a href="/" onClick={handleNavClick} className="flex items-center gap-2">
            {/* Logo space */}
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <button onClick={handleNavClick} className="header-icon">
            <Settings size={20} />
          </button>
          <button onClick={handleNavClick} className="header-icon">
            <MessageSquare size={20} />
          </button>
          <button onClick={handleNavClick} className="header-icon">
            <Bell size={20} />
          </button>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-transparent border-b border-[#222]">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex justify-center w-full bg-transparent py-1">
              <TabsTrigger value="featured" className="flex items-center gap-2 px-6 py-2 data-[state=active]:text-primary transition-all duration-200 bg-black">
                <Activity className="w-4 h-4" />
                <span className="font-medium">Featured</span>
              </TabsTrigger>
              <TabsTrigger value="exercises" className="flex items-center gap-2 px-6 py-2 data-[state=active]:text-primary transition-all duration-200 bg-inherit">
                <Dumbbell className="w-4 h-4" />
                <span className="font-medium">Exercises</span>
              </TabsTrigger>
              <TabsTrigger value="programs" className="flex items-center gap-2 px-6 py-2 data-[state=active]:text-primary transition-all duration-200 bg-black">
                <ListOrdered className="w-4 h-4" />
                <span className="font-medium">Programs</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </header>
  );
};
