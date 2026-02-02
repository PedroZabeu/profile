"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TopographyBackground } from "@/components/blocks/expedition/TopographyBackground";
import { ScanLine } from "@/components/blocks/expedition/ScanLine";
import { ExpeditionFooter } from "@/components/blocks/expedition/ExpeditionFooter";
import { Globe } from "@/components/blocks/recon/Globe";
import { TacticalArchive } from "@/components/blocks/recon/TacticalArchive";
import { useState, useEffect } from "react";
import { Adventure } from "@/lib/data/adventures";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AdventureBriefingModal } from "@/components/blocks/recon/AdventureBriefingModal";
import Link from "next/link";

interface ReconLayoutProps {
    showTopography?: boolean;
}

export const ReconLayout = ({ showTopography = false }: ReconLayoutProps) => {
    const [systemStatus, setSystemStatus] = useState("INITIALIZING_SCAN");
    const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    const [isBriefingOpen, setIsBriefingOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSystemStatus("SIGNAL_STABLE // RECON_ACTIVE");
        }, 2800); // 2.8s according to plan
        return () => clearTimeout(timer);
    }, []);

    const handleSelectAdventure = (adventure: Adventure) => {
        setSelectedAdventure(adventure);
        setSystemStatus(`TARGET_ACQUIRING // ${adventure.id.toUpperCase().replace('-', '_')}`);
        setIsMobileDrawerOpen(false);
    };

    const handleLockComplete = () => {
        if (selectedAdventure) {
            setSystemStatus(`DOWNLOADING_LOGS... // ${selectedAdventure.id.toUpperCase().replace('-', '_')}`);

            // 0.5s Technical Delay according to F-4.4 plan
            setTimeout(() => {
                setSystemStatus(`TARGET_LOCKED // ${selectedAdventure.id.toUpperCase().replace('-', '_')}`);
                setIsBriefingOpen(true);
            }, 500);
        }
    };

    const handleCloseModal = () => {
        setIsBriefingOpen(false);
        setSelectedAdventure(null);
        setSystemStatus("SIGNAL_STABLE // RECON_ACTIVE");
    };

    return (
        <main className="relative w-full h-screen bg-night-summit overflow-hidden flex flex-col font-oxanium">
            {/* Background Layers */}
            {showTopography && <TopographyBackground />}
            <ScanLine />

            {/* Header */}
            <header className="relative z-10 p-6 flex justify-between items-center border-b border-alpine-blue/20 bg-night-summit/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl tracking-[0.2em] font-bold text-white flex items-center gap-4"
                >
                    <button
                        onClick={() => setIsMobileDrawerOpen(true)}
                        className="md:hidden text-alpine-blue p-2 -ml-2"
                    >
                        [ ARCHIVE ]
                    </button>
                    <span className="hidden md:inline text-white opacity-80">[ ADVENTURES ]</span>
                    <span className="md:hidden text-white opacity-80">[ P.Z ]</span>

                    <div className="h-4 w-[1px] bg-white/10 mx-2 hidden md:block" />
                    <Link
                        href="/"
                        className="font-oxanium text-[10px] tracking-[0.3em] text-glacier-steel hover:text-white transition-all flex items-center gap-2 group"
                    >
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold group-hover:text-alpine-blue">&gt;</span>
                        HOME_BASE
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-alpine-mist text-xs tracking-widest"
                >
                    <span className={`w-2 h-2 rounded-full ${selectedAdventure ? 'bg-white' : 'bg-alpine-blue'} animate-pulse shadow-[0_0_8px_#82B7F5]`} />
                    STATUS: {selectedAdventure ? "LOCKED" : "ONLINE"}
                </motion.div>
            </header>

            {/* Main Grid Area */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Desktop Sidebar - Tactical Archive */}
                <aside className="hidden md:flex w-80 border-r border-alpine-blue/10 p-6 flex-col gap-6 bg-night-summit/20 backdrop-blur-[2px]">
                    <TacticalArchive
                        selectedId={selectedAdventure?.id}
                        onSelect={handleSelectAdventure}
                    />
                </aside>

                {/* Mobile Drawer */}
                <AnimatePresence>
                    {isMobileDrawerOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileDrawerOpen(false)}
                                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                            />
                            <motion.aside
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed inset-y-0 left-0 z-50 w-[80%] max-w-sm bg-night-summit border-r border-alpine-blue/20 p-6 flex flex-col gap-6 md:hidden"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-white font-bold tracking-widest">[ MENU ]</span>
                                    <button
                                        onClick={() => setIsMobileDrawerOpen(false)}
                                        className="text-glacier-steel hover:text-white"
                                    >
                                        [ CLOSE ]
                                    </button>
                                </div>
                                <TacticalArchive
                                    selectedId={selectedAdventure?.id}
                                    onSelect={handleSelectAdventure}
                                />
                            </motion.aside>
                        </>
                    )}
                </AnimatePresence>

                {/* Central Display - Globe */}
                <section className="flex-1 relative flex items-center justify-center p-4">
                    <div className="absolute top-8 left-8 text-[10px] text-glacier-steel tracking-widest z-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            [ GLOBAL_RECON_FEED ]
                        </motion.div>
                        <motion.div
                            key={selectedAdventure?.id || "empty"}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-alpine-blue font-mono"
                        >
                            {selectedAdventure
                                ? `LAT: ${Math.abs(selectedAdventure.lat).toFixed(2)}${selectedAdventure.lat >= 0 ? 'N' : 'S'} / LON: ${Math.abs(selectedAdventure.lng).toFixed(2)}${selectedAdventure.lng >= 0 ? 'E' : 'W'}`
                                : "LAT: --.-- / LON: --.--"
                            }
                        </motion.div>
                        {selectedAdventure && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4 p-3 border border-alpine-blue/20 bg-alpine-blue/5 max-w-[200px]"
                            >
                                <div className="text-white font-bold mb-1">{selectedAdventure.title}</div>
                                <div className="text-[9px] text-glacier-steel leading-relaxed">
                                    {selectedAdventure.description}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <Globe
                            delay={1.2}
                            focusLocation={selectedAdventure ? { lat: selectedAdventure.lat, lng: selectedAdventure.lng } : null}
                            onLockComplete={handleLockComplete}
                        />
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="relative z-10 border-t border-alpine-blue/20 bg-night-summit/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4">
                    <div className="font-oxanium text-[10px] text-glacier-steel opacity-70 flex flex-col gap-1 w-full md:w-auto mb-4 md:mb-0">
                        <motion.div
                            key={systemStatus}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 bg-alpine-blue/50 rounded-full" />
                            SYTEM_STBY // {systemStatus}
                        </motion.div>
                        <div>
                            GLOBAL_LOGS_ARCHIVE // VER_4.2.0
                        </div>
                    </div>

                    <div className="w-full md:w-auto mt-2 md:mt-0">
                        <ExpeditionFooter standalone={false} />
                    </div>
                </div>
            </footer>

            <AdventureBriefingModal
                adventure={selectedAdventure}
                isOpen={isBriefingOpen}
                onClose={handleCloseModal}
            />
        </main>
    );
};
