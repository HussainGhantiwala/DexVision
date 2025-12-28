import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Smartphone, Network, Code, Cloud, FileCheck, Users, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Web Penetration Testing",
      description: "Comprehensive security testing of web applications to identify and fix vulnerabilities before attackers exploit them.",
      features: ["OWASP Top 10 Testing", "SQL Injection Testing", "XSS Prevention", "Detailed Security Reports"]
    },
    {
      icon: Smartphone,
      title: "Mobile Application Testing",
      description: "Security assessment for iOS and Android applications ensuring robust mobile security.",
      features: ["iOS Security Testing", "Android Security Testing", "API Security Analysis", "Data Storage Assessment"]
    },
    {
      icon: Network,
      title: "Network Penetration Testing",
      description: "In-depth network security assessments to identify weaknesses in your infrastructure.",
      features: ["Network Scanning", "Vulnerability Assessment", "Firewall Testing", "Wireless Security"]
    },
    {
      icon: Code,
      title: "API Testing",
      description: "Thorough security testing of APIs to ensure data protection and prevent unauthorized access.",
      features: ["REST API Testing", "GraphQL Security", "Authentication Testing", "Rate Limiting Analysis"]
    },
    {
      icon: Cloud,
      title: "Cloud Security Testing",
      description: "Comprehensive security assessments for cloud infrastructure across AWS, Azure, and GCP.",
      features: ["Cloud Config Review", "IAM Assessment", "Container Security", "Compliance Checks"]
    },
    {
      icon: FileCheck,
      title: "Compliance & Auditing",
      description: "Ensure your systems meet industry standards and compliance requirements.",
      features: ["ISO 27001", "GDPR Compliance", "PCI-DSS", "Security Audits"]
    },
    {
      icon: Users,
      title: "Phishing Simulation",
      description: "Test and train your employees against social engineering and phishing attacks.",
      features: ["Simulated Attacks", "Employee Training", "Awareness Programs", "Security Culture Building"]
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Secure and modern website development with built-in security best practices.",
      features: ["Secure Coding", "Responsive Design", "Performance Optimization", "SEO Friendly"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Core VAPT Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Security Testing <br />
            <span className="text-primary">For Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Vulnerability Assessment and Penetration Testing services for 
            small and medium-scale companies. Secure your digital assets with expert VAPT.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card-gradient rounded-2xl p-8 shadow-card border border-border hover:shadow-primary transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center shadow-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-10 h-10 text-primary" />
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