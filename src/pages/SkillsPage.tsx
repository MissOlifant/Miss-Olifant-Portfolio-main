import { Code2, Database, Shield, Palette, Brain, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SkillsPage = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming & Web",
      color: "text-primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      color: "text-secondary",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "NLP", level: 85 },
        { name: "Computer Vision", level: 75 },
        { name: "Model Training", level: 82 },
        { name: "AI Ethics", level: 88 },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      color: "text-accent",
      skills: [
        { name: "Network Security", level: 85 },
        { name: "CCNA", level: 90 },
        { name: "Risk Assessment", level: 80 },
        { name: "Security Audits", level: 78 },
        { name: "ISC2", level: 82 },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Analytics",
      color: "text-primary",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Data Visualization", level: 88 },
        { name: "SQL Databases", level: 85 },
        { name: "Data Science", level: 83 },
        { name: "Analytics", level: 87 },
      ],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & UX",
      color: "text-secondary",
      skills: [
        { name: "UX/UI Design", level: 85 },
        { name: "Responsive Design", level: 92 },
        { name: "Wireframing", level: 80 },
        { name: "User Research", level: 78 },
        { name: "Figma", level: 82 },
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Soft Skills",
      color: "text-accent",
      skills: [
        { name: "Leadership", level: 88 },
        { name: "Problem Solving", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Communication", level: 87 },
        { name: "Research", level: 92 },
      ],
    },
  ];

  const certifications = [
    { name: "CCNA Certification", issuer: "Cisco", year: "2024" },
    { name: "IBM AI Ethics Badge", issuer: "IBM", year: "2024" },
    { name: "AI & Machine Learning", issuer: "Capaciti", year: "2024" },
    { name: "ISC2 Certification Prep", issuer: "ISC2", year: "2024" },
    { name: "Desktop Support Skills", issuer: "CompTIA", year: "2023" },
  ];

  const tools = [
    { name: "GitHub", category: "Version Control" },
    { name: "VS Code", category: "IDE" },
    { name: "Figma", category: "Design" },
    { name: "Canva", category: "Graphics" },
    { name: "Jupyter", category: "Data Science" },
    { name: "Streamlit", category: "App Dev" },
  ];

  return (
    <div className="min-h-screen py-20 md:py-32 relative">
      
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building innovative digital solutions
            </p>
          </div>

          {/* Skills Grid with Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glassmorphism p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-full bg-muted/30 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12">
              <Award className="inline-block w-8 h-8 mr-2 text-primary" />
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glassmorphism p-6 rounded-2xl border border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <div className="mt-4 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Certificate →
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="glassmorphism p-8 rounded-2xl border border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 hover:scale-110 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-primary-foreground group-hover:rotate-12 transition-transform">
                      {tool.name.charAt(0)}
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-sm">{tool.name}</p>
                      <p className="text-xs text-muted-foreground">{tool.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
