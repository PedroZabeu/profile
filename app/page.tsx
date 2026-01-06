'use client';

import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectEntryHook } from "@/components/sections/ProjectEntryHook";
import { ProjectSection } from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ProjectEntryHook />
      <ProjectSection />
    </main>
  );
}
