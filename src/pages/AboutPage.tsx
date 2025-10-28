import { useEffect, useState } from "react";
import { Code2, Shield, Sparkles, Heart, Coffee, Zap } from "lucide-react";
import profileImg from "@/Nombulelo.jpg";

const AboutPage = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const funFacts = [
    { icon: <Sparkles className="w-6 h-6" />, text: "AI Enthusiast " },
    { icon: <Code2 className="w-6 h-6" />, text: "Loves Clean Code " },
    { icon: <Heart className="w-6 h-6" />, text: "Creative Problem-Solver " },
    { icon: <Coffee className="w-6 h-6" />, text: "Coffee-Powered Coder " },
    { icon: <Zap className="w-6 h-6" />, text: "Fast Learner " },
    { icon: <Shield className="w-6 h-6" />, text: "Security-First Mindset " },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "AI & Development",
      description: "Building intelligent systems with machine learning and modern web technologies",
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Cybersecurity",
      description: "Protecting digital assets with security-first design principles",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Innovation",
      description: "Creating user-centered solutions that make a real-world impact",
    },
  ];

  const testimonials = [
    {
      text: "Nombulelo is an innovative thinker who blends technical and creative skills effortlessly.",
      author: "Project Mentor",
      role: "Senior Developer",
    },
    {
      text: "Her dedication to learning and applying new technologies is truly impressive.",
      author: "Team Lead",
      role: "AI Research",
    },
    {
      text: "A natural problem-solver with a passion for creating meaningful digital solutions.",
      author: "Sukoluhle Ndlocvu: Colleague",
      role: "Cybersecurity Intern",
    },
  ];

  return (
    <div className="min-h-screen py-20 md:py-32 relative">
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Avatar */}
            <div className="flex justify-center animate-fade-in-up">
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-glow-pulse">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <img src={profileImg} alt="Nombulelo Olifant" className="w-full h-full object-cover object-[center_35%]" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift bg-[length:200%_200%]"></div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="glassmorphism p-8 rounded-2xl border border-border/50">
                <h2 className="text-2xl font-semibold mb-4 gradient-text">Who I Am</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Holding Diploma in Information Technology and studying Advanced Diploma in Information Technology at Vaal University of Technology. I'm an IT graduate driven by innovation and impact. My expertise spans{" "}
                  <span className="text-primary font-semibold">AI</span>,{" "}
                  <span className="text-secondary font-semibold">Cybersecurity</span>,{" "}
                  <span className="text-accent font-semibold">Data Science</span>, and{" "}
                  <span className="text-primary font-semibold">Web Development</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I enjoy creating intelligent systems that improve lives and digital experiences,
                  combining technical expertise with a passion for solving real-world problems.
                </p>
              </div>

              {/* Rotating Fun Facts */}
              <div className="glassmorphism p-6 rounded-2xl border border-primary/30 glow-primary">
                <div className="flex items-center gap-4 justify-center text-primary">
                  <div className="animate-scale-in" key={currentFact}>
                    {funFacts[currentFact].icon}
                  </div>
                  <p className="text-xl font-medium animate-fade-in" key={`text-${currentFact}`}>
                    {funFacts[currentFact].text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glassmorphism p-8 rounded-2xl border border-border/50 hover:scale-105 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-muted/30">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Others <span className="gradient-text">Say</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glassmorphism p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
