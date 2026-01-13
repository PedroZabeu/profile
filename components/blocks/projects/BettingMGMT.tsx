'use client';

import {
  ExternalLink
} from 'lucide-react';
import { ProjectFeature } from './templates/ProjectFeature';
import { ProjectFeatureText } from '@/components/ui/projects/project-feature-text';
import { ProjectFeatureDemo } from '@/components/ui/projects/project-feature-demo';
import { useSettingsStore } from '@/stores/settings';
import { Language } from '@/types';
import { DashboardIcon } from '@/components/DashboardIcon';
import { LayoutGridIcon } from '@/components/LayoutGridIcon';
import { ChartBarIcon } from '@/components/ChartBarIcon';
import { UsersIcon } from '@/components/UsersIcon';
import { ShieldCheckIcon } from '@/components/ShieldCheckIcon';
import { ShimmerButton } from '@/components/ui/shimmer-button';

// Dashboard Demo Component
function BettingDashboardDemo({ language }: { language: Language }) {
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
          <DashboardIcon
            size={24}
            isAnimated={true}
            className="text-cv-accent"
          />
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
      description: 'Gerencie todas as contas a partir de uma única plataforma, eliminando planilhas e oferecendo controle total para diferentes níveis de acesso.',
      features: [
        {
          icon: <LayoutGridIcon size={20} isAnimated={true} className="text-cv-accent" />,
          text: 'Elimina a necessidade de múltiplas planilhas'
        },
        {
          icon: <ChartBarIcon size={20} isAnimated={true} className="text-cv-accent" />,
          text: 'Resultados detalhados e consolidados em tempo real'
        },
        {
          icon: <UsersIcon size={20} isAnimated={true} className="text-cv-accent" />,
          text: 'Acesso protegido para apostadores, investidores e operadores'
        },
        {
          icon: <ShieldCheckIcon size={20} isAnimated={true} className="text-cv-accent" />,
          text: 'Gestão integrada de fornecedores'
        }
      ],
      cta: 'Conheça a plataforma'
    },
    en: {
      appName: 'Betting Management',
      title: 'Complete System for Betting Management',
      description: 'Manage all accounts from a single platform, eliminating spreadsheets and offering complete control for different access levels.',
      features: [
        {
          icon: <LayoutGridIcon size={20} isAnimated={true} className="text-cv-accent" />,
          text: 'Eliminates need for multiple spreadsheets'
        },
        {
          icon: <ChartBarIcon size={20} isAnimated={true} className="text-cv-accent" />,
          text: 'Detailed and consolidated results in real-time'
        },
        {
          icon: <UsersIcon size={20} isAnimated={true} className="text-cv-accent" />,
          text: 'Protected access for bettors, investors and operators'
        },
        {
          icon: <ShieldCheckIcon size={20} isAnimated={true} className="text-cv-accent" />,
          text: 'Integrated supplier management'
        }
      ],
      cta: 'Explore platform'
    }
  };

  const currentContent = content[language];

  return (
    <div className="space-y-6">
      {/* App Name - Outside the main alignment grid */}
      <div className="text-sm font-medium text-cv-accent">
        {currentContent.appName}
      </div>

      <ProjectFeature>
        <div className="lg:col-span-2">
          <ProjectFeatureText
            title={currentContent.title}
            description={currentContent.description}
            features={currentContent.features}
            language={language}
          />
        </div>

        <ProjectFeatureDemo>
          <BettingDashboardDemo language={language} />
        </ProjectFeatureDemo>
      </ProjectFeature>

      {/* CTA Button - Outside the main alignment grid */}
      <div className="pt-4">
        <ShimmerButton
          shimmerColor="var(--cv-accent)"
          shimmerSize="0.1em"
          background="var(--cv-btn-primary-bg)"
          className="text-black font-semibold hover:scale-105 transition-transform flex items-center gap-2"
          onClick={() => window.open('https://bettingmgmt.vercel.app/', '_blank')}
        >
          <ExternalLink className="w-4 h-4" />
          {currentContent.cta}
        </ShimmerButton>
      </div>
    </div>
  );
}