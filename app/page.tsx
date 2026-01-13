'use client';

import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectEntryHook } from "@/components/sections/ProjectEntryHook";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ProjectEntryHook />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
