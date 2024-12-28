import React from "react";
import { Phone } from "lucide-react";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-text hover:text-text-secondary"
          >
            <Phone className="w-5 h-5" />
            {/* <span className="hidden sm:inline">Contact Us</span> */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
