import { useState, useEffect } from 'react';
import { Instagram, Music2, Youtube, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === 'home' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                  : activeSection === 'home' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('music')}
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === 'music' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                  : activeSection === 'music' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
              }`}
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === 'about' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                  : activeSection === 'about' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === 'booking' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                  : activeSection === 'booking' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
              }`}
            >
              Booking
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? 'text-charcoal' : 'text-cream'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/houseofpraisee/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold'
              }`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@houseofpraisee?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold'
              }`}
              aria-label="TikTok"
            >
              <Music2 size={18} />
            </a>
            <a
              href="https://www.youtube.com/@House_Of_Praise/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold'
              }`}
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-light tracking-wider uppercase transition-colors text-left ${
                  scrolled
                    ? activeSection === 'home' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                    : activeSection === 'home' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('music')}
                className={`text-sm font-light tracking-wider uppercase transition-colors text-left ${
                  scrolled
                    ? activeSection === 'music' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                    : activeSection === 'music' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
                }`}
              >
                Music
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-light tracking-wider uppercase transition-colors text-left ${
                  scrolled
                    ? activeSection === 'about' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                    : activeSection === 'about' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className={`text-sm font-light tracking-wider uppercase transition-colors text-left ${
                  scrolled
                    ? activeSection === 'booking' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                    : activeSection === 'booking' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
                }`}
              >
                Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
