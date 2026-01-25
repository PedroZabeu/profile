"use client";

import { motion } from "framer-motion";
import { ANIMATION_TIMINGS } from "@/lib/data/expedition";

export const ScanLine = () => {
    return (
        <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{
                duration: ANIMATION_TIMINGS.SCANLINE_INTERVAL,
                ease: "linear",
                repeat: Infinity,
            }}
            className="absolute left-0 right-0 h-[1px] bg-glacier-steel opacity-20 pointer-events-none z-10"
            style={{
                boxShadow: "0 0 10px 1px var(--color-glacier-steel)",
            }}
        />
    );
};
