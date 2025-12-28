import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight, Shield, Award, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import cybersecurityIcon from '@/assets/cybersecurity-icon.jpg';
import datascienceIcon from '@/assets/datascience-icon.jpg';
import aimlIcon from '@/assets/aiml-icon.jpg';

const Courses = () => {
  const headerAnimation = useScrollAnimation();
  const roadmapAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const courses = [
    {
      id: 1,
      title: "CS-101: Introduction to Cyber Security",
      description: "Foundation course introducing core concepts of cybersecurity, threats, and defense mechanisms.",
      image: cybersecurityIcon,
      duration: "4 weeks",
      students: "200+",
      rating: 4.9,
      level: "LEVEL 1 - Foundation",
      levelColor: "bg-green-500",
      price: "₹15,000",
      originalPrice: "₹20,000",
      features: [
        "Cyber Threat Landscape",
        "Security Principles & Best Practices",
        "Risk Assessment Basics",
        "Cyber Hygiene & Awareness",
        "Industry Certifications Prep"
      ]
    },
    {
      id: 2,
      title: "CS-102: Networking Essentials",
      description: "Master networking fundamentals essential for cybersecurity professionals.",
      image: datascienceIcon,
      duration: "4 weeks",
      students: "180+",
      rating: 4.8,
      level: "LEVEL 1 - Foundation",
      levelColor: "bg-green-500",
      price: "₹15,000",
      originalPrice: "₹20,000",
      features: [
        "TCP/IP Protocol Suite",
        "Network Devices & Topology",
        "OSI Model Deep Dive",
        "Network Troubleshooting",
        "Hands-on Labs"
      ]
    },
    {
      id: 3,
      title: "CS-201: Ethical Hacking Essentials",
      description: "Learn ethical hacking techniques and penetration testing methodologies.",
      image: cybersecurityIcon,
      duration: "6 weeks",
      students: "300+",
      rating: 4.9,
      level: "LEVEL 2 - Core",
      levelColor: "bg-blue-500",
      price: "₹25,000",
      originalPrice: "₹32,000",
      features: [
        "Reconnaissance & Scanning",
        "Vulnerability Assessment",
        "Exploitation Techniques",
        "Post-Exploitation",
        "Real-world Scenarios"
      ]
    },
    {
      id: 4,
      title: "CS-202: Digital Forensics & Incident Response",
      description: "Investigate cyber incidents and perform digital forensics analysis.",
      image: datascienceIcon,
      duration: "6 weeks",
      students: "250+",
      rating: 4.8,
      level: "LEVEL 2 - Core",
      levelColor: "bg-blue-500",
      price: "₹25,000",
      originalPrice: "₹32,000",
      features: [
        "Evidence Collection",
        "Forensic Tools & Techniques",
        "Incident Response Process",
        "Chain of Custody",
        "Malware Analysis Basics"
      ]
    },
    {
      id: 5,
      title: "CS-301: Advanced Penetration Testing",
      description: "Advanced penetration testing techniques for complex infrastructure and red team operations.",
      image: cybersecurityIcon,
      duration: "8 weeks",
      students: "150+",
      rating: 5.0,
      level: "LEVEL 3 - Specialization",
      levelColor: "bg-purple-500",
      price: "₹35,000",
      originalPrice: "₹45,000",
      features: [
        "Advanced Exploitation",
        "Red Team Operations",
        "Custom Tool Development",
        "Wireless & IoT Security",
        "Cloud Penetration Testing"
      ]
    },
    {
      id: 6,
      title: "CS-311: SIEM & SOC Operations",
      description: "Master Security Operations Center operations and SIEM tools for blue team analysis.",
      image: aimlIcon,
      duration: "8 weeks",
      students: "180+",
      rating: 4.8,
      level: "LEVEL 3 - Specialization",
      levelColor: "bg-purple-500",
      price: "₹35,000",
      originalPrice: "₹45,000",
      features: [
        "SIEM Configuration & Management",
        "Log Analysis Techniques",
        "Threat Hunting & Intelligence",
        "Endpoint & Malware Defense",
        "Incident Management"
      ]
    },
    {
      id: 7,
      title: "CS-321: Cloud Security Architecture",
      description: "Secure cloud infrastructure across AWS, Azure, and Google Cloud platforms.",
      image: datascienceIcon,
      duration: "8 weeks",
      students: "200+",
      rating: 4.9,
      level: "LEVEL 3 - Specialization",
      levelColor: "bg-purple-500",
      price: "₹35,000",
      originalPrice: "₹45,000",
      features: [
        "Cloud Security Controls",
        "IAM & Access Management",
        "Secure DevOps (DevSecOps)",
        "Compliance & Governance",
        "Multi-cloud Security"
      ]
    },
    {
      id: 8,
      title: "CS-401: Capstone Project / Internship",
      description: "Industry-ready project work and internship opportunities with real-world experience.",
      image: cybersecurityIcon,
      duration: "12 weeks",
      students: "100+",
      rating: 5.0,
      level: "LEVEL 4 - Expert",
      levelColor: "bg-red-500",
      price: "₹45,000",
      originalPrice: "₹60,000",
      features: [
        "Real-world Projects",
        "Industry Mentorship",
        "Portfolio Development",
        "Interview Preparation",
        "Job Placement Support"
      ]
    }
  ];

  const certifications = [
    { name: "CEH v13 AI", icon: Shield },
    { name: "OSCP", icon: Target },
    { name: "CompTIA Security+", icon: Award },
    { name: "CISSP", icon: Shield },
  ];

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Cybersecurity Certification Roadmap
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Foundation to <span className="text-primary">Cybersecurity Expert</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete 4-level certification path designed to transform you into an industry-ready cybersecurity professional 
            with hands-on training, real-world labs, and CEH/OSCP preparation.
          </p>
        </div>

        {/* Level Roadmap */}
        <div 
          ref={roadmapAnimation.ref}
          className={`mb-12 transition-all duration-700 delay-200 ${
            roadmapAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block" />
              Level 1: Foundation
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 inline-block" />
              Level 2: Core
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 inline-block" />
              Level 3: Specialization
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 inline-block" />
              Level 4: Expert
            </Badge>
          </div>

          {/* Certification Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border shadow-sm"
              >
                <cert.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div 
          ref={gridAnimation.ref}
          className={`grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-300 ${
            gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="group bg-card-gradient rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-primary transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
              style={{ 
                transitionDelay: gridAnimation.isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className={`${course.levelColor} text-white border-0`}>
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1.5 mb-4">
                  {course.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-bold text-foreground">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <Badge variant="destructive" className="bg-red-100 text-red-700 text-xs">
                    Save ₹{parseInt(course.originalPrice.slice(1).replace(',', '')) - parseInt(course.price.slice(1).replace(',', ''))}
                  </Badge>
                </div>

                {/* CTA */}
                <Button className="w-full group/btn" size="default" asChild>
                  <Link to="/contact">
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaAnimation.ref}
          className={`bg-hero-gradient rounded-3xl p-12 text-center text-white transition-all duration-700 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Cybersecurity Career?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our comprehensive certification program. Get CEH/OSCP ready with hands-on labs and industry mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/contact">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;