"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Adventure, OperationalCluster, ADVENTURE_CLUSTERS } from "@/lib/data/adventures";
import { Typewriter } from "./Typewriter";
import { useState, useCallback } from "react";

interface TacticalArchiveProps {
    selectedId?: string;
    onSelect: (adventure: Adventure) => void;
    className?: string;
}

export const TacticalArchive = ({ selectedId, onSelect, className = "" }: TacticalArchiveProps) => {
    const [visibleClusters, setVisibleClusters] = useState<string[]>([]);

    const handleClusterComplete = useCallback((clusterId: string) => {
        setVisibleClusters(prev => {
            if (prev.includes(clusterId)) return prev;
            return [...prev, clusterId];
        });
    }, []);

    return (
        <div className={`flex flex-col gap-8 ${className}`}>
            <div className="flex flex-col gap-2">
                <div className="text-[10px] text-glacier-steel tracking-[0.3em] font-bold">
                    [ TACTICAL_ARCHIVE ]
                </div>
                <div className="h-[1px] w-full bg-alpine-blue/20" />
            </div>

            <div className="flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
                {ADVENTURE_CLUSTERS.map((cluster, index) => (
                    <div key={cluster.id} className="flex flex-col gap-3">
                        <Typewriter
                            text={cluster.name}
                            delay={index * 1.0} // Space out the typing starts
                            className="text-xs font-bold text-alpine-mist tracking-widest"
                            onComplete={() => handleClusterComplete(cluster.id)}
                        />

                        <div className="flex flex-col gap-1 pl-4">
                            <AnimatePresence>
                                {visibleClusters.includes(cluster.id) && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.05
                                                }
                                            }
                                        }}
                                        className="flex flex-col gap-1"
                                    >
                                        {cluster.adventures.map((adventure) => (
                                            <motion.button
                                                key={adventure.id}
                                                variants={{
                                                    hidden: { opacity: 0, x: -5 },
                                                    visible: { opacity: 1, x: 0 }
                                                }}
                                                onClick={() => onSelect(adventure)}
                                                className={`group flex items-center gap-2 text-[11px] tracking-wider text-left transition-all duration-300 ${selectedId === adventure.id
                                                    ? "text-white font-bold"
                                                    : "text-glacier-steel hover:text-alpine-blue"
                                                    }`}
                                            >
                                                <span className="opacity-50">
                                                    {selectedId === adventure.id ? "[*]" : ">"}
                                                </span>
                                                <span className={`${selectedId === adventure.id ? "drop-shadow-[0_0_8px_rgba(130,183,245,0.5)]" : ""}`}>
                                                    {adventure.title}
                                                </span>
                                                {selectedId === adventure.id && (
                                                    <motion.div
                                                        layoutId="active-indicator"
                                                        className="ml-auto w-1 h-1 bg-alpine-blue rounded-full"
                                                    />
                                                )}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
