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
  Monitor,
  Brain
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Settings,
      title: "Managed IT Services",
      description: "It is a long established fact that reader will be distracted readable content of a when looking.",
      link: "/services/managed-it"
    },
    {
      icon: Monitor,
      title: "Managed IT Services", 
      description: "It is a long established fact that reader will be distracted readable content of a when looking.",
      link: "/services/managed-it-2"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "It is a long established fact that reader will be distracted readable content of a when looking.",
      link: "/services/cloud-services"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "It is a long established fact that reader will be distracted readable content of a when looking.",
      link: "/services/machine-learning"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "It is a long established fact that reader will be distracted readable content of a when looking.",
      link: "/services/data-security"
    },
    {
      icon: Database,
      title: "Web Analysis",
      description: "It is a long established fact that reader will be distracted readable content of a when looking.",
      link: "/services/web-analysis"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "It is a long established fact that reader will be distracted readable content of a when looking.",
      link: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "It is a long established fact that reader will be distracted readable content of a when looking.",
      link: "/services/mobile-apps"
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
              Services Grid
            </h1>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Services Grid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 bg-muted/10">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link to={service.link}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesGrid;