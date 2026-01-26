"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingSequenceProps {
    onComplete: () => void;
}

export const LoadingSequence = ({ onComplete }: LoadingSequenceProps) => {
    const [dots, setDots] = useState("");
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhase((prev) => {
                const next = prev + 1;
                if (next > 3) {
                    clearInterval(interval);
                    setTimeout(onComplete, 200);
                    return prev;
                }
                setDots(".".repeat(next));
                return next;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 p-12 font-oxanium text-white/80"
        >
            <span className="text-white/30 text-xl">{">"}</span>
            <span className="tracking-[0.3em] uppercase text-lg md:text-xl font-bold">Loading{dots}</span>
        </motion.div>
    );
};
