'use client';

import { 
  BookOpen, 
  BarChart3, 
  GraduationCap, 
  Wrench 
} from 'lucide-react';
import { ProjectFeature } from './templates/ProjectFeature';
import { ProjectFeatureText } from '@/components/ui/projects/project-feature-text';
import { ProjectFeatureDemo } from '@/components/ui/projects/project-feature-demo';
import { useSettingsStore } from '@/stores/settings';
import { Language } from '@/types';

// Simple Demo Placeholder
function SchoolOfBetsDemo({ language }: { language: Language }) {
  const placeholderText = language === 'pt' 
    ? 'Plataforma educacional para apostadores'
    : 'Educational platform for bettors';

  return (
    <div className="flex h-full flex-col bg-background p-4 md:p-6 border-2 border-dashed border-cv-accent/30 rounded-xl items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-cv-accent/20 rounded-full flex items-center justify-center">
          <BookOpen size={32} className="text-cv-accent" />
        </div>
        <p className="text-cv-text-primary/60 text-lg">
          {placeholderText}
        </p>
        <p className="text-cv-text-primary/40 text-sm">
          {language === 'pt' ? 'Em desenvolvimento' : 'Under development'}
        </p>
      </div>
    </div>
  );
}

export function SchoolOfBets() {
  const { language } = useSettingsStore();

  const content = {
    pt: {
      appName: 'School of Bets',
      title: 'Plataforma Educacional para Apostadores',
      description: 'Ambiente de aprendizado completo com cursos interativos, análise de estratégias e ferramentas educacionais para apostadores esportivos.',
      features: [
        {
          icon: <BookOpen size={20} className="text-cv-accent" />,
          text: 'Cursos interativos e progressão de aprendizado'
        },
        {
          icon: <BarChart3 size={20} className="text-cv-accent" />,
          text: 'Análise de estratégias e estatísticas'
        },
        {
          icon: <GraduationCap size={20} className="text-cv-accent" />,
          text: 'Certificados e comunidade de aprendizes'
        },
        {
          icon: <Wrench size={20} className="text-cv-accent" />,
          text: 'Ferramentas práticas para aplicação do conhecimento'
        }
      ],
      cta: 'Em desenvolvimento'
    },
    en: {
      appName: 'School of Bets',
      title: 'Educational Platform for Bettors',
      description: 'Complete learning environment with interactive courses, strategy analysis, and educational tools for sports bettors.',
      features: [
        {
          icon: <BookOpen size={20} className="text-cv-accent" />,
          text: 'Interactive courses and learning progression'
        },
        {
          icon: <BarChart3 size={20} className="text-cv-accent" />,
          text: 'Strategy analysis and statistics'
        },
        {
          icon: <GraduationCap size={20} className="text-cv-accent" />,
          text: 'Certificates and learning community'
        },
        {
          icon: <Wrench size={20} className="text-cv-accent" />,
          text: 'Practical tools for knowledge application'
        }
      ],
      cta: 'Under development'
    }
  };

  const currentContent = content[language];

  return (
    <ProjectFeature>
      <div className="lg:col-span-2 space-y-6">
        <ProjectFeatureText
          appName={currentContent.appName}
          title={currentContent.title}
          description={currentContent.description}
          features={currentContent.features}
          language={language}
        />
        
        {/* Status Message */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cv-accent/10 border border-cv-accent/20 rounded-full">
            <div className="w-2 h-2 bg-cv-accent rounded-full animate-pulse"></div>
            <span className="text-cv-text-primary/80 text-sm font-medium">
              {currentContent.cta}
            </span>
          </div>
        </div>
      </div>
      
      <ProjectFeatureDemo>
        <SchoolOfBetsDemo language={language} />
      </ProjectFeatureDemo>
    </ProjectFeature>
  );
}