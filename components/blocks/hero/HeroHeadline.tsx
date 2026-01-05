'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { WordRotate } from '@/components/ui/word-rotate';
import { HeroStaticTitle } from '@/components/ui/hero-static-title';
import { HeroSubtitle } from '@/components/ui/hero-subtitle';
import { EXPERTISE_AREAS, HERO_TEXTS, HERO_SIZE_CLASSES, HERO_ANIMATIONS, type HeroHeadlineProps } from '@/types';

export function HeroHeadline({
    language,
    showRotation = true,
    className,
    headlineClassName,
    size = 'default',
}: HeroHeadlineProps) {
    const texts = HERO_TEXTS[language];
    const areas = EXPERTISE_AREAS[language];
    const sizes = HERO_SIZE_CLASSES[size];

    return (
        <div className={cn('flex flex-col items-center text-center', className)}>
            <AnimatePresence mode="wait">
                <HeroStaticTitle
                    key={`title-${language}`}
                    text={texts.headline}
                    size={size}
                    className={headlineClassName}
                />
            </AnimatePresence>

            {showRotation && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`rotation-${language}`}
                        {...HERO_ANIMATIONS.blurFade}
                        className="hero-rotation-container"
                    >
                        <WordRotate
                            words={[...areas]}
                            duration={3000}
                            className={cn('font-bold text-cv-accent', sizes.area)}
                            motionProps={HERO_ANIMATIONS.rotateWord}
                        />
                    </motion.div>
                </AnimatePresence>
            )}

            <div className="overflow-hidden mt-8 mb-4">
                <AnimatePresence mode="wait">
                    <HeroSubtitle
                        key={`subtitle-${language}`}
                        text={texts.subtitle}
                        size={size}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}
