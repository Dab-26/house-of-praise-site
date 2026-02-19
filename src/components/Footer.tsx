import { Instagram, Music2, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-3xl mb-4">House of Praise</h3>
            <p className="text-cream/70 font-light leading-relaxed">
              Awakening a generation through worship and authentic encounter with God.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-light"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#music"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-light"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-light"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-light"
                >
                  Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4 text-gold">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/houseofpraisee/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/10 hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@houseofpraisee?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/10 hover:bg-gold transition-colors duration-300"
                aria-label="TikTok"
              >
                <Music2 size={18} />
              </a>
              <a
                href="https://www.youtube.com/@House_Of_Praise/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/10 hover:bg-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
            <p className="text-cream/70 font-light text-sm">
              <a href="mailto:info@thehop.net" className="hover:text-gold transition-colors">
                info@thehop.net
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 text-center">
          <p className="text-cream/50 text-sm font-light">
            © {currentYear} House of Praise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
