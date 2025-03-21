import React from "react";
import { Home, LayoutGrid, Users, Library } from "lucide-react";
interface AppFooterProps {
  openComingSoonDialog: () => void;
}
export const AppFooter: React.FC<AppFooterProps> = ({
  openComingSoonDialog
}) => {
  // Function to handle clicks on footer items
  const handleFooterClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
      e.preventDefault();
      openComingSoonDialog();
    }
  };
  return <footer className="app-footer">
      {/* Red accent line above footer */}
      
      
      <div className="container mx-auto px-0">
        <div onClick={handleFooterClick} className="grid grid-cols-4 py-[19px] bg-[transparen] bg-transparent">
          <a href="/" className="footer-item active">
            <Home size={20} />
            
          </a>
          
          <a href="/" className="footer-item">
            <LayoutGrid size={20} />
            
          </a>
          
          <a href="/" className="footer-item">
            <Users size={20} />
            
          </a>
          
          <a href="/" className="footer-item">
            <Library size={20} />
            
          </a>
        </div>
      </div>
    </footer>;
};