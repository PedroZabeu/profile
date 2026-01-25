"use client";

import { motion } from "framer-motion";

interface CareerEntryProps {
    company: string;
    role: string;
    period: string;
    index: number;
}

export const CareerEntry = ({ company, role, period, index }: CareerEntryProps) => {
    return (
        <div
            className="w-full sticky top-0 bg-night-summit/95 backdrop-blur-sm z-[5] py-6 first:pt-4"
            style={{ top: 0 }} // Each entry will stick to the top
        >
            <div className="relative w-full px-6">
                {/* Upper Row: Company and Period */}
                <div className="flex justify-between items-end pb-1 translate-y-[2px]">
                    <div className="sticky left-0 z-10 pr-4">
                        <span className="font-oxanium text-sm text-white tracking-[0.2em] whitespace-nowrap">
                            {company}
                        </span>
                    </div>
                    <div className="sticky right-0 z-10 pl-4 text-right">
                        <span className="font-oxanium text-sm text-white/90 tracking-widest whitespace-nowrap">
                            {period}
                        </span>
                    </div>
                </div>

                {/* Horizon Line */}
                <div className="h-[1px] w-full bg-glacier-steel/20" />

                {/* Lower Row: Position */}
                <div className="pt-1.5 translate-y-[-2px]">
                    <div className="sticky left-0 z-10">
                        <span className="font-mono text-[10px] text-glacier-steel/60 tracking-[0.15em] uppercase whitespace-nowrap">
                            {role}
                        </span>
                    </div>
                </div>
            </div>

            {/* Spacer for next entry's scissoring */}
            <div className="h-4" />
        </div>
    );
};
