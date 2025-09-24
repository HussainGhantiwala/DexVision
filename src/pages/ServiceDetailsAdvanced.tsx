import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Shield,
  Database,
  Cloud,
  Brain,
  Globe
} from 'lucide-react';

const ServiceDetailsAdvanced = () => {
  const { serviceId } = useParams();

  const serviceData = {
    "data-security": {
      title: "Data Security",
      description: "Comprehensive data security solutions to protect your business from cyber threats.",
      image: "/placeholder.svg"
    },
    "cloud-services": {
      title: "Cloud Services", 
      description: "Scalable cloud infrastructure and migration services for modern business needs.",
      image: "/placeholder.svg"
    },
    "machine-learning": {
      title: "Machine Learning",
      description: "Advanced AI and machine learning solutions to transform your business operations.",
      image: "/placeholder.svg"
    },
    "web-analysis": {
      title: "Web Analysis",
      description: "In-depth web analytics and performance optimization services.",
      image: "/placeholder.svg"
    },
    "managed-it": {
      title: "Managed IT Services",
      description: "Complete IT management and support services for your business.",
      image: "/placeholder.svg"
    }
  };

  const currentService = serviceData[serviceId as keyof typeof serviceData] || serviceData["data-security"];

  const services = [
    { name: "Managed IT Services", icon: Database },
    { name: "Cloud Services", icon: Cloud },
    { name: "Machine Learning", icon: Brain },
    { name: "Data Security", icon: Shield },
    { name: "Web Analysis", icon: Globe }
  ];

  const features = [
    "Sed nisl fusce est consequat mollis habitasse facilisi rutrum nisle.",
    "Cubilia quisque ad accumsan lorem platea elementum nisl curabitur dapibus.",
    "Egestas magnis sapien hack vehicula condimentum dui enim justo site."
  ];

  const faqs = [
    {
      question: "What is vision for the future?",
      answer: "Augue enim ut sem vulputate nunc eu ultrices nec bibendum. Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit malesuada massa scelerisque tincidunt. faucibus Sit dolor ultricie phasellus viverra feugiat enim nisl."
    },
    {
      question: "Do you offer free resources?",
      answer: "Augue enim ut sem vulputate nunc eu ultrices nec bibendum. Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit malesuada massa scelerisque tincidunt. faucibus Sit dolor ultricie phasellus viverra feugiat enim nisl."
    },
    {
      question: "Can help to find investors?",
      answer: "Augue enim ut sem vulputate nunc eu ultrices nec bibendum. Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit malesuada massa scelerisque tincidunt. faucibus Sit dolor ultricie phasellus viverra feugiat enim nisl."
    },
    {
      question: "What services do you offer?",
      answer: "Augue enim ut sem vulputate nunc eu ultrices nec bibendum. Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit malesuada massa scelerisque tincidunt. faucibus Sit dolor ultricie phasellus viverra feugiat enim nisl."
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
              Service Details
            </h1>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Service Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Hero Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={currentService.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {currentService.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a book bethas survived not only five when anner year unknown printer eed little help from friend from time to time. Although we offer the one-stop convenience. unknown printer took galley type year anddey unknown printer took scrambled.
                  </p>

                  <p className="text-muted-foreground mb-8">
                    When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a book bethas survived not only five when anner year unknown printer eed little help from friend from time to time. Although we offer the one-stop convenience. unknown printer took galley type year unknown printer took galley anddey scrambled.
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Images Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="/placeholder.svg" 
                      alt="Service detail 1"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <img 
                      src="/placeholder.svg" 
                      alt="Service detail 2"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <p className="text-muted-foreground mb-8">
                    When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a book bethas survived not only five when anner year unknown printer eed little help from friend from time to time. Although we offer the one-stop convenience. unknown printer took galley type year anddey unknown printer took scrambled.
                  </p>

                  {/* FAQ Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Frequently Asked Questions
                    </h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Services List */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Our Services
                    </h4>
                    <div className="space-y-3">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={`/services-advanced/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <service.icon className="w-5 h-5 text-primary" />
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {service.name}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Widget */}
                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Need Any Help?
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      Need Any Help, Call Us 24/7 For Support
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Call Us</p>
                          <a href="tel:+1234567890" className="font-semibold text-foreground hover:text-primary transition-colors">
                            +123 456 7890
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a href="mailto:info@example.com" className="font-semibold text-foreground hover:text-primary transition-colors">
                            info@example.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Office Address</p>
                          <span className="font-semibold text-foreground">
                            125 Berlin, Germany
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full mt-6" asChild>
                      <Link to="/contact">Get Free Consultation</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailsAdvanced;