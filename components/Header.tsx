import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, MessageCircle } from 'lucide-react';

// Custom TikTok Icon since it's not in all icon sets
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#features' },
    { name: 'احجز الآن', href: '#booking' },
    { name: 'الموقع', href: '#location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo / Brand - Using the user provided image */}
        <a href="#home" className="block">
          <img 
            src="/logo.png" 
            alt="Dalida Co-working Space" 
            className="h-16 w-auto object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback Text in case logo.png is missing */}
          <div className="hidden flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">D</div>
            <span className="text-xl font-bold text-yellow-400">داليدا</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-zinc-300 hover:text-yellow-400 transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social / CTA Desktop */}
        <div className="hidden md:flex gap-3 items-center">
            <a href="https://www.facebook.com/dalidacoworkspace/?locale=ar_AR" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
            </a>
            <a href="https://instagram.com/dalidacoworkspace" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@dalidacoworkspace" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <TikTokIcon size={20} />
            </a>
            <a href="https://wa.me/201004294818" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors ml-2">
                <MessageCircle size={16} />
                تواصل معنا
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-200 hover:text-yellow-400 py-2 border-b border-zinc-800 text-center"
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center gap-6 py-2">
                <a href="https://www.facebook.com/dalidacoworkspace/?locale=ar_AR" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-blue-600">
                    <Facebook size={24} />
                </a>
                <a href="https://instagram.com/dalidacoworkspace" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-pink-500">
                    <Instagram size={24} />
                </a>
                <a href="https://www.tiktok.com/@dalidacoworkspace" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                    <TikTokIcon size={24} />
                </a>
            </div>
             <a href="https://wa.me/201004294818" className="bg-green-600 text-white py-3 rounded-lg text-center font-bold">
                واتساب
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;