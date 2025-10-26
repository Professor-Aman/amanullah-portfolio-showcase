import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12" />

          <Card className="p-8 md:p-10 shadow-medium hover:shadow-strong transition-all bg-gradient-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-accent/10 rounded-lg flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Bachelor of Computer Science
                </h3>
                <p className="text-lg text-accent font-semibold mb-2">
                  Federal Urdu University of Arts, Science and Technology, Islamabad
                </p>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">October 2017 – September 2021</span>
                </div>
              </div>
            </div>

            <div className="pl-4 md:pl-20 border-l-2 border-accent/30">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">Final Year Project</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed an <span className="font-semibold text-foreground">Online Learning Management System</span> featuring 
                    comprehensive course management capabilities, secure user authentication mechanisms, and efficient content 
                    delivery systems. The project demonstrated proficiency in full-stack development and system architecture design.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Academic Foundation:</span> Built strong foundation in software 
                  engineering principles, data structures, algorithms, and mobile application development, which laid the groundwork 
                  for a successful career in Android development.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
