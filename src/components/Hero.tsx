import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Aman Ullah
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent">
            Senior Software Engineer | Android Development Expert
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Dynamic Senior Software Engineer with <span className="font-bold text-accent">50+ Android apps</span>, 
            garnering <span className="font-bold text-accent">millions of downloads globally</span> using Java, Kotlin, 
            and Jetpack Compose with Clean Architecture. I craft cutting-edge mobile solutions that captivate users 
            and drive engagement. Passionate about building scalable, innovative apps, I shine in Android development, 
            API integration, and mentorship. Masterful in Kotlin, Jetpack Compose, and MVVM, I'm primed to deliver 
            game-changing mobile experiences for any industry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToPortfolio}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-all hover:scale-105 group"
            >
              Explore My Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
