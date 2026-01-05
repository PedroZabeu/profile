'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { HERO_ANIMATIONS, HERO_SIZE_CLASSES, type SizeVariant } from '@/types';

interface HeroSubtitleProps {
    text: string;
    size?: SizeVariant;
    className?: string;
}

export function HeroSubtitle({ text, size = 'default', className }: HeroSubtitleProps) {
    const sizes = HERO_SIZE_CLASSES[size];

    return (
        <motion.p
            {...HERO_ANIMATIONS.blurFadeDelay}
            className={cn(
                'text-foreground/60 max-w-2xl mx-auto',
                sizes.subtitle,
                className
            )}
        >
            {text}
        </motion.p>
    );
}
