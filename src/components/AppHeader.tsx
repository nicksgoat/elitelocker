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
    if (e.currentTarget.classList.contains('header-icon') && e.currentTarget.getAttribute('data-bypass') === 'true') {
      // Skip intercepting specific buttons that should perform their original function
      return;
    }
    if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
      e.preventDefault();
      openComingSoonDialog();
    }
  };
  return <header className="app-header">
      <div className="container mx-auto px-4 flex justify-between items-center py-[2px]">
        <div className="flex items-center gap-4" onClick={handleNavClick}>
          <button className="header-icon lg:hidden">
            <Menu size={22} />
          </button>
          
          <a href="/" className="flex items-center gap-2">
            
            
          </a>
        </div>
        
        <div className="flex items-center gap-4" onClick={handleNavClick}>
          <button className="header-icon">
            <Settings size={20} />
          </button>
          <button className="header-icon">
            <MessageSquare size={20} />
          </button>
          <button onClick={openDialog} className="header-icon" data-bypass="true">
            <Bell size={20} />
          </button>
        </div>
      </div>
      
      {/* Red accent line below header */}
      
    </header>;
};