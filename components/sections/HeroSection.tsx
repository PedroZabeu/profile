'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSettingsStore } from '@/stores/settings';
import { HeroThreads } from '@/components/blocks/hero/HeroThreads';
import { HeroHeadline } from '@/components/blocks/hero/HeroHeadline';
import { HeroCta } from '@/components/blocks/hero/HeroCta';
import { getThreadColor, HERO_ANIMATIONS, type SizeVariant } from '@/types';

export function HeroSection() {
    const { language, color, size, loop } = useSettingsStore();

    const threadColor = useMemo(
        () => getThreadColor(color || 'teal'),
        [color]
    );

    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center px-6"
        >
            {/* Threads Background - Absolute positioned behind content */}
            <div className="absolute inset-0 z-0">
                <HeroThreads color={threadColor as [number, number, number]} />
            </div>

            {/* Content Container - Above threads, shifted up */}
            <motion.div
                {...HERO_ANIMATIONS.entrance}
                className="relative z-10 text-center max-w-4xl pb-[15vh]"
            >
                <HeroHeadline
                    language={language}
                    showRotation={loop === 'on'}
                    size={size as SizeVariant}
                />

                <div className="mt-8">
                    <HeroCta language={language} />
                </div>
            </motion.div>
        </section>
    );

}

export default HeroSection;
