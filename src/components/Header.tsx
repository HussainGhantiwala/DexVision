import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 (000) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@dexvion.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Bangalore, India</span>
            </div>
          </div>
          <div className="text-primary-glow font-semibold">
            Cybersecurity Training Academy
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                DEXVION
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/' ? 'text-primary font-semibold' : ''}`}>
                Home
              </Link>
              <Link to="/about" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/about' ? 'text-primary font-semibold' : ''}`}>
                About
              </Link>
              <a href="#courses" className="text-foreground hover:text-primary transition-smooth">
                Courses
              </a>
              <Link to="/team" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/team' ? 'text-primary font-semibold' : ''}`}>
                Team
              </Link>
              <Link to="/faq" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/faq' ? 'text-primary font-semibold' : ''}`}>
                FAQ
              </Link>
              <Link to="/contact" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/contact' ? 'text-primary font-semibold' : ''}`}>
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" asChild>
                <a href="#courses">View Courses</a>
              </Button>
              <Button variant="default" asChild>
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <Link to="/" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/' ? 'text-primary font-semibold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/about' ? 'text-primary font-semibold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <a href="#courses" className="text-foreground hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>
                  Courses
                </a>
                <Link to="/team" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/team' ? 'text-primary font-semibold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  Team
                </Link>
                <Link to="/faq" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/faq' ? 'text-primary font-semibold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </Link>
                <Link to="/contact" className={`text-foreground hover:text-primary transition-smooth ${location.pathname === '/contact' ? 'text-primary font-semibold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#courses" onClick={() => setIsMenuOpen(false)}>View Courses</a>
                  </Button>
                  <Button variant="default" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Enroll Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;