import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`text-xl sm:text-2xl transition-colors ${
              isScrolled || !isHomePage
                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                : "text-white"
            }`}
          >
            Spacepoint Tech
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className={`transition-colors ${
                isScrolled || !isHomePage
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isScrolled || !isHomePage
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`transition-colors ${
                isScrolled || !isHomePage
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isScrolled || !isHomePage
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHomePage
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-white rounded-b-2xl shadow-lg">
            <nav className="flex flex-col gap-4 px-4">
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2"
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2"
              >
                Contact
              </Link>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
