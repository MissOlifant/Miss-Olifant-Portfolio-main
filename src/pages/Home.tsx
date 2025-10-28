import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import cvPdf from "@/Nombulelo_Olifant_CV_compressed.pdf";
import profileImg from "@/Nombulelo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-block animate-scale-in">
              <p className="text-lg md:text-xl text-primary font-medium mb-4">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                <span className="gradient-text leading-tight block">Nombulelo Olifant</span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl lg:text-4xl text-foreground/90 font-light mt-4">
                <span>IT Graduate</span>
                <span className="text-primary">•</span>
                <span className="gradient-text">AI Innovator</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Building secure, smart, and human-centered digital solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground glow-primary text-lg px-10 py-6 group"
              >
                Explore My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href={cvPdf} download>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm text-lg px-10 py-6 group glassmorphism"
              >
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce" style={{ animationDelay: "0.6s" }}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm">Discover More</span>
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-primary rounded-full animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
