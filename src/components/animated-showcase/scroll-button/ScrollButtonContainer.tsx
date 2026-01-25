"use client";

import { MotionValue } from "framer-motion";
import AnimatedScrollButton from "./AnimatedScrollButton";

interface ScrollButtonContainerProps {
    mousePosition: { x: number; y: number };
    backgroundY: MotionValue<number>;
}

export default function ScrollButtonContainer({ 
    mousePosition, 
    backgroundY 
}: ScrollButtonContainerProps) {
    return (
        <div className="absolute inset-0">
            <AnimatedScrollButton
                mousePosition={mousePosition}
                backgroundY={backgroundY}
            />
        </div>
    );
}