import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Looking for an experienced Android developer? Let's discuss how I can help bring your mobile vision to life.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 shadow-medium hover:shadow-strong transition-all bg-gradient-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm">Email</h3>
                </div>
              </div>
              <a 
                href="mailto:amanakmal305@gmail.com" 
                className="text-sm text-accent hover:underline break-all"
              >
                amanakmal305@gmail.com
              </a>
            </Card>

            <Card className="p-6 shadow-medium hover:shadow-strong transition-all bg-gradient-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm">LinkedIn</h3>
                </div>
              </div>
              <a 
                href="https://www.linkedin.com/in/aman-ullah" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                linkedin.com/in/aman-ullah
              </a>
            </Card>

            <Card className="p-6 shadow-medium hover:shadow-strong transition-all bg-gradient-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Send className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm">Phone</h3>
                </div>
              </div>
              <a 
                href="tel:+923409002808" 
                className="text-sm text-accent hover:underline"
              >
                +92 340 900 2808
              </a>
            </Card>
          </div>

          <Card className="p-8 shadow-medium bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="border-input focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="border-input focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Android Developer Position"
                  className="border-input focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="border-input focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-all hover:scale-[1.02]"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
