import { Link } from 'react-router-dom';
import { Linkedin, ArrowUpRight, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Team', href: '/team' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

const services = [
  'Enterprise Software',
  'Mobile Apps',
  'UI/UX Design',
  'System Integration',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[20vw] font-extrabold text-white/[0.02] select-none">
          W
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/weeflare-logo.png" 
                alt="WeeFlare" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Next-generation B2B software solutions that transform businesses 
              into digital leaders through innovation, precision, and partnership.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/weeflare/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-cyan hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-cyan transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-extrabold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-white/60 hover:text-cyan transition-colors text-sm flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+201062690945"
                  className="text-white/60 hover:text-cyan transition-colors"
                >
                  +20 106 269 0945 (Egypt)
                </a>
              </li>
              <li>
                <a
                  href="tel:+971585156906"
                  className="text-white/60 hover:text-cyan transition-colors"
                >
                  +971 585 156 906 (UAE)
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@weeflare.com"
                  className="text-white/60 hover:text-cyan transition-colors"
                >
                  contact@weeflare.com
                </a>
              </li>
              <li className="text-white/60">
                Alexandria, Egypt
              </li>
              <li className="text-white/60">
                Marina Square, Reem Island<br />
                Abu Dhabi, UAE
              </li>
              <li>
                <a
                  href="https://share.google/vPrl9N8m9JGLWSC3x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-green transition-colors flex items-center gap-1"
                >
                  View on Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} WeeFlare. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/terms"
                className="text-white/40 hover:text-cyan transition-colors text-sm"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="text-white/40 hover:text-cyan transition-colors text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
