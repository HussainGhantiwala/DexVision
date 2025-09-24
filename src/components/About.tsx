import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Eye, Award, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Who We Are
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              We Execute Ideas From 
              <span className="text-primary"> Start to Finish</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dexvion is a leading IT solutions and training provider dedicated to shaping the future of technology. 
              We specialize in Cybersecurity Services, AI/ML, Data Science, and custom IT solutions while also 
              equipping professionals and students with industry-relevant skills.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: to empower businesses and individuals with knowledge, innovation, and security.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">🚀 Future-Ready Training Programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">🔒 End-to-End Cybersecurity Services</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">🤖 AI/ML & Data-Driven IT Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">🌍 Trusted by Businesses & Learners</span>
              </div>
            </div>

            <Button size="lg" variant="default" className="group" asChild>
              <Link to="/about">
                Know More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <div className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To bridge the gap between knowledge and industry, by delivering hands-on training and 
                    world-class IT security solutions that empower learners and businesses to thrive in the digital era.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become a trusted global leader in Cybersecurity and AI-driven IT solutions, 
                    creating a future-ready workforce and securing organizations worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Recognition</h3>
                  <p className="text-muted-foreground">
                    Recognized as an emerging IT training and cybersecurity startup. Trusted by our first batch 
                    of learners and corporate clients, building credibility through industry collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;