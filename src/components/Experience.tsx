import { Briefcase, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Tech Lead | SE2",
    company: "Ozi Publishing",
    location: "Lahore",
    period: "May 2025 – Present",
    description: "Leading development teams to deliver advanced software solutions. Setting technical direction, enforcing best practices, and driving innovation in mobile development.",
    highlights: [
      "Led cross-functional teams in delivering complex Android apps",
      "Established architectural standards and coding guidelines",
      "Mentored senior developers in advanced Android concepts",
      "Set technical direction and enforced MVVM and Clean Architecture"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Ozi Publishing",
    location: "Lahore",
    period: "Feb 2024 – Apr 2025",
    description: "Developed scalable Android applications using Kotlin and Jetpack Compose with Clean Architecture. Optimized performance and mentored junior developers.",
    highlights: [
      "Built high-performance apps with Jetpack Compose",
      "Implemented Clean Architecture patterns across projects",
      "Optimized app performance and scalability",
      "Mentored junior and mid-level developers"
    ]
  },
  {
    title: "Senior Android Developer",
    company: "Hazel Mobile",
    location: "Lahore",
    period: "Sep 2023 – Jan 2024",
    description: "Built high-quality Android applications using RESTful APIs, Jetpack Compose, and modern development practices. Delivered exceptional user experiences with robust performance.",
    highlights: [
      "Created feature-rich Android applications",
      "Integrated RESTful APIs and third-party services",
      "Implemented Jetpack Compose for modern UI development",
      "Ensured code quality through comprehensive testing"
    ]
  },
  {
    title: "Android Developer",
    company: "Funzoft",
    location: "Lahore",
    period: "Sep 2020 – Aug 2023",
    description: "Developed and optimized Android applications using Java and Kotlin. Delivered seamless user experiences through efficient API integration and robust features.",
    highlights: [
      "Developed multiple successful Android apps",
      "Implemented RESTful API integrations",
      "Optimized app performance and responsiveness",
      "Built foundation in mobile development"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 shadow-medium hover:shadow-strong transition-all hover:scale-[1.02] bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-accent">
                      {exp.company}, {exp.location}
                    </p>
                  </div>
                </div>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
