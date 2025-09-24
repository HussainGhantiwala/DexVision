import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Award, 
  BookOpen, 
  Code,
  Shield,
  Database,
  Brain
} from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      specialty: "AI & Machine Learning",
      experience: "15+ Years",
      image: "/api/placeholder/300/300",
      bio: "Former AI researcher at Google, leading Dexvion's vision for democratizing tech education.",
      certifications: ["PhD Computer Science", "Google AI Certified", "AWS ML Specialty"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@dexvion.com"
      }
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      specialty: "Cybersecurity & Infrastructure",
      experience: "12+ Years",
      image: "/api/placeholder/300/300",
      bio: "Former security architect at Microsoft, expert in enterprise security solutions.",
      certifications: ["CISSP", "CEH", "AWS Security Specialty"],
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@dexvion.com"
      }
    }
  ];

  const instructors = [
    {
      name: "Alex Rodriguez",
      role: "Senior AI/ML Instructor",
      specialty: "Machine Learning & Deep Learning",
      experience: "10+ Years",
      image: "/api/placeholder/300/300",
      bio: "Former ML engineer at Tesla, specializing in computer vision and neural networks.",
      students: "500+",
      rating: 4.9,
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: "Emily Davis",
      role: "Cybersecurity Expert",
      specialty: "Ethical Hacking & Security",
      experience: "8+ Years",
      image: "/api/placeholder/300/300",
      bio: "Penetration testing expert with experience securing Fortune 500 companies.",
      students: "350+",
      rating: 4.8,
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "David Kumar",
      role: "Data Science Lead",
      specialty: "Data Analytics & Visualization",
      experience: "9+ Years",
      image: "/api/placeholder/300/300",
      bio: "Data scientist with expertise in big data analytics and business intelligence.",
      students: "400+",
      rating: 4.9,
      icon: <Database className="w-6 h-6" />
    },
    {
      name: "Lisa Thompson",
      role: "Full-Stack Developer",
      specialty: "Web & Mobile Development",
      experience: "7+ Years",
      image: "/api/placeholder/300/300",
      bio: "Full-stack developer specializing in modern web technologies and mobile apps.",
      students: "300+",
      rating: 4.7,
      icon: <Code className="w-6 h-6" />
    }
  ];

  const stats = [
    { value: "15+", label: "Expert Instructors" },
    { value: "500+", label: "Students Trained" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <Users className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Meet Our <span className="text-accent">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Learn from industry veterans and certified professionals who bring real-world 
              experience to every training session and project.
            </p>
          </div>
        </section>

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

        {/* Leadership Team */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our leaders bring decades of experience from top tech companies and research institutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                        <p className="text-accent font-medium">{leader.role}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Specialty:</span>
                        <p className="font-medium text-foreground">{leader.specialty}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Experience:</span>
                        <p className="font-medium text-foreground">{leader.experience}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{leader.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.certifications.map((cert, certIndex) => (
                          <span key={certIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      {leader.social.linkedin && (
                        <Button variant="outline" size="sm" className="p-2">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {leader.social.twitter && (
                        <Button variant="outline" size="sm" className="p-2">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      {leader.social.github && (
                        <Button variant="outline" size="sm" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="p-2">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors Team */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Instructors</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from certified professionals who are actively working in the industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {instructors.map((instructor, index) => (
                <div key={index} className="bg-card rounded-xl shadow-card border border-border overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                  <div className="aspect-square bg-muted overflow-hidden relative">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center">
                      {instructor.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{instructor.name}</h3>
                    <p className="text-accent font-medium mb-3">{instructor.role}</p>
                    
                    <p className="text-sm text-muted-foreground mb-4">{instructor.bio}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Students:</span>
                        <p className="font-medium text-foreground">{instructor.students}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Rating:</span>
                        <p className="font-medium text-foreground flex items-center gap-1">
                          ⭐ {instructor.rating}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Courses
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Are you passionate about technology education? We're always looking for 
              talented professionals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary">
                View Open Positions
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary">
                Submit Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;