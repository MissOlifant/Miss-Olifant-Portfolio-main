import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    const openMailClient = () => {
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
      window.location.href = `mailto:onombulelomartha@gmail.com?subject=${subject}&body=${body}`;
    };

    try {
      setIsSending(true);
      if (!serviceId || !templateId || !publicKey) {
        openMailClient();
        return;
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        {
          publicKey,
        },
      );

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({ title: "Failed to send via form. Opening email app..." });
      openMailClient();
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "onombulelomartha@gmail.com",
      href: "mailto:onombulelomartha@gmail.com",
      color: "hover:text-primary",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/nombulelo-martha-olifant-846252251/",
      href: "https://linkedin.com/in/nombulelo-martha-olifant-846252251/",
      color: "hover:text-secondary",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/MissOlifant",
      href: "https://github.com/MissOlifant",
      color: "hover:text-accent",
    },
  ];

  return (
    <div className="min-h-screen py-20 md:py-32 relative">
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="glassmorphism p-8 rounded-2xl border border-border/50">
                <h2 className="text-2xl font-semibold mb-6 gradient-text">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/30 border-border/50 focus:border-primary backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/30 border-border/50 focus:border-primary backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-muted/30 border-border/50 focus:border-primary min-h-[150px] backdrop-blur-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground glow-primary disabled:opacity-60"
                    size="lg"
                    disabled={isSending}
                  >
                    <Send className={`mr-2 w-5 h-5 ${isSending ? 'animate-pulse' : ''}`} />
                    {isSending ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* Social Links */}
              <div className="glassmorphism p-8 rounded-2xl border border-border/50">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start gap-4 p-4 rounded-xl bg-muted/30 ${link.color} transition-all duration-300 group hover:scale-105`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 group-hover:scale-110 transition-transform flex-shrink-0">
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{link.label}</p>
                        <p className="text-sm text-muted-foreground break-all">{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Let's Collaborate */}
              <div className="glassmorphism p-8 rounded-2xl border border-primary/20 glow-primary">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Let's Collaborate</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>South Africa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Available for remote opportunities</span>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="glassmorphism p-6 rounded-2xl border border-border/50 text-center">
                <p className="text-sm text-muted-foreground">
                  ⚡ <span className="text-primary font-semibold">Quick Response Time</span>
                  <br />
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
