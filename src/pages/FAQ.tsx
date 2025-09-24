import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Dexvion and what services do you offer?",
          answer: "Dexvion is a leading technology training and IT solutions company. We offer comprehensive training programs in AI/ML, Cybersecurity, Data Science, and IT Solutions, along with professional consulting and project development services."
        },
        {
          question: "How long have you been in the technology training industry?",
          answer: "We have been providing technology training and IT solutions for over 5 years, helping hundreds of students and professionals advance their careers in the tech industry."
        },
        {
          question: "Do you offer certification upon course completion?",
          answer: "Yes, we provide industry-recognized certificates upon successful completion of our courses. Our certificates are valued by employers and can significantly boost your career prospects."
        }
      ]
    },
    {
      category: "Courses & Training",
      questions: [
        {
          question: "What formats are available for your courses?",
          answer: "We offer multiple learning formats including online live sessions, self-paced learning, in-person workshops, and hybrid programs to accommodate different learning preferences and schedules."
        },
        {
          question: "Are there any prerequisites for your courses?",
          answer: "Prerequisites vary by course. Basic courses require minimal background knowledge, while advanced courses may require specific technical skills. Each course page lists detailed prerequisites."
        },
        {
          question: "How experienced are your instructors?",
          answer: "Our instructors are industry experts with 5-15 years of real-world experience. They hold advanced certifications and work with leading technology companies."
        },
        {
          question: "Do you provide job placement assistance?",
          answer: "Yes, we offer comprehensive career support including resume review, interview preparation, job placement assistance, and access to our network of hiring partners."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What technical requirements do I need for online courses?",
          answer: "You'll need a stable internet connection, a computer with updated browser, webcam, and microphone. Specific software requirements are provided before course start."
        },
        {
          question: "How do I access course materials?",
          answer: "Once enrolled, you'll receive login credentials to our learning management system where all materials, recordings, and assignments are available 24/7."
        },
        {
          question: "Can I download course materials for offline access?",
          answer: "Selected materials can be downloaded for offline access. However, live sessions and interactive content require internet connectivity."
        }
      ]
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, bank transfers, PayPal, and offer installment plans for certain courses. Corporate training can be invoiced."
        },
        {
          question: "Do you offer any discounts or scholarships?",
          answer: "Yes, we offer early bird discounts, student discounts, group discounts, and need-based scholarships. Contact us for more information about available programs."
        },
        {
          question: "What is your refund policy?",
          answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course. Refund policies vary for different course types and are clearly stated during enrollment."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Chat Now"
    },
    {
      icon: <Phone className="w-8 h-8 text-accent" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Support",
      description: "Send us detailed questions via email",
      action: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <HelpCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers to common questions about our courses, services, and policies. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </section>

        <div className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* FAQ Section */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {faqs.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                          {categoryIndex + 1}
                        </span>
                        {category.category}
                      </h2>
                      
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`${categoryIndex}-${index}`}
                            className="border border-border rounded-lg px-6"
                          >
                            <AccordionTrigger className="text-left hover:no-underline">
                              <span className="font-semibold text-foreground">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pt-2 pb-4">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Contact Form */}
                <div className="bg-card p-6 rounded-xl shadow-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Have a Question?</h3>
                  <p className="text-muted-foreground mb-6">
                    Can't find what you're looking for? Send us a message and we'll get back to you.
                  </p>
                  
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Textarea placeholder="Your Question" rows={4} />
                    <Button className="w-full">Send Question</Button>
                  </form>
                </div>

                {/* Support Options */}
                <div className="bg-card p-6 rounded-xl shadow-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6">Need Immediate Help?</h3>
                  
                  <div className="space-y-4">
                    {supportOptions.map((option, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="shrink-0">{option.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{option.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                          <Button variant="outline" size="sm">
                            {option.action}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-card p-6 rounded-xl shadow-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Quick Links</h3>
                  
                  <div className="space-y-3">
                    <a href="/courses" className="block text-primary hover:text-primary/80 transition-colors">
                      Browse All Courses
                    </a>
                    <a href="/pricing" className="block text-primary hover:text-primary/80 transition-colors">
                      View Pricing Plans
                    </a>
                    <a href="/contact" className="block text-primary hover:text-primary/80 transition-colors">
                      Contact Support
                    </a>
                    <a href="/about" className="block text-primary hover:text-primary/80 transition-colors">
                      About Dexvion
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-24 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you find the right solution for your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary">
                Contact Support
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;