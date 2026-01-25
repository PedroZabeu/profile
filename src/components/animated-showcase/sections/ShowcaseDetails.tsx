"use client";

import { MessageCircleIcon } from "@/components/MessageCircleIcon";
import { SendIcon } from "@/components/SendIcon";
import { LinkedInIcon } from "@/components/LinkedinIcon";
import { GithubIcon } from "@/components/GithubIcon";
import { MailIcon } from "@/components/MailIcon";
import ContactIcon from "./ContactIcon";

export default function ShowcaseDetails() {
    return (
        <section id="showcase-details" className="relative z-30 min-h-[70vh] bg-[#0D1B2A] text-white p-8 md:p-20 flex flex-col items-center justify-center border-t border-white/5">

            {/* Logo Design Section */}
            <div className="max-w-2xl text-center space-y-6 mb-16">
                <h2 className="text-3xl md:text-5xl font-comfortaa tracking-tighter">Logo Design</h2>
                <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                    A minimalist text-only logo crafted with the Comfortaa font, inspired by the clean and rugged aesthetics of mountain landscapes and Pedro&apos;s love for the outdoors and mountains. &quot;pedro&quot; uses the deep Night Summit tone, while &quot;.zabeu&quot; features a vibrant blue accent, reflecting the blend of professional depth and outdoor energy.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8">
                    <div className="flex flex-col items-center h-20 justify-end">
                        <div className="text-[#F1F5F9] font-comfortaa text-xs md:text-sm font-bold mb-2" style={{ fontFamily: "'Comfortaa', cursive" }}>
                            COMFORTAA
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500">LOGO FONT</span>
                    </div>
                    <div className="flex flex-col items-center h-20 justify-end">
                        <div className="w-12 h-1 bg-[#0D1B2A] border border-white/30 mb-2" />
                        <span className="text-[10px] uppercase tracking-widest text-slate-500">NIGHT SUMMIT</span>
                    </div>
                    <div className="flex flex-col items-center h-20 justify-end">
                        <div className="w-12 h-1 bg-[#82b7f5] mb-2" />
                        <span className="text-[10px] uppercase tracking-widest text-slate-500">ALPINE BLUE</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />

            {/* Expedition Briefing Section */}
            <div className="max-w-2xl text-center space-y-6 mb-16">
                <h2 className="text-3xl md:text-5xl font-comfortaa tracking-tighter">Expedition Briefing Cards</h2>
                <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                    The interactive CTA cards draw inspiration from expedition mission briefings, where precision, clarity, and comprehensive planning are essential for success.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8">
                    <div className="flex flex-col items-center h-20 justify-end">
                        <div className="text-[#F1F5F9] font-oxanium text-xs md:text-sm font-bold mb-2" style={{ fontFamily: "'Oxanium', sans-serif" }}>
                            OXANIUM
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500">EXPEDITION FONT</span>
                    </div>
                    <div className="flex flex-col items-center h-20 justify-end">
                        <div className="w-12 h-1 bg-[#F1F5F9] mb-2" />
                        <span className="text-[10px] uppercase tracking-widest text-slate-500">ALPINE MIST</span>
                    </div>
                    <div className="flex flex-col items-center h-20 justify-end">
                        <div className="w-1 h-1 bg-[#F1F5F9] rounded-full mb-2 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest text-slate-500">EXPEDITION DOT</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />

            {/* Contact Section */}
            <div id="contact-section" className="max-w-2xl text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-comfortaa tracking-tighter">Get In Touch</h2>
                <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                    Let&apos;s connect and discuss your next outdoor adventure or project.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-12">
                    {/* WhatsApp */}
                    <ContactIcon
                        href="https://wa.me/5511971229926"
                        icon={MessageCircleIcon}
                        label="WhatsApp"
                        value="+55 11 97122-9926"
                        iconColor="text-green-500"
                    />

                    {/* Telegram */}
                    <ContactIcon
                        href="https://t.me/pzabeu"
                        icon={SendIcon}
                        label="Telegram"
                        value="@pzabeu"
                        iconColor="text-blue-500"
                    />

                    {/* LinkedIn */}
                    <ContactIcon
                        href="https://www.linkedin.com/in/pedro-ivo-barreto-zabeu-95a066111/"
                        icon={LinkedInIcon}
                        label="LinkedIn"
                        value="https://www.linkedin.com/in/pedro-ivo-barreto-zabeu-95a066111/"
                    />

                    {/* GitHub */}
                    <ContactIcon
                        href="https://github.com/pedrozabeu"
                        icon={GithubIcon}
                        label="GitHub"
                        value="https://github.com/pedrozabeu"
                    />

                    {/* Email */}
                    <ContactIcon
                        href="mailto:pedroibzabeu@gmail.com"
                        icon={MailIcon}
                        label="Email"
                        value="pedroibzabeu@gmail.com"
                    />
                </div>
            </div>
        </section>
    );
}