import { TechnicalSkillsSection } from "./TechnicalSkillsSection";
import { Card } from "@/components/ui/card";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-center text-muted-foreground mb-16 px-6 md:px-12 lg:px-16 text-[1.05rem] md:text-[1.1rem]">
            Expert in building high-performance Android apps with scalable architectures
          </p>

          <TechnicalSkillsSection />
          
          <Card className="mt-8 p-8 bg-primary text-primary-foreground shadow-strong">
            <h3 className="text-2xl font-bold mb-4 text-accent">Expertise Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold mb-2">Architecture</p>
                <p className="text-sm text-primary-foreground/90">
                  MVVM, Clean Architecture, SOLID Principles
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Modern Stack</p>
                <p className="text-sm text-primary-foreground/90">
                  Kotlin, Jetpack Compose, Coroutines, Flows
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Quality Assurance</p>
                <p className="text-sm text-primary-foreground/90">
                  Unit Testing, Espresso, Code Reviews
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
