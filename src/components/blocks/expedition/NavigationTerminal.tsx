"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, ANIMATION_TIMINGS } from "@/lib/data/expedition";
import Link from "next/link";

interface TerminalButtonProps {
    id: string;
    label: string;
    href: string;
    delay: number;
    isActive: boolean;
    onClick: (id: string) => void;
}

const TerminalButton = ({ id, label, href, delay, isActive, onClick }: TerminalButtonProps) => {
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

    const handleClick = (e: React.MouseEvent) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            onClick(id);
        }
    };

    return (
        <Link href={href} className="block w-fit" onClick={handleClick} id={`nav-button-${id}`}>
            <motion.div
                className={`font-oxanium text-2xl md:text-3xl cursor-pointer py-2 group flex items-center gap-2 transition-colors ${isActive ? "text-white" : "text-glacier-steel"
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={isHovered ? "glitch" : "initial"}
                variants={glitchVariants}
            >
                <span className={`transition-opacity ${isActive ? "opacity-100" : "opacity-50 text-alpine-mist"}`}>
                    {isActive ? "> " : "> "}
                </span>
                <span className="relative">
                    {typedLabel}
                    {isTyping && (
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-3 h-6 bg-glacier-steel ml-1 align-middle"
                        />
                    )}

                    {/* Active Indicator Underline */}
                    {isActive && (
                        <motion.div
                            layoutId="activeUnderline"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/50"
                        />
                    )}

                    {/* Glitch Overlay Effect */}
                    <AnimatePresence>
                        {(isHovered || isActive) && (
                            <>
                                <motion.span
                                    className="absolute inset-0 text-red-500/30 mix-blend-screen"
                                    animate={{ x: [-1, 1, -0.5], y: [0.5, -0.5, 0] }}
                                    transition={{ duration: 0.1, repeat: Infinity }}
                                >
                                    {label}
                                </motion.span>
                                <motion.span
                                    className="absolute inset-0 text-cyan-500/30 mix-blend-screen"
                                    animate={{ x: [1, -1, 0.5], y: [-0.5, 0.5, 0] }}
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

interface NavigationTerminalProps {
    activeTab: string | null;
    onTabChange: (id: string | null) => void;
}

export const NavigationTerminal = ({ activeTab, onTabChange }: NavigationTerminalProps) => {
    return (
        <div className="flex flex-col gap-4 p-8 md:p-16 items-center md:items-start shrink-0">
            <div className="font-oxanium text-alpine-mist opacity-70 mb-4 tracking-widest text-sm flex flex-col items-center md:items-start text-center md:text-left">
                [ COMMAND TERMINAL ]
                <div className="h-[1px] w-32 bg-alpine-mist/30 mt-1" />
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
                {NAV_ITEMS.map((item, index) => (
                    <TerminalButton
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        href={item.path}
                        delay={0.5 + index * 0.4}
                        isActive={activeTab === item.id}
                        onClick={(id) => onTabChange(activeTab === id ? null : id)}
                    />
                ))}
            </div>
        </div>
    );
};
