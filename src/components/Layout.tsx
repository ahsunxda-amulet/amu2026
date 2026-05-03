import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Pill, PhoneCall, Building2, FlaskConical, Users, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Logo = ({ white = false }: { white?: boolean }) => (
  <Link to="/" className="flex items-center gap-2 group">
    <div className={white ? "brightness-0 invert" : ""}>
      <img 
        src="./src/logo.png" 
        alt="Amulet Pharmaceuticals Ltd." 
        className="h-12 sm:h-16 object-contain"
      />
    </div>
  </Link>
);

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Top bar */}
      <div className="bg-[#0066AE] text-white py-1.5 px-4 md:px-8 text-xs font-medium flex justify-between items-center hidden md:flex">
        <div className="flex items-center gap-4 text-blue-100">
          <span className="flex items-center gap-1"><PhoneCall size={12} /> +880 1401 555 333</span>
          <span className="flex items-center gap-1">chairmanapl2023@gmail.com</span>
        </div>
        <div className="flex items-center gap-4 text-blue-100">
          <span>WHO-GMP Compliant Manufacturing</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#0066AE]'
                    : 'text-slate-600 hover:text-[#0066AE]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/portfolio"
              className="bg-[#0066AE] hover:bg-[#005590] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm flex items-center gap-2"
            >
              Our Products
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-[#0066AE]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-semibold p-2 rounded-md ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-[#0066AE]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Logo white={true} />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Merging scientific precision with a compassionate heart to deliver WHO-GMP compliant medications across Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2"><Building2 size={18} className="text-[#0066AE]" /> Corporate Office</h4>
            <address className="not-italic text-sm space-y-3 opacity-80">
              <p>205/1-A, Gulshan, Tejgaon Link Road</p>
              <p>Dhaka-1208, Bangladesh</p>
              <p>Phone: +880 1401 555 333</p>
              <p>Email: chairmanapl2023@gmail.com</p>
            </address>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2"><FlaskConical size={18} className="text-[#0066AE]" /> Factory location</h4>
            <address className="not-italic text-sm space-y-3 opacity-80">
              <p>Vill: Singdighi, PO: Mawna</p>
              <p>PS: Sreepur, Dist: Gazipur</p>
              <p>Phone: +880 1713 415 021</p>
              <p>Email: ed.amulet.bd@gmail.com</p>
            </address>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#0066AE]" /> About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#0066AE]" /> Product Portfolio</Link></li>
              <li><Link to="/facilities" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#0066AE]" /> Manufacturing</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-xs opacity-60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Amulet Pharmaceuticals Ltd. All rights reserved.</p>
          <p>Universal Health Coverage for Bangladesh.</p>
        </div>
      </footer>
    </div>
  );
}
