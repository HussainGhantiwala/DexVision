import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-tech-training.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-glow/30 rounded-full animate-ping"
             style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent-foreground mb-6">
              <span className="text-sm font-semibold">🚀 Future-Ready Training Programs</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Dexvion
              </span>
              <br />
              <span className="text-white">
                Empowering Technology,
              </span>
              <br />
              <span className="text-accent">
                Securing Tomorrow
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
              Training & IT Solutions in Cybersecurity, Data Science, AI/ML, and Enterprise Security Services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="xl" variant="hero" className="group" asChild>
                <Link to="/blog">
                  Start Learning Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary" asChild>
                <Link to="/services">
                  <Play className="mr-2" />
                  Explore IT Solutions
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-gray-300">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="bg-card/10 backdrop-blur-lg rounded-2xl p-8 shadow-glow border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">🔒</div>
                    <div className="text-sm text-gray-200 mt-2">Cybersecurity</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">🤖</div>
                    <div className="text-sm text-gray-200 mt-2">AI/ML</div>
                  </div>
                  <div className="bg-primary-glow/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">📊</div>
                    <div className="text-sm text-gray-200 mt-2">Data Science</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">💼</div>
                    <div className="text-sm text-gray-200 mt-2">IT Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;