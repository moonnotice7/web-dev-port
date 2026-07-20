import { AboutSection } from "@/components/sections/about";
import { CompaniesSection } from "@/components/sections/companies";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CompaniesSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
