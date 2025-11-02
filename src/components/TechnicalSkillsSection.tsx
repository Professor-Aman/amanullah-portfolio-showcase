import { Code2, Layers, Wrench, TestTube } from "lucide-react";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Java", "Kotlin", "Dart", "C++", "Python", "JavaScript", "HTML/CSS", "SQL"]
  },
  {
    title: "Frameworks & Tools",
    icon: Layers,
    items: ["Android Studio", "Jetpack Compose", "Firebase SDK", "Retrofit", "Ktor", "Room Database", "SQLite", "Custom Libraries/SDKs", "Custom Views", "Canvas", "Custom Gradle Plugins"]
  },
  {
    title: "Development Practices",
    icon: Wrench,
    items: ["MVVM", "Clean Architecture", "SOLID Principles", "OOP", "Dependency Injection (Hilt, Dagger, Koin)", "Design Patterns"]
  },
  {
    title: "Libraries & Testing",
    icon: TestTube,
    items: ["Coroutines", "Flows", "RxJava", "RESTful APIs", "Unit Testing", "Espresso", "Android Pentesting"]
  }
];

export const TechnicalSkillsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.map((skill, index) => (
        <SkillCard 
          key={index}
          title={skill.title}
          icon={skill.icon}
          items={skill.items}
        />
      ))}
    </div>
  );
};