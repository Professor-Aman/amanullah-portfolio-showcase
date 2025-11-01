import { Code2, Layers, Wrench, TestTube } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Java", "Kotlin", "Dart", "C++", "Python", "SQL"]
  },
  {
    icon: Layers,
    title: "Frameworks & Tools",
    skills: [
      "Android Studio",
      "Jetpack Compose",
      "Firebase SDK",
      "Retrofit",
      "Ktor",
      "Room Database",
      "SQLite",
      "Custom Libraries/SDKs",
      "Custom Views",
      "Canvas",
      "Custom Gradle Plugins"
    ]
  },
  {
    icon: Wrench,
    title: "Development Practices",
    skills: [
      "MVVM",
      "Clean Architecture",
      "SOLID Principles",
      "OOP",
      "Dependency Injection (Hilt, Dagger)",
      "Design Patterns"
    ]
  },
  {
    icon: TestTube,
    title: "Libraries & Testing",
    skills: [
      "FFmpeg",
      "Coroutines",
      "Flows",
      "RxJava",
      "RESTful APIs",
      "Unit Testing",
      "Espresso",
      "Android Pentesting"
    ]
  }
];

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

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 md:p-8 shadow-medium hover:shadow-strong transition-all hover:scale-[1.02] bg-gradient-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-muted hover:bg-accent hover:text-accent-foreground transition-colors cursor-default text-sm py-1.5 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

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
