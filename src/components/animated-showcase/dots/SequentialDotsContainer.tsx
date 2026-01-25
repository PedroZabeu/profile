"use client";

import AnimatedDot from "./AnimatedDot";
import CareerModal from "../../CareerModal";
import ProjectsModal from "../../ProjectsModal";
import AdventuresModal from "../../AdventuresModal";

import { MotionValue } from "framer-motion";

interface SequentialDotsContainerProps {
    mousePosition: { x: number; y: number };
    backgroundY: MotionValue<number>;
}

export default function SequentialDotsContainer({ mousePosition, backgroundY }: SequentialDotsContainerProps) {
    const DOTS_DATA = [
        {
            label: "CAREER",
            position: { x: 25, y: 75 },
            delay: 0.8, // 0.8s after page load
            modal: CareerModal
        },
        {
            label: "PROJECTS",
            position: { x: 50, y: 45 },
            delay: 1.3, // 0.8 + 0.5
            modal: ProjectsModal
        },
        {
            label: "ADVENTURES",
            position: { x: 75, y: 65 },
            delay: 1.8, // 1.3 + 0.5
            modal: AdventuresModal
        }
    ];

    return (
        <div className="absolute inset-0 pointer-events-none">
            {DOTS_DATA.map((dot, index) => (
                <div key={index} className="pointer-events-auto">
                    <AnimatedDot
                        label={dot.label}
                        position={dot.position}
                        mousePosition={mousePosition}
                        backgroundY={backgroundY}
                        delay={dot.delay}
                        modalComponent={dot.modal}
                    />
                </div>
            ))}
        </div>
    );
}
