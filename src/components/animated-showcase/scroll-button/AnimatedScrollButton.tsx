"use client";

import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useState } from "react";

interface AnimatedScrollButtonProps {
    mousePosition: { x: number; y: number };
    backgroundY: any;
}

export default function AnimatedScrollButton({
    mousePosition,
    backgroundY
}: AnimatedScrollButtonProps) {
    const { scrollY } = useScroll();
    const [isClicked, setIsClicked] = useState(false);

    // Parallax effect matching other elements
    const buttonY = useTransform(scrollY, [0, 500], [0, -30]);

    const handleScroll = () => {
        setIsClicked(true);
        // Smooth scroll to showcase details section
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <motion.div
            className="absolute inset-0 flex items-end justify-center pb-20 pointer-events-none z-25"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                    delay: 2.3, // Start after dots complete at 2.3s
                    duration: 0.8,
                    ease: "easeOut"
                }
            }}
        >
            <motion.button
                className="relative pointer-events-auto"
                style={{ y: buttonY }}
                animate={{
                    x: [0, -1, 1, -0.5, 0], // Continuous subtle jitter
                    opacity: [1, 0.8, 1, 0.9, 1],
                    transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 2
                    }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScroll}
            >
                {/* Main button - just text with glitch layers */}
                <motion.div
                    className="relative px-4 py-2 flex items-center justify-center"
                    animate={{
                        filter: isClicked ? ["brightness(1)", "brightness(2)", "brightness(1)"] : "brightness(1)",
                        transition: { duration: 0.3 }
                    }}
                >
                    {/* Primary Text Layer */}
                    <span className="relative text-white font-oxanium font-semibold text-lg tracking-[0.3em] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] z-10">
                        CONTACT
                    </span>

                    {/* Glitch Layer 1 (Red/Cyan shift) */}
                    <motion.span
                        className="absolute text-cyan-400 font-oxanium font-semibold text-lg tracking-[0.3em] opacity-0"
                        animate={{
                            x: [0, -2, 2, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 4,
                        }}
                    >
                        CONTACT
                    </motion.span>

                    {/* Glitch Layer 2 (Cyan/Magenta shift) */}
                    <motion.span
                        className="absolute text-rose-500 font-oxanium font-semibold text-lg tracking-[0.3em] opacity-0"
                        animate={{
                            x: [0, 2, -2, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 4.1,
                        }}
                    >
                        CONTACT
                    </motion.span>
                </motion.div>
            </motion.button>
        </motion.div>
    );
}