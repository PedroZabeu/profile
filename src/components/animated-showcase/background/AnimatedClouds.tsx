"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CLOUD_IMAGES = [
    "/images/clouds/clouds-png-13367.png",
    "/images/clouds/clouds-png-13369.png",
    "/images/clouds/clouds-png-13372.png",
    "/images/clouds/real-clouds-png-13386.png",
    "/images/clouds/real-clouds-png-13387.png",
];

export default function AnimatedClouds() {
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
    );
}