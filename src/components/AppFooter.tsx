
import React from "react";
import { Home, LayoutGrid, Users, Library } from "lucide-react";

interface AppFooterProps {
  openComingSoonDialog: () => void;
}

export const AppFooter: React.FC<AppFooterProps> = ({
  openComingSoonDialog
}) => {
  const handleFooterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openComingSoonDialog();
  };

  return (
    <footer className="app-footer fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-[#222] z-50">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-4 py-4 bg-transparent">
          <a href="/" onClick={handleFooterClick} className="footer-item active flex flex-col items-center justify-center text-primary">
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </a>
          
          <a href="/" onClick={handleFooterClick} className="footer-item flex flex-col items-center justify-center text-gray-400 hover:text-primary">
            <LayoutGrid size={20} />
            <span className="text-xs mt-1">Browse</span>
          </a>
          
          <a href="/" onClick={handleFooterClick} className="footer-item flex flex-col items-center justify-center text-gray-400 hover:text-primary">
            <Users size={20} />
            <span className="text-xs mt-1">Social</span>
          </a>
          
          <a href="/" onClick={handleFooterClick} className="footer-item flex flex-col items-center justify-center text-gray-400 hover:text-primary">
            <Library size={20} />
            <span className="text-xs mt-1">Library</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
