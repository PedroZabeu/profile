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
  ExternalLink
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

// Helper para formatar texto localizado (reaproveitando padrão existing)
const formatLocalizedText = (
  text: string | Record<'pt' | 'en', string>,
  language: 'pt' | 'en'
): string => {
  return typeof text === 'string' ? text : text[language]
}

// Componente Progress Bar (reaproveitando sistema de animações existente)
const SchoolProgressBar: React.FC<{
  progress: number;
  isAnimated?: boolean;
}> = React.memo(({ progress, isAnimated = true }) => {
  return (
    <div className="school-progress-bar">
      <div 
        className={`school-progress-fill ${isAnimated ? 'animated' : ''}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
})

SchoolProgressBar.displayName = 'SchoolProgressBar'

// Componente Progress Metrics (seguindo exatamente o layout do plano)
const SchoolProgressMetrics: React.FC<{
  progress: SchoolProgressData;
  language: 'pt' | 'en';
}> = React.memo(({ progress, language }) => {
  const localizedTexts = {
    pt: {
      seuProgresso: 'SEU PROGRESSO',
      moduloDe: 'Módulo {current} de {total}'
    },
    en: {
      seuProgresso: 'YOUR PROGRESS',
      moduloDe: 'Module {current} of {total}'
    }
  }

  const texts = localizedTexts[language]

  return (
    <div className="school-progress-container">
      <div className="school-progress-header">
        {texts.seuProgresso}
      </div>
      <SchoolProgressBar progress={progress.overallProgress} />
      <div className="school-progress-text text-center">
        {texts.moduloDe.replace('{current}', progress.currentModule.toString()).replace('{total}', progress.totalModules.toString())}
      </div>
    </div>
  )
})

SchoolProgressMetrics.displayName = 'SchoolProgressMetrics'

// Componente Module Card (seguindo exatamente o layout do plano)
const SchoolModuleCard: React.FC<{
  module: SchoolModuleData;
  language: 'pt' | 'en';
  onContinue: () => void;
}> = React.memo(({ module, language, onContinue }) => {
  const localizedTexts = {
    pt: {
      aulas: 'Aulas: {completed} de {total}',
      concluido: 'Concluído: {progress}%',
      proxima: 'Próxima: {nextLesson}',
      continuarAula: 'Continuar Aula'
    },
    en: {
      aulas: 'Lessons: {completed} of {total}',
      concluido: 'Completed: {progress}%',
      proxima: 'Next: {nextLesson}',
      continuarAula: 'Continue Lesson'
    }
  }

  const texts = localizedTexts[language]

  return (
    <div className="school-module-card">
      <div className="school-module-header">
        <BookOpen className="w-5 h-5 text-cv-accent" />
        <h3 className="font-medium text-foreground">{module.title}</h3>
      </div>
      
      <div className="school-module-content space-y-3">
        <div className="school-module-metric">
          <span className="school-module-metric-label flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {texts.aulas.replace('{completed}', module.completedLessons.toString()).replace('{total}', module.totalLessons.toString())}
          </span>
        </div>
        
        <div className="school-module-metric">
          <span className="school-module-metric-label flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cv-accent" />
            {texts.concluido.replace('{progress}', module.progress.toString())}
          </span>
        </div>
        
        {module.nextLesson && (
          <div className="school-module-metric">
            <span className="school-module-metric-label flex items-center gap-2">
              <FileText className="w-4 h-4 text-cv-accent" />
              {texts.proxima.replace('{nextLesson}', module.nextLesson)}
            </span>
          </div>
        )}
      </div>
      
      <button 
        className="school-continue-btn flex items-center gap-2"
        onClick={onContinue}
        disabled={module.isLocked}
      >
        <Play className="w-4 h-4" />
        {texts.continuarAula}
      </button>
    </div>
  )
})

SchoolModuleCard.displayName = 'SchoolModuleCard'

// Componente principal SchoolCourse
export const SchoolCourse: React.FC<SchoolCourseProps> = ({
  progress,
  currentModule,
  onContinueLearning,
  className,
  motionProps
}) => {
  // Obter linguagem do store ou context existente (reaproveitando sistema)
  const [language] = React.useState<'pt' | 'en'>('pt')

  // Motion defaults (reaproveitando HERO_ANIMATIONS structure)
  const defaultMotionProps = {
    initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.3, ease: 'easeOut' }
  }

  const finalMotionProps = { ...defaultMotionProps, ...motionProps }

  return (
    <motion.div 
      className={`school-bets-container ${className || ''}`}
      {...finalMotionProps}
    >
      {/* Header (reaproveitando estrutura header existente) */}
      <div className="school-bets-header">
        <GraduationCap className="w-6 h-6 text-cv-accent" />
        <h2 className="text-lg font-medium text-foreground">School of Bets</h2>
      </div>

      {/* Progress Section */}
      <SchoolProgressMetrics 
        progress={progress} 
        language={language} 
      />

      {/* Module Section */}
      <SchoolModuleCard 
        module={currentModule} 
        language={language}
        onContinue={onContinueLearning}
      />
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
    <ProjectFeature>
      <div className="lg:col-span-2 space-y-6">
        <ProjectFeatureText
          appName="School of Bets"
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

        {/* CTA Button */}
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

      <ProjectFeatureDemo>
        <SchoolCourse 
          progress={mockProgress}
          currentModule={mockCurrentModule}
          onContinueLearning={() => console.log('Continue learning')}
        />
      </ProjectFeatureDemo>
    </ProjectFeature>
  );
}