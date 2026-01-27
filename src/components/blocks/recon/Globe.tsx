"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion, useSpring } from "framer-motion";
import { ADVENTURE_CLUSTERS } from "@/lib/data/adventures";

interface GlobeProps {
    delay?: number;
    focusLocation?: { lat: number; lng: number } | null;
}

export const Globe = ({ delay = 1.2, focusLocation }: GlobeProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);

    // Spring values for smooth transition
    const r = useSpring(0, {
        stiffness: 280,
        damping: 40,
        mass: 1,
    });

    const focusR = useSpring(0, {
        stiffness: 280,
        damping: 40,
    });

    // Prepare markers from all clusters
    const allMarkers = ADVENTURE_CLUSTERS.flatMap(cluster =>
        cluster.adventures.map(adv => ({
            location: [adv.lat, adv.lng] as [number, number],
            size: 0.05
        }))
    );

    useEffect(() => {
        let phi = 0;
        let width = 0;

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
            baseColor: [0.05, 0.1, 0.16],
            markerColor: [0.51, 0.72, 0.96],
            glowColor: [0.51, 0.72, 0.96],
            markers: allMarkers,
            onRender: (state) => {
                if (!focusLocation) {
                    phi += 0.003;
                    state.phi = phi + r.get();
                } else {
                    // Logic to rotate to specific lat/lng
                    // cobe phi is longitude in radians, but it rotates.
                    // We need to map lng to phi.
                    const targetPhi = -(focusLocation.lng * Math.PI) / 180;
                    const targetTheta = (focusLocation.lat * Math.PI) / 180;

                    // We use r and focusR to smoothly transition
                    state.phi = targetPhi + r.get();
                    state.theta = 0.3 + (targetTheta * 0.5); // Subtle tilt adjustment
                }
                state.width = width * 2;
                state.height = width * 2;
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
    }, []);

    // Effect to handle slow rotation reset or specific focus
    useEffect(() => {
        if (focusLocation) {
            // When focusing, we might want to reset the manual rotation
            r.set(0);
        }
    }, [focusLocation, r]);

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
