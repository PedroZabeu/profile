"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data/projects";
import { X } from "lucide-react";

interface ProjectDetailsBoxProps {
    project: Project | null;
    onClose: () => void;
    isOpen: boolean;
}

export const ProjectDetailsBox = ({ project, onClose, isOpen }: ProjectDetailsBoxProps) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    className="w-full max-w-2xl border border-glacier-steel/30 bg-night-summit/60 backdrop-blur-md relative overflow-hidden flex flex-col shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center px-6 py-4 border-b border-glacier-steel/20 bg-glacier-steel/5">
                        <div className="font-oxanium text-xs tracking-[0.3em] text-alpine-mist flex items-center gap-3">
                            <span className="w-2 h-2 bg-alpine-blue animate-pulse rounded-full" />
                            [ PROJECT: {project.title.toUpperCase()} ]
                        </div>
                        <button
                            onClick={onClose}
                            className="text-glacier-steel hover:text-white transition-colors p-1"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    <div className="p-8 flex flex-col gap-8">
                        {/* Subtitle/Description */}
                        <div>
                            <div className="font-oxanium text-glacier-steel text-[10px] tracking-widest uppercase mb-2 opacity-50">
                                // PROJECT_DESCRIPTION
                            </div>
                            <h3 className="font-oxanium text-xl md:text-2xl text-white tracking-wide">
                                {project.description}
                            </h3>
                        </div>

                        {/* Benefits Section */}
                        <div className="space-y-4">
                            <div className="font-oxanium text-glacier-steel text-[10px] tracking-widest uppercase opacity-50">
                                // KEY_BENEFITS
                            </div>
                            <ul className="grid gap-3">
                                {project.userBenefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        className="flex gap-4 items-start text-alpine-mist font-oxanium text-sm md:text-base leading-relaxed"
                                    >
                                        <span className="text-alpine-blue mt-1.5 flex-shrink-0">
                                            <div className="w-1.5 h-1.5 bg-alpine-blue rotate-45" />
                                        </span>
                                        {benefit}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Live Link Button */}
                        <div className="pt-4">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center p-[1px] overflow-hidden rounded-sm"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-alpine-blue/50 via-glacier-steel/30 to-alpine-blue/50 group-hover:from-alpine-blue group-hover:to-alpine-blue transition-all duration-500" />
                                <div className="relative w-full bg-night-summit px-6 py-4 flex items-center justify-between group-hover:bg-night-summit/80 transition-colors">
                                    <span className="font-oxanium text-sm tracking-[0.4em] text-white">
                                        LIVE_UPLINK
                                    </span>
                                    <span className="font-mono text-[10px] text-glacier-steel group-hover:text-white transition-colors">
                                        {project.liveUrl.replace('https://', '')}
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Footer / Status */}
                    <div className="px-6 py-3 border-t border-glacier-steel/10 bg-black/20 flex justify-between items-center">
                        <div className="font-oxanium text-[9px] tracking-widest text-glacier-steel/40">
                            DP_ID: {project.id.toUpperCase()}_REV_2.1
                        </div>
                        <div className={`font-oxanium text-[9px] tracking-widest px-2 py-0.5 border ${project.status === 'LIVE' ? 'border-green-500/50 text-green-500' : 'border-yellow-500/50 text-yellow-500'} bg-black/40`}>
                            {project.status}
                        </div>
                    </div>

                    {/* Background Glitch Decorations */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-alpine-blue/5 blur-[80px] -z-10 pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
