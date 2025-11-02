import { useState, useEffect } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioApps, categories } from "@/data/portfolioApps";
import { AppCard } from "@/components/AppCard";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [totalDownloads, setTotalDownloads] = useState<number>(0);
  const [displayedDownloads, setDisplayedDownloads] = useState<number>(0);

  const filteredApps = selectedCategory === "All" 
    ? portfolioApps 
    : selectedCategory === "Recent"
    ? portfolioApps.filter(app => app.isRecent)
    : portfolioApps.filter(app => app.category === selectedCategory);

  // Calculate total downloads
  useEffect(() => {
    const calculateTotalDownloads = () => {
      let total = 0;
      portfolioApps.forEach(app => {
        if (app.downloads) {
          const downloadStr = app.downloads;
          if (downloadStr.includes('M+')) {
            total += parseInt(downloadStr) * 1000000;
          } else if (downloadStr.includes('K+')) {
            total += parseInt(downloadStr) * 1000;
          }
        }
      });
      return total;
    };

    const total = calculateTotalDownloads();
    setTotalDownloads(total);
  }, []);

  // Animate the counter
  useEffect(() => {
    if (totalDownloads > 0) {
      const duration = 2000; // 2 seconds
      const steps = 50;
      const increment = totalDownloads / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= totalDownloads) {
          setDisplayedDownloads(totalDownloads);
          clearInterval(timer);
        } else {
          setDisplayedDownloads(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [totalDownloads]);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-center text-muted-foreground mb-6 leading-relaxed px-6 md:px-12 lg:px-16 text-[1.05rem] md:text-[1.1rem]">
            Engineered <span className="font-bold text-accent">50+ Android apps</span>, achieving{" "}
            <span className="font-bold text-accent">millions of downloads worldwide</span> using Java, Kotlin, 
            and Jetpack Compose. Leveraged MVVM and Clean Architecture to build scalable, maintainable mobile 
            platforms with intuitive user interfaces and robust features.
          </p>

          {/* Total Downloads Counter */}
          <div className="w-full max-w-md mx-auto bg-gradient-to-r from-accent/80 to-accent rounded-xl p-4 mb-12 transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-center">
              <h3 className="text-white text-lg font-medium mb-1">Total App Downloads</h3>
              <div className="text-white text-3xl md:text-4xl font-bold">
                {formatNumber(displayedDownloads)}+
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <Filter className="w-5 h-5 text-muted-foreground mr-2" />
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className={selectedCategory === "All" ? "bg-accent hover:bg-accent/90" : ""}
            >
              All Apps
            </Button>
            {categories.filter(category => category !== "All").map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-accent hover:bg-accent/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map((app, index) => (
              <div 
                key={index} 
                className="animate-scale-in" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AppCard app={app} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
