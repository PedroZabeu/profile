"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS_NAV = [
    { id: 'betting-mgmt', label: 'BETTING_MGMT', index: '01', type: 'project' },
    { id: 'stakely', label: 'STAKELY', index: '02', type: 'project' },
    { id: 'school-bets', label: 'SCHOOL_BETS', index: '03', type: 'project' },
    { id: 'home', label: 'HOME', index: '04', type: 'redirect', target: '/' }
];

const ANIMATION_TIMINGS = {
    TYPE_SPEED: 0.1,
};

interface TerminalButtonProps {
    id: string;
    label: string;
    index: string;
    type: string;
    delay: number;
    isActive: boolean;
    onClick: (id: string) => void;
}

const TerminalButton = ({ id, label, index, type, delay, isActive, onClick }: TerminalButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [typedLabel, setTypedLabel] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const typeEffect = (idx: number) => {
            if (idx <= label.length) {
                setTypedLabel(label.slice(0, idx));
                timeout = setTimeout(() => typeEffect(idx + 1), (ANIMATION_TIMINGS.TYPE_SPEED * 1000) / label.length);
            } else {
                setIsTyping(false);
            }
        };

        const initialDelay = setTimeout(() => typeEffect(0), delay * 1000);
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
        <div
            className="block w-fit cursor-pointer"
            onClick={(e) => {
                e.stopPropagation();
                onClick(id);
            }}
        >
            <motion.div
                className={`font-oxanium text-2xl md:text-3xl py-2 group flex items-center gap-4 transition-colors ${isActive ? "text-white" : "text-glacier-steel"
                    } ${type === 'redirect' ? 'opacity-80 hover:opacity-100' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={isHovered ? "glitch" : "initial"}
                variants={glitchVariants}
            >
                <span className={`text-sm opacity-50 font-mono`}>
                    [{index}]
                </span>
                <span className={`transition-opacity ${isActive ? "opacity-100" : "opacity-50 text-alpine-mist"}`}>
                    {"> "}
                </span>
                <span className="relative flex items-center gap-3">
                    {typedLabel}
                    {type === 'redirect' && !isTyping && (
                        <span className="text-sm text-alpine-blue group-hover:translate-x-1 transition-transform">
                            (→)
                        </span>
                    )}
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
                            layoutId="activeUnderlineProjects"
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
        </div>
    );
};

interface ProjectSidebarProps {
    selectedProject: string | null;
    onProjectSelect: (projectId: string) => void;
}

export const ProjectSidebar = ({ selectedProject, onProjectSelect }: ProjectSidebarProps) => {
    return (
        <div
            className="flex flex-col gap-4 p-8 md:p-16 items-center md:items-start shrink-0"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="font-oxanium text-alpine-mist opacity-70 mb-4 tracking-widest text-sm flex flex-col items-center md:items-start text-center md:text-left">
                [ PROJECTS_NAV ]
                <div className="h-[1px] w-32 bg-alpine-mist/30 mt-1" />
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
                {PROJECTS_NAV.map((item, index) => (
                    <TerminalButton
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        index={item.index}
                        type={item.type}
                        delay={0.5 + index * 0.2}
                        isActive={selectedProject === item.id}
                        onClick={onProjectSelect}
                    />
                ))}
            </div>
        </div>
    );
};
