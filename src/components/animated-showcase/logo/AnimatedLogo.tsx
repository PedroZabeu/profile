"use client";

import { motion } from "framer-motion";
import { MotionValue } from "framer-motion";
import { Logo } from "@/components/brand/Logo";

interface AnimatedLogoProps {
    logoY: MotionValue<number>;
    mousePosition: { x: number; y: number };
}

export default function AnimatedLogo({ logoY, mousePosition }: AnimatedLogoProps) {
    return (
        <motion.div
            className="absolute inset-0 z-20 flex items-start justify-center pt-12 pointer-events-none"
            style={{
                y: logoY,
                x: mousePosition.x * -0.4,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeOut",
            }}
        >
            <div className="relative pointer-events-auto filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <Logo />
            </div>
        </motion.div>
    );
}