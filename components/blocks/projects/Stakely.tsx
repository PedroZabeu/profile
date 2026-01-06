'use client';

import { 
  TrendingUp, 
  Briefcase, 
  BarChart3, 
  FileText 
} from 'lucide-react';
import { ProjectFeature } from './templates/ProjectFeature';
import { ProjectFeatureText } from '@/components/ui/projects/project-feature-text';
import { ProjectFeatureDemo } from '@/components/ui/projects/project-feature-demo';
import { useSettingsStore } from '@/stores/settings';
import { Language } from '@/types';

// Simple Demo Placeholder
function StakelyDemo({ language }: { language: Language }) {
  const placeholderText = language === 'pt' 
    ? 'Ferramenta de análise de investimentos'
    : 'Investment analysis tool';

  return (
    <div className="flex h-full flex-col bg-background p-4 md:p-6 border-2 border-dashed border-cv-accent/30 rounded-xl items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-cv-accent/20 rounded-full flex items-center justify-center">
          <TrendingUp size={32} className="text-cv-accent" />
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

export function Stakely() {
  const { language } = useSettingsStore();

  const content = {
    pt: {
      appName: 'Stakely',
      title: 'Ferramenta de Análise de Investimentos',
      description: 'Sistema completo para análise, gestão e otimização de portfólios de investimento com dashboards analíticos e relatórios detalhados.',
      features: [
        {
          icon: <TrendingUp size={20} className="text-cv-accent" />,
          text: 'Análise de performance e métricas detalhadas'
        },
        {
          icon: <Briefcase size={20} className="text-cv-accent" />,
          text: 'Gestão integrada de múltiplos portfólios'
        },
        {
          icon: <BarChart3 size={20} className="text-cv-accent" />,
          text: 'Dashboard analítico com visualizações avançadas'
        },
        {
          icon: <FileText size={20} className="text-cv-accent" />,
          text: 'Relatórios personalizados e insights automatizados'
        }
      ],
      cta: 'Em desenvolvimento'
    },
    en: {
      appName: 'Stakely',
      title: 'Investment Analysis Tool',
      description: 'Complete system for investment portfolio analysis, management, and optimization with analytical dashboards and detailed reports.',
      features: [
        {
          icon: <TrendingUp size={20} className="text-cv-accent" />,
          text: 'Performance analysis and detailed metrics'
        },
        {
          icon: <Briefcase size={20} className="text-cv-accent" />,
          text: 'Integrated management of multiple portfolios'
        },
        {
          icon: <BarChart3 size={20} className="text-cv-accent" />,
          text: 'Analytical dashboard with advanced visualizations'
        },
        {
          icon: <FileText size={20} className="text-cv-accent" />,
          text: 'Custom reports and automated insights'
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
        <StakelyDemo language={language} />
      </ProjectFeatureDemo>
    </ProjectFeature>
  );
}