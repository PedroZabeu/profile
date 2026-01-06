'use client';

import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectSection } from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
