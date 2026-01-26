"use client";

import { motion } from "framer-motion";

interface RuggedProgressBarProps {
    level: number; // 0 to 10
    isVisible: boolean;
}

export const RuggedProgressBar = ({ level, isVisible }: RuggedProgressBarProps) => {
    const percentage = (level / 10) * 100;
    const blocks = 20; // Number of blocks in the bar
    const filledBlocks = Math.round((percentage / 100) * blocks);

    return (
        <div className="flex flex-col gap-1 w-full max-w-md">
            <div className="flex justify-between items-end mb-1">
                <span className="text-[10px] text-glacier-steel font-oxanium tracking-widest uppercase">Proficiency_Level</span>
                <span className="text-xs text-[#82b7f5] font-oxanium font-bold">{level.toFixed(1)} / 10</span>
            </div>
            <div className="h-4 flex gap-1 items-stretch">
                {Array.from({ length: blocks }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={isVisible ? {
                            opacity: i < filledBlocks ? 1 : 0.2,
                            scaleY: 1,
                            backgroundColor: i < filledBlocks ? "#82b7f5" : "rgba(130, 183, 245, 0.1)"
                        } : {
                            opacity: 0,
                            scaleY: 0
                        }}
                        transition={{
                            delay: isVisible ? i * 0.02 : 0,
                            duration: 0.2
                        }}
                        className="flex-1 rounded-sm"
                    />
                ))}
            </div>
        </div>
    );
};
