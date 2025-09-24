import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Training",
      price: "₹15,999",
      period: "/course",
      description: "Perfect for individuals starting their tech journey",
      features: [
        "Access to 1 course of choice",
        "Basic project assignments", 
        "Community forum access",
        "Email support",
        "Course completion certificate",
        "3 months access"
      ],
      popular: false,
      color: "primary"
    },
    {
      name: "Professional Package",
      price: "₹39,999",
      period: "/3 courses",
      description: "Most popular choice for career advancement",
      features: [
        "Access to any 3 courses",
        "Advanced hands-on projects",
        "1-on-1 mentor sessions",
        "Priority support",
        "Industry certifications",
        "6 months access",
        "Job placement assistance",
        "Portfolio review"
      ],
      popular: true,
      color: "accent"
    },
    {
      name: "Enterprise Solution",
      price: "₹99,999",
      period: "/team",
      description: "Comprehensive training for teams and organizations",
      features: [
        "Access to all courses",
        "Custom training modules",
        "Dedicated account manager",
        "24/7 priority support",
        "Team progress tracking",
        "12 months access",
        "On-site training options",
        "Security consulting included"
      ],
      popular: false,
      color: "primary"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Pricing Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Affordable Pricing Plans <br />
            <span className="text-primary">For IT Training</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your career in technology. All plans include industry-aligned curriculum and expert instruction.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card-gradient rounded-2xl p-8 shadow-card border transition-all duration-500 hover:shadow-primary hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary scale-105 lg:scale-110' 
                  : 'border-border'
              }`}
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
                  {plan.name === "Enterprise Solution" ? "Contact Sales" : "Select This Plan"}
                </Link>
              </Button>

              {/* Additional Info */}
              {plan.popular && (
                <div className="mt-4 text-center">
                  <span className="text-sm text-muted-foreground">
                    🎉 Save 30% with this package
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Money Back Guarantee</h4>
              <p className="text-sm text-muted-foreground">30-day full refund if not satisfied</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Lifetime Access</h4>
              <p className="text-sm text-muted-foreground">Access course materials anytime, anywhere</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Industry Certification</h4>
              <p className="text-sm text-muted-foreground">Recognized certificates upon completion</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom training solution for your organization?
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us for Custom Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;