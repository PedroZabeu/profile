"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/animated-showcase/background/AnimatedBackground";
import AnimatedLogo from "@/components/animated-showcase/logo/AnimatedLogo";
import SequentialDotsContainer from "@/components/animated-showcase/dots/SequentialDotsContainer";
import ScrollButtonContainer from "@/components/animated-showcase/scroll-button/ScrollButtonContainer";
import ShowcaseDetails from "@/components/animated-showcase/sections/ShowcaseDetails";

export default function Home() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax transforms based on scroll for logo and background elements
  const logoY = useTransform(scrollY, [0, 500], [0, -40]);
  const backgroundY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <main className="relative h-[150vh] w-full overflow-x-hidden bg-[#0D1B2A]">
      {/* Container h-screen for the main effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Animated Background Component */}
        <AnimatedBackground
          scrollY={scrollY}
          mousePosition={mousePosition}
        />

        {/* Animated Logo Component */}
        <AnimatedLogo
          logoY={logoY}
          mousePosition={mousePosition}
        />

        {/* Sequential Dots Layer */}
        <SequentialDotsContainer mousePosition={mousePosition} backgroundY={backgroundY} />

        {/* Scroll Button Layer */}
        <ScrollButtonContainer mousePosition={mousePosition} backgroundY={backgroundY} />
      </div>

      {/* Showcase Details Component (Now includes Contact) */}
      <ShowcaseDetails />
    </main>
  );
}
