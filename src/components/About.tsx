import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Eye, Award, ArrowRight, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const contentAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            ref={contentAnimation.ref}
            className={`transition-all duration-700 ${
              contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Who We Are
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Premier Cybersecurity
              <span className="text-primary"> Training Academy</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dexvion Academy specializes in cybersecurity education, transforming aspiring professionals 
              into industry-ready experts. Our comprehensive 4-level certification roadmap takes you from 
              foundation to expert level with hands-on training.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With CEH, OSCP, and CompTIA certification preparation, practical labs, and real-world scenarios, 
              we ensure our graduates are equipped with the skills demanded by today's cybersecurity landscape.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">🎓 4-Level Cybersecurity Certification Roadmap</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">🔒 CEH v13 AI & OSCP Preparation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">💼 Industry Internships & Job Placement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">🛠️ Hands-On Labs & CTF Challenges</span>
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
          <div 
            ref={cardsAnimation.ref}
            className={`space-y-6 transition-all duration-700 delay-200 ${
              cardsAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower individuals with comprehensive cybersecurity education, 
                    creating industry-ready professionals through expert training and hands-on experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the leading cybersecurity training academy in India, 
                    producing skilled professionals who protect the digital world.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Expertise</h3>
                  <p className="text-muted-foreground">
                    Specialized in ethical hacking, penetration testing, SOC operations, DFIR, and cloud security. 
                    Training the next generation of cybersecurity experts.
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