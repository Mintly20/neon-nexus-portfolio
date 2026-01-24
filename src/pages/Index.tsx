import { useState } from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import GitHubSection from "@/components/GitHubSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TerminalIntro from "@/components/TerminalIntro";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <TerminalIntro onComplete={() => setShowIntro(false)} />
      )}
      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <GitHubSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
