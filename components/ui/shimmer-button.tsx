'use client';

import React, { CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { ShimmerButtonProps } from '@/types';

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            shimmerColor = 'var(--cv-text-primary)',
            shimmerSize = '0.05em',
            shimmerDuration = '3s',
            borderRadius = 'var(--radius-lg)',
            background = 'var(--cv-btn-primary-bg)',
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                style={
                    {
                        '--spread': '90deg',
                        '--shimmer-color': shimmerColor,
                        '--radius': borderRadius,
                        '--speed': shimmerDuration,
                        '--cut': shimmerSize,
                        '--bg': background,
                    } as CSSProperties
                }
                className={cn(
                    'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/10 whitespace-nowrap text-white [background:var(--bg)]',
                    'px-[var(--cv-spacing-lg)] py-[var(--cv-spacing-sm)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
                    className
                )}
                ref={ref}
                {...props}
            >
                {/* spark container */}
                <div
                    className={cn(
                        '-z-30 blur-[2px]',
                        '[container-type:size] absolute inset-0 overflow-visible'
                    )}
                >
                    {/* spark */}
                    <div className="animate-shimmer-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]">
                        {/* spark before */}
                        <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
                    </div>
                </div>
                {children}

                {/* Highlight */}
                <div
                    className={cn(
                        'absolute inset-0 size-full',
                        'rounded-full px-[var(--cv-spacing-sm)] py-[var(--cv-spacing-xs)] text-[var(--cv-font-size-sm)] font-medium cv-shimmer-highlight',
                        'transform-gpu transition-all duration-300 ease-in-out',
                        'group-hover:cv-shimmer-hover',
                        'group-active:cv-shimmer-active'
                    )}
                />

                {/* backdrop */}
                <div
                    className={cn(
                        'absolute [inset:var(--cut)] -z-20 rounded-full [background:var(--bg)]'
                    )}
                />
            </button>
        );
    }
);

ShimmerButton.displayName = 'ShimmerButton';
