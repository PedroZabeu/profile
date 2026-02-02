"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { ProjectDetailsBox } from "./ProjectDetailsBox";

interface ProjectContentProps {
    selectedProject: string | null;
    onCloseDetails: () => void;
}

export const ProjectContent = ({ selectedProject, onCloseDetails }: ProjectContentProps) => {
    const project = selectedProject ? PROJECTS_DATA[selectedProject] : null;

    return (
        <div className="flex-1 p-8 md:p-16 flex items-center justify-center overflow-auto">
            <AnimatePresence mode="wait">
                {project ? (
                    <ProjectDetailsBox
                        key={project.id}
                        project={project}
                        isOpen={true}
                        onClose={onCloseDetails}
                    />
                ) : (
                    <motion.div
                        key="placeholder"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-2xl aspect-video border border-glacier-steel/20 bg-night-summit/40 backdrop-blur-sm relative overflow-hidden flex flex-col items-center justify-center p-8 group"
                    >
                        {/* Decoration corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-alpine-mist/40" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-alpine-mist/40" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-alpine-mist/40" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-alpine-mist/40" />

                        {/* Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,120,140,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,120,140,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                        <div className="relative z-10 text-center">
                            <div className="font-oxanium text-glacier-steel opacity-50 text-sm tracking-[0.2em] mb-4">
                                [ PROJECT_HUB_READY ]
                            </div>

                            <div className="font-oxanium text-2xl md:text-3xl text-white tracking-widest break-all">
                                <motion.div
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    (WAITING_ON_SELECTION)
                                </motion.div>
                            </div>
                        </div>

                        {/* Animation scan line effect */}
                        <motion.div
                            animate={{ y: ['0%', '1000%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/10 bg-gradient-to-b from-transparent via-glacier-steel/5 to-transparent pointer-events-none"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
