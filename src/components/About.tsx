import { GraduationCap, Target, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12" />

          <Card className="p-8 md:p-10 shadow-medium hover:shadow-strong transition-all bg-gradient-card mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">Professional Profile</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dynamic Senior Software Engineer with <span className="font-bold text-accent">5+ years of experience</span> passionate 
              about crafting cutting-edge mobile solutions that captivate users and drive engagement. With expertise in Android development, 
              API integration, and team mentorship, I deliver scalable, innovative applications across industries. Masterful in Kotlin, 
              Jetpack Compose, and MVVM architecture, I'm driven to build game-changing mobile experiences that make a lasting impact.
            </p>
          </Card>

          <Card className="p-8 shadow-medium bg-primary text-primary-foreground">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent rounded-lg">
                <Sparkles className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Core Strengths</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-accent">Technical Mastery</h4>
                <p className="text-sm text-primary-foreground/90">
                  Kotlin, Jetpack Compose, MVVM, Clean Architecture
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Proven Track Record</h4>
                <p className="text-sm text-primary-foreground/90">
                  50+ apps with millions of downloads globally
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Leadership</h4>
                <p className="text-sm text-primary-foreground/90">
                  Mentoring teams and enforcing best practices
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
