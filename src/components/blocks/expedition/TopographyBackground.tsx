"use client";

import { motion } from "framer-motion";
import { ANIMATION_TIMINGS } from "@/lib/data/expedition";

export const TopographyBackground = () => {
    return (
        <div className="absolute inset-0 bg-night-summit overflow-hidden pointer-events-none">
            <motion.div
                initial={{ opacity: 0.2 }}
                animate={{
                    opacity: [0.1, 0.3, 0.2, 0.3, 0.1],
                }}
                transition={{
                    duration: ANIMATION_TIMINGS.BOOT_DURATION,
                    times: [0, 0.2, 0.5, 0.8, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                }}
                style={{
                    backgroundImage: 'url("/images/topography.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="absolute inset-0 w-full h-full mix-blend-overlay hidden md:block"
            />
            {/* Static version for mobile */}
            <div
                style={{
                    backgroundImage: 'url("/images/topography.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                }}
                className="absolute inset-0 w-full h-full mix-blend-overlay md:hidden"
            />
        </div>
    );
};
