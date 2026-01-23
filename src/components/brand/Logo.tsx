"use client";

import { motion, Variants } from "framer-motion";

interface LogoProps {
    className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
    const colors = {
        nightSummit: "#0D1B2A",
        slateRock: "#4B5866",
        glacierSteel: "#7A8FA3",
    };

    const textVariants: Variants = {
        initial: { opacity: 0, y: 10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        },
    };

    return (
        <div className={`flex items-center justify-center ${className}`}>
            {/* Logotipo Text Only */}
            <motion.div
                className="font-comfortaa text-6xl tracking-tighter"
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                <span style={{ color: colors.nightSummit }}>pedro</span>
                <span className="font-bold" style={{ color: '#82b7f5' }}>
                    .zabeu
                </span>
            </motion.div>
        </div>
    );
};
