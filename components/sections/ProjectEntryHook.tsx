'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSettingsStore } from '@/stores/settings';
import { ProjectEntryHookProps, PROJECT_ENTRY_TEXTS } from '@/types';

export function ProjectEntryHook({ 
  className = '',
  autoScrollDelay = 3000,
  enableAutoScroll = true
}: Omit<ProjectEntryHookProps, 'language'>) {
  const { language } = useSettingsStore();
  const [isVisible, setIsVisible] = useState(false);
  const [autoScrollTriggered, setAutoScrollTriggered] = useState(false);
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

  // Auto-scroll para Betting Management após delay
  useEffect(() => {
    if (!isVisible || autoScrollTriggered || !enableAutoScroll) return;

    const timer = setTimeout(() => {
      const bettingElement = document.getElementById('betting-mgmt');
      if (bettingElement) {
        bettingElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        setAutoScrollTriggered(true);
      }
    }, autoScrollDelay);

    return () => clearTimeout(timer);
  }, [isVisible, autoScrollTriggered, autoScrollDelay, autoScrollDelay]);

  // Handler para click no CTA
  const handleCtaClick = () => {
    const bettingElement = document.getElementById('betting-mgmt');
    if (bettingElement) {
      bettingElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      setAutoScrollTriggered(true);
    }
  };

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
        relative min-h-screen flex items-center justify-center
        py-32 md:py-48
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

          {/* CTA com Glow Efeito */}
          <motion.div 
            variants={itemAnimation}
            className="pt-8"
          >
            <button
              onClick={handleCtaClick}
              className={`
                relative group
                text-2xl md:text-3xl
                font-semibold text-cv-accent
                cursor-pointer
                transition-all duration-300 ease-out
                hover:scale-105
                
                /* Glow effect base */
                before:absolute before:inset-0
                before:blur-xl before:opacity-50
                before:bg-cv-accent before:rounded-full
                before:transition-all before:duration-300
                
                /* Glow animation */
                animate-pulse-glow
                
                /* Hover glow intensification */
                hover:before:blur-[30px] hover:before:opacity-80
                
                /* Linhas decorativas */
                flex items-center justify-center gap-4 md:gap-8
              `}
              style={{
                textShadow: '0 0 20px oklch(0.85 0.21 200 / 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = 
                  '0 0 30px oklch(0.85 0.21 200 / 0.8), 0 0 50px oklch(0.85 0.21 200 / 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = 
                  '0 0 20px oklch(0.85 0.21 200 / 0.5)';
              }}
            >
              {/* Linha esquerda */}
              <div className="h-px bg-gradient-to-r from-transparent via-cv-accent/60 to-transparent flex-1 max-w-[100px] md:max-w-[150px]" />
              
              {/* Texto do CTA */}
              <span className="relative z-10">
                {texts.cta[language]}
              </span>
              
              {/* Linha direita */}
              <div className="h-px bg-gradient-to-r from-transparent via-cv-accent/60 to-transparent flex-1 max-w-[100px] md:max-w-[150px]" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Estilos CSS para animação glow suave */}
      <style jsx>{`
        @keyframes softPulseGlow {
          0%, 100% {
            text-shadow: 0 0 20px oklch(0.85 0.21 200 / 0.5);
          }
          50% {
            text-shadow: 0 0 25px oklch(0.85 0.21 200 / 0.7);
          }
        }

        .animate-pulse-glow {
          animation: softPulseGlow 3s ease-in-out infinite;
        }

        /* Optimized glow para mobile */
        @media (max-width: 768px) {
          .animate-pulse-glow {
            animation: softPulseGlowMobile 3s ease-in-out infinite;
          }
        }

        @keyframes softPulseGlowMobile {
          0%, 100% {
            text-shadow: 0 0 15px oklch(0.85 0.21 200 / 0.4);
          }
          50% {
            text-shadow: 0 0 20px oklch(0.85 0.21 200 / 0.6);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-glow {
            animation: none;
            text-shadow: 0 0 20px oklch(0.85 0.21 200 / 0.5);
          }
        }

        /* GPU acceleration */
        .group {
          transform: translateZ(0);
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}