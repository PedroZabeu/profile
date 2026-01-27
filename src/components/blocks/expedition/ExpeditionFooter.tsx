"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailIcon } from "@/components/MailIcon";
import { LinkedInIcon } from "@/components/LinkedinIcon";
import { GithubIcon } from "@/components/GithubIcon";
import { MessageCircleIcon } from "@/components/MessageCircleIcon";
import { SendIcon } from "@/components/SendIcon";
import { Check, Copy } from "lucide-react";

const ContactIcon = ({
    Icon,
    label,
    href,
    value,
    iconColor
}: {
    Icon: any;
    label: string;
    href: string;
    value: string;
    iconColor?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -5 }}
                        exit={{ opacity: 0, y: 10 }}
                        onClick={handleCopy}
                        className="absolute bottom-full right-0 mb-4 z-50 cursor-pointer pointer-events-auto"
                    >
                        <div className="bg-night-summit/90 backdrop-blur-md border border-glacier-steel/30 px-3 py-1.5 flex items-center gap-3">
                            <span className="text-alpine-mist font-oxanium text-[10px] tracking-wider whitespace-nowrap">
                                {copied ? "COPIED_TO_CLIPBOARD" : `[ ${label.toUpperCase()}: ${value} ]`}
                            </span>
                            {copied ? (
                                <Check className="w-3 h-3 text-green-400" />
                            ) : (
                                <Copy className="w-3 h-3 text-glacier-steel/70" />
                            )}
                        </div>
                        {/* Tooltip Small Indicator - Aligned to the center of the 40px icon (20px from right) */}
                        <div className="absolute top-full right-5 -translate-x-1/2 -mt-[1px]">
                            <div className="w-1.5 h-1.5 bg-night-summit/90 border-r border-b border-glacier-steel/30 rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${iconColor || 'text-alpine-mist'}`}
            >
                <Icon className="w-6 h-6" />
            </a>
            <span className="text-[8px] tracking-[0.2em] text-alpine-mist/50 font-oxanium mt-1">
                {label.toUpperCase()}
            </span>
        </div>
    );
};

export const ExpeditionFooter = ({ standalone = true }: { standalone?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className={standalone ? "absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20" : "relative"}
        >
            <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                    <span className="font-oxanium text-sm tracking-[0.3em] text-alpine-mist font-bold">CONTACT</span>
                </div>

                <div className="flex items-center gap-4">
                    <ContactIcon
                        Icon={MessageCircleIcon}
                        label="WhatsApp"
                        href="https://wa.me/5511971229926"
                        value="+55 11 97122-9926"
                        iconColor="text-green-500"
                    />
                    <ContactIcon
                        Icon={SendIcon}
                        label="Telegram"
                        href="https://t.me/pzabeu"
                        value="@pzabeu"
                        iconColor="text-blue-500"
                    />
                    <ContactIcon
                        Icon={LinkedInIcon}
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/pedro-ivo-barreto-zabeu-95a066111/"
                        value="https://www.linkedin.com/in/pedro-ivo-barreto-zabeu-95a066111/"
                    />
                    <ContactIcon
                        Icon={GithubIcon}
                        label="GitHub"
                        href="https://github.com/pzabeu"
                        value="github.com/pzabeu"
                    />
                    <ContactIcon
                        Icon={MailIcon}
                        label="Email"
                        href="mailto:pedroibzabeu@gmail.com"
                        value="pedroibzabeu@gmail.com"
                    />
                </div>
            </div>
        </motion.div>
    );
};
