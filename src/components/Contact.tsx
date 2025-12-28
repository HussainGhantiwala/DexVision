import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  ArrowRight,
  Shield
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const headerAnimation = useScrollAnimation();
  const infoAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 (000) 123-4567",
      action: "Call now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@dexvion.com",
      action: "Send email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "Bangalore, India",
      action: "Get directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Mon - Fri: 9AM - 6PM",
      action: "Schedule call"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Let's Talk
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your <br />
            <span className="text-primary">Cybersecurity Journey?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're starting your cybersecurity career or looking to advance with CEH/OSCP certifications, 
            Dexvion Academy is here to guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div
            ref={infoAnimation.ref}
            className={`transition-all duration-700 ${
              infoAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have questions about our cybersecurity courses or certification programs? 
                Our team is ready to help you achieve your career goals.
              </p>
              
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-card-gradient rounded-xl p-6 shadow-card border border-border hover:shadow-primary transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{info.details}</p>
                        <span className="text-xs text-primary group-hover:text-accent transition-colors">
                          {info.action}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="bg-hero-gradient rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold mb-2">Free Career Consultation</h4>
                    <p className="text-sm text-gray-200">Discuss your cybersecurity career path</p>
                  </div>
                  <Button variant="secondary" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="bg-accent-gradient rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold mb-2">WhatsApp Support</h4>
                    <p className="text-sm text-gray-200">Get instant answers to your questions</p>
                  </div>
                  <Button variant="secondary" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formAnimation.ref}
            className={`bg-card-gradient rounded-2xl p-8 shadow-card border border-border transition-all duration-700 delay-200 ${
              formAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXX XXX XXXX"
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Course Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a course</option>
                  <option value="cs-101">CS-101: Introduction to Cyber Security</option>
                  <option value="cs-102">CS-102: Networking Essentials</option>
                  <option value="cs-201">CS-201: Ethical Hacking Essentials (CEH Prep)</option>
                  <option value="cs-202">CS-202: Digital Forensics & Incident Response</option>
                  <option value="cs-301">CS-301: Advanced Penetration Testing (OSCP Prep)</option>
                  <option value="cs-311">CS-311: SIEM & SOC Operations</option>
                  <option value="cs-321">CS-321: Cloud Security Architecture</option>
                  <option value="cs-401">CS-401: Capstone Project / Internship</option>
                  <option value="full-program">Complete Certification Program</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your background, goals, or any questions you have..."
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaAnimation.ref}
          className={`mt-20 bg-muted rounded-3xl p-12 text-center transition-all duration-700 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions or browse our cybersecurity course catalog to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/faq">View FAQ</Link>
            </Button>
            <Button variant="default" size="lg" className="group" asChild>
              <a href="#courses">
                Browse Courses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;