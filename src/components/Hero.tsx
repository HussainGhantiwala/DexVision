import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-tech-training.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-glow/30 rounded-full animate-ping"
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-pulse"
             style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent-foreground mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Cybersecurity Training Academy</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Dexvion
              </span>
              <br />
              <span className="text-white">
                Cybersecurity
              </span>
              <br />
              <span className="text-accent">
                Training Academy
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
              Transform your career with our comprehensive 4-level cybersecurity certification program. 
              From foundation to expert level - get CEH, OSCP ready with hands-on labs and industry mentorship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="xl" variant="hero" className="group" asChild>
                <a href="#courses">
                  Explore Courses
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary" asChild>
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-accent">4 Levels</div>
                <div className="text-sm text-gray-300">Certification Path</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-glow">CEH/OSCP</div>
                <div className="text-sm text-gray-300">Exam Preparation</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-300">Placement Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Certification Roadmap */}
          <div className="relative hidden lg:block animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <div className="bg-card/10 backdrop-blur-lg rounded-2xl p-8 shadow-glow border border-white/20">
                <h3 className="text-white text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Certification Roadmap
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-500/20 rounded-lg p-4 flex items-center gap-4 hover:bg-green-500/30 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">1</div>
                    <div>
                      <div className="text-white font-semibold">Foundation</div>
                      <div className="text-sm text-gray-300">CS-101, CS-102 • Security Basics</div>
                    </div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-4 flex items-center gap-4 hover:bg-blue-500/30 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">2</div>
                    <div>
                      <div className="text-white font-semibold">Core</div>
                      <div className="text-sm text-gray-300">CS-201, CS-202 • Ethical Hacking & DFIR</div>
                    </div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-4 flex items-center gap-4 hover:bg-purple-500/30 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">3</div>
                    <div>
                      <div className="text-white font-semibold">Specialization</div>
                      <div className="text-sm text-gray-300">CS-301, CS-311, CS-321 • Advanced</div>
                    </div>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-4 flex items-center gap-4 hover:bg-red-500/30 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">4</div>
                    <div>
                      <div className="text-white font-semibold">Expert</div>
                      <div className="text-sm text-gray-300">CS-401 Capstone • Industry Ready</div>
                    </div>
                  </div>
                </div>

                {/* Certification Badges */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-center gap-4">
                    <div className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary-glow font-medium">CEH v13 AI</div>
                    <div className="px-3 py-1 bg-accent/20 rounded-full text-xs text-accent font-medium">OSCP</div>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-white font-medium">CompTIA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;