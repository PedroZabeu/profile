'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { HERO_ANIMATIONS, HERO_SIZE_CLASSES, type SizeVariant } from '@/types';

interface HeroStaticTitleProps {
    text: string;
    size?: SizeVariant;
    className?: string;
}

export function HeroStaticTitle({ text, size = 'default', className }: HeroStaticTitleProps) {
    const sizes = HERO_SIZE_CLASSES[size];

    return (
        <motion.h1
            {...HERO_ANIMATIONS.blurFade}
            className={cn(
                'hero-headline',
                sizes.headline,
                className
            )}
        >
            {text}
        </motion.h1>
    );
}
