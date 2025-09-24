import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <a href="/" className="hover:text-primary transition-smooth">Home</a>
              <ArrowRight className="w-4 h-4" />
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      
      <Footer />
    </div>
  );
};

export default ContactPage;