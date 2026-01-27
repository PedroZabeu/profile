"use client";

import { useEffect, useRef, useMemo } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { ADVENTURE_CLUSTERS } from "@/lib/data/adventures";

interface GlobeProps {
    delay?: number;
    focusLocation?: { lat: number; lng: number } | null;
    onLockComplete?: () => void;
}

export const Globe = ({ delay = 1.2, focusLocation, onLockComplete }: GlobeProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const focusAnglesRef = useRef<[number, number]>([0, 0]);
    const activeLocationRef = useRef<{ lat: number; lng: number } | null>(null);
    const isLockedRef = useRef(false);

    // Use refs for animation state to prevent resets during re-renders
    const currentPhiRef = useRef(0);
    const currentThetaRef = useRef(0.3);

    // Helper to convert lat/long to COBE angles
    const locationToAngles = (lat: number, long: number): [number, number] => {
        return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
    };

    // Prepare unique markers from all clusters to avoid overlapping glow
    const allMarkers = useMemo(() => {
        const uniqueMarkers = new Map<string, { location: [number, number]; size: number }>();

        ADVENTURE_CLUSTERS.forEach(cluster => {
            cluster.adventures.forEach(adv => {
                const key = `${adv.lat},${adv.lng}`;
                if (!uniqueMarkers.has(key)) {
                    uniqueMarkers.set(key, {
                        location: [adv.lat, adv.lng],
                        size: 0.05
                    });
                }
            });
        });

        return Array.from(uniqueMarkers.values());
    }, []);

    // Update refs when props change
    useEffect(() => {
        activeLocationRef.current = focusLocation ?? null;
        if (focusLocation) {
            focusAnglesRef.current = locationToAngles(focusLocation.lat, focusLocation.lng);
            isLockedRef.current = false;
        }
    }, [focusLocation]);

    useEffect(() => {
        let width = 0;
        const doublePi = Math.PI * 2;

        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };
        window.addEventListener("resize", onResize);
        onResize();

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.05, 0.1, 0.16], // Dark Alpine Blue
            markerColor: [1, 1, 1], // Pure White for clean technical look
            glowColor: [1, 1, 1], // White Glow
            markers: allMarkers,
            onRender: (state) => {
                state.width = width * 2;
                state.height = width * 2;

                const targetLocation = activeLocationRef.current;

                if (!targetLocation) {
                    // IDLE DRIFT
                    currentPhiRef.current += 0.003;
                    state.phi = currentPhiRef.current;
                    state.theta = currentThetaRef.current;
                    isLockedRef.current = false;
                } else {
                    // TARGET LOCK ROTATION
                    const [focusPhi, focusTheta] = focusAnglesRef.current;
                    const distPositive = (focusPhi - currentPhiRef.current + doublePi) % doublePi;
                    const distNegative = (currentPhiRef.current - focusPhi + doublePi) % doublePi;

                    // Shortest path rotation
                    if (distPositive < distNegative) {
                        currentPhiRef.current += distPositive * 0.08;
                    } else {
                        currentPhiRef.current -= distNegative * 0.08;
                    }

                    // Theta interpolation
                    currentThetaRef.current = currentThetaRef.current * 0.92 + focusTheta * 0.08;

                    state.phi = currentPhiRef.current;
                    state.theta = currentThetaRef.current;

                    // Check for lock completion (very close to target)
                    const totalDist = Math.abs(distPositive < distNegative ? distPositive : distNegative);
                    if (totalDist < 0.01 && !isLockedRef.current) {
                        isLockedRef.current = true;
                        if (onLockComplete) onLockComplete();
                    }
                }
            },
        });

        setTimeout(() => {
            if (canvasRef.current) {
                canvasRef.current.style.opacity = "1";
            }
        });

        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [allMarkers, onLockComplete]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: delay,
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center"
        >
            <div className="absolute inset-0 rounded-full bg-alpine-blue/5 blur-3xl" />
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    contain: "layout paint size",
                    opacity: 0,
                    transition: "opacity 1s ease"
                }}
            />
        </motion.div>
    );
};
