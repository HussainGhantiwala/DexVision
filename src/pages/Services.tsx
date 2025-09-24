import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Database, 
  Cloud, 
  Smartphone, 
  Settings, 
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets and business operations from cyber threats.",
      features: ["24/7 Security Monitoring", "Threat Detection", "Incident Response", "Security Audits"],
      link: "/services/cybersecurity"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Expert data management services including database design, optimization, and analytics solutions.",
      features: ["Database Design", "Data Analytics", "Cloud Migration", "Data Security"],
      link: "/services/data-management"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern business needs.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps Services", "Monitoring"],
      link: "/services/cloud-solutions"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms with modern user experiences.",
      features: ["Native Development", "Cross-Platform Apps", "UI/UX Design", "App Store Optimization"],
      link: "/services/mobile-development"
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic IT consulting to help businesses optimize their technology infrastructure.",
      features: ["Technology Strategy", "System Integration", "Process Optimization", "Digital Transformation"],
      link: "/services/it-consulting"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Professional web development services creating responsive and high-performance websites.",
      features: ["Custom Web Apps", "E-commerce Solutions", "CMS Development", "API Integration"],
      link: "/services/web-development"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Industry certified professionals with extensive experience"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "Track record of successful project deliveries"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional IT Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-card rounded-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Dexvion?
              </h2>
              <p className="text-lg text-muted-foreground">
                We deliver exceptional IT solutions with unmatched expertise and dedication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your technology needs and create a solution that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;