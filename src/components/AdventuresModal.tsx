"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";


interface AdventuresModalProps {
    onClose: () => void;
    origin?: { x: number; y: number };
}

export default function AdventuresModal({ onClose, origin = { x: 72, y: 40 } }: AdventuresModalProps) {
    const title = "ADVENTURES";
    const description = "Mountain climber and outdoor explorer with expeditions across the world";
    const highlights = useMemo(() => [
        "Huayna Potosi (6088m)",
        "Patagonia Trekking",
        "Mallorca Deep Water Solo",
        "Backcountry Snowboarding"
    ], []);
    const cta = "Explore";

    const [typedTitle, setTypedTitle] = useState("");
    const [typedDescription, setTypedDescription] = useState("");
    const [typedHighlights, setTypedHighlights] = useState<string[]>(["", "", "", ""]);
    const [typedCTA, setTypedCTA] = useState("");
    const [currentHighlightIndex, setCurrentHighlightIndex] = useState(-1);

    const typingSpeed = 6; // Twice as fast as 12ms

    useEffect(() => {
        let isCancelled = false;

        const typeString = async (
            str: string,
            setter: (val: string) => void,
            onComplete?: () => void
        ) => {
            for (let i = 0; i <= str.length; i++) {
                if (isCancelled) return;
                setter(str.slice(0, i));
                await new Promise((resolve) => setTimeout(resolve, typingSpeed));
            }
            if (onComplete) onComplete();
        };

        const startSequence = async () => {
            // 1. Type Title
            await typeString(title, setTypedTitle);
            await new Promise((resolve) => setTimeout(resolve, 30));

            // 2. Type Description
            await typeString(description, setTypedDescription);
            await new Promise((resolve) => setTimeout(resolve, 30));

            // 3. Type Highlights
            for (let i = 0; i < highlights.length; i++) {
                if (isCancelled) return;
                setCurrentHighlightIndex(i);
                await typeString(highlights[i], (val) => {
                    setTypedHighlights((prev) => {
                        const next = [...prev];
                        next[i] = val;
                        return next;
                    });
                });
                await new Promise((resolve) => setTimeout(resolve, 10));
            }

            // 4. Type CTA
            await typeString(cta, setTypedCTA);
        };

        startSequence();

        return () => {
            isCancelled = true;
        };
    }, [highlights]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="w-[400px] h-[400px] max-w-[90vw] max-h-[90vw] bg-white/5 border border-white p-8 flex flex-col justify-between cursor-default"
                role="dialog"
                aria-modal="true"
                aria-labelledby="adventures-title"
                initial={{
                    scale: 0,
                    x: `calc(${origin.x}vw - 50vw)`,
                    y: `calc(${origin.y}vh - 50vh)`
                }}
                animate={{
                    scale: 1,
                    x: 0,
                    y: 0
                }}
                exit={{
                    scale: 0,
                    x: `calc(${origin.x}vw - 50vw)`,
                    y: `calc(${origin.y}vh - 50vh)`
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                style={{ fontFamily: "'Oxanium', sans-serif" }}
            >
                <div>
                    {/* Title */}
                    <h2
                        id="adventures-title"
                        className="text-2xl text-[#F1F5F9] uppercase tracking-[0.2em] mb-6"
                        style={{ fontWeight: 600 }}
                    >
                        {typedTitle}
                        {typedTitle.length < title.length && (
                            <span className="inline-block w-1 h-6 bg-[#F1F5F9] ml-1 animate-pulse align-middle" />
                        )}
                    </h2>

                    {/* Description */}
                    <div className="min-h-[4rem] mb-6">
                        <p
                            className="text-lg text-[#F1F5F9] text-left leading-relaxed"
                            style={{ fontWeight: 600 }}
                        >
                            {typedDescription}
                            {typedTitle.length === title.length && typedDescription.length < description.length && (
                                <span className="inline-block w-1 h-5 bg-[#F1F5F9] ml-1 animate-pulse align-middle" />
                            )}
                        </p>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                        {highlights.map((highlight, index) => (
                            <li
                                key={index}
                                className="text-base text-[#F1F5F9] flex items-start"
                                style={{
                                    fontWeight: 600,
                                    opacity: typedHighlights[index] || currentHighlightIndex === index ? 1 : 0
                                }}
                            >
                                {(typedHighlights[index] || currentHighlightIndex === index) && (
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-[#F1F5F9] rounded-full shrink-0" />
                                )}
                                <span className="flex-1">
                                    {typedHighlights[index]}
                                    {currentHighlightIndex === index && typedHighlights[index].length < highlight.length && (
                                        <span className="inline-block w-1 h-4 bg-[#F1F5F9] ml-1 animate-pulse align-middle" />
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <Link
                    href="/adventures"
                    className="text-xl text-[#F1F5F9] hover:opacity-70 transition-opacity duration-300 self-start group flex items-center"
                    style={{
                        fontWeight: 600,
                        opacity: typedCTA ? 1 : 0
                    }}
                >
                    <span className="border-b border-transparent group-hover:border-[#F1F5F9] transition-colors">
                        {typedCTA}
                    </span>
                    {typedCTA.length > 0 && typedCTA.length < cta.length && (
                        <span className="inline-block w-1 h-5 bg-[#F1F5F9] ml-1 animate-pulse align-middle" />
                    )}
                </Link>

            </motion.div>
        </motion.div>
    );
}