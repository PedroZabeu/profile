"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CareerEntryProps {
    company: string;
    role: string;
    period: string;
    index: number;
    onClick?: () => void;
}

export const CareerEntry = ({ company, role, period, index, onClick }: CareerEntryProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full sticky top-0 bg-night-summit/95 backdrop-blur-sm z-[5] py-6 first:pt-4 cursor-pointer group/entry"
            style={{ top: 0 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className="relative w-full px-6">
                {/* Upper Row: Company and Period */}
                <div className="flex justify-between items-end pb-1 translate-y-[2px]">
                    <div className="sticky left-0 z-10 pr-4">
                        <span className="font-oxanium text-sm text-white tracking-[0.2em] whitespace-nowrap transition-colors duration-300 group-hover/entry:text-glacier-steel">
                            {company}
                        </span>
                    </div>
                    <div className="sticky right-0 z-10 pl-4 text-right flex items-center gap-4">
                        <AnimatePresence>
                            {isHovered && (
                                <motion.span
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="font-mono text-[9px] text-glacier-steel tracking-widest hidden md:inline-block"
                                >
                                    [ ACCESS_LOG ]
                                </motion.span>
                            )}
                        </AnimatePresence>
                        <span className="font-oxanium text-sm text-white/90 tracking-widest whitespace-nowrap">
                            {period}
                        </span>
                    </div>
                </div>

                {/* Horizon Line */}
                <div className="h-[1px] w-full bg-glacier-steel/20 transition-colors duration-300 group-hover/entry:bg-glacier-steel/50" />

                {/* Lower Row: Position */}
                <div className="pt-1.5 translate-y-[-2px]">
                    <div className="sticky left-0 z-10">
                        <span className="font-mono text-[10px] text-glacier-steel/60 tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 group-hover/entry:text-glacier-steel/80">
                            {role}
                        </span>
                    </div>
                </div>

                {/* Subtle Row Highlight */}
                <motion.div
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 -mx-6 bg-glacier-steel/5 pointer-events-none"
                />
            </div>

            {/* Spacer for next entry's scissoring */}
            <div className="h-4" />
        </div>
    );
};
