import { useState } from "react";
import { ExternalLink, Download, Clock, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioApps, categories } from "@/data/portfolioApps";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredApps = selectedCategory === "All" 
    ? portfolioApps 
    : portfolioApps.filter(app => app.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Engineered <span className="font-bold text-accent">50+ Android apps</span>, achieving{" "}
            <span className="font-bold text-accent">millions of downloads worldwide</span> using Java, Kotlin, 
            and Jetpack Compose. Leveraged MVVM and Clean Architecture to build scalable, maintainable mobile 
            platforms with intuitive user interfaces and robust features.
          </p>

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
            {categories.map(category => (
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, index) => (
              <Card
                key={index}
                className="p-6 shadow-medium hover:shadow-strong transition-all hover:scale-[1.02] bg-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {app.category}
                  </Badge>
                  {app.status === "coming-soon" ? (
                    <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-accent text-accent">
                      <Download className="w-3 h-3 mr-1" />
                      {app.downloads}
                    </Badge>
                  )}
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {app.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {app.description}
                </p>

                {app.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:border-accent group-hover:text-accent transition-colors"
                    asChild
                  >
                    <a href={app.link} target="_blank" rel="noopener noreferrer">
                      View on Play Store
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </Card>
            ))}
          </div>

          {/* Summary Card */}
          <Card className="mt-12 p-8 bg-primary text-primary-foreground shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-accent">
              Total Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-sm text-primary-foreground/90">Apps Published</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">Millions</p>
                <p className="text-sm text-primary-foreground/90">Downloads Worldwide</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm text-primary-foreground/90">Clean Architecture</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
