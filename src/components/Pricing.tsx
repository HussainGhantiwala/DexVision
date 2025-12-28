import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Pricing = () => {
  const headerAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const infoAnimation = useScrollAnimation();

  const plans = [
    {
      name: "Foundation Track",
      price: "₹25,999",
      period: "/2 courses",
      description: "Perfect for beginners starting their cybersecurity journey",
      features: [
        "CS-101 & CS-102 courses",
        "Networking & Security Fundamentals", 
        "Hands-on Labs Access",
        "Community Forum Access",
        "Email Support",
        "Course Completion Certificate",
        "3 months access"
      ],
      popular: false,
      color: "primary"
    },
    {
      name: "Professional Track",
      price: "₹79,999",
      period: "/4 courses",
      description: "Most popular - CEH & Ethical Hacking focused",
      features: [
        "All Foundation Track content",
        "CS-201: Ethical Hacking Essentials",
        "CS-202: DFIR Training",
        "CEH v13 AI Exam Preparation",
        "1-on-1 Mentor Sessions",
        "Priority Support",
        "6 months access",
        "Job Placement Assistance"
      ],
      popular: true,
      color: "accent"
    },
    {
      name: "Expert Track",
      price: "₹1,49,999",
      period: "/complete",
      description: "Complete 4-level certification with internship",
      features: [
        "All 8 courses included",
        "OSCP Preparation Support",
        "CS-401 Capstone & Internship",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "12 months access",
        "Guaranteed Internship",
        "100% Placement Assistance"
      ],
      popular: false,
      color: "primary"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Pricing Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cybersecurity Training <br />
            <span className="text-primary">Investment Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect track to accelerate your cybersecurity career. All plans include industry certifications preparation and expert instruction.
          </p>
        </div>

        {/* Pricing Cards */}
        <div 
          ref={cardsAnimation.ref}
          className={`grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-700 delay-200 ${
            cardsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card-gradient rounded-2xl p-8 shadow-card border transition-all duration-500 hover:shadow-primary hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary scale-105 lg:scale-110' 
                  : 'border-border'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.popular ? 'bg-accent' : 'bg-primary'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-accent hover:bg-accent/90' 
                    : ''
                }`}
                size="lg"
                variant={plan.popular ? "accent" : "default"}
                asChild
              >
                <Link to="/contact">
                  {plan.name === "Expert Track" ? "Contact for Enrollment" : "Enroll Now"}
                </Link>
              </Button>

              {/* Additional Info */}
              {plan.popular && (
                <div className="mt-4 text-center">
                  <span className="text-sm text-muted-foreground">
                    🎉 Includes CEH v13 AI Exam Prep
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div 
          ref={infoAnimation.ref}
          className={`mt-16 text-center transition-all duration-700 delay-300 ${
            infoAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Industry Certifications</h4>
              <p className="text-sm text-muted-foreground">CEH, OSCP & CompTIA prep included</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Hands-On Labs</h4>
              <p className="text-sm text-muted-foreground">Real-world CTF challenges & scenarios</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Job Placement</h4>
              <p className="text-sm text-muted-foreground">100% placement assistance provided</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom corporate training solution?
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us for Corporate Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;