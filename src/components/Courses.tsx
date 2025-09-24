import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import cybersecurityIcon from '@/assets/cybersecurity-icon.jpg';
import aimlIcon from '@/assets/aiml-icon.jpg';
import datascienceIcon from '@/assets/datascience-icon.jpg';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete Cybersecurity Bootcamp",
      description: "Master ethical hacking, network security, and incident response with hands-on labs and real-world scenarios.",
      image: cybersecurityIcon,
      duration: "12 weeks",
      students: "150+",
      rating: 4.9,
      level: "Intermediate",
      price: "₹49,999",
      originalPrice: "₹69,999",
      features: [
        "Ethical Hacking Techniques",
        "Network Security Fundamentals", 
        "Malware Analysis",
        "SOC Operations",
        "Industry Certifications"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer Program",
      description: "Learn Python, machine learning algorithms, deep learning, and deploy AI solutions in production environments.",
      image: aimlIcon,
      duration: "16 weeks",
      students: "200+",
      rating: 4.8,
      level: "Advanced",
      price: "₹59,999",
      originalPrice: "₹79,999",
      features: [
        "Python Programming",
        "Machine Learning Algorithms",
        "Deep Learning with TensorFlow",
        "MLOps & Deployment",
        "Capstone Projects"
      ]
    },
    {
      id: 3,
      title: "Data Science Mastery",
      description: "Comprehensive data science training covering statistics, Python, SQL, visualization, and predictive modeling.",
      image: datascienceIcon,
      duration: "14 weeks",
      students: "180+",
      rating: 4.7,
      level: "Beginner to Advanced",
      price: "₹45,999",
      originalPrice: "₹65,999",
      features: [
        "Statistics & Mathematics",
        "Data Analysis with Python",
        "SQL & Database Management",
        "Data Visualization",
        "Predictive Modeling"
      ]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Featured Courses
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Certified. <span className="text-primary">Get Ahead.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take the next step in your career with Dexvion's training programs in Cybersecurity, AI, ML, and Data Science. 
            Our industry-aligned courses prepare you for certifications and real-world projects.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="group bg-card-gradient rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-primary transition-all duration-500 hover:-translate-y-2"
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
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
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
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
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
                <div className="space-y-2 mb-6">
                  {course.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-foreground">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <Badge variant="destructive" className="bg-red-100 text-red-700">
                    Save ₹{parseInt(course.originalPrice.slice(1).replace(',', '')) - parseInt(course.price.slice(1).replace(',', ''))}
                  </Badge>
                </div>

                {/* CTA */}
                <Button className="w-full group/btn" size="lg" asChild>
                  <Link to="/contact">
                    Enroll Now
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-hero-gradient rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with our industry-leading training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild>
              <Link to="/blog">View All Courses</Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;