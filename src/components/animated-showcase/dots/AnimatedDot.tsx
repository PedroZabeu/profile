"use client";

import { motion, AnimatePresence, useTransform, type MotionValue } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedDotProps {
    label: string;
    position: { x: number; y: number };
    mousePosition: { x: number; y: number };
    backgroundY: MotionValue<number>;
    delay?: number;
    modalComponent: React.ComponentType<{ onClose: () => void; origin?: { x: number; y: number } }>;
}

export default function AnimatedDot({
    label,
    position,
    mousePosition,
    backgroundY,
    delay = 0,
    modalComponent: Modal,
}: AnimatedDotProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        // Label visibility sequence: brief reveal after entrance
        const startTimer = setTimeout(() => {
            setShowLabel(true);
            const hideTimer = setTimeout(() => {
                setShowLabel(false);
            }, 2000);
            return () => clearTimeout(hideTimer);
        }, (delay + 0.5) * 1000); // Start after entrance glitch ends

        return () => clearTimeout(startTimer);
    }, [delay]);

    const dotVariants = {
        initial: { scale: 0, opacity: 0, filter: "blur(10px)" },
        entrance: {
            scale: [0, 1.5, 0.8, 1.2, 1],
            opacity: [0, 1, 0.5, 1, 0.8],
            filter: ["blur(10px)", "blur(0px)", "blur(5px)", "blur(0px)"],
            transition: {
                duration: 0.6,
                delay,
                times: [0, 0.2, 0.4, 0.6, 1]
            }
        },
        hover: {
            scale: 1.25,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" as any }
        },
        hidden: {
            scale: 0,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" as any }
        }
    };

    const mouseXShift = mousePosition.x * 0.15;

    return (
        <>
            {/* 1. Scroll Parallax Wrapper */}
            <motion.div
                className="absolute z-20 pointer-events-none"
                style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    y: backgroundY as any,
                }}
            >
                {/* 2. Mouse Parallax & Interaction Container */}
                <motion.div
                    className="relative cursor-pointer pointer-events-auto p-8"
                    animate={{
                        x: `calc(-50% + ${mouseXShift}px)`,
                        y: "-50%",
                    }}
                    onClick={() => setIsOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Visual Content Wrapper */}
                    <motion.div
                        className="relative flex items-center justify-center h-8 w-8"
                        initial="initial"
                        animate={isOpen ? "hidden" : (isHovered ? "hover" : "entrance")}
                        variants={dotVariants}
                    >
                        {/* Sonar Rings - Hide when hovered/click for crisp button feel */}
                        <AnimatePresence>
                            {!isOpen && !isHovered && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <motion.div
                                        className="absolute w-4 h-4 rounded-full border border-[#F1F5F9]/60"
                                        initial={{ scale: 1, opacity: 0.8 }}
                                        animate={{ scale: 3.5, opacity: 0 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                        }}
                                    />
                                    <motion.div
                                        className="absolute w-4 h-4 rounded-full border border-[#F1F5F9]/40"
                                        initial={{ scale: 1, opacity: 0.6 }}
                                        animate={{ scale: 2.5, opacity: 0 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                            delay: 0.5,
                                        }}
                                    />
                                </div>
                            )}
                        </AnimatePresence>

                        {/* Main Interaction Dot */}
                        <motion.div
                            className="relative w-4 h-4 bg-[#F1F5F9] rounded-full z-10"
                            variants={{
                                initial: { boxShadow: "0 0 0px rgba(241, 245, 249, 0)" },
                                entrance: {
                                    boxShadow: [
                                        "0 0 10px rgba(241, 245, 249, 0.5), 0 0 20px rgba(241, 245, 249, 0.3)",
                                        "0 0 20px rgba(241, 245, 249, 0.8), 0 0 40px rgba(241, 245, 249, 0.5)",
                                        "0 0 10px rgba(241, 245, 249, 0.5), 0 0 20px rgba(241, 245, 249, 0.3)",
                                    ],
                                    transition: {
                                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                    }
                                },
                                hover: {
                                    boxShadow: "0 0 20px rgba(241, 245, 249, 1), 0 0 40px rgba(241, 245, 249, 0.6)",
                                    scale: 1.1,
                                    transition: { boxShadow: { repeat: 0 }, scale: { duration: 0.2 } }
                                },
                                hidden: { scale: 0, opacity: 0 }
                            }}
                        />
                    </motion.div>

                    {/* Label Overlay - Aligned exactly above the content */}
                    <AnimatePresence>
                        {(isHovered || showLabel) && !isOpen && (
                            <motion.span
                                className="absolute bottom-[calc(100%-1.5rem)] left-1/2 -translate-x-1/2 text-[#F1F5F9] font-oxanium text-2xl font-bold uppercase tracking-[0.3em] whitespace-nowrap pointer-events-none"
                                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                style={{ fontFamily: "'Oxanium', sans-serif", textShadow: "0 0 20px rgba(0,0,0,0.5)" }}
                            >
                                {label}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isOpen && <Modal onClose={() => setIsOpen(false)} origin={position} />}
            </AnimatePresence>
        </>
    );
}
