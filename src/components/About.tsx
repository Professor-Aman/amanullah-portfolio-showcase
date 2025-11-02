import { GraduationCap, Target, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="w-full px-6 md:px-12 lg:px-16">
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

            <p className="text-[1.3rem] md:text-[1.1rem] lg:text-[1.3rem] leading-[1.75] md:leading-[1.85] tracking-wide font-light"
   style={{ 
     color: '#000000', 
     fontFamily: 'Inter, Roboto, "Helvetica Neue", sans-serif',
     textShadow: '0 1px 3px rgba(0, 0, 0, 0.15)'
   }}>
  Dynamic Senior Software Engineer &amp; <span className="font-bold text-[#101221] relative inline-block pb-1 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-full after:h-1 after:bg-gradient-to-r after:from-[#101221] after:to-[#60A5FA] 
               after:rounded-full after:transition-all after:duration-300 
               hover:after:h-2 hover:after:scale-x-110">
    current Tech Lead
  </span> with{' '}
  <span className="font-bold text-[#101221] relative inline-block pb-1 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-full after:h-1 after:bg-gradient-to-r after:from-[#101221] after:to-[#60A5FA] 
               after:rounded-full after:transition-all after:duration-300 
               hover:after:h-2 hover:after:scale-x-110">
    5+ years of experience
  </span>{' '}
  building <span className="font-bold text-[#101221] relative inline-block pb-1 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-full after:h-1 after:bg-gradient-to-r after:from-[#101221] after:to-[#60A5FA] 
               after:rounded-full after:transition-all after:duration-300 
               hover:after:h-2 hover:after:scale-x-110">
    50+ Android apps
  </span> that have garnered{' '}
  <span className="font-bold text-[#101221] relative inline-block pb-1 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-full after:h-1 after:bg-gradient-to-r after:from-[#101221] after:to-[#60A5FA] 
               after:rounded-full after:transition-all after:duration-300 
               hover:after:h-2 hover:after:scale-x-110">
    millions of downloads globally
  </span>.
  <br className="hidden md:block" />
  <strong className="font-semibold text-[#101221]">Expertise:</strong>{' '}
  <span className="font-medium text-[#101221]">Ads Monetization (AdMob, Unity Ads)</span>,{' '}
  <span className="font-medium text-[#101221]">App Store Optimization</span>,{' '}
  <span className="font-medium text-[#101221]">Performance Scaling</span>, and{' '}
  <span className="font-medium text-[#101221]">Team Leadership</span> using Java, Kotlin, Jetpack Compose, and Clean Architecture.
  <br className="hidden md:block" />
  I craft <span className="font-medium text-[#101221]">cutting-edge mobile solutions</span> that maximize revenue, captivate users, and drive engagement. 
  Passionate about <span className="font-medium text-[#101221]">scalable architecture</span> and <span className="font-semibold text-[#101221]">mentoring developers</span>, 
  I deliver <span className="font-semibold text-[#101221]">game-changing mobile experiences</span> for any industry.
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
