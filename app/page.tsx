import React from "react";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { InstitutionsSection } from "@/components/sections/InstitutionsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Page() {
  return (
    <>
      <main>
        <SiteHeader />
        <HomeHero />
        <ProblemSection />
        <CapabilitiesSection />
        <ProgramsSection />
        <InstitutionsSection />
        <AboutSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}
