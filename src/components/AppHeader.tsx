
import React from "react";
import { Menu, Settings, MessageSquare, Bell } from "lucide-react";

interface AppHeaderProps {
  openDialog: () => void;
  openComingSoonDialog: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  openDialog,
  openComingSoonDialog
}) => {
  // Function to handle clicks on navigation items
  const handleNavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openComingSoonDialog();
  };

  return <header className="app-header">
      <div className="container mx-auto px-4 flex justify-between items-center py-[2px]">
        <div className="flex items-center gap-4">
          <button onClick={handleNavClick} className="header-icon lg:hidden">
            <Menu size={22} />
          </button>
          
          <a href="/" onClick={handleNavClick} className="flex items-center gap-2">
            
            
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
      
      {/* Red accent line below header */}
      
    </header>;
};
