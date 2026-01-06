'use client';

import { 
  Users, 
  MessageCircle, 
  ShieldCheck, 
  LayoutGrid,
  ChartBar,
  ExternalLink
} from 'lucide-react';
import { ProjectFeature } from './templates/ProjectFeature';
import { ProjectFeatureText } from '@/components/ui/projects/project-feature-text';
import { ProjectFeatureDemo } from '@/components/ui/projects/project-feature-demo';
import { useSettingsStore } from '@/stores/settings';
import { Language } from '@/types';
import { ShimmerButton } from '@/components/ui/shimmer-button';

// Telegram Demo Component
function StakelyDemo({ language }: { language: Language }) {
  const content = language === 'pt' ? {
    groupName: 'Grupo VIP - Cliente João',
    sentTip: {
      id: 'Tip #124',
      date: '06/01/2026',
      event: 'Flamengo x Vasco',
      odd: '2.10',
      stake: '2 unidades',
      bookmaker: 'Bet365',
      confirmed: 'Conseguiu apostar',
      missed: 'Não conseguiu apostar'
    },
    resolvedTip: {
      id: 'Tip #123',
      result: '✅ GREEN',
      profit: '+R$ 22,00',
      status: 'Ganhou'
    }
  } : {
    groupName: 'VIP Group - Client John',
    sentTip: {
      id: 'Tip #124',
      date: '01/06/2026',
      event: 'Flamengo vs Vasco',
      odd: '2.10',
      stake: '2 units',
      bookmaker: 'Bet365',
      confirmed: 'Managed to bet',
      missed: 'Couldn\'t bet'
    },
    resolvedTip: {
      id: 'Tip #123',
      result: '✅ GREEN',
      profit: '+$4.20',
      status: 'Won'
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-card border rounded-xl shadow-lg overflow-hidden">
        {/* Telegram-like Header */}
        <div className="bg-violet-600/20 border-b border-violet-500/30 p-3">
          <div className="flex items-center gap-2">
            <MessageCircle size={18} className="text-violet-400" />
            <span className="text-cv-text-primary font-medium text-sm">
              {content.groupName}
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
          {/* Resolved Tip Message */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-400 text-sm">⚽</span>
              <span className="text-cv-text-primary text-sm font-medium">
                {content.resolvedTip.id}
              </span>
              <span className="text-green-400 text-xs font-bold ml-auto">
                {content.resolvedTip.result}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-medium text-sm">
                {content.resolvedTip.profit}
              </span>
              <span className="text-cv-text-primary/60 text-xs">
                {content.resolvedTip.status}
              </span>
            </div>
          </div>

          {/* Current Tip Message */}
          <div className="bg-background border rounded-lg p-3">
            {/* Tip Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-violet-400 text-sm">⚽</span>
              <span className="text-cv-text-primary text-sm font-medium">
                {content.sentTip.id}
              </span>
            </div>

            {/* Tip Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cv-text-primary/60">📅</span>
                <span className="text-cv-text-primary/80">{content.sentTip.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cv-text-primary/60">🏟️</span>
                <span className="text-cv-text-primary/80">{content.sentTip.event}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cv-text-primary/60">💰</span>
                <span className="text-cv-accent font-medium">{content.sentTip.odd}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cv-text-primary/60">🎯</span>
                <span className="text-cv-text-primary/80">{content.sentTip.stake}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cv-text-primary/60">🏠</span>
                <span className="text-cv-text-primary/80">{content.sentTip.bookmaker}</span>
              </div>
            </div>

            {/* Status Buttons */}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 px-2 py-1 bg-green-500/20 border border-green-500/50 text-green-400 rounded-md text-xs font-medium hover:bg-green-500/30 transition-colors">
                ✅ {content.sentTip.confirmed}
              </button>
              <button className="flex-1 px-2 py-1 bg-red-500/20 border border-red-500/50 text-red-400 rounded-md text-xs font-medium hover:bg-red-500/30 transition-colors">
                ❌ {content.sentTip.missed}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Stakely() {
  const { language } = useSettingsStore();

  const content = {
    pt: {
      appName: 'Stakely',
      title: 'Sistema Inteligente para Tipsters',
      description: 'A solução definitiva para tipsters que desejam ganhar escala com eficiência. Automatiza o envio de tips e o cálculo de resultados por cliente, reduz o trabalho manual e oferece clareza total sobre a performance de cada apostador.',
      features: [
        {
          icon: <Users size={20} className="text-cv-accent" />,
          text: 'Comunicação segmentada e profissional para cada cliente'
        },
        {
          icon: <MessageCircle size={20} className="text-cv-accent" />,
          text: 'Integração nativa com Telegram para operação sem fricção'
        },
        {
          icon: <ShieldCheck size={20} className="text-cv-accent" />,
          text: 'Registro real do que cada cliente apostou — sem suposições'
        },
        {
          icon: <LayoutGrid size={20} className="text-cv-accent" />,
          text: 'Consolidação automática de resultados e histórico'
    },
    {
      icon: <ChartBar size={20} className="text-cv-accent" />,
      text: 'Dashboards com métricas que fortalecem confiança e retenção'
    }
  ],
      cta: 'Explore platform'
    },
    en: {
      appName: 'Stakely',
      title: 'Intelligent System for Tipsters',
      description: 'The ultimate solution for tipsters who want to scale with efficiency. Automates tip delivery and client-by-client result calculations, eliminates manual work, and provides full clarity over each customer\'s performance.',
      features: [
        {
          icon: <Users size={20} className="text-cv-accent" />,
          text: 'Professional, client-segmented communication channels'
        },
        {
          icon: <MessageCircle size={20} className="text-cv-accent" />,
          text: 'Native Telegram integration for a frictionless workflow'
        },
        {
          icon: <ShieldCheck size={20} className="text-cv-accent" />,
          text: 'Accurate tracking of what each client actually bet — no guesswork'
        },
        {
          icon: <LayoutGrid size={20} className="text-cv-accent" />,
          text: 'Automatic result consolidation and performance history'
    },
    {
      icon: <ChartBar size={20} className="text-cv-accent" />,
      text: 'Insightful dashboards that strengthen trust and retention'
    }
  ],
      cta: 'Explore platform'
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
        
        {/* CTA Button */}
        <div className="pt-4">
          <ShimmerButton
            shimmerColor="var(--cv-accent)"
            shimmerSize="0.1em"
            background="var(--cv-btn-primary-bg)"
            className="text-black font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            onClick={() => window.open('https://stakely-bets.vercel.app/', '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            {currentContent.cta}
          </ShimmerButton>
        </div>
      </div>
      
      <ProjectFeatureDemo>
        <StakelyDemo language={language} />
      </ProjectFeatureDemo>
    </ProjectFeature>
  );
}