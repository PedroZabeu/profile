"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import Image from "next/image";
import { useEffect, useState } from "react";
import CareerCTA from "@/components/CareerCTA";
import ProjectsCTA from "@/components/ProjectsCTA";
import AdventuresCTA from "@/components/AdventuresCTA";

const CLOUD_IMAGES = [
    "/images/clouds/clouds-png-13367.png",
    "/images/clouds/clouds-png-13369.png",
    "/images/clouds/clouds-png-13372.png",
    "/images/clouds/real-clouds-png-13386.png",
    "/images/clouds/real-clouds-png-13387.png",
];

export default function ShowcasePage() {
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

    // Parallax transforms based on scroll
    const backgroundY = useTransform(scrollY, [0, 500], [0, 80]);
    const logoY = useTransform(scrollY, [0, 500], [0, -40]);

    // Generate individual cloud settings for the loop
    const clouds = [
        { src: CLOUD_IMAGES[0], top: "15%", duration: 45, delay: 0, scale: 1.2, opacity: 0.3 },
        { src: CLOUD_IMAGES[1], top: "40%", duration: 60, delay: 5, scale: 0.8, opacity: 0.5 },
        { src: CLOUD_IMAGES[2], top: "60%", duration: 35, delay: 10, scale: 1.5, opacity: 0.4 },
        { src: CLOUD_IMAGES[3], top: "25%", duration: 50, delay: 15, scale: 1.0, opacity: 0.6 },
        { src: CLOUD_IMAGES[4], top: "50%", duration: 40, delay: 2, scale: 1.2, opacity: 0.3 },
        { src: CLOUD_IMAGES[0], top: "70%", duration: 55, delay: 8, scale: 0.9, opacity: 0.5 },
        { src: CLOUD_IMAGES[2], top: "30%", duration: 48, delay: 12, scale: 1.1, opacity: 0.4 },
        { src: CLOUD_IMAGES[1], top: "20%", duration: 65, delay: 18, scale: 0.7, opacity: 0.6 },
    ];

    return (
        <main className="relative h-[150vh] w-full overflow-x-hidden bg-[#0D1B2A]">
            {/* Container h-screen for the main effect */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Layer 0: Static Landscape */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        y: backgroundY,
                        x: mousePosition.x * 0.15,
                    }}
                >
                    <Image
                        src="/images/mountain-base.png"
                        alt="Mountain Base"
                        fill
                        className="object-cover brightness-[0.85] scale-105"
                        priority
                    />
                    <CareerCTA />
                    <ProjectsCTA />
                    <AdventuresCTA />
                </motion.div>

                {/* Layer 1: Unidirectional Clouds (Right to Left) */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    {clouds.map((cloud, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-[800px] h-[400px]"
                            style={{ top: cloud.top, opacity: cloud.opacity }}
                            initial={{ x: "120%" }}
                            animate={{ x: "-120%" }}
                            transition={{
                                duration: cloud.duration,
                                repeat: Infinity,
                                delay: cloud.delay,
                                ease: "linear",
                            }}
                        >
                            <Image
                                src={cloud.src}
                                alt={`Cloud ${i}`}
                                fill
                                className="object-contain mix-blend-screen"
                                style={{ transform: `scale(${cloud.scale})` }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Layer 2: Identity Layer (Centered near top) */}
                <motion.div
                    className="absolute inset-0 z-20 flex items-start justify-center pt-12 pointer-events-none"
                    style={{
                        y: logoY,
                        x: mousePosition.x * -0.4,
                    }}
                >
                    <div className="relative pointer-events-auto filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                        <Logo />
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest font-comfortaa">Scroll to explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </div>

            {/* Logo Design Section */}
            <section className="relative z-30 min-h-screen bg-[#0D1B2A] text-white p-20 flex flex-col items-center justify-center border-t border-white/5">
                <h2 className="text-5xl font-comfortaa mb-12 tracking-tighter">Logo Design</h2>
                <div className="max-w-2xl text-center space-y-6">
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        A minimalist text-only logo crafted with the Comfortaa font, inspired by the clean and rugged aesthetics of mountain landscapes and Pedro&apos;s love for the outdoors and mountains. &quot;pedro&quot; uses the deep Night Summit tone, while &quot;.zabeu&quot; features a vibrant blue accent, reflecting the blend of professional depth and outdoor energy.
                    </p>
                    <div className="flex justify-center gap-6 pt-12">
                        <div className="flex flex-col items-center">
                            <div className="text-[#F1F5F9] font-comfortaa text-sm font-bold mb-2" style={{ fontFamily: "'Comfortaa', cursive" }}>
                                COMFORTAA
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500">Logo Font</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-1 bg-[#0D1B2A] border border-white/30 mb-2" />
                            <span className="text-[10px] uppercase tracking-widest text-slate-500">Night Summit</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-1 bg-[#82b7f5] mb-2" />
                            <span className="text-[10px] uppercase tracking-widest text-slate-500">Alpine Blue</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Briefing Cards Section */}
            <section className="relative z-30 min-h-screen bg-[#0D1B2A] text-white p-20 flex flex-col items-center justify-center border-t border-white/5">
                <h2 className="text-5xl font-comfortaa mb-12 tracking-tighter">Expedition Briefing Cards</h2>
                <div className="max-w-2xl text-center space-y-6">
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        The interactive CTA cards draw inspiration from expedition mission briefings, where precision, clarity, and comprehensive planning are essential for success.
                    </p>
                    <div className="flex justify-center gap-6 pt-12">
                        <div className="flex flex-col items-center">
                            <div className="text-[#F1F5F9] font-oxanium text-sm font-bold mb-2" style={{ fontFamily: "'Oxanium', sans-serif" }}>
                                OXANIUM
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500">Expedition Font</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-1 bg-[#F1F5F9] mb-2" />
                            <span className="text-[10px] uppercase tracking-widest text-slate-500">Alpine Mist</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-1 bg-white/10 border border-white/20 mb-2" />
                            <span className="text-[10px] uppercase tracking-widest text-slate-500">Briefing Card</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-1 h-1 bg-[#F1F5F9] rounded-full mb-2 animate-pulse" />
                            <span className="text-[10px] uppercase tracking-widest text-slate-500">Expedition Dot</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
