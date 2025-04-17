
import React from "react";
import { Home, LayoutGrid, Users, Library, Shield } from "lucide-react";
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
        
        <div className="border-t border-[#222] py-4">
          <Link to="/privacy-policy" className="flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 gap-2">
            <Shield size={16} />
            <span className="text-sm">Privacy Policy</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
