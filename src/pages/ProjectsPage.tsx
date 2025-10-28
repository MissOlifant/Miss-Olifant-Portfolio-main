import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  role: string;
  techStack: string[];
  details: string;
  category: string;
}

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "TestMind Project",
      description: "AI app analyzing mental patterns using NLP",
      role: "AI Developer & UX Designer",
      techStack: ["Python", "Streamlit", "Hugging Face", "NLP", "ML"],
      details: "Advanced AI application that analyzes mental patterns and provides insights using state-of-the-art natural language processing. Features real-time analysis, sentiment detection, and personalized feedback mechanisms.",
      category: "AI & ML",
    },
    {
      title: "Healthcare AI System",
      description: "AI tool for disease prediction and medication suggestions",
      role: "Full Stack Developer & AI Engineer",
      techStack: ["Python", "Machine Learning", "SQLite", "NLP", "Flask"],
      details: "Intelligent healthcare system that predicts diseases based on symptoms and suggests appropriate medication. Implements advanced ML algorithms for accurate diagnosis and maintains secure patient records with data encryption.",
      category: "Healthcare",
    },
    {
      title: "Gaulofusion Website",
      description: "Digital platform connecting food businesses with customers",
      role: "Full Stack Developer",
      techStack: ["HTML", "CSS", "JavaScript", "Payment API", "Chatbot"],
      details: "Comprehensive web platform connecting local food vendors with customers. Features integrated payment processing, event management, AI chatbot support, and real-time order tracking for enhanced user experience.",
      category: "Web Development",
    },
    {
      title: "AI Resume Builder",
      description: "Smart resume generator with AI feedback",
      role: "Frontend Developer & AI Integration",
      techStack: ["Streamlit", "OpenAI API", "Python", "PDF Generation"],
      details: "Intelligent resume building application that generates ATS-optimized resumes with AI-powered content suggestions. Includes real-time feedback, multiple export formats, and industry-specific templates.",
      category: "AI & ML",
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Multi-class sentiment visualization with NLP",
      role: "Data Analyst & BI Developer",
      techStack: ["Power BI", "Python", "NLP APIs", "Data Viz"],
      details: "Interactive Power BI dashboard providing comprehensive sentiment analysis across multiple classes. Leverages advanced NLP APIs for accurate emotion detection and trend visualization with actionable insights.",
      category: "Data Science",
    },
    {
      title: "Bias Audit Report",
      description: "ML fairness analysis and bias mitigation",
      role: "Data Scientist & ML Engineer",
      techStack: ["Python", "IBM AIF360", "Pandas", "Fairness Metrics"],
      details: "Comprehensive fairness analysis system implementing industry-standard metrics for bias detection in machine learning models. Uses IBM AI Fairness 360 toolkit for systematic bias mitigation and model improvement.",
      category: "AI Ethics",
    },
    {
      title: "Online Store Project",
      description: "E-commerce prototype with modern design",
      role: "Frontend Developer",
      techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      details: "Modern e-commerce website prototype featuring intuitive navigation, product showcases, shopping cart functionality, and responsive design optimized for all devices.",
      category: "Web Development",
    },
    {
      title: "Salon Website",
      description: "Clean modern salon design concept",
      role: "Web Designer & Developer",
      techStack: ["HTML", "CSS", "JavaScript", "UX Design"],
      details: "Elegant salon website featuring appointment booking, service showcases, gallery displays, and client testimonials with a focus on user experience and visual appeal.",
      category: "Web Development",
    },
    {
      title: "Finance Data Science Project",
      description: "AI-driven financial analysis platform",
      role: "Data Scientist & Analyst",
      techStack: ["Python", "Power BI", "ML", "Financial APIs"],
      details: "AI-powered financial analysis platform providing portfolio optimization, risk assessment, and investment insights using machine learning algorithms and real-time market data.",
      category: "Data Science",
    },
  ];

  return (
    <div className="min-h-screen py-20 md:py-32 relative">
      
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my portfolio of innovative solutions spanning AI, healthcare, web development, and data science
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glassmorphism group cursor-pointer hover:scale-105 hover:border-primary/50 transition-all duration-300 animate-fade-in-up rounded-2xl overflow-hidden border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-xl border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-3xl gradient-text mb-2">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              {selectedProject?.role}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div className="glassmorphism p-6 rounded-xl border border-border/50">
              <p className="text-foreground/90 leading-relaxed text-lg">{selectedProject?.details}</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-foreground">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.techStack.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors px-4 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;
