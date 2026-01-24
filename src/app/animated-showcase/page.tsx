"use client";

import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/animated-showcase/background/AnimatedBackground";
import ShowcaseDetails from "@/components/animated-showcase/sections/ShowcaseDetails";

export default function AnimatedShowcasePage() {
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

    return (
        <main className="relative h-[150vh] w-full overflow-x-hidden bg-[#0D1B2A]">
            {/* Container h-screen for the main effect */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Animated Background Component */}
                <AnimatedBackground
                    scrollY={scrollY}
                    mousePosition={mousePosition}
                />
            </div>

            {/* Showcase Details Component (Now includes Contact) */}
            <ShowcaseDetails />
        </main>
    );
}