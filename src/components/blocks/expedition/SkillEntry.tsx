"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Skill } from "@/lib/data/skills";
import { RuggedProgressBar } from "./RuggedProgressBar";

interface SkillEntryProps {
    skill: Skill;
    isOpen: boolean;
    onToggle: () => void;
    isVisible: boolean;
}

export const SkillEntry = ({ skill, isOpen, onToggle, isVisible }: SkillEntryProps) => {
    return (
        <div className="flex flex-col py-4 border-b border-glacier-steel/10 last:border-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <span className="text-sm md:text-base font-oxanium text-white tracking-wider uppercase">
                    {skill.name}
                </span>
                <RuggedProgressBar level={skill.level} isVisible={isVisible} />
            </div>

            <button
                onClick={onToggle}
                className="flex items-center gap-2 text-xs text-glacier-steel hover:text-white transition-colors font-oxanium tracking-widest mt-3"
            >
                {isOpen ? (
                    <>
                        <span>[</span> <Minus size={10} /> <span>]</span> HIDE_TECHNICAL_LOG
                    </>
                ) : (
                    <>
                        <span>[</span> <Plus size={10} /> <span>]</span> VIEW_TECHNICAL_LOG
                    </>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 pl-4 border-l-2 border-glacier-steel/40 py-3 bg-white/5 rounded-r-md">
                            <div className="text-xs text-[#82b7f5] font-oxanium mb-2 tracking-widest font-bold">[TECHNICAL_SPECS]:</div>
                            <p className="text-sm text-white/90 mb-4 leading-relaxed font-light">
                                {skill.technicalLog}
                            </p>

                            <div className="text-xs text-[#82b7f5] font-oxanium mb-2 tracking-widest font-bold">[TECHNOLOGIES]:</div>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {skill.technologies.map((tech, idx) => (
                                    <span key={idx} className="text-xs text-glacier-steel font-oxanium">
                                        <span className="text-[#82b7f5] mr-1">{">"}</span> {tech.toUpperCase().replace(/ /g, '_')}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
