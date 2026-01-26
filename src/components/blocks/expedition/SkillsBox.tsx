"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronUp, ChevronDown, X, ChevronRight } from "lucide-react";
import { LoadingSequence } from "./LoadingSequence";
import { SKILLS_DATA, SkillCategory } from "@/lib/data/skills";
import { SkillEntry } from "./SkillEntry";

interface SkillsBoxProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SkillsBox = ({ isOpen, onClose }: SkillsBoxProps) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
    const [openSkillId, setOpenSkillId] = useState<string | null>(null);

    // Reset loading state when the box closes
    useEffect(() => {
        if (!isOpen) {
            setIsLoading(true);
            setOpenCategoryId(null);
            setOpenSkillId(null);
        }
    }, [isOpen]);

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth"
        });
    };

    const handleToggleCategory = (id: string) => {
        setOpenCategoryId(openCategoryId === id ? null : id);
        setOpenSkillId(null); // Close skill log when switching categories
    };

    const handleToggleSkill = (id: string) => {
        setOpenSkillId(openSkillId === id ? null : id);
    };

    const boxVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" as any, delay: 0.2 }
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: { duration: 0.4, ease: "easeOut" as any }
        }
    };

    return (
        <motion.div
            variants={boxVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                transformOrigin: isMobile ? "top" : "top left"
            }}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 min-h-0 max-h-[70vh] bg-alpine-mist/5 backdrop-blur-md border border-glacier-steel/20 flex flex-col mx-8 mb-24 md:mx-0 md:ml-0 md:mr-16 md:mt-16 md:mb-40 overflow-hidden"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-glacier-steel/20 shrink-0 bg-night-summit/50">
                <div className="font-oxanium text-base text-white tracking-widest uppercase">
                    [ SKILLS_TERMINAL ]
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-2">
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 hover:bg-glacier-steel/20 transition-colors text-alpine-mist/80 hover:text-white font-oxanium text-xs px-3 py-1.5 rounded-sm"
                        >
                            <span>[</span> <ChevronUp size={14} /> <span>]</span>
                        </button>
                        <button
                            onClick={scrollToBottom}
                            className="flex items-center gap-2 hover:bg-glacier-steel/20 transition-colors text-alpine-mist/80 hover:text-white font-oxanium text-xs px-3 py-1.5 rounded-sm"
                        >
                            <span>[</span> <ChevronDown size={14} /> <span>]</span>
                        </button>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 hover:bg-red-500/20 transition-colors text-white font-oxanium text-xs px-3 py-1.5 rounded-sm"
                    >
                        <span>[</span> <X size={14} /> <span>]</span>
                    </button>
                </div>
            </div>

            {/* Content Viewport */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar font-oxanium p-6"
            >
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <LoadingSequence
                            key="loading"
                            onComplete={() => setIsLoading(false)}
                        />
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col gap-4"
                        >
                            {SKILLS_DATA.map((category) => (
                                <div key={category.id} className="flex flex-col">
                                    <button
                                        onClick={() => handleToggleCategory(category.id)}
                                        className={`flex items-center gap-4 p-4 border transition-all duration-300 group ${openCategoryId === category.id
                                            ? 'bg-glacier-steel/10 border-glacier-steel/40'
                                            : 'bg-white/5 border-glacier-steel/10 hover:border-glacier-steel/30'
                                            }`}
                                    >
                                        <motion.div
                                            animate={{ rotate: openCategoryId === category.id ? 90 : 0 }}
                                            className="text-blue-400"
                                        >
                                            <ChevronRight size={18} />
                                        </motion.div>
                                        <span className={`text-sm tracking-[0.2em] font-oxanium uppercase transition-colors ${openCategoryId === category.id ? 'text-white' : 'text-alpine-mist/60 group-hover:text-white'
                                            }`}>
                                            [{category.id}] {category.title}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {openCategoryId === category.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden bg-white/5 border-x border-b border-glacier-steel/20"
                                            >
                                                <div className="p-6 flex flex-col">
                                                    {category.skills.map((skill) => (
                                                        <SkillEntry
                                                            key={skill.id}
                                                            skill={skill}
                                                            isOpen={openSkillId === skill.id}
                                                            onToggle={() => handleToggleSkill(skill.id)}
                                                            isVisible={openCategoryId === category.id}
                                                        />
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
