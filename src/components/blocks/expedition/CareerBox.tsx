"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronUp, ChevronDown } from "lucide-react";
import { CAREER_DATA } from "@/lib/data/expedition";
import { CareerEntry } from "./CareerEntry";

interface CareerBoxProps {
    isOpen: boolean;
}

export const CareerBox = ({ isOpen }: CareerBoxProps) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth"
        });
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
                transformOrigin: isMobile ? "top" : "top left"
            }}
            className="flex-1 min-h-0 max-h-[70vh] bg-alpine-mist/5 backdrop-blur-md border border-glacier-steel/20 flex flex-col mx-8 mb-24 md:mx-0 md:ml-0 md:mr-16 md:mt-16 md:mb-40 overflow-hidden"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-glacier-steel/20 shrink-0">
                <div className="font-oxanium text-sm text-glacier-steel tracking-tighter">
                    [ CAREER_LOG ]
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-1 hover:bg-glacier-steel/10 transition-colors text-glacier-steel font-mono text-[10px]"
                    >
                        <span>[</span> <ChevronUp size={12} /> <span>]</span>
                    </button>
                    <button
                        onClick={scrollToBottom}
                        className="flex items-center gap-1 hover:bg-glacier-steel/10 transition-colors text-glacier-steel font-mono text-[10px]"
                    >
                        <span>[</span> <ChevronDown size={12} /> <span>]</span>
                    </button>
                </div>
            </div>

            {/* Content Viewport with Bi-Directional Scroll Area */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar"
            >
                {/* Horizontal Scroll Layer */}
                <div className="min-w-max min-h-full">
                    <div className="flex flex-col">
                        {CAREER_DATA.map((milestone, index) => (
                            <CareerEntry
                                key={milestone.id}
                                index={index}
                                {...milestone}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
