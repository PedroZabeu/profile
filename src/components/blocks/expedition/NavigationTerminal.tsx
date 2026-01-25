"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, ANIMATION_TIMINGS } from "@/lib/data/expedition";
import Link from "next/link";

const TerminalButton = ({ label, href, delay }: { label: string; href: string; delay: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [typedLabel, setTypedLabel] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const type = (index: number) => {
            if (index <= label.length) {
                setTypedLabel(label.slice(0, index));
                timeout = setTimeout(() => type(index + 1), (ANIMATION_TIMINGS.TYPE_SPEED * 1000) / label.length);
            } else {
                setIsTyping(false);
            }
        };

        const initialDelay = setTimeout(() => type(0), delay * 1000);
        return () => {
            clearTimeout(initialDelay);
            clearTimeout(timeout);
        };
    }, [label, delay]);

    const glitchVariants = {
        initial: { x: 0, opacity: 1, skewX: 0 },
        glitch: {
            x: [0, -2, 2, -1, 3, 0],
            opacity: [1, 0.8, 0.9, 0.7, 1],
            skewX: [0, -5, 5, -2, 0],
            transition: {
                duration: 0.2,
                repeat: Infinity,
                repeatType: "mirror" as const,
            }
        }
    };

    return (
        <Link href={href} className="block w-fit">
            <motion.div
                className="font-oxanium text-2xl md:text-3xl text-glacier-steel cursor-pointer py-2 group flex items-center gap-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={isHovered ? "glitch" : "initial"}
                variants={glitchVariants}
            >
                <span className="text-alpine-mist opacity-50">{"> "}</span>
                <span className="relative">
                    {typedLabel}
                    {isTyping && (
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-3 h-6 bg-glacier-steel ml-1 align-middle"
                        />
                    )}

                    {/* Glitch Overlay Effect */}
                    <AnimatePresence>
                        {isHovered && (
                            <>
                                <motion.span
                                    className="absolute inset-0 text-red-500/50 mix-blend-screen"
                                    animate={{ x: [-2, 2, -1], y: [1, -1, 0] }}
                                    transition={{ duration: 0.1, repeat: Infinity }}
                                >
                                    {label}
                                </motion.span>
                                <motion.span
                                    className="absolute inset-0 text-cyan-500/50 mix-blend-screen"
                                    animate={{ x: [2, -2, 1], y: [-1, 1, 0] }}
                                    transition={{ duration: 0.1, repeat: Infinity }}
                                >
                                    {label}
                                </motion.span>
                            </>
                        )}
                    </AnimatePresence>
                </span>
            </motion.div>
        </Link>
    );
};

export const NavigationTerminal = () => {
    return (
        <div className="flex flex-col gap-4 p-8 md:p-16 items-center md:items-start">
            <div className="font-oxanium text-alpine-mist opacity-70 mb-4 tracking-widest text-sm flex flex-col items-center md:items-start text-center md:text-left">
                [ COMMAND TERMINAL ]
                <div className="h-[1px] w-32 bg-alpine-mist/30 mt-1" />
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
                {NAV_ITEMS.map((item, index) => (
                    <TerminalButton
                        key={item.id}
                        label={item.label}
                        href={item.path}
                        delay={0.5 + index * 0.4}
                    />
                ))}
            </div>
        </div>
    );
};
