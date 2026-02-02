"use client";

import { useState } from "react";
import { TopographyBackground } from "@/components/blocks/expedition/TopographyBackground";
import { ScanLine } from "@/components/blocks/expedition/ScanLine";
import { ExpeditionFooter } from "@/components/blocks/expedition/ExpeditionFooter";
import { ProjectSidebar } from "../../blocks/projects/ProjectSidebar";
import { ProjectContent } from "../../blocks/projects/ProjectContent";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export const ProjectHub = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const router = useRouter();

    const handleProjectSelect = (projectId: string) => {
        if (projectId === 'home') {
            setSelectedProject(null);
            setTimeout(() => {
                router.push('/');
            }, 300);
        } else {
            setSelectedProject(selectedProject === projectId ? null : projectId);
        }
    };

    return (
        <main
            className="relative w-full h-screen bg-night-summit overflow-hidden flex flex-col"
            onClick={() => setSelectedProject(null)}
        >
            {/* Background Layers */}
            <TopographyBackground />
            <ScanLine />

            {/* Terminal Header */}
            <div className="relative z-20 flex justify-between px-8 py-4 md:px-16 border-b border-glacier-steel/10">
                <div className="font-oxanium text-xs tracking-[0.3em] text-alpine-mist">
                    [ PROJECTS ]
                </div>
                <div className="font-oxanium text-xs tracking-[0.3em] text-glacier-steel opacity-50">
                    [ STATUS: <span className="text-green-500 font-bold">ON</span> ]
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row">
                <ProjectSidebar
                    selectedProject={selectedProject}
                    onProjectSelect={handleProjectSelect}
                />

                <AnimatePresence mode="wait">
                    <ProjectContent
                        key={selectedProject || 'empty'}
                        selectedProject={selectedProject}
                        onCloseDetails={() => setSelectedProject(null)}
                    />
                </AnimatePresence>
            </div>

            {/* Status Indicators (Bottom Left) */}
            <div
                className="absolute bottom-12 left-12 z-20 font-oxanium text-[10px] text-glacier-steel/60 flex flex-col gap-1"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-4">
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="flex items-center gap-2"
                    >
                        [ SYSTEM_ACTIVE ] <span className="opacity-40">REF: 0x5F1A</span>
                    </motion.div>
                </div>
                <div className="flex items-center gap-4">
                    <span>SIGNAL_STABLE</span>
                    <span className="opacity-40">REV: 2026.01</span>
                </div>
            </div>

            {/* Footer Contact Area */}
            <div onClick={(e) => e.stopPropagation()}>
                <ExpeditionFooter />
            </div>
        </main>
    );
};
