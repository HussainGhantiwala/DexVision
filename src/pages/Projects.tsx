import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FolderOpen, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Star,
  Filter,
  Search
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Customer Service Chatbot",
      description: "Developed an intelligent chatbot using natural language processing to handle customer inquiries for a major e-commerce platform.",
      category: "Artificial Intelligence",
      technologies: ["Python", "TensorFlow", "NLP", "React", "Node.js"],
      client: "TechRetail Corp",
      duration: "3 months",
      team: "4 members",
      status: "Completed",
      rating: 5,
      image: "/api/placeholder/400/250",
      features: [
        "Natural language understanding",
        "Multi-language support",
        "Integration with CRM systems",
        "Real-time analytics dashboard"
      ],
      results: "40% reduction in customer service response time, 85% user satisfaction rate"
    },
    {
      id: 2,
      title: "Cybersecurity Assessment Platform",
      description: "Built a comprehensive security assessment tool that performs vulnerability scans and generates detailed security reports for enterprises.",
      category: "Cybersecurity",
      technologies: ["Python", "Docker", "PostgreSQL", "Vue.js", "Redis"],
      client: "SecureEnterprises Inc",
      duration: "4 months",
      team: "6 members",
      status: "Completed",
      rating: 5,
      image: "/api/placeholder/400/250",
      features: [
        "Automated vulnerability scanning",
        "Risk assessment algorithms",
        "Compliance reporting",
        "Real-time threat detection"
      ],
      results: "Identified 200+ security vulnerabilities, improved security posture by 60%"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard for Healthcare",
      description: "Created an interactive dashboard for healthcare providers to visualize patient data, treatment outcomes, and operational metrics.",
      category: "Data Science",
      technologies: ["Python", "Tableau", "SQL", "AWS", "Apache Kafka"],
      client: "HealthCare Solutions",
      duration: "5 months",
      team: "5 members",
      status: "In Progress",
      rating: 4,
      image: "/api/placeholder/400/250",
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Patient outcome tracking",
        "Operational efficiency metrics"
      ],
      results: "20% improvement in patient care efficiency, faster decision-making process"
    },
    {
      id: 4,
      title: "Cloud Migration for Financial Services",
      description: "Migrated legacy banking systems to cloud infrastructure with enhanced security, scalability, and compliance measures.",
      category: "Cloud Computing",
      technologies: ["AWS", "Kubernetes", "Terraform", "Java", "MongoDB"],
      client: "Regional Bank",
      duration: "6 months",
      team: "8 members",
      status: "Completed",
      rating: 5,
      image: "/api/placeholder/400/250",
      features: [
        "Zero-downtime migration",
        "Auto-scaling infrastructure",
        "Enhanced security protocols",
        "Cost optimization"
      ],
      results: "50% reduction in infrastructure costs, 99.9% uptime achieved"
    },
    {
      id: 5,
      title: "E-Learning Platform Development",
      description: "Developed a comprehensive online learning platform with interactive courses, assessments, and progress tracking capabilities.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
      client: "EduTech Innovations",
      duration: "4 months",
      team: "7 members",
      status: "Completed",
      rating: 5,
      image: "/api/placeholder/400/250",
      features: [
        "Interactive video lectures",
        "Real-time collaboration tools",
        "Automated assessment system",
        "Progress analytics"
      ],
      results: "10,000+ active learners, 95% course completion rate"
    },
    {
      id: 6,
      title: "IoT Smart Building Management",
      description: "Implemented an IoT solution for smart building management including energy optimization, security, and maintenance automation.",
      category: "IoT Solutions",
      technologies: ["Python", "Arduino", "MQTT", "InfluxDB", "Grafana"],
      client: "Smart Properties Ltd",
      duration: "3 months",
      team: "5 members",
      status: "In Progress",
      rating: 4,
      image: "/api/placeholder/400/250",
      features: [
        "Energy monitoring and optimization",
        "Automated climate control",
        "Security system integration",
        "Predictive maintenance"
      ],
      results: "30% energy cost reduction, improved building security and comfort"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Cybersecurity", "Data Science", "Cloud Computing", "Web Development", "IoT Solutions"];
  const statusTypes = ["All", "Completed", "In Progress", "Planning"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Planning": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Artificial Intelligence": return "bg-purple-100 text-purple-800";
      case "Cybersecurity": return "bg-red-100 text-red-800";
      case "Data Science": return "bg-blue-100 text-blue-800";
      case "Cloud Computing": return "bg-green-100 text-green-800";
      case "Web Development": return "bg-orange-100 text-orange-800";
      case "IoT Solutions": return "bg-teal-100 text-teal-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <FolderOpen className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-accent">Projects</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our portfolio of successful technology implementations and innovative solutions 
              delivered for clients across various industries.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={index === 0 ? "" : "bg-background hover:bg-primary hover:text-primary-foreground"}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select className="px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                  {statusTypes.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-card rounded-xl shadow-card border border-border overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                  <div className="aspect-video bg-muted overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground line-clamp-2 flex-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 ml-2">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="xl" variant="outline" className="bg-background">
                Load More Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">Project Success Metrics</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our track record speaks for itself - delivering innovative solutions that drive real business results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Project Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you implement innovative technology solutions 
              that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary">
                Start a Project
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;