"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    onComplete?: () => void;
    baseText?: string; // Text to show before starting to type (e.g. "[ ")
    closingText?: string; // Text to show after typing (e.g. " ]")
}

export const Typewriter = ({
    text,
    delay = 0,
    speed = 0.05,
    className = "",
    onComplete,
    baseText = "[ ",
    closingText = " ]",
}: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const hasCompleted = useRef(false);
    const onCompleteRef = useRef(onComplete);

    // Update the ref to always have the latest callback without re-triggering effects
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        if (hasCompleted.current) return;

        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started || hasCompleted.current) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                hasCompleted.current = true;
                if (onCompleteRef.current) onCompleteRef.current();
            }
        }, speed * 1000);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <div className={className}>
            <span>{baseText}</span>
            <span className="relative">
                {displayedText || (hasCompleted.current ? text : "")}
                {started && !hasCompleted.current && displayedText.length < text.length && (
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-alpine-blue ml-1 align-middle"
                    />
                )}
            </span>
            <span>{closingText}</span>
        </div>
    );
};
