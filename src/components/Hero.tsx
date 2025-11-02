import { ArrowRight, Download, Code, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import amanPortrait from "@/assets/aman-portrait.png";

import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);
  
  useEffect(() => {
    // Add fade-in animation effect when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Add title animation with delay
    const titleTimer = setTimeout(() => {
      setTitleAnimated(true);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(titleTimer);
    };
  }, []);
  
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const downloadCV = () => {
    // Convert Google Drive view URL to direct download URL
    const fileId = "1GsIFhHDjcN_qR2VR0dI2VxtC1Cv9xx9S";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'Aman_Ullah_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-20 md:pt-24"
    >
      {/* Pastel Gradient Background (pixel-perfect) */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(to right,rgb(7, 3, 20) 0%,rgb(13, 5, 31) 50%,rgb(12, 32, 65) 100%)'
      }} />
      
      {/* Subtle particle/code background effect */}
      <div className="absolute inset-0 z-1 opacity-10">
        <div className="absolute top-1/4 left-1/4 text-white">
          <Code size={64} />
        </div>
        <div className="absolute top-2/3 right-1/4 text-white">
          <Smartphone size={64} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-white">
          <Code size={48} />
        </div>
      </div>

      {/* Content - Full Width */}
      <div 
        className={`w-full px-6 md:px-12 lg:px-16 z-10 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
          {/* Text Content - Left Side */}
          <div className="w-full md:w-3/5 space-y-6 text-left">
            {/* Name as standalone heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight pb-1 inline-block"
    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
  Aman Ullah
  <div className="h-2 w-24 md:w-32 bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] mt-1 rounded-full"></div>
</h1>
            
            {/* Title below name with gradient and animation */}
            <h2 
              className={`text-[1.8rem] md:text-[1.5rem] font-bold mt-4 tracking-wide transition-transform duration-500 ${
                titleAnimated ? 'scale-100' : 'scale-105'
              }`}

              style={{ 
  background: 'linear-gradient(to right, #2DD4BF, #FFFFFF)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
  marginBottom: '0.5rem'
}}
            >
              Senior Software Engineer | Android Development Expert
            </h2>
            
            {/* Profile text with enhanced styling - White background */}
            <div 
              className={`mt-6 rounded-[20px] backdrop-blur-xl transition-all duration-500 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                background: 'rgba(0, 0, 0, 0.71)',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.35)'
              }}
            >
              <p className="text-muted-foreground leading-relaxed text-[1.05rem] md:text-[1.1rem] text-white">
              Dynamic Senior Software Engineer with <span className="font-bold text-accent">5+ years of experience</span> passionate 
              about crafting cutting-edge mobile solutions that captivate users and drive engagement. With expertise in Android development, 
              API integration, and team mentorship, I deliver scalable, innovative applications across industries. Masterful in Kotlin, 
              Jetpack Compose, and MVVM architecture, I'm driven to build game-changing mobile experiences that make a lasting impact.
            </p>
            </div>
            
            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
              <Button
                size="lg"
                onClick={scrollToPortfolio}
                className="bg-[#2DD4BF] hover:bg-[#1E3A8A] text-white hover:text-[#2DD4BF] font-bold px-7 py-7 
                  transition-all duration-300 hover:scale-105 group rounded-[30px]
                  shadow-[0_4px_12px_rgba(45,212,191,0.4)] hover:shadow-[0_4px_12px_rgba(45,212,191,0.6)]
                  relative overflow-hidden"
              >
                {/* Shimmer effect overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  -translate-x-full animate-[shimmer_2s_infinite]"></span>
                Discover My Work
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={downloadCV}
                className="bg-[#1E3A8A] hover:bg-[#2DD4BF] text-white hover:text-[#1E3A8A] 
                  border-[1px] border-[#2DD4BF] font-bold px-7 py-7 
                  transition-all duration-300 hover:scale-105 rounded-[30px]
                  shadow-[0_4px_12px_rgba(30,58,138,0.4)] hover:shadow-[0_4px_12px_rgba(45,212,191,0.4)]"
              >
                <Download className="mr-2 h-6 w-6" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Portrait Image - Right Side */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              {/* Circular portrait with shadow and animation */}
              <div 
                className="w-72 h-72 md:w-[340px] md:h-[340px] rounded-full overflow-hidden 
                  transition-all duration-500 ease-in-out border-2 border-[#2DD4BF]"
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={amanPortrait}
                  alt="Aman Ullah - Professional Headshot"
                  className="w-full h-full object-cover"
                  style={{ maxWidth: '100%' }}
                />
              </div>
              
              {/* Decorative circle animation */}
              <div className="absolute -inset-4 rounded-full border-2 border-[#2DD4BF]/30 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full border-2 border-[#2DD4BF]/20 animate-pulse animation-delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Horizontal Divider */}
        <div className="mt-12 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
