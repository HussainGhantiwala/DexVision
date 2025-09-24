import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import cybersecurityIcon from '@/assets/cybersecurity-icon.jpg';
import aimlIcon from '@/assets/aiml-icon.jpg';
import datascienceIcon from '@/assets/datascience-icon.jpg';
import itsolutionsIcon from '@/assets/itsolutions-icon.jpg';

const Services = () => {
  const services = [
    {
      icon: cybersecurityIcon,
      title: "Cybersecurity Training",
      description: "Practical, hands-on training in Ethical Hacking, Network Security, Malware Analysis, SOC Operations, and Incident Response.",
      features: ["Ethical Hacking", "Network Security", "Malware Analysis", "SOC Operations"]
    },
    {
      icon: aimlIcon,
      title: "Data Science & AI/ML Training", 
      description: "Master Python, Machine Learning, Deep Learning, and AI-driven solutions to prepare for future industries.",
      features: ["Python Programming", "Machine Learning", "Deep Learning", "AI Solutions"]
    },
    {
      icon: itsolutionsIcon,
      title: "IT Solutions",
      description: "Custom software development, cloud solutions, IT consulting, and enterprise support tailored to your business needs.",
      features: ["Software Development", "Cloud Solutions", "IT Consulting", "Enterprise Support"]
    },
    {
      icon: cybersecurityIcon,
      title: "Cybersecurity Services",
      description: "Protect your business with penetration testing, vulnerability assessment, security audits, and managed SOC services.",
      features: ["Penetration Testing", "Vulnerability Assessment", "Security Audits", "Managed SOC"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Our Core Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart Solutions for a <br />
            <span className="text-primary">Digital World</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why Dexvion? We combine industry expertise with practical training to deliver 
            comprehensive technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card-gradient rounded-2xl p-8 shadow-card border border-border hover:shadow-primary transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="ghost" 
                className="group/btn w-full text-primary hover:text-primary-foreground hover:bg-primary"
                asChild
              >
                <Link to="/services">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-card-gradient rounded-3xl p-12 shadow-card border border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Dexvion?</h3>
            <p className="text-muted-foreground">We deliver excellence through expertise and innovation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Industry Experts</h4>
              <p className="text-sm text-muted-foreground">Experienced trainers & consultants</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Hands-On Learning</h4>
              <p className="text-sm text-muted-foreground">Real projects & practical experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground">Enterprise-grade cybersecurity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Scalable Solutions</h4>
              <p className="text-sm text-muted-foreground">From startups to enterprises</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Global Vision</h4>
              <p className="text-sm text-muted-foreground">Global reach, local support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;