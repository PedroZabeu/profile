"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import AnimatedClouds from "./AnimatedClouds";

interface AnimatedBackgroundProps {
    scrollY: MotionValue<number>;
    mousePosition: { x: number; y: number };
}

export default function AnimatedBackground({ scrollY, mousePosition }: AnimatedBackgroundProps) {
    // Parallax transforms based on scroll
    const backgroundY = useTransform(scrollY, [0, 500], [0, 80]);

    return (
        <>
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
            </motion.div>

            {/* Layer 1: Animated Clouds */}
            <AnimatedClouds />
        </>
    );
}