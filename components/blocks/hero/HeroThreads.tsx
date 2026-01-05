'use client';

import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { HeroThreadsProps } from '@/types';

// Dynamic import for WebGL component to avoid SSR issues
const Threads = dynamic(() => import('@/components/reactbits/threads'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background" />,
});

export function HeroThreads({ className, color }: HeroThreadsProps) {
    return (
        <div className={cn('h-full w-full', className)}>
            <Threads
                color={color}
                enableMouseInteraction={true}
                className="h-full w-full"
            />
        </div>
    );
}

