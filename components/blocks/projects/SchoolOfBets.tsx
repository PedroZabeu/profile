'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Clock,
  CheckCircle,
  BookOpen,
  FileText,
  Play,
  TrendingUp,
  Calculator,
  PlayCircle,
  CheckSquare,
  RefreshCw,
  ExternalLink,
  LayoutGrid
} from 'lucide-react'
import { ProjectFeature } from './templates/ProjectFeature';
import { ProjectFeatureText } from '@/components/ui/projects/project-feature-text';
import { ProjectFeatureDemo } from '@/components/ui/projects/project-feature-demo';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { useSettingsStore } from '@/stores/settings';
import type {
  SchoolCourseProps,
  SchoolProgressData,
  SchoolModuleData
} from '@/types'

// Componente Progress Bar (reaproveitando sistema de animações existente)
const SchoolProgressBar: React.FC<{
  progress: number;
  isAnimated?: boolean;
}> = React.memo(({ progress, isAnimated = true }) => {
  return (
    <div className="w-full bg-border/40 rounded-full h-1.5 overflow-hidden">
      <div
        className={`h-full bg-cv-accent transition-all duration-1000 ease-out ${isAnimated ? 'animate-pulse' : ''}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
})

SchoolProgressBar.displayName = 'SchoolProgressBar'

// Componente principal SchoolCourse
export const SchoolCourse: React.FC<SchoolCourseProps> = ({
  progress,
  currentModule,
  onContinueLearning,
  className,
  motionProps
}) => {
  const language = 'pt' // Padrão para o demo

  const texts = {
    pt: {
      dashboard: 'Dashboard',
      modules: 'Módulos',
      stats: 'Estatísticas',
      progress: 'Meu Progresso',
      timeSpent: 'Tempo de Estudo',
      avgScore: 'Nota Média',
      continue: 'Continuar Aula',
      lessons: 'aulas',
      completed: 'concluído',
      next: 'Próxima'
    },
    en: {
      dashboard: 'Dashboard',
      modules: 'Modules',
      stats: 'Statistics',
      progress: 'My Progress',
      timeSpent: 'Study Time',
      avgScore: 'Avg Score',
      continue: 'Continue Lesson',
      lessons: 'lessons',
      completed: 'completed',
      next: 'Next'
    }
  }[language]

  return (
    <motion.div
      className={`flex h-full w-full bg-background overflow-hidden ${className || ''}`}
      {...motionProps}
    >
      {/* Sidebar Decorativa */}
      <div className="hidden sm:flex flex-col w-12 lg:w-16 border-r border-border/50 items-center py-6 gap-6 bg-card/30">
        <div className="p-2 rounded-xl bg-cv-accent/10 text-cv-accent">
          <GraduationCap size={20} />
        </div>
        <div className="p-2 rounded-xl text-muted-foreground/50 hover:text-cv-accent transition-colors">
          <LayoutGrid size={20} />
        </div>
        <div className="p-2 rounded-xl text-muted-foreground/50 hover:text-cv-accent transition-colors">
          <BookOpen size={20} />
        </div>
        <div className="p-2 rounded-xl text-muted-foreground/50 hover:text-cv-accent transition-colors">
          <TrendingUp size={20} />
        </div>
        <div className="mt-auto p-2 rounded-xl text-muted-foreground/20">
          <Calculator size={20} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <div className="h-14 border-b border-border/50 flex items-center justify-between px-6 bg-card/10">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-cv-text-primary">School of Bets</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cv-accent/20 text-cv-accent font-bold tracking-wider uppercase">Beta</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cv-accent/10 border border-cv-accent/20 flex items-center justify-center text-[10px] font-bold text-cv-accent">
              PZ
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Header Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-border/50 bg-card/30 space-y-1">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{texts.progress}</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-cv-text-primary">{progress.overallProgress}%</span>
                <span className="text-[10px] text-cv-accent mb-1.5">+5% exp</span>
              </div>
              <SchoolProgressBar progress={progress.overallProgress} />
            </div>
            <div className="p-4 rounded-2xl border border-border/50 bg-card/30 space-y-1">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{texts.timeSpent}</p>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-cv-accent" />
                <span className="text-xl font-bold text-cv-text-primary">12.5h</span>
              </div>
              <p className="text-[10px] text-muted-foreground">8h left to target</p>
            </div>
            <div className="hidden lg:block p-4 rounded-2xl border border-border/50 bg-card/30 space-y-1">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{texts.avgScore}</p>
              <div className="flex items-center gap-2">
                <CheckSquare size={16} className="text-cv-accent" />
                <span className="text-xl font-bold text-cv-text-primary">8.5 / 10</span>
              </div>
              <p className="text-[10px] text-muted-foreground">Top 15% of students</p>
            </div>
          </div>

          {/* Current Module Hero */}
          <div className="relative group overflow-hidden rounded-3xl border border-cv-accent/30 bg-cv-accent/5 p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-cv-accent">
                  <PlayCircle size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">{texts.next}</span>
                </div>
                <h3 className="text-xl font-bold text-cv-text-primary tracking-tight">{currentModule.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{currentModule.description}</p>
              </div>
              <div className="hidden sm:block p-3 rounded-2xl bg-cv-accent/10 border border-cv-accent/20">
                <BookOpen className="text-cv-accent" size={24} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-2">
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-muted-foreground" />
                <span className="text-xs text-foreground font-medium">{currentModule.completedLessons}/{currentModule.totalLessons} {texts.lessons}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-cv-accent" />
                <span className="text-xs text-foreground font-medium">{currentModule.progress}% {texts.completed}</span>
              </div>
            </div>

            <button
              onClick={onContinueLearning}
              className="w-full py-3 px-4 bg-cv-accent text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Play size={16} fill="currentColor" />
              {texts.continue}
            </button>

            {/* Background elements para "preencher" e dar elegância */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <GraduationCap size={160} />
            </div>
          </div>

          {/* Additional Preview Section */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{texts.modules}</p>
            <div className="space-y-2 opacity-50">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-border/30 bg-card/10 grayscale">
                  <div className="w-8 h-8 rounded-lg bg-border/20 flex items-center justify-center">
                    <CheckCircle size={14} className="text-cv-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-border/40 rounded italic" />
                  </div>
                  <div className="h-2 w-8 bg-border/20 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

SchoolCourse.displayName = 'SchoolCourse'

// Component wrapper following same pattern as other projects
export function SchoolOfBets() {
  const { language } = useSettingsStore();

  // Demo data (reaproveitando dados do plano)
  const mockProgress: SchoolProgressData = {
    currentModule: 3,
    totalModules: 5,
    overallProgress: 65,
    modulesCompleted: 2,
    estimatedHoursLeft: 8
  };

  const mockCurrentModule: SchoolModuleData = {
    id: 'module-3',
    title: language === 'pt' ? 'Módulo 3: Value Bets' : 'Module 3: Value Bets',
    description: 'Conceitos avançados de value betting',
    totalLessons: 12,
    completedLessons: 8,
    progress: 66,
    isLocked: false,
    nextLesson: language === 'pt' ? 'Introdução a Arbitragem' : 'Introduction to Arbitrage'
  };

  return (
    <div className="space-y-6">
      {/* App Name - Outside the main alignment grid */}
      <div className="text-sm font-medium text-cv-accent">
        School of Bets
      </div>

      <ProjectFeature>
        <div className="lg:col-span-2">
          <ProjectFeatureText
            title={language === 'pt' ? 'Plataforma Educacional para Apostadores' : 'Educational Platform for Bettors'}
            description={language === 'pt'
              ? 'Ambiente de ensino voltado para quem quer entender apostas com base em fundamentos matemáticos e estatísticos — sem complexidade desnecessária.'
              : 'A learning environment designed for those who want to understand betting through mathematical and statistical fundamentals.'
            }
            features={[
              {
                icon: <TrendingUp size={20} className="text-cv-accent" />,
                text: language === 'pt'
                  ? 'Conteúdo progressivo com foco em aplicação no mundo real'
                  : 'Progressive content focused on real-world application'
              },
              {
                icon: <Calculator size={20} className="text-cv-accent" />,
                text: language === 'pt'
                  ? 'Explicação simplificada de conceitos quantitativos essenciais'
                  : 'Simplified explanations of essential quantitative concepts'
              },
              {
                icon: <PlayCircle size={20} className="text-cv-accent" />,
                text: language === 'pt'
                  ? 'Simulações práticas que conectam teoria e tomada de decisão'
                  : 'Practical simulations that connect theory to decision-making'
              },
              {
                icon: <CheckSquare size={20} className="text-cv-accent" />,
                text: language === 'pt'
                  ? 'Exercícios com feedback em tempo real para reforço do aprendizado'
                  : 'Exercises with real-time feedback to reinforce learning'
              },
              {
                icon: <RefreshCw size={20} className="text-cv-accent" />,
                text: language === 'pt'
                  ? 'Plataforma aprimorada continuamente ao longo do beta'
                  : 'Platform continuously improved throughout beta phase'
              }
            ]}
            language={language}
          />
        </div>

        <ProjectFeatureDemo>
          <SchoolCourse
            progress={mockProgress}
            currentModule={mockCurrentModule}
            onContinueLearning={() => console.log('Continue learning')}
          />
        </ProjectFeatureDemo>
      </ProjectFeature>

      {/* CTA Button - Outside the main alignment grid */}
      <div className="pt-4">
        <ShimmerButton
          shimmerColor="var(--cv-accent)"
          shimmerSize="0.1em"
          background="var(--cv-btn-primary-bg)"
          className="text-black font-semibold hover:scale-105 transition-transform flex items-center gap-2"
          onClick={() => window.open('https://school-of-bets.vercel.app/', '_blank')}
        >
          <ExternalLink className="w-4 h-4" />
          {language === 'pt' ? 'Conheça a plataforma' : 'Explore platform'}
        </ShimmerButton>
      </div>
    </div>
  );
}