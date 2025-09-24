import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { Button } from '@/components/ui/button';
import { Target, Eye, Award, Users, Briefcase, Globe } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "98%", label: "Success Rate" },
    { value: "50+", label: "Industry Partners" },
    { value: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge training and solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from training to service delivery."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Impact",
      description: "We measure success by the positive impact we create in our students' and clients' lives."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-accent">Dexvion</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're on a mission to bridge the gap between technology education and industry needs, 
              creating a future-ready workforce while securing organizations worldwide.
            </p>
          </div>
        </section>

        <About />

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These values guide everything we do and shape our commitment to excellence in technology education and cybersecurity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-card-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-card border border-border">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you're looking to advance your career or transform your business with technology, 
              we're here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/blog">Explore Courses</Link>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;