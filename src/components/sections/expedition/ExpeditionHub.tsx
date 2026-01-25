"use client";

import { TopographyBackground } from "@/components/blocks/expedition/TopographyBackground";
import { NavigationTerminal } from "@/components/blocks/expedition/NavigationTerminal";
import { ScanLine } from "@/components/blocks/expedition/ScanLine";
import { ExpeditionFooter } from "@/components/blocks/expedition/ExpeditionFooter";
import { motion } from "framer-motion";

export const ExpeditionHub = () => {
    return (
        <main className="relative w-full h-screen bg-night-summit overflow-hidden flex flex-col">
            {/* Background Layers */}
            <TopographyBackground />
            <ScanLine />

            {/* Main Content Area */}
            <div className="relative z-10 flex-1 flex flex-col">
                <NavigationTerminal />
            </div>

            {/* Status Indicators (Bottom Left) */}
            <div className="absolute bottom-12 left-12 z-20 font-mono text-[10px] text-glacier-steel opacity-50 flex flex-col gap-1">
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    SYSTEM: STANDBY // SIGNAL_STABLE
                </motion.div>
                <div>
                    EXPEDITION_HUB_V3.0 // {new Date().getFullYear()}
                </div>
            </div>

            {/* Footer Contact Area */}
            <ExpeditionFooter />
        </main>
    );
};
