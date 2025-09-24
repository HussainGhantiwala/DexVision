import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  CheckCircle,
  Shield,
  Database,
  Cloud,
  Smartphone,
  Settings,
  Globe,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const serviceData = {
    cybersecurity: {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets and business operations from cyber threats and vulnerabilities.",
      heroImage: "/api/placeholder/800/400",
      features: [
        "24/7 Security Monitoring and Threat Detection",
        "Advanced Firewall and Intrusion Prevention",
        "Security Audits and Vulnerability Assessments",
        "Incident Response and Recovery Planning",
        "Employee Security Training Programs",
        "Compliance Management (GDPR, HIPAA, SOX)"
      ],
      benefits: [
        "Protect sensitive business data",
        "Maintain customer trust",
        "Ensure regulatory compliance",
        "Minimize security risks"
      ],
      process: [
        "Security Assessment",
        "Strategy Development", 
        "Implementation",
        "Monitoring & Support"
      ]
    },
    "data-management": {
      icon: Database,
      title: "Data Management Solutions",
      description: "Expert data management services including database design, optimization, analytics, and cloud migration solutions.",
      heroImage: "/api/placeholder/800/400",
      features: [
        "Database Design and Architecture",
        "Data Analytics and Business Intelligence",
        "Cloud Data Migration Services",
        "Data Security and Privacy Protection",
        "Real-time Data Processing",
        "Data Backup and Recovery Solutions"
      ],
      benefits: [
        "Improved data accessibility",
        "Better business insights",
        "Enhanced data security",
        "Scalable data infrastructure"
      ],
      process: [
        "Data Audit",
        "Architecture Planning",
        "Migration & Setup",
        "Optimization"
      ]
    },
    "cloud-solutions": {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services designed for modern business needs and digital transformation.",
      heroImage: "/api/placeholder/800/400",
      features: [
        "Cloud Migration and Strategy",
        "Infrastructure as a Service (IaaS)",
        "DevOps and CI/CD Implementation",
        "Cloud Security and Compliance",
        "Multi-cloud Management",
        "Cost Optimization and Monitoring"
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability",
        "Enhanced collaboration",
        "Better disaster recovery"
      ],
      process: [
        "Cloud Assessment",
        "Migration Planning",
        "Implementation",
        "Optimization"
      ]
    },
    "mobile-development": {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms with modern user experiences and cutting-edge technology.",
      heroImage: "/api/placeholder/800/400",
      features: [
        "Native iOS and Android Development",
        "Cross-Platform App Development",
        "UI/UX Design and Prototyping",
        "App Store Optimization (ASO)",
        "Mobile App Testing and QA",
        "Maintenance and Support Services"
      ],
      benefits: [
        "Reach wider audience",
        "Improve customer engagement",
        "Increase brand visibility",
        "Generate new revenue streams"
      ],
      process: [
        "Requirements Analysis",
        "Design & Prototyping",
        "Development",
        "Testing & Launch"
      ]
    },
    "it-consulting": {
      icon: Settings,
      title: "IT Consulting Services",
      description: "Strategic IT consulting to help businesses optimize their technology infrastructure and digital transformation initiatives.",
      heroImage: "/api/placeholder/800/400",
      features: [
        "Technology Strategy and Planning",
        "System Integration Solutions",
        "Process Optimization and Automation",
        "Digital Transformation Consulting",
        "IT Infrastructure Assessment",
        "Vendor Selection and Management"
      ],
      benefits: [
        "Optimized IT operations",
        "Reduced operational costs",
        "Improved efficiency",
        "Strategic technology alignment"
      ],
      process: [
        "Current State Analysis",
        "Strategy Development",
        "Implementation Planning",
        "Execution & Support"
      ]
    },
    "web-development": {
      icon: Globe,
      title: "Web Development Services",
      description: "Professional web development services creating responsive, high-performance websites and web applications.",
      heroImage: "/api/placeholder/800/400",
      features: [
        "Custom Web Application Development",
        "E-commerce Solutions and Platforms",
        "Content Management Systems (CMS)",
        "API Development and Integration",
        "Responsive Web Design",
        "Website Maintenance and Support"
      ],
      benefits: [
        "Enhanced online presence",
        "Better user experience",
        "Increased conversions",
        "Mobile-friendly design"
      ],
      process: [
        "Discovery & Planning",
        "Design & Development",
        "Testing & QA",
        "Launch & Support"
      ]
    }
  };

  const service = serviceData[serviceId as keyof typeof serviceData] || serviceData.cybersecurity;
  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {service.title}
            </h1>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <a href="/" className="hover:text-primary transition-smooth">Home</a>
              <ArrowRight className="w-4 h-4" />
              <a href="/services" className="hover:text-primary transition-smooth">Services</a>
              <ArrowRight className="w-4 h-4" />
              <span>{service.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img 
                  src={service.heroImage} 
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">Business Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">Our Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="text-center p-4 bg-card rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold text-foreground">{step}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Get Started Today</h3>
                    <p className="text-muted-foreground">Ready to transform your business with our {service.title.toLowerCase()}?</p>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full" size="lg">
                      Request Consultation
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      Download Brochure
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">Why Choose Us?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Expert Team</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Quality Assurance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our experts today to discuss your {service.title.toLowerCase()} needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Call Now: +91 (000) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetails;