import  { useState, useEffect } from 'react';
import {  Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Subsidies', href: '#subsidies' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
   <header
  className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? "shadow-lg" : ""
  } bg-cover bg-center bg-no-repeat bg-[url('images/solarbg.jpg')]`}
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16 lg:h-20">

      {/* Logo */}
      <img
        src="images/img1.png"
        alt="Logo"
        className={`h-[100px] w-auto ${
          isScrolled ? "brightness-100" : "brightness-110"
        } transition-all duration-300`}
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`font-medium hover:text-sky-500 transition-colors ${
              isScrolled ? "text-gray-700" : "text-black"
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:flex items-center space-x-4">
        <button onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    } className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
          Get Quote
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
        ) : (
          <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
        )}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden bg-white border-t shadow-lg">
      <div className="px-4 py-2 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-gray-700 hover:text-sky-500 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <div className="pt-2">
          <button className="w-full bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )}
</header>

  );
};

export default Header;