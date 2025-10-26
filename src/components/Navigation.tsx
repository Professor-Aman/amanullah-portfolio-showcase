import { useState, useEffect } from "react";
import { Menu, X, Home, User, BookOpen, Briefcase, Code, Layout, Mail, Smartphone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home", icon: <Home className="w-5 h-5" /> },
    { label: "About", id: "about", icon: <User className="w-5 h-5" /> },
    { label: "Education", id: "education", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Experience", id: "experience", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Skills", id: "skills", icon: <Code className="w-5 h-5" /> },
    { label: "Portfolio", id: "portfolio", icon: <Layout className="w-5 h-5" /> },
    { label: "Android", id: "android", icon: <Smartphone className="w-5 h-5" /> },
    { label: "Awards", id: "awards", icon: <Award className="w-5 h-5" /> },
    { label: "Contact", id: "contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "backdrop-blur-md" 
          : ""
      }`}
      style={{ 
        background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(30, 58, 138, 0.85))',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20 max-w-[1800px] mx-auto">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-bold transition-colors"
            style={{ 
              background: 'linear-gradient(to right, #2DD4BF, #FFFFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Aman Ullah
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#2DD4BF] transition-all duration-300 font-medium 
                  mx-1 px-3 py-2 rounded-md hover:bg-white/10 flex items-center gap-1.5
                  border-b-2 border-transparent hover:border-[#2DD4BF] hover:scale-105"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#2DD4BF] bg-[#0F172A]/90 hover:bg-[#1E3A8A] rounded-md"
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in rounded-b-lg max-w-[1800px] mx-auto"
               style={{ 
                 background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(30, 58, 138, 0.95))',
                 boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)'
               }}>
            <div className="max-w-[1800px] mx-auto px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-white hover:text-[#2DD4BF] 
                    hover:bg-white/10 transition-all duration-300 font-medium rounded-md my-1
                    flex items-center gap-3 hover:translate-x-1"
                  style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
