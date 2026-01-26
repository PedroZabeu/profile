"use client";

import { useState } from "react";
import { TopographyBackground } from "@/components/blocks/expedition/TopographyBackground";
import { NavigationTerminal } from "@/components/blocks/expedition/NavigationTerminal";
import { ScanLine } from "@/components/blocks/expedition/ScanLine";
import { ExpeditionFooter } from "@/components/blocks/expedition/ExpeditionFooter";
import { CareerBox } from "@/components/blocks/expedition/CareerBox";
import { SkillsBox } from "@/components/blocks/expedition/SkillsBox";
import { motion, AnimatePresence } from "framer-motion";

export const ExpeditionHub = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);

    return (
        <main
            className="relative w-full h-screen bg-night-summit overflow-hidden flex flex-col"
            onClick={() => setActiveTab(null)}
        >
            {/* Background Layers */}
            <TopographyBackground />
            <ScanLine />

            {/* Main Content Area */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row">
                <NavigationTerminal
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <AnimatePresence mode="wait">
                    {activeTab === 'career' && (
                        <CareerBox
                            key="career-box"
                            isOpen={activeTab === 'career'}
                            onClose={() => setActiveTab(null)}
                        />
                    )}
                    {activeTab === 'skills' && (
                        <SkillsBox
                            key="skills-box"
                            isOpen={activeTab === 'skills'}
                            onClose={() => setActiveTab(null)}
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Status Indicators (Bottom Left) */}
            <div
                className="absolute bottom-12 left-12 z-20 font-oxanium text-[10px] text-glacier-steel opacity-50 flex flex-col gap-1"
                onClick={(e) => e.stopPropagation()}
            >
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    SYSTEM: {activeTab ? `SYNCING_${activeTab.toUpperCase()}` : 'STANDBY // SIGNAL_STABLE'}
                </motion.div>
                <div>
                    EXPEDITION_HUB_V3.0 // {new Date().getFullYear()}
                </div>
            </div>

            {/* Footer Contact Area */}
            <div onClick={(e) => e.stopPropagation()}>
                <ExpeditionFooter />
            </div>
        </main>
    );
};
