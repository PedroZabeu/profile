'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSettingsStore } from '@/stores/settings';
import { ProjectEntryHookProps, PROJECT_ENTRY_TEXTS } from '@/types';

export function ProjectEntryHook({ 
  className = ''
}: Omit<ProjectEntryHookProps, 'language'>) {
  const { language } = useSettingsStore();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const texts = PROJECT_ENTRY_TEXTS;

  // Detecta quando a seção está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animações cinematográficas
  const containerAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] // curva ease-out cinematográfica
      }
    }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2 // 200ms delay entre elementos
      }
    }
  };

  const itemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="project-entry-hook"
      className={`
        relative flex items-center justify-center
        py-16 md:py-24
        ${className}
      `}
    >
      <motion.div
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        variants={containerAnimation}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <motion.div
          variants={staggerChildren}
          className="space-y-8 md:space-y-12"
        >
          {/* Título Principal */}
          <motion.h1 
            variants={itemAnimation}
            className={`
              hero-headline
              text-5xl md:text-6xl lg:text-7xl
              text-cv-text-primary font-bold
              leading-tight
            `}
          >
            {texts.title[language]}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            variants={itemAnimation}
            className={`
              text-xl md:text-2xl
              text-foreground/80
              max-w-3xl mx-auto
              leading-relaxed
            `}
          >
            {texts.subtitle[language]}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}