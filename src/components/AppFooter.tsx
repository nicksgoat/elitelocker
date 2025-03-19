
import React from "react";
import { Home, LayoutGrid, Users, Library } from "lucide-react";

interface AppFooterProps {
  openComingSoonDialog: () => void;
}

export const AppFooter: React.FC<AppFooterProps> = ({ openComingSoonDialog }) => {
  // Function to handle clicks on footer items
  const handleFooterClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
      e.preventDefault();
      openComingSoonDialog();
    }
  };

  return (
    <footer className="app-footer">
      {/* Red accent line above footer */}
      <div className="h-0.5 w-full bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700"></div>
      
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-4 py-3" onClick={handleFooterClick}>
          <a href="/" className="footer-item active">
            <Home size={20} />
            <span className="mt-1 text-xs">Home</span>
          </a>
          
          <a href="/" className="footer-item">
            <LayoutGrid size={20} />
            <span className="mt-1 text-xs">Hub</span>
          </a>
          
          <a href="/" className="footer-item">
            <Users size={20} />
            <span className="mt-1 text-xs">Social</span>
          </a>
          
          <a href="/" className="footer-item">
            <Library size={20} />
            <span className="mt-1 text-xs">Library</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
