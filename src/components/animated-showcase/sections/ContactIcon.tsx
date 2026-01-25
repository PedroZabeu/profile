"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface ContactIconProps {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    iconColor?: string;
}

export default function ContactIcon({
    href,
    icon: Icon,
    label,
    value,
    iconColor = "text-[#F1F5F9]"
}: ContactIconProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="relative group flex flex-col items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: -10, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        onClick={handleCopy}
                        className="absolute bottom-full mb-4 z-50 cursor-pointer pointer-events-auto"
                    >
                        <div className="bg-[#F1F5F9] border-2 border-[#4B5866] px-4 py-2 rounded-lg shadow-xl relative overflow-hidden flex items-center gap-3">
                            <span className="text-[#0D1B2A] font-comfortaa font-medium text-sm whitespace-nowrap">
                                {copied ? "Copied!" : value}
                            </span>
                            {copied ? (
                                <Check className="w-4 h-4 text-green-600" />
                            ) : (
                                <Copy className="w-4 h-4 text-[#4B5866]/50 group-hover:text-[#4B5866] transition-colors" />
                            )}

                            {/* Subtle background glitch-like effect on hover */}
                            <motion.div
                                className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 pointer-events-none"
                                animate={{
                                    x: copied ? [0, -2, 2, 0] : 0
                                }}
                            />
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px]">
                            <div className="w-3 h-3 bg-[#F1F5F9] border-r-2 border-b-2 border-[#4B5866] rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
            >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <Icon className={`w-full h-full ${iconColor}`} />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-comfortaa">
                    {label}
                </span>
            </a>
        </div>
    );
}
