"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { CareerLink } from "@/lib/data/expedition";

interface CareerEntryProps {
    company: string;
    role: string;
    period: string;
    log: string[];
    skills: string[];
    links?: CareerLink[];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

export const CareerEntry = ({
    company,
    role,
    period,
    log,
    skills,
    links,
    index,
    isOpen,
    onToggle
}: CareerEntryProps) => {
    // Auto-scroll into view when opened
    useEffect(() => {
        if (isOpen) {
            const timeout = setTimeout(() => {
                const el = document.getElementById(`career-entry-${index}`);
                el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 150); // Slightly longer delay to ensure animation has started
            return () => clearTimeout(timeout);
        }
    }, [isOpen, index]);

    return (
        <div
            id={`career-entry-${index}`}
            className="w-full flex flex-col border-b border-glacier-steel/10 last:border-0"
        >
            {/* Header / Trigger */}
            <div
                className="w-full sticky top-0 bg-night-summit/95 backdrop-blur-sm z-[5] py-6 cursor-pointer group/entry transition-colors hover:bg-glacier-steel/5"
                onClick={onToggle}
            >
                <div className="relative w-full px-6">
                    {/* Upper Row: Company and Period */}
                    <div className="flex justify-between items-end pb-2 translate-y-[2px]">
                        <div className="sticky left-0 z-10 pr-4 flex items-center gap-4">
                            <span className="font-oxanium text-xs text-white bg-white/10 px-1.5 py-0.5 rounded-sm">
                                {isOpen ? "[-]" : "[+]"}
                            </span>
                            <span className="font-oxanium text-base md:text-lg text-white tracking-[0.1em] whitespace-nowrap transition-colors duration-300 group-hover/entry:text-alpine-mist">
                                {company}
                            </span>
                        </div>
                        <div className="sticky right-0 z-10 pl-4 text-right flex items-center gap-4">
                            <span className="font-oxanium text-sm md:text-base text-white/90 tracking-widest whitespace-nowrap">
                                {period}
                            </span>
                        </div>
                    </div>

                    {/* Horizon Line */}
                    <div className="h-[1px] w-full bg-glacier-steel/30 transition-colors duration-300 group-hover/entry:bg-glacier-steel/60" />

                    {/* Lower Row: Position */}
                    <div className="pt-2 translate-y-[-2px]">
                        <div className="sticky left-0 z-10 ml-16">
                            <span className="font-oxanium text-xs md:text-sm text-glacier-steel tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 group-hover/entry:text-white">
                                {role}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden bg-glacier-steel/[0.02]"
                    >
                        <div className="px-14 pb-10 pt-4 space-y-8">
                            {/* Experience Log */}
                            <div className="space-y-4">
                                <div className="font-oxanium text-xs text-white/60 tracking-[0.2em] border-l-2 border-white/20 pl-3">
                                    [ EXPERIENCE_LOG ]
                                </div>
                                <ul className="space-y-4">
                                    {log.map((item, i) => (
                                        <li key={i} className="flex gap-4 group/item">
                                            <span className="text-white/40 font-oxanium text-xs mt-1">{">"}</span>
                                            <span className="font-oxanium text-sm md:text-base leading-relaxed text-alpine-mist tracking-wide group-hover/item:text-white transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Skills */}
                            <div className="space-y-4">
                                <div className="font-oxanium text-xs text-white/60 tracking-[0.2em] border-l-2 border-white/20 pl-3">
                                    [ SKILLS_DEVELOPED ]
                                </div>
                                <div className="font-oxanium text-xs md:text-sm text-white/80 flex flex-wrap gap-x-5 gap-y-3 uppercase tracking-[0.15em] pl-6">
                                    {skills.map((skill, i) => (
                                        <span key={i} className="flex items-center gap-3">
                                            {i > 0 && <span className="text-white/20">|</span>}
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            {links && links.length > 0 && (
                                <div className="space-y-4">
                                    <div className="font-oxanium text-xs text-white/60 tracking-[0.2em] border-l-2 border-white/20 pl-3">
                                        [ EXTERNAL_LINKS ]
                                    </div>
                                    <div className="flex flex-wrap gap-8 pl-6">
                                        {links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link flex items-center gap-3 font-oxanium text-xs md:text-sm text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-sm border border-white/10"
                                            >
                                                <span className="tracking-widest">{link.label}</span>
                                                <ExternalLink size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
