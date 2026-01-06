'use client';

import { 
  LayoutGrid, 
  Users, 
  ShieldCheck, 
  ChartBar 
} from 'lucide-react';
import { ProjectFeature } from './templates/ProjectFeature';
import { ProjectFeatureText } from '@/components/ui/projects/project-feature-text';
import { ProjectFeatureDemo } from '@/components/ui/projects/project-feature-demo';
import { useSettingsStore } from '@/stores/settings';
import { ChartAreaIcon } from '@/components/ChartAreaIcon';

// Dashboard Demo Component
function BettingDashboardDemo({ language }: { language: 'en' | 'pt' }) {
  const labels = {
    pt: {
      dashboard: 'Dashboard',
      totalBalance: 'SALDO TOTAL',
      accounts: 'Contas'
    },
    en: {
      dashboard: 'Dashboard',
      totalBalance: 'TOTAL BALANCE',
      accounts: 'Accounts'
    }
  };

  const currentLabels = labels[language];

  return (
    <div className="flex h-full flex-col bg-background p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <div className="text-lg font-semibold text-cv-text-primary flex items-center gap-2">
          <ChartAreaIcon className="w-6 h-6 text-cv-accent" />
          {currentLabels.dashboard}
        </div>
      </div>

      {/* Main Balance Card */}
      <div className="mb-6 rounded-xl border border-border bg-card p-4 md:p-6">
        <div className="text-sm text-muted-foreground">{currentLabels.totalBalance}</div>
        <div className="mt-1 text-2xl font-bold text-cv-text-primary md:text-3xl">
          {language === 'pt' ? 'R$ 36.5K' : '$36.5K'}
        </div>
        <div className="mt-1 text-sm text-cv-accent">+12.5%</div>
      </div>

      {/* Accounts Table */}
      <div className="flex-1 overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border p-3 md:p-4">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {currentLabels.accounts}
          </div>
        </div>
        <div className="divide-y divide-border">
          <div className="flex items-center justify-between p-3 md:p-4">
            <span className="text-sm text-foreground">Account-1</span>
            <span className="text-sm font-medium text-cv-text-primary">
              {language === 'pt' ? 'R$ 12.5K' : '$12.5K'}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 md:p-4">
            <span className="text-sm text-foreground">Account-2</span>
            <span className="text-sm font-medium text-cv-text-primary">
              {language === 'pt' ? 'R$ 8.7K' : '$8.7K'}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 md:p-4">
            <span className="text-sm text-foreground">Account-3</span>
            <span className="text-sm font-medium text-cv-text-primary">
              {language === 'pt' ? 'R$ 15.3K' : '$15.3K'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BettingMGMT() {
  const { language } = useSettingsStore();

  const content = {
    pt: {
      appName: 'Betting Management',
      title: 'Sistema Completo para Gestão de Apostas',
      description: 'Centralize todas as operações em uma única plataforma, eliminando planilhas e oferecendo controle total para diferentes níveis de acesso.',
      features: [
        {
          icon: <LayoutGrid className="size-5" />,
          text: 'Elimina a necessidade de múltiplas planilhas'
        },
        {
          icon: <ChartBar className="size-5" />,
          text: 'Resultados detalhados e consolidados em tempo real'
        },
        {
          icon: <Users className="size-5" />,
          text: 'Acesso protegido para apostadores, investidores e operadores'
        },
        {
          icon: <ShieldCheck className="size-5" />,
          text: 'Gestão integrada de fornecedores'
        }
      ],
      cta: 'Conheça a plataforma'
    },
    en: {
      appName: 'Betting Management',
      title: 'Complete System for Betting Management',
      description: 'Centralize all operations in a single platform, eliminating spreadsheets and offering complete control for different access levels.',
      features: [
        {
          icon: <LayoutGrid className="size-5" />,
          text: 'Eliminates need for multiple spreadsheets'
        },
        {
          icon: <ChartBar className="size-5" />,
          text: 'Detailed and consolidated results in real-time'
        },
        {
          icon: <Users className="size-5" />,
          text: 'Protected access for bettors, investors and operators'
        },
        {
          icon: <ShieldCheck className="size-5" />,
          text: 'Integrated supplier management'
        }
      ],
      cta: 'Explore platform'
    }
  };

  const currentContent = content[language];

  return (
    <ProjectFeature>
      <ProjectFeatureText
        appName={currentContent.appName}
        title={currentContent.title}
        description={currentContent.description}
        features={currentContent.features}
        language={language}
      />
      
      <ProjectFeatureDemo>
        <BettingDashboardDemo language={language} />
      </ProjectFeatureDemo>
    </ProjectFeature>
  );
}