
import React from "react";
import { Home, LayoutGrid, Users, Library } from "lucide-react";
import { Link } from "react-router-dom";

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
    <footer className="app-footer">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-4 py-[19px] bg-transparent">
          <a href="/" onClick={handleFooterClick} className="footer-item active">
            <Home size={20} />
          </a>
          
          <a href="/" onClick={handleFooterClick} className="footer-item">
            <LayoutGrid size={20} />
          </a>
          
          <a href="/" onClick={handleFooterClick} className="footer-item">
            <Users size={20} />
          </a>
          
          <a href="/" onClick={handleFooterClick} className="footer-item">
            <Library size={20} />
          </a>
        </div>
        
        <div className="border-t border-[#222] py-2 text-center">
          <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
