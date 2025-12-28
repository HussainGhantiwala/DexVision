import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Shield
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Cybersecurity Courses",
      links: [
        { name: "CS-101: Introduction", href: "#courses" },
        { name: "CS-201: Ethical Hacking", href: "#courses" },
        { name: "CS-301: Advanced Pentest", href: "#courses" },
        { name: "CS-311: SOC Operations", href: "#courses" },
        { name: "CS-401: Capstone", href: "#courses" }
      ]
    },
    {
      title: "Certifications",
      links: [
        { name: "CEH v13 AI Prep", href: "#courses" },
        { name: "OSCP Preparation", href: "#courses" },
        { name: "CompTIA Security+", href: "#courses" },
        { name: "Cloud Security", href: "#courses" },
        { name: "SOC Analyst", href: "#courses" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/contact" },
        { name: "Success Stories", href: "/projects" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/faq" },
        { name: "Contact Support", href: "/contact" },
        { name: "Course Schedule", href: "#courses" },
        { name: "Student Portal", href: "#courses" },
        { name: "FAQs", href: "/faq" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#facebook", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#twitter", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#linkedin", name: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#instagram", name: "Instagram" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-3xl font-bold text-primary mb-4">
                <Shield className="w-8 h-8" />
                DEXVION
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Premier Cybersecurity Training Academy. Transform your career with our comprehensive 
                4-level certification program. CEH, OSCP, and industry certifications.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">+91 (000) 123-4567</p>
                  <p className="text-sm text-gray-400">Mon - Fri: 9AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">info@dexvion.com</p>
                  <p className="text-sm text-gray-400">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">Bangalore, India</p>
                  <p className="text-sm text-gray-400">Cybersecurity Training Hub</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-white font-semibold text-lg mb-6">
                {section.title}
              </h3>
                <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
                </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Cybersecurity Trends
              </h3>
              <p className="text-gray-300">
                Get exclusive insights, course updates, and cybersecurity career tips delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 h-12"
              />
              <Button size="lg" className="group">
                Subscribe
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Dexvion Academy. All rights reserved. | Cybersecurity Training Excellence
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;