"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronUp, ChevronDown, X } from "lucide-react";
import { CAREER_DATA } from "@/lib/data/expedition";
import { CareerEntry } from "./CareerEntry";
import { LoadingSequence } from "./LoadingSequence";

interface CareerBoxProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CareerBox = ({ isOpen, onClose }: CareerBoxProps) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [openId, setOpenId] = useState<string | null>(null);

    // Reset loading state when the box closes
    useEffect(() => {
        if (!isOpen) {
            setIsLoading(true);
            setOpenId(null);
        }
    }, [isOpen]);

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth"
        });
    };

    const handleToggle = (id: string) => {
        setOpenId(openId === id ? null : id);
        // Small delay to allow expansion before checking visibility if needed
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
                transformOrigin: isMobile ? "top" : "top left"
            }}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 min-h-0 max-h-[70vh] bg-alpine-mist/5 backdrop-blur-md border border-glacier-steel/20 flex flex-col mx-8 mb-24 md:mx-0 md:ml-0 md:mr-16 md:mt-16 md:mb-40 overflow-hidden"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-glacier-steel/20 shrink-0 bg-night-summit/50">
                <div className="font-oxanium text-base text-white tracking-widest uppercase">
                    [ CAREER_LOG ]
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-2">
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 hover:bg-glacier-steel/20 transition-colors text-alpine-mist/80 hover:text-white font-oxanium text-xs px-3 py-1.5 rounded-sm"
                        >
                            <span>[</span> <ChevronUp size={14} /> <span>]</span>
                        </button>
                        <button
                            onClick={scrollToBottom}
                            className="flex items-center gap-2 hover:bg-glacier-steel/20 transition-colors text-alpine-mist/80 hover:text-white font-oxanium text-xs px-3 py-1.5 rounded-sm"
                        >
                            <span>[</span> <ChevronDown size={14} /> <span>]</span>
                        </button>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 hover:bg-red-500/20 transition-colors text-white font-oxanium text-xs px-3 py-1.5 rounded-sm"
                    >
                        <span>[</span> <X size={14} /> <span>]</span>
                    </button>
                </div>
            </div>

            {/* Content Viewport */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar font-oxanium"
            >
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <LoadingSequence
                            key="loading"
                            onComplete={() => setIsLoading(false)}
                        />
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="min-w-max min-h-full"
                        >
                            <div className="flex flex-col">
                                {CAREER_DATA.map((milestone, index) => (
                                    <CareerEntry
                                        key={milestone.id}
                                        index={index}
                                        {...milestone}
                                        isOpen={openId === milestone.id}
                                        onToggle={() => handleToggle(milestone.id)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
