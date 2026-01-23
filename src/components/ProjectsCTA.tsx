"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectsModal from "./ProjectsModal";

export default function ProjectsCTA() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <motion.div
                className="absolute z-10 cursor-pointer flex items-center justify-center"
                style={{
                    left: "37.5%",
                    top: "37.5%",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => setIsOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {/* Sonar Rings */}
                {!isOpen && (
                    <>
                        <motion.div
                            className="absolute w-4 h-4 rounded-full border border-[#F1F5F9]/60"
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{ scale: 3.5, opacity: 0 }}
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
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0.5,
                            }}
                        />
                    </>
                )}

                {/* Main Pulsing Dot */}
                <motion.div
                    className="relative w-4 h-4 bg-[#F1F5F9] rounded-full z-10"
                    animate={{
                        scale: isOpen ? 0 : [1, 1.2, 1],
                        boxShadow: isOpen
                            ? "0 0 0 rgba(241, 245, 249, 0)"
                            : [
                                "0 0 10px rgba(241, 245, 249, 0.5), 0 0 20px rgba(241, 245, 249, 0.3)",
                                "0 0 20px rgba(241, 245, 249, 0.8), 0 0 40px rgba(241, 245, 249, 0.5)",
                                "0 0 10px rgba(241, 245, 249, 0.5), 0 0 20px rgba(241, 245, 249, 0.3)"
                            ],
                    }}
                    transition={{
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        default: { duration: 0.3 }
                    }}
                />
                <AnimatePresence>
                    {isHovered && !isOpen && (
                        <motion.span
                            className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 text-[#F1F5F9] font-oxanium text-2xl font-bold uppercase tracking-[0.2em] whitespace-nowrap"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            style={{ fontFamily: "'Oxanium', sans-serif" }}
                        >
                            Projects
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <ProjectsModal onClose={() => setIsOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
}