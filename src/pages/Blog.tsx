import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI and Machine Learning in Business",
      excerpt: "Discover how AI is transforming industries and creating new opportunities for innovation and growth.",
      author: "Dexvion Team",
      date: "November 15, 2024",
      category: "Artificial Intelligence",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Organizations",
      excerpt: "Essential security measures every organization should implement to protect against evolving cyber threats.",
      author: "Security Expert",
      date: "November 12, 2024",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Data Science Trends to Watch in 2025",
      excerpt: "Emerging trends in data science that will shape the future of data-driven decision making.",
      author: "Data Analyst",
      date: "November 10, 2024",
      category: "Data Science",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cloud Computing Solutions for Small Businesses",
      excerpt: "How small businesses can leverage cloud technology to scale efficiently and reduce costs.",
      author: "Cloud Specialist",
      date: "November 8, 2024",
      category: "Cloud Computing",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Building a Career in Tech: A Complete Guide",
      excerpt: "Comprehensive roadmap for aspiring tech professionals to build successful careers in the industry.",
      author: "Career Counselor",
      date: "November 5, 2024",
      category: "Career Development",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Digital Transformation Strategies for Enterprises",
      excerpt: "Key strategies for successful digital transformation and organizational change management.",
      author: "Business Analyst",
      date: "November 3, 2024",
      category: "Digital Strategy",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Cybersecurity", "Data Science", "Cloud Computing", "Career Development"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Tech <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in technology, 
              cybersecurity, and digital transformation.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "" : "bg-background hover:bg-primary hover:text-primary-foreground"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-card rounded-xl shadow-card border border-border overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="p-2">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="xl" variant="outline" className="bg-background">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Stay Updated with Tech Trends
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights, tutorials, and industry news delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;