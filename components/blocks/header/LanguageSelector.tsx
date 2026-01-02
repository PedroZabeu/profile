'use client';

import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  language: 'en' | 'pt';
  onLanguageChange: (language: 'en' | 'pt') => void;
  className?: string;
}

export function LanguageSelector({ language, onLanguageChange, className }: LanguageSelectorProps) {
  const toggleLang = () => {
    onLanguageChange(language === 'en' ? 'pt' : 'en');
  };

  return (
    <button
      onClick={toggleLang}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-cv-bg-card hover:bg-cv-bg-card-hover transition-colors backdrop-blur-sm border border-cv-border-muted text-cv-text-primary ${className}`}
      aria-label="Toggle Language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{language}</span>
    </button>
  );
}