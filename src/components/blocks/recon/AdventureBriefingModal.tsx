"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Adventure } from "@/lib/data/adventures";
import { useState, useEffect } from "react";

interface AdventureBriefingModalProps {
    adventure: Adventure | null;
    isOpen: boolean;
    onClose: () => void;
}

export const AdventureBriefingModal = ({ adventure, isOpen, onClose }: AdventureBriefingModalProps) => {
    const [typedLog, setTypedLog] = useState("");
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (isOpen && adventure) {
            setTypedLog("");
            setImageLoaded(false);
            let i = 0;
            const fullText = adventure.fieldLog;
            const interval = setInterval(() => {
                setTypedLog(fullText.slice(0, i));
                i++;
                if (i > fullText.length) {
                    clearInterval(interval);
                }
            }, 15); // Slightly faster for better UX
            return () => clearInterval(interval);
        } else {
            setTypedLog("");
            setImageLoaded(false);
        }
    }, [isOpen, adventure]);

    if (!adventure) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-night-summit/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: [0, 1, 0.8, 1], // sudden glitch flicker
                            transition: {
                                scale: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                },
                                opacity: {
                                    duration: 0.4,
                                    times: [0, 0.2, 0.3, 1]
                                }
                            }
                        }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-4xl bg-night-summit border border-alpine-blue/30 shadow-[0_0_30px_rgba(130,183,245,0.2)] flex flex-col overflow-hidden"
                    >
                        {/* Header Layer */}
                        <div className="flex justify-between items-center p-4 border-b border-alpine-blue/20 bg-alpine-blue/5">
                            <span className="text-alpine-blue font-oxanium text-xs tracking-[0.3em] font-bold">
                                [ MODAL: ADVENTURE_DEBRIEFING ]
                            </span>
                            <button
                                onClick={onClose}
                                className="text-alpine-blue hover:text-white transition-colors p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Grid */}
                        <div className="p-6 md:p-8 flex flex-col gap-8 overflow-y-auto max-h-[85vh]">
                            {/* Top Row (Exploration & Intel) */}
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Discovery Photo (Left) - Fixed 1:1 Square Ratio */}
                                <div className="w-full md:w-1/2 aspect-square relative group">
                                    <div className="absolute inset-0 bg-alpine-blue/5 backdrop-blur-md border border-alpine-blue/20 overflow-hidden">
                                        {/* Scanning Overlay */}
                                        <div className="absolute inset-0 pointer-events-none z-20">
                                            <div className="recon-scan-line absolute w-full h-0.5 bg-gradient-to-r from-transparent via-alpine-blue to-transparent opacity-60 shadow-[0_0_10px_rgba(130,183,245,0.8)]">
                                                <motion.div
                                                    animate={{ y: ["0%", "100%"] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Intel Frame Border */}
                                        <div className="intel-frame absolute inset-0 pointer-events-none border border-alpine-blue/30">
                                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-alpine-blue/50" />
                                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-alpine-blue/50" />
                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-alpine-blue/50" />
                                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-alpine-blue/50" />
                                        </div>

                                        {/* Landscape Image */}
                                        {!imageLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-alpine-blue/60 text-[10px] tracking-[0.2em] font-oxanium uppercase animate-pulse">
                                                    DECODING_IMAGE...
                                                </div>
                                            </div>
                                        )}
                                        <motion.img
                                            src={adventure.image}
                                            alt={`${adventure.title} landscape`}
                                            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            style={{
                                                objectPosition: (adventure.id === 'arco' || adventure.id === 'dedo-deus') ? 'right center' : 'center'
                                            }}
                                            onLoad={() => setImageLoaded(true)}
                                            animate={
                                                imageLoaded ? {
                                                    scale: [1, 1.02, 0.98, 1],
                                                    opacity: [1, 0.8, 0.9, 1],
                                                } : {}
                                            }
                                            transition={{
                                                duration: 0.4,
                                                times: [0, 0.2, 0.3, 1]
                                            }}
                                        />
                                        
                                        {/* Background Scanline Effect */}
                                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
                                    </div>
                                    <div className="absolute bottom-2 left-2 text-[8px] text-alpine-blue/40 font-oxanium tracking-widest bg-night-summit/40 px-2 py-1 z-30">
                                        VISUAL_SCAN: {imageLoaded ? "100%" : "PROCESSING..."}
                                    </div>
                                </div>

                                {/* Technical Data Grid (Right) */}
                                <div className="w-full md:w-1/2 flex flex-col gap-6">
                                    <div className="space-y-4">
                                        <h3 className="text-alpine-blue font-oxanium text-[10px] tracking-[0.2em] border-l-2 border-alpine-blue/40 pl-3 uppercase">
                                            [ ADVENTURE_INTEL ]
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4 font-oxanium text-sm uppercase">
                                            <div className="flex items-center gap-4 group">
                                                <span className="text-glacier-steel w-12 group-hover:text-white transition-colors">LOC:</span>
                                                <span className="text-white tracking-wider truncate">{adventure.location}</span>
                                            </div>
                                            <div className="flex items-center gap-4 group">
                                                <span className="text-glacier-steel w-12 group-hover:text-white transition-colors">ACT:</span>
                                                <span className="text-white tracking-wider">{adventure.activity}</span>
                                            </div>
                                            <div className="flex items-center gap-4 group">
                                                <span className="text-glacier-steel w-12 group-hover:text-white transition-colors">ALT:</span>
                                                <span className="text-white tracking-wider">
                                                    {adventure.altitude}
                                                    <span className="text-alpine-blue text-[10px] ml-2 opacity-60"> [SUMMIT]</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 group">
                                                <span className="text-glacier-steel w-12 group-hover:text-white transition-colors">DATE:</span>
                                                <span className="text-white tracking-wider">{adventure.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* System Status Readout */}
                                    <div className="mt-auto p-4 border border-alpine-blue/10 bg-alpine-blue/5 hidden md:block">
                                        <div className="text-[10px] text-alpine-blue/60 font-oxanium tracking-widest mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-alpine-blue rounded-full animate-pulse" />
                                            SYSTEM_STABLE // SIGNAL_STABLE...
                                        </div>
                                        <div className="h-1 w-full bg-alpine-blue/10 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-alpine-blue/40 w-full"
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "100%" }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row (Field Log) */}
                            <div className="space-y-4">
                                <h3 className="text-alpine-blue font-oxanium text-[10px] tracking-[0.2em] border-l-2 border-alpine-blue/40 pl-3 uppercase">
                                    [ FIELD_LOG_LOG ]
                                </h3>
                                <div className="p-6 bg-alpine-blue/5 border border-alpine-blue/20 min-h-[140px] font-oxanium text-sm md:text-base leading-relaxed text-alpine-mist tracking-wide relative overflow-hidden">
                                    {/* Background Scanline Effect */}
                                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
                                    <div className="relative z-10">
                                        <span className="text-alpine-blue opacity-50 mr-2">{"//"}</span>
                                        {typedLog}
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                            className="inline-block w-2 h-4 bg-alpine-blue ml-1 align-middle shadow-[0_0_8px_rgba(130,183,245,0.5)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
