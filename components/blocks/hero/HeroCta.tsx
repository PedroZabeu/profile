'use client';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { HERO_TEXTS, HERO_ANIMATIONS, type HeroCtaProps } from '@/types';

export function HeroCta({ language, className, variant = 'default' }: HeroCtaProps) {
    const texts = HERO_TEXTS[language];

    return (
        <motion.div
            {...HERO_ANIMATIONS.entrance}
            className={cn(
                'flex gap-4',
                variant === 'stacked' ? 'flex-col w-full max-w-xs' : 'flex-col sm:flex-row items-center justify-center',
                className
            )}
        >
            <ShimmerButton
                shimmerColor="var(--cv-btn-primary-shimmer)"
                shimmerSize="0.1em"
                background="var(--cv-btn-primary-bg)"
                className="text-black font-semibold hover:scale-105 transition-transform"
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={`cta-primary-${language}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {texts.ctaPrimary}
                    </motion.span>
                </AnimatePresence>
            </ShimmerButton>

            <ShimmerButton
                shimmerColor="var(--cv-accent)"
                shimmerSize="0.05em"
                background="var(--cv-btn-secondary-bg)"
                className="text-white font-medium hover:scale-105 transition-transform border border-[var(--cv-btn-secondary-border)]"
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={`cta-secondary-${language}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {texts.ctaSecondary}
                    </motion.span>
                </AnimatePresence>
            </ShimmerButton>
        </motion.div>
    );
}
