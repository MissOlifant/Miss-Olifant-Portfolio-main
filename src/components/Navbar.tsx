import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Download } from "lucide-react";
import cvPdf from "@/Nombulelo_Olifant_CV_compressed.pdf";
import ThemeToggle from "./ThemeToggle";
import profileImg from "@/Nombulelo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:scale-110 transition-transform">
            <span className="w-10 h-10 rounded-full overflow-hidden border border-border/50 shadow">
              <img src={profileImg} alt="Nombulelo Olifant" className="w-full h-full object-cover object-[center_30%]" />
            </span>
            <span className="text-xl font-bold gradient-text">Nombulelo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group ${
                  location.pathname === link.path ? "text-primary" : ""
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a href={cvPdf} download>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in backdrop-blur-xl bg-card/95 rounded-lg p-4 border border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-left ${
                    location.pathname === link.path ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href={cvPdf} download className="w-full">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
